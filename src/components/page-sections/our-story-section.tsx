export default function OurStorySection() {
  return (
    <div className="w-full max-w-4/5 mx-auto pt-10 flex flex-col gap-3 justify-center">
      <h1 className="w-full max-w-36 text-5xl font-bold md:max-w-none">
        Our Story
      </h1>

      <p className="text-lg md:text-xl">
        Kare4TheLot was born during a time when the world—and our community—was
        uncertain if normalcy would ever return. Our desire is to be a part of
        the nonprofit space that genuinely helps those who have turned to
        various distractions in an effort to make sense of it all. Sadly, in
        trying to navigate life as we now know it, many have lost sight of
        self-care, self-worth, and personal value.
      </p>
      <div className="flex flex-col gap-8 mt-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold">Mission</h3>
          <p className="text-lg md:text-xl">
            Kare4TheLot assists underserved individuals and families in
            rediscovering their value, strengthening family structure, and
            fulfilling their purpose by delivering workshops, resources, and
            immediate needs support directly into the community, driven by a
            commitment to display God's Love.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold">Vision</h3>
          <p className="text-lg md:text-xl">
            To meet immediate needs, while providing guidance in spiritual
            support, finances, employment, and housing, while serving as the
            vital bridge that connects individuals to needed community
            resources.
          </p>
        </div>
      </div>
    </div>
  );
}
