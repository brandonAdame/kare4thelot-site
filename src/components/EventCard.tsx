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
import { DateFormatter } from "@internationalized/date";
import type { Tables } from "../../database.types";

interface EventCardProps extends Tables<"upcoming_events"> {
  isChip?: boolean;
}

const EventCard = (props: EventCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] =
    useState<ModalProps["scrollBehavior"]>("inside");

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return new DateFormatter('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  const eventTime = formatTime(props.event_time);

  const dateFormatter = new DateFormatter("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const eventDate = dateFormatter.format(new Date(props.event_date));

  return (
    <div className="h-full">
      <Card
        isPressable
        className="w-full h-full flex flex-col"
        onPress={onOpen}
      >
        <CardHeader className="flex items-center justify-between">
          <h1>{props.event_title}</h1>
          {props.isChip && (
            <Chip color="primary" size="sm" className="text-xs">
              {props.chip_label}
            </Chip>
          )}
        </CardHeader>
        <CardBody className="flex-1">
          <Image
            className="w-full object-cover h-[140px]"
            src={props.image}
            width="100%"
            alt="Card image"
            aria-label="Card image"
          />
          <p className="text-sm font-light pt-2">{props.event_description}</p>
        </CardBody>
        <CardFooter className="flex flex-col gap-2 text-slate-400 text-sm font-light">
          <div className="flex gap-1 justify-start w-full">
            <Image src={calendarIcon} width={18} height={18} />
            <p>{eventDate}</p>
          </div>
          <div className="flex gap-3 justify-between w-full lg:flex-col lg:gap-1 xl:flex-row xl:gap-3">
            <div className="flex gap-1 items-center">
              <Image
                src={clockIcon}
                width={18}
                height={18}
                alt="Clock icon"
                aria-label="Clock icon"
              />
              <p>{eventTime}</p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src={locationMarkerIcon}
                width={18}
                height={18}
                alt="Location marker icon"
                aria-label="Location marker icon"
              />
              <p>{props.event_location}</p>
            </div>
          </div>
        </CardFooter>
      </Card>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="lg"
        scrollBehavior={scrollBehavior}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{props.event_title}</ModalHeader>
              <ModalBody>
                <Image
                  className="w-full object-cover h-[140px]"
                  src={props.image}
                  width="100%"
                  alt="Card image"
                  aria-label="Card image"
                />
                <div className="flex items-center gap-1 justify-start w-full">
                  <Image src={calendarIcon} width={18} height={18} />
                  <p>{eventDate}</p>
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
                    <p>{eventTime}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Image
                      src={locationMarkerIcon}
                      width={18}
                      height={18}
                      alt="Location marker icon"
                      aria-label="Location marker icon"
                    />
                    <p>{props.event_location}</p>
                  </div>
                </div>
                <span className="font-semibold">About the event</span>
                <p>{props.event_description}</p>
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
