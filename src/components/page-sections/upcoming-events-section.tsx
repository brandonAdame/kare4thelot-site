import { Button } from "../ui/button";

export function UpcomingEventsSection() {
  return (
    <section className="flex flex-col gap-2 items-center text-xl">
      <p className="max-w-xl">
        "And the king will say, 'I tell you the truth, when you did it to one of
        the least of these my brothers and sisters, you were doing it to me!'"
      </p>
      <span>Matthew 25:40</span>
      <Button>See Upcoming Events</Button>
    </section>
  );
}
