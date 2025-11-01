import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { IconButton } from "@material-tailwind/react";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import GreenvillePD from "../assets/images/Greenville-PD.png?url";
import HealthFair2 from "../assets/images/Health-Fair2.png?url";

import ColgateTruckActivity from "@/assets/images/edited-photos/colgate-truck-activity.jpg?url";
import OutdoorActivity from "@/assets/images/edited-photos/outdoor-activity.jpg?url";
import SmilingRetirementHome from "@/assets/images/edited-photos/smiling-retirement-home.jpg?url";
import RetirementHomeHugs from "@/assets/images/edited-photos/retirement-home-hugs.jpg?url";
import RetirementHome2 from "@/assets/images/edited-photos/retirement-home-2.jpg?url";
import Prayer from "@/assets/images/edited-photos/september-update/prayer.jpg?url";
import ColgateSmiles from "@/assets/images/edited-photos/september-update/teeth.jpg?url";
import OutsideKidsActivity from "@/assets/images/edited-photos/september-update/outside-kids-activity.jpg?url";
import PrayerActvity from "@/assets/images/edited-photos/september-update/prayer-activity.jpg?url";
import ClothesRack from "@/assets/images/edited-photos/september-update/clothes-rack.jpg?url";
import ClothesTryon from "@/assets/images/edited-photos/september-update/clothes-tryon.jpg?url";
import GroupPrayer from "@/assets/images/edited-photos/september-update/group-prayer.jpg?url";
import BloodPressure from "@/assets/images/edited-photos/september-update/blood-pressure.jpg?url";

const images = [
  Prayer,
  ColgateSmiles,
  ColgateTruckActivity,
  OutdoorActivity,
  OutsideKidsActivity,
  PrayerActvity,
  ClothesRack,
  ClothesTryon,
  GroupPrayer,
  BloodPressure,
  HealthFair2,
  SmilingRetirementHome,
  RetirementHomeHugs,
  RetirementHome2,
  GreenvillePD,
];

function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slidePrev()}
        className="dark !absolute left-2 top-1/2 z-10 -translate-y-1/2"
      >
        <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
      </IconButton>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slideNext()}
        className="dark !absolute right-2 top-1/2 z-10 -translate-y-1/2"
      >
        <NavArrowRight className="h-7 w-7 translate-x-px stroke-2" />
      </IconButton>
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
        pagination={{
          enabled: true,
          clickable: true,
          dynamicBullets: true,
          renderBullet: customPagination,
        }}
        modules={[Navigation, Pagination]}
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
