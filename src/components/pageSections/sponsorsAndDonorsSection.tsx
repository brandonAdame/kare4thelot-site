import AnimateSponsors from "@/components/animated/animateSponsors";

export default function SponsorsAndDonorsSection() {
  return (
    <div className="bg-half-baked">
      <div className="flex flex-col gap-10 items-center pt-8 pb-10">
        <h1 className="font-monteilga-regular text-3xl lg:text-6xl text-white">
          Sponsors & Donors
        </h1>
        <div className="flex flex-col gap-10 items-center lg:w-2/4">
          <p className="font-klimaks-bold-italic text-lg lg:text-xl w-[330px] lg:w-full tracking-wide lg:leading-9">
            We deeply appreciate your support in our mission to serve those in
            need. Your support is invaluable to us. We will continue to be
            responsible stewards of your donations and your trust. We know you
            have a lot of choices when it comes to donating, so we are honored
            and forever grateful to each one of you for helping make Gods'
            vision for Kare4TheLot become a reality. We are praying for you and
            ask that you pray so we may continue to make a positive impact while
            serving OUR communities.
          </p>
          <div className="self-start leading-10">
            <p className="font-hopeless-romantic-society text-medium lg:text-lg">
              With much love,
            </p>
            <p className="font-hopeless-romantic-society mt-4 ml-6 lg:ml-10 text-2xl lg:text-3xl">
              Karen Northern
            </p>
          </div>
        </div>
      </div>
      <AnimateSponsors />
    </div>
  );
}
