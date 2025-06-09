import {
  Form,
  Input,
  Textarea,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import type { FormEvent } from "react";
import axios from "axios";

const ContactForm = () => {
  const [aboutYouText, setAboutYouText] = useState<string>("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      ...Object.fromEntries(new FormData(e.currentTarget)),
      aboutYou: aboutYouText,
    };

    try {
      const { status } = await axios.post(
        import.meta.env.FORM_CARRY_URL,
        encode(formData),
      );

      if (status === 200) {
        onOpen();
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      // Consider showing error modal or toast notification
    }
  };

  return (
    <div>
      <Form
        aria-label="Contact Form"
        className="w-full lg:max-w-2xl"
        onSubmit={onSubmit}
      >
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
          <Input
            isRequired
            isClearable
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email..."
            type="email"
          />
          <Input
            isRequired
            isClearable
            label="Name"
            errorMessage="Please enter your name"
            labelPlacement="outside"
            name="Name"
            placeholder="Enter your name..."
          />
        </div>
        <Textarea
          isRequired
          label="About you"
          labelPlacement="outside"
          placeholder="Tell us about yourself! 😇"
          onChange={(e) => setAboutYouText(e.target.value)}
        />
        <Button type="submit" variant="shadow" className="bg-terracotta-300">
          Submit
        </Button>
      </Form>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={() => (window.location.href = "/")}
        classNames={{
          backdrop: "bg-terracotta-300/65",
        }}
      >
        <ModalContent>
          <ModalHeader>Thank you for reaching out!</ModalHeader>
          <ModalBody>We'll get back to you as soon as possible.</ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="light"
              onPress={() => (window.location.href = "/")}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ContactForm;
