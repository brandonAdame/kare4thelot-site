import { Image, Card, CardHeader } from "@heroui/react";
import { twMerge } from "tailwind-merge";

interface ServiceCardProps {
  imgSrc: string;
  titleText: string;
  supportingText?: string;
  textColor?: string;
}

const ServiceCard = ({
  imgSrc,
  titleText,
  supportingText,
  textColor,
}: ServiceCardProps) => {
  return (
    <Card className="col-span-12 h-[300px] sm:col-span-4">
      <CardHeader className="items-start! absolute top-1 z-10 flex-col">
        {supportingText?.length && (
          <p className="text-tiny font-bold uppercase text-white/60">
            What to watch
          </p>
        )}
        <h4
          className={twMerge(
            "text-large font-medium text-terracotta-50",
            textColor,
          )}
        >
          {titleText}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 h-full w-full object-cover"
        src={imgSrc}
      />
    </Card>
  );
};

export default ServiceCard;
