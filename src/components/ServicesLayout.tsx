import { Image, Card, CardHeader } from "@heroui/react";

import OutdoorActivityBag from "@/assets/images/edited-photos/september-update/outdoor-activity-bag.jpg?url";
import FacePaint from "@/assets/images/edited-photos/september-update/face-paint.jpg?url";
import ServingWithPurpose from "@/assets/images/edited-photos/september-update/serving-with-purpose.jpg?url";
import ClothesRack from "@/assets/images/edited-photos/september-update/clothes-rack.jpg?url";
import OutdoorPrayer from "@/assets/images/edited-photos/september-update/outdoor-prayer.jpg?url";
import OutdoorActivities from "@/assets/images/edited-photos/september-update/hope-and-wellness-fair.jpg?url";

const ServicesLayout = () => {
  return (
    <div className="grid max-w-[900px] grid-cols-12 grid-rows-2 gap-2 px-8 md:px-0">
      <Card className="col-span-12 h-[300px] sm:col-span-8">
        <CardHeader className="absolute bottom-0 z-10 flex-col backdrop-blur-md">
          <h4 className="text-large font-medium text-white">
            KareFreeBoutique
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="KareFreeBoutique Clothes Rack"
          className="z-0 h-full w-full object-cover"
          src={ClothesRack}
        />
      </Card>
      <Card className="col-span-12 h-[300px] sm:col-span-4">
        <CardHeader className="items-start! absolute bottom-0 z-10 flex-col backdrop-blur-sm">
          <h4 className="text-large font-medium text-white">Face Painting</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Face Painting"
          className="z-0 h-full w-full object-cover"
          src={FacePaint}
        />
      </Card>
      <Card className="col-span-12 h-[300px] sm:col-span-4">
        <CardHeader className="items-start! absolute bottom-0 z-10 flex-col backdrop-blur-md">
          <h4 className="text-large font-medium text-white">
            Hope and Wellness Fair
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Hope and Wellness Fair"
          className="z-0 h-full w-full object-cover"
          src={OutdoorActivityBag}
        />
      </Card>
      <Card className="col-span-12 h-[300px] sm:col-span-8">
        <CardHeader className="items-start! absolute bottom-0 z-10 flex-col backdrop-blur-md">
          <h4 className="text-large font-medium text-white">Prayer</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Prayer"
          className="z-0 h-full w-full object-cover"
          src={OutdoorPrayer}
        />
      </Card>
      <Card className="col-span-12 h-[300px] sm:col-span-8">
        <CardHeader className="items-start! absolute bottom-0 z-10 flex-col backdrop-blur-md">
          <h4 className="text-large font-medium text-white">
            Serving with a Purpose
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Serving with Purpose"
          className="z-0 h-full w-full object-cover"
          src={ServingWithPurpose}
        />
      </Card>
      <Card className="col-span-12 h-[300px] sm:col-span-4">
        <CardHeader className="items-start! absolute bottom-0 z-10 flex-col backdrop-blur-md">
          <h4 className="text-large font-medium text-white">
            Outdoor Activities
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Outdoor Activities"
          className="z-0 h-full w-full object-cover"
          src={OutdoorActivities}
        />
      </Card>
    </div>
  );
};

export default ServicesLayout;
