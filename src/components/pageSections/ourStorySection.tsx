export default function OurStorySection() {
  return (
    <div className="bg-our-story bg-cover bg-no-repeat">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-0 px-10 pt-32 pb-20">
        {/* <!-- Our Story --> */}
        <div className="lg:ml-44">
          <div className="flex flex-col items-center lg:items-start gap-10 lg:gap-20">
            <div className="relative">
              <div className="absolute inset-x-0 top-0 -translate-y-12 -translate-x-10 lg:-translate-x-7 lg:-translate-y-14">
                <h1 className="font-hopeless-romantic-society text-5xl lg:text-6xl">
                  Our
                </h1>
              </div>
              <h1 className="text-5xl lg:text-8xl font-monteilga-regular">
                Story
              </h1>
            </div>
            <p className="w-full lg:w-3/4 text-xl font-klimaks-bold">
              Kare4TheLot was born during a time when the world—and our
              community—was uncertain if normalcy would ever return. Our desire
              is to be a part of the nonprofit space that genuinely helps those
              who have turned to various distractions in an effort to make sense
              of it all. Sadly, in trying to navigate life as we now know it,
              many have lost sight of self-care, self-worth, and personal value.
            </p>
          </div>
        </div>

        {/* <!-- Mission and Vision --> */}
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl lg:text-4xl text-gifting-pink-dark font-monteilga-regular">
              Mission
            </h2>
            <p className="max-w-lg text-center text-lg font-klimaks-bold">
              To show underserved communities that there are still those who
              care about their well-being and to assist in rediscovering one's
              value in family and purpose.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl lg:text-4xl text-gifting-pink-dark font-monteilga-regular">
              Vision
            </h2>
            <p className="max-w-lg text-center text-lg font-klimaks-bold">
              Kare4TheLot is a genuine driving force that displays love,
              encourages self-care, and supports everyone by providing hands-on
              resources for life skills, as well as mental and physical
              wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
