import { Form, Input, Textarea, Button } from "@heroui/react";
import { useState } from "react";
import type { FormEvent } from "react";

interface FormData {
  email: string;
}

const ContactForm = () => {
  const [submitted, setSubmitted] = useState<FormData | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      email: formData.get("email") as string,
    };

    setSubmitted(data);
  };

  return (
    <Form className="w-full max-w-xs lg:max-w-2xl" onSubmit={onSubmit}>
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
      />

      <Button type="submit" variant="shadow" className="bg-terracotta-300">
        Submit
      </Button>
      {submitted && (
        <div className="text-small text-default-500">
          Thank you for reaching out! We'll get back to you as soon as possible.
        </div>
      )}
    </Form>
  );
};

export default ContactForm;
