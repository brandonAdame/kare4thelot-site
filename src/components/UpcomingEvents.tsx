import EventCard from "../components/EventCard";
import {
  DateRangePicker,
  Pagination,
  Skeleton,
  type DateValue,
  type RangeValue,
} from "@heroui/react";
import { useState, useEffect } from "react";
import { getLocalTimeZone, today } from "@internationalized/date";
import type { Tables } from "../../database.types";
import "../styles/upcomingEvents.css";

interface UpcomingEventsProps {
  initialEvents: Tables<"upcoming_events">[];
  count: number;
}

interface RequestParams {
  page: number;
  startDate: string | null;
  endDate: string | null;
}

const UpcomingEvents = ({ initialEvents, count }: UpcomingEventsProps) => {
  const [events, setEvents] =
    useState<Tables<"upcoming_events">[]>(initialEvents);
  const [totalCount, setTotalCount] = useState(count);
  const [isLoading, setIsLoading] = useState(false);
  const [eventReqParams, setEventReqParams] = useState<RequestParams>({
    page: 1,
    startDate: null,
    endDate: null,
  });

  const fetchEvents = async () => {
    try {
      setIsLoading(true);

      // Filter out 'null' value parameters
      const filteredParams = Object.fromEntries(
        Object.entries(eventReqParams).filter(([_, value]) => value != null),
      );

      const queryString = new URLSearchParams(filteredParams).toString();

      const response = await fetch(`/api/events?${queryString}`);
      const data = await response.json();

      if (response.ok) {
        setEvents(data.events);
        setTotalCount(data.count);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnPageChange = (page: number) => {
    setEventReqParams({
      page: page,
      startDate: eventReqParams.startDate,
      endDate: eventReqParams.endDate,
    });
  };

  const handleDateRangeChange = (e: RangeValue<DateValue> | null) => {
    if (!e) return;
    const startDate = e.start.toString();
    const endDate = e.end.toString();

    setEventReqParams({
      page: eventReqParams.page,
      startDate: startDate.toString(),
      endDate: endDate.toString(),
    });
  };

  useEffect(() => {
    fetchEvents();
  }, [eventReqParams]);

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
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          events.map((event: Tables<"upcoming_events">) => (
            <EventCard
              key={event.id}
              {...event}
              isChip={!!event.chip_label}
            />
          ))
        )}
      </div>
      <Pagination
        initialPage={1}
        total={Math.ceil(totalCount / 4)}
        showControls
        onChange={handleOnPageChange}
        className="mb-8"
      />
    </>
  );

  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="pb-5 text-4xl">Upcoming Events</h1>
      <div className="mb-5">
        <DateRangePicker
          className="max-w-xs"
          label="Filter events"
          aria-label="Filter events"
          minValue={today(getLocalTimeZone())}
          onChange={(e) => handleDateRangeChange(e)}
        />
      </div>
      {events.length ? (
        renderEvents
      ) : (
        <p>No upcoming events. Check back later! 🙏</p>
      )}
    </div>
  );
};

export default UpcomingEvents;
