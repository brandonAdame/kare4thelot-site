import { TextGenerateEffect } from "../text-generate-effect";

export default function IntroSection() {
  return (
    <div className="flex w-full max-w-4/5 mx-auto flex-col justify-center">
      <div className="space-y-4 mt-10 text-center">
        <TextGenerateEffect
          duration={2.5}
          words="Community. Prayer. Outreach."
          className="lg:text-6xl"
        />

        <div className="grid grid-cols-1 items-center">
          <div className="flex flex-col items-center justify-center gap-9 lg:mb-0">
            <div className="flex relative mt-4">
              <div className="absolute inset-y-0 left-0 translate-x-12 lg:relative lg:translate-x-16 lg:-translate-y-2 lg:flex lg:items-center lg:gap-2">
                <h1 className="absolute inset-y-0 left-0 -translate-y-5 -translate-x-8 lg:relative lg:translate-y-0 lg:translate-x-0 handwritten text-lg lg:text-2xl font-hopeless-romantic-society">
                  We
                </h1>
                <h1 className="absolute inset-y-0 left-0 translate-y-1 lg:relative lg:translate-y-0 handwritten text-lg lg:text-2xl font-hopeless-romantic-society">
                  believe
                </h1>
              </div>
              <p className="text-right w-2/3 ml-20 text-sm lg:text-xl lg:w-full">
                in the power of faith, the strength of community, and the call
                to serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
