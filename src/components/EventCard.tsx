import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  type ModalProps,
} from "@heroui/react";
import { useState } from "react";
import { Chip } from "@heroui/chip";
import clockIcon from "../assets/clock-icon.svg?url";
import locationMarkerIcon from "../assets/location-marker-icon.svg?url";
import calendarIcon from "../assets/calendar-icon.svg?url";

interface EventCardProps {
  title: string;
  isChip?: boolean;
  chipLabel?: string;
  img?: string;
  description: string;
}

const EventCard = (props: EventCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] =
    useState<ModalProps["scrollBehavior"]>("inside");

  return (
    <div>
      <Card isPressable className="w-[360px]" onPress={onOpen}>
        <CardHeader className="flex items-center justify-between">
          <h1>{props.title}</h1>
          {props.isChip && (
            <Chip color="primary" size="sm" className="text-xs">
              {props.chipLabel}
            </Chip>
          )}
        </CardHeader>
        <CardBody>
          <Image
            className="w-full object-cover h-[140px]"
            src={props.img}
            width="100%"
            alt="Card image"
            aria-label="Card image"
          />
          <p className="text-sm font-light pt-2">{props.description}</p>
        </CardBody>
        <CardFooter className="flex flex-col gap-2 text-slate-400 text-sm font-light">
          <div className="flex gap-1 justify-start w-full">
            <Image src={calendarIcon} width={18} height={18} />
            <p>13 March 2025</p>
          </div>
          <div className="flex gap-3 justify-between w-full">
            <div className="flex gap-1 items-center">
              <Image
                src={clockIcon}
                width={18}
                height={18}
                alt="Clock icon"
                aria-label="Clock icon"
              />
              <p>09:00am - 11:00am</p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src={locationMarkerIcon}
                width={18}
                height={18}
                alt="Location marker icon"
                aria-label="Location marker icon"
              />
              <p>Greenville, NC</p>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Modal
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        backdrop="blur"
        scrollBehavior={scrollBehavior}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{props.title}</ModalHeader>
              <ModalBody>
                <Image
                  className="w-full object-cover h-[140px]"
                  src={props.img}
                  width="100%"
                  alt="Card image"
                  aria-label="Card image"
                />
                <div className="flex items-center gap-1 justify-start w-full">
                  <Image src={calendarIcon} width={18} height={18} />
                  <p>13 March 2025</p>
                </div>
                <div className="flex justify-between gap-3 w-full">
                  <div className="flex gap-1 items-center">
                    <Image
                      src={clockIcon}
                      width={18}
                      height={18}
                      alt="Clock icon"
                      aria-label="Clock icon"
                    />
                    <p>09:00am - 11:00am</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Image
                      src={locationMarkerIcon}
                      width={18}
                      height={18}
                      alt="Location marker icon"
                      aria-label="Location marker icon"
                    />
                    <p>Greenville, NC</p>
                  </div>
                </div>
                <span className="font-semibold">About the event</span>
                <p>{props.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EventCard;
