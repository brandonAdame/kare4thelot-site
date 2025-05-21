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
  Link,
  type ModalProps,
} from "@heroui/react";
import { useState } from "react";
import { Chip } from "@heroui/chip";
import clockIcon from "../assets/clock-icon.svg?url";
import locationMarkerIcon from "../assets/location-marker-icon.svg?url";
import calendarIcon from "../assets/calendar-icon.svg?url";
import {
  CalendarDate,
  DateFormatter,
  parseDate,
} from "@internationalized/date";
import type { Tables } from "../../database.types";

interface EventCardProps extends Tables<"upcoming_events"> {
  isChip?: boolean;
}

const EventCard = (props: EventCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] =
    useState<ModalProps["scrollBehavior"]>("inside");

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return new DateFormatter("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  const eventTime = formatTime(props.event_time);

  const dateFormatter = new DateFormatter("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    calendar: "gregory",
    timeZone: "America/New_York",
  });

  console.log("Raw date: ", props.event_date);

  // Parse the date string first to handle timezone conversion properly
  const parsedDate = parseDate(props.event_date);
  const eventDate = dateFormatter.format(parsedDate.toDate("America/New_York"));

  console.log("Formatted event date: ", eventDate);

  return (
    <div className="h-full">
      <Card
        isPressable
        className="flex h-full w-full flex-col"
        onPress={onOpen}
      >
        <CardHeader className="flex items-center justify-between">
          <h1>{props.event_title}</h1>
          {props.isChip && (
            <Chip color="primary" size="sm" className="text-[11px]">
              {props.chip_label}
            </Chip>
          )}
        </CardHeader>
        <CardBody className="flex-1">
          <Image
            className="h-[140px] w-full object-cover"
            src={props.image}
            width="100%"
            alt="Card image"
            aria-label="Card image"
          />
          <p className="pt-2 text-sm font-light">{props.event_description}</p>
        </CardBody>
        <CardFooter className="flex flex-col gap-2 text-sm font-light text-slate-400">
          <div className="flex w-full justify-start gap-1">
            <Image src={calendarIcon} width={18} height={18} />
            <p>{eventDate}</p>
          </div>
          <div className="flex w-full justify-between gap-3 lg:flex-col lg:gap-1 xl:flex-row xl:gap-3">
            <div className="flex items-center gap-1">
              <Image
                src={clockIcon}
                width={18}
                height={18}
                alt="Clock icon"
                aria-label="Clock icon"
              />
              <p>{eventTime}</p>
            </div>
            <div className="flex items-center gap-1">
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
              <ModalHeader className="flex items-center justify-between">
                {props.event_title}
                {props.isChip && (
                  <Chip color="primary" size="sm" className="text-[11px]">
                    {props.chip_label}
                  </Chip>
                )}
              </ModalHeader>
              <ModalBody>
                {/* <Image
                  className="h-[140px] w-full object-cover"
                  src={props.image}
                  width="100%"
                  alt="Card image"
                  aria-label="Card image"
                /> */}
                {/* <Image src={props.image} width="100%" height="100%" /> */}
                <div className="flex w-full items-center justify-start gap-1">
                  <Image src={calendarIcon} width={18} height={18} />
                  <p>{eventDate}</p>
                </div>
                <div className="flex w-full justify-between gap-3">
                  <div className="flex items-center gap-1">
                    <Image
                      src={clockIcon}
                      width={18}
                      height={18}
                      alt="Clock icon"
                      aria-label="Clock icon"
                    />
                    <p>{eventTime}</p>
                  </div>
                  <div className="flex items-center gap-1">
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
                {props.event_registration_link && (
                  <Link
                    href={`${props.event_registration_link}`}
                    target="_blank"
                  >
                    Register here
                  </Link>
                )}
                <Image src={props.image} width="100%" height="100%" />
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
