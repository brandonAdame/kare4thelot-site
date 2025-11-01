import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_services/clothing")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col justify-center space-y-4 mt-10 mb-20 w-full">
      <div className="flex flex-col gap-4 items-center justify-center mx-6 lg:mx-auto lg:w-1/2">
        <h1 className="text-4xl font-bold text-center font-montserrat-variable">
          KareFreeBoutique Is Here!
        </h1>
        <span className="text-center text-sm lg:text-lg text-slate-600">
          At Kare4thelot, our mission is to serve our community with compassion
          and grace.
        </span>
        <p className="font-klimaks-bold lg:text-lg">
          We are guided by the words of{" "}
          <span className="font-klimaks-bold-italic">
            Matthew 25:36: "I was naked and you gave me clothing..."
          </span>
          . This scripture is the heart behind our newest initiative:
          KareFreeBoutique, a free mobile clothing service designed to meet a
          tangible need while honoring the dignity of every individual.
        </p>
        <p className="font-klimaks-bold lg:text-lg">
          We believe that providing access to new and gently used clothing is
          more than just a physical act; it’s about restoring confidence and
          self-worth.
        </p>
      </div>

      <div className="flex flex-col gap-4 mx-auto justify-center pt-7 pb-7 lg:w-1/3">
        <h2 className="text-4xl text-center font-quicksand-variable font-bold">
          How it works
        </h2>
        <ul className="list-disc pl-9 pr-9 space-y-4 lg:text-lg">
          <li>
            <p className="font-klimaks-bold">
              <span className="font-quicksand-variable font-semibold">
                Community Pop-Ups:
              </span>{" "}
              We regularly set up our boutique at events and in neighborhoods so
              you can browse our selection and find what you need—for free.
            </p>
          </li>
          <li>
            <p className="font-klimaks-bold">
              <span className="font-quicksand-variable font-semibold">
                Private Appointments:
              </span>{" "}
              For those who prefer a more personal experience, you can schedule
              an appointment to "shop" with our team in a private, one-on-one
              setting.
            </p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 justify-center mx-6 lg:mx-auto lg:w-1/2 font-klimaks-bold lg:text-lg">
        <p>
          Whether we come to you or you come to us, our mission remains the
          same: to provide high-quality clothing with a spirit of kindness and
          respect—just as we are called to do.
        </p>
        <p>
          To see our upcoming pop-up schedule or to book an appointment, contact
          us at{" "}
          <a
            href="mailto:kare4thelot@gmail.com"
            className="text-gifting-pink-dark"
          >
            kare4thelot@gmail.com
          </a>{" "}
          or{" "}
          <a href="tel:+12523754403" className="text-gifting-pink-dark">
            252-375-4403
          </a>
          .
        </p>
      </div>
    </div>
  );
}
