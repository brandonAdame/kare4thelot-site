import GetInvolvedImg from "../assets/images/getinvolved.jpg?url";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  ModalContent,
  useDisclosure,
  Input,
  Textarea,
} from "@heroui/react";

const GetInvolvedSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="relative h-[300px] w-full">
      <img
        src={GetInvolvedImg}
        alt="Get Involved Image"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-y-0 left-0 flex translate-x-1/2 translate-y-1/2 flex-col gap-4 lg:translate-x-1/4 lg:translate-y-1/3">
        <p className="text-3xl text-white lg:text-5xl">
          Get{" "}
          <span className="font-semibold text-breaker-bay-50 lg:text-breaker-bay-300">
            Involved
          </span>
        </p>
        <Button color="primary" onPress={onOpen}>
          Sign up!
        </Button>
        <Modal
          isOpen={isOpen}
          placement="top-center"
          onOpenChange={onOpenChange}
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Get Involved
                </ModalHeader>
                <ModalBody>
                  <Input
                    isRequired
                    label="Name"
                    placeholder="Enter your name"
                    type=""
                    variant="bordered"
                  />
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                  <Textarea
                    isRequired
                    label="About You"
                    placeholder="Tell us a little bit about you! ❤️"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Send
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default GetInvolvedSection;
