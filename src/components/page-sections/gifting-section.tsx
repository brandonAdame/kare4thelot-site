import MicroScaleFade from "../animata/text/micro-scale-fade";
import { BorderBeam } from "../ui/border-beam";
import { Button } from "../ui/button";

export function GiftingSection() {
  return (
    <section className="flex w-full max-w-4/5 mx-auto flex-col gap-3 justify-center items-center pt-3 pb-3 text-lg md:text-xl">
      <p>Your gift helps make a </p>
      <MicroScaleFade
        text={["Difference", "Disciple", "Way", "Change"]}
        speed={2.72}
      />
      <p>Your generosity helps us continue to serve the community.</p>
      <Button
        className="relative overflow-hidden text-lg md:text-xl"
        variant="outline"
      >
        Donate
        <BorderBeam
          size={40}
          initialOffset={20}
          className="from-transparent via-blue-500 to-transparent"
        />
      </Button>
    </section>
  );
}
