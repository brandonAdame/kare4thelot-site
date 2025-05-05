import { Image, Card, CardHeader } from "@heroui/react";
import HealthFair2 from "../assets/images/Health-Fair2.png?url";
import RetirementHome from "../assets/images/retirement-home.jpg?url";
import Students from "../assets/images/students.jpg?url";
import Activity from "../assets/images/activity.jpg?url";
import RetirementHome2 from "../assets/images/retirement-home-2.jpg?url";

const ServicesLayout = () => {
  return (
    <div className="grid max-w-[900px] grid-cols-12 grid-rows-2 gap-2 px-8 md:px-0">
      <Card className="col-span-12 h-[300px] sm:col-span-4">
        <CardHeader className="items-start! absolute bottom-0 z-10 flex-col backdrop-blur-md">
          <h4 className="text-large font-medium text-white">
            Booth at the Community Health Fair
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 h-full w-full object-cover"
          src={HealthFair2}
        />
      </Card>
      <Card className="col-span-12 h-[300px] sm:col-span-4">
        <CardHeader className="items-start! absolute bottom-0 z-10 flex-col backdrop-blur-md">
          <h4 className="text-large font-medium text-white">Retirement Home</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 h-full w-full object-cover"
          src={RetirementHome}
        />
      </Card>
      <Card className="col-span-12 h-[300px] sm:col-span-4">
        <CardHeader className="items-start! absolute bottom-0 z-10 flex-col backdrop-blur-sm">
          <h4 className="text-large font-medium text-white">Retirement Home</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 h-full w-full object-cover"
          src={RetirementHome2}
        />
      </Card>
      <Card className="col-span-12 h-[300px] sm:col-span-8">
        <CardHeader className="items-start! absolute top-0 z-10 flex-col backdrop-blur-md">
          <h4 className="text-large font-medium text-white">
            Student Activities
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 h-full w-full object-cover"
          src={Students}
        />
      </Card>
      <Card className="col-span-12 h-[300px] sm:col-span-4">
        <CardHeader className="items-start! absolute top-0 z-10 flex-col backdrop-blur-md">
          <h4 className="text-large font-medium text-white">School Activity</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 h-full w-full object-cover"
          src={Activity}
        />
      </Card>
    </div>
  );
};

export default ServicesLayout;
