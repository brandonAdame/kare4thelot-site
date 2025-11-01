import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Button } from "../ui/button";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";

import Prayer from "@/assets/images/edited-photos/september-update/prayer.webp";
import ColgateSmiles from "@/assets/images/edited-photos/september-update/teeth.webp";
import OutsideKidsActivity from "@/assets/images/edited-photos/september-update/outside-kids-activity.webp";
import PrayerActvity from "@/assets/images/edited-photos/september-update/prayer-activity.webp";
import ClothesRack from "@/assets/images/edited-photos/september-update/clothes-rack.webp";
import ClothesTryon from "@/assets/images/edited-photos/september-update/clothes-tryon.webp";
import GroupPrayer from "@/assets/images/edited-photos/september-update/group-prayer.webp";
import BloodPressure from "@/assets/images/edited-photos/september-update/blood-pressure.webp";

const images = [
  Prayer,
  ColgateSmiles,
  OutsideKidsActivity,
  PrayerActvity,
  ClothesRack,
  ClothesTryon,
  GroupPrayer,
  BloodPressure,
];

function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => swiper.slidePrev()}
        className="rounded-full absolute! left-2 top-1/2 z-10 -translate-y-1/2"
      >
        <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
      </Button>

      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => swiper.slideNext()}
        className="rounded-full absolute! right-2 top-1/2 z-10 -translate-y-1/2"
      >
        <NavArrowRight className="h-7 w-7 translate-x-px stroke-2" />
      </Button>
    </>
  );
}

function customPagination(_: any, className: string) {
  return `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`;
}

export default function ImageCarousel() {
  return (
    <div className="w-full max-w-[800px] px-5">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          enabled: true,
          clickable: true,
          dynamicBullets: true,
          renderBullet: customPagination,
        }}
        className="relative rounded-lg [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="select-none">
            <img
              src={img}
              alt={`image-${index}`}
              className="h-[28rem] w-full object-cover"
            />
          </SwiperSlide>
        ))}
        <CustomNavigation />
      </Swiper>
    </div>
  );
}
