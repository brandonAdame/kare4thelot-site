import EventCard from "../components/EventCard";
import { DateRangePicker, Pagination, Skeleton } from "@heroui/react";
import { useState, useEffect } from "react";
import type { Tables } from "../../database.types";

interface UpcomingEventsProps {
  initialEvents: Tables<"upcoming_events">[];
  count: number;
}

const UpcomingEvents = ({ initialEvents, count }: UpcomingEventsProps) => {
  const [events, setEvents] =
    useState<Tables<"upcoming_events">[]>(initialEvents);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(count);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/events?page=${currentPage}`);
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
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchEvents();
  }, [currentPage]);

  const LoadingSkeleton = () => (
    <>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="h-[400px] w-full">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
      ))}
    </>
  );

  const renderEvents = (
    <>
      <div className="mb-5">
        <DateRangePicker
          className="max-w-xs"
          label="Filter events"
          aria-label="Filter events"
        />
      </div>

      <div className="mb-16 grid w-[600px] max-w-7xl grid-cols-1 gap-4 px-4 lg:w-full lg:grid-cols-4">
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          events.map((event: Tables<"upcoming_events">) => (
            <EventCard
              key={event.id}
              {...event}
              isChip={event.chip_label ? true : false}
            />
          ))
        )}
      </div>
    </>
  );

  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-5 text-4xl">Upcoming Events</h1>
      {events.length ? renderEvents : <p>No upcoming events</p>}
      <Pagination
        initialPage={1}
        total={Math.ceil(totalCount / 4)}
        showControls
        onChange={handleOnPageChange}
        className="mb-8"
      />
    </div>
  );
};

export default UpcomingEvents;
