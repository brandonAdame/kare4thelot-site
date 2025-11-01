import TextFlip from "@/components/animata/text/text-flip";
import DonateButton from "@/components/buttons/donateButton";

export default function GiftingSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-gifting-pink pt-12 px-10 tracking-wide gap-10 pb-10 text-center">
      <TextFlip />
      <p className="text-lg lg:text-xl font-klimaks-bold">
        Your generosity helps us continue to serve the community.
      </p>
      <DonateButton />
    </div>
  );
}
