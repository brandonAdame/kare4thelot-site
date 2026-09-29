import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/our-services")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full max-w-4/5 mx-auto pt-10 flex flex-col gap-3 items-center justify-center">
      <h1 className="text-5xl font-bold">Our Services</h1>
      <p className="mt-3 text-lg">
        We travel to different underserved communities offering encouragement,
        resources, workshops including:
      </p>

      <div className="w-full flex justify-center mt-3">
        <div className="flex justify-center items-center lg:gap-12 flex-wrap lg:flex-nowrap max-w-5xl">
          <ul
            role="list"
            className="list-disc gap-32 pl-5 columns-1 lg:columns-2 lg:space-y-3 text-lg w-full max-w-xl"
          >
            <li>Bible studies</li>
            <li>Understanding emotional wellness</li>
            <li>Creating a supportive environment</li>
            <li>Building resilience</li>
            <li>Resources and tools</li>
            <li>Health</li>
            <li>Hygiene</li>
            <li>Self-care</li>
            <li>Entrepreneurship</li>
            <li>Career goals</li>
            <li>Mental health</li>
            <li>Academic pressure</li>
            <li>Fitness</li>
            <li>Nutrition</li>
            <li>Life skills</li>
            <li>Therapy</li>
            <li>Anti-bullying</li>
            <li>Love and support</li>
            <li>Connect to needed community resources</li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-lg">
        Our services are available to after school programs, nursing homes, and
        those experiencing displacement. We strive to meet needs directly or,
        when necessary, connect individuals with relevant community
        organizations.
      </p>
    </div>
  );
}
