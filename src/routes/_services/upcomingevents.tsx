import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  DateRangePicker,
  Pagination,
  Skeleton,
  type DateValue,
  type RangeValue,
} from "@heroui/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import EventCard from "@/components/cards/eventCard";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useState, useEffect } from "react";
import { parseDate } from "@internationalized/date";
import { Button } from "@/components/ui/button";
import { createSupabaseClient } from "@/db/supabase";

type EventSearch = {
  page?: number;
  startDate?: string;
  endDate?: string;
};

const fetchEventOptions = ({ page, startDate, endDate }: EventSearch) => {
  return queryOptions({
    queryKey: ["upcomingEvents", page, startDate, endDate],
    queryFn: async () => {
      const limit = 4;
      const start = ((page ?? 1) - 1) * limit;
      const end = start + (limit - 1);

      const supabase = createSupabaseClient(
        process.env.SUPABASE_URL as string,
        process.env.SUPABASE_KEY as string
      );

      let query = supabase
        .from("upcoming_events")
        .select("*", { count: "exact" });

      if (startDate) {
        query = query.gte("event_date", `${startDate}`);
      }

      if (endDate) {
        query = query.lte("event_date", `${endDate}`);
      }

      query = query.order("event_date", { ascending: true }).range(start, end);

      const { data: events, count, error } = await query;

      if (error) {
        throw new Error(`Failed to retrieve events: ${error}`);
      }

      return { events, count };
    },
  });
};

export const Route = createFileRoute("/_services/upcomingevents")({
  component: UpcomingEvents,
  validateSearch: (search: Record<string, unknown>): EventSearch => {
    return {
      page: Number(search?.page ?? 1),
      startDate:
        typeof search?.startDate === "string" ? search.startDate : undefined,
      endDate: typeof search?.endDate === "string" ? search.endDate : undefined,
    };
  },
  loaderDeps: ({ search: { page, startDate, endDate } }) => ({
    page,
    startDate,
    endDate,
  }),
  loader: ({ deps: { page, startDate, endDate }, context }) =>
    context.queryClient.ensureQueryData(
      fetchEventOptions({
        page,
        startDate,
        endDate,
      })
    ),
});

function UpcomingEvents() {
  const navigate = useNavigate({ from: Route.fullPath });
  const { page, startDate, endDate } = Route.useSearch();
  const { data } = useSuspenseQuery(
    fetchEventOptions({ page, startDate, endDate })
  );

  // Control the DateRangePicker with state
  const [dateRange, setDateRange] = useState<RangeValue<DateValue> | null>(
    null
  );

  // Sync state with URL parameters
  useEffect(() => {
    if (startDate && endDate) {
      setDateRange({
        start: parseDate(startDate),
        end: parseDate(endDate),
      });
    } else {
      setDateRange(null);
    }
  }, [startDate, endDate]);

  const handleOnPageChange = async (page: number) => {
    await navigate({
      search: {
        page: page,
        startDate,
        endDate,
      },
    });
  };

  const handleDateRangeChange = async (e: RangeValue<DateValue> | null) => {
    if (!e) {
      setDateRange(null);
      return;
    }
    const newStartDate = e.start.toString();
    const newEndDate = e.end.toString();

    setDateRange(e);
    await navigate({
      search: {
        page: 1,
        startDate: newStartDate,
        endDate: newEndDate,
      },
    });
  };

  const LoadingSkeleton = () => (
    <>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="h-[400px] w-full">
          <Skeleton className="h-[300px] w-[300px] rounded-lg" />
        </div>
      ))}
    </>
  );

  const renderEvents = (
    <>
      <div className="mb-16 grid w-[300px] max-w-7xl grid-cols-1 gap-4 px-4 lg:w-full lg:grid-cols-4">
        {data.events.map((event) => (
          <EventCard key={event.id} {...event} isChip={!!event.chip_label} />
        ))}
      </div>
      <Pagination
        page={page ?? 1}
        total={Math.ceil((data.count ?? 0) / 4)}
        showControls
        onChange={handleOnPageChange}
        className="mb-8"
      />
    </>
  );

  const handleClear = async () => {
    await navigate({
      search: {
        page: 1,
      },
    });
  };

  return (
    <Suspense fallback={LoadingSkeleton()}>
      <div className="flex flex-col items-center pt-10 font-quicksand-variable">
        <h1 className="pb-5 text-4xl">Upcoming Events</h1>
        <div className="mb-5 flex flex-col gap-4">
          <DateRangePicker
            className="max-w-xs"
            label="Filter events"
            aria-label="Filter events"
            minValue={today(getLocalTimeZone())}
            value={dateRange}
            onChange={(e) => handleDateRangeChange(e)}
          />
          <Button
            variant={"outline"}
            onClick={handleClear}
            className="bg-gifting-pink cursor-pointer"
          >
            Clear Filters
          </Button>
        </div>
        {data.events.length ? (
          renderEvents
        ) : (
          <p>No upcoming events. Check back later! 🙏</p>
        )}
      </div>
    </Suspense>
  );
}
