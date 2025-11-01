import { TextGenerateEffect } from "@/components/ui/textGenerateEffect";
import ImageCarousel from "@/components/animated/imageCarousel";
import AlertBanner from "@/components/alerts/alertBanner";

export default function IntroSection() {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-6 bg-ivory-50 lg:pb-10">
      <div className="flex flex-col justify-center mb-10">
        <TextGenerateEffect
          duration={2.5}
          words="Community. Prayer. Outreach."
          className="font-monteilga-regular lg:text-5xl"
        />
      </div>
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
            <p className="text-right font-klimaks-bold w-2/3 ml-20 text-sm lg:text-xl lg:w-full">
              in the power of faith, the strength of community, and the call to
              serve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-5/6 mx-auto">
            <ImageCarousel />
            <div className="flex flex-col items-center gap-10 mt-10 lg:mt-0">
              <p className="font-hopeless-romantic-society text-lg lg:text-2xl text-center order-2 lg:order-1">
                Together, we can make a difference.
              </p>
              <p className="text-left px-7 text-xl lg:w-3/4 lg:order-2 font-klimaks-bold">
                Faith moves us,{" "}
                <span className="text-highlight-red">
                  community strengthens us, and service defines us.
                </span>
                <span className="text-highlight-blue">
                  Through prayer, outreach, and acts of kindness, we strive to
                  bring hope to those in need. Whether it’s lending a helping
                  hand, supporting families, or simply sharing a moment of
                  encouragement, every action makes a difference.
                </span>{" "}
                Together, we are more than just individuals—we are a united
                community, walking in faith and love.
              </p>
            </div>
          </div>
          <AlertBanner />
        </div>
      </div>
    </div>
  );
}
