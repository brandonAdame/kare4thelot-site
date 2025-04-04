import { Image } from "@heroui/react";

export default function ImageBlurred({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      isBlurred
      isZoomed
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
