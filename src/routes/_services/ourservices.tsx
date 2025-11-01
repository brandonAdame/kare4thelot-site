import ServicesLayout from "@/components/servicesLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_services/ourservices")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="py-10 bg-ivory-50">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-5xl font-monteilga-regular">Our Services</h1>
        <p className="text-lg lg:text-xl text-center font-klimaks-bold">
          We travel to different underserved communities offering encouragement,
          resources, workshops including:
        </p>
        <div className="mx-auto">
          <div className="flex justify-center items-center lg:gap-12 flex-wrap lg:flex-nowrap max-w-5xl">
            <ul
              role="list"
              className="list-disc gap-32 pl-5 columns-1 lg:columns-2 lg:space-y-3 marker:text-breaker-bay-500 text-lg w-full lg:w-auto lg:mx-auto font-klimaks-bold"
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
        <p className="text-lg lg:text-xl text-center w-3/4 font-klimaks-bold">
          Our services are available to after school programs, nursing homes,
          and those experiencing displacement. We strive to meet needs directly
          or, when necessary, connect individuals with relevant community
          organizations.
        </p>

        <div className="bg-breaker-bay-100 flex justify-center w-full py-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-center font-monteilga-regular">
            Community Focused
          </h1>
        </div>
        <ServicesLayout />
      </div>
    </div>
  );
}
