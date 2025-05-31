import { Form, Input, Textarea, Button } from "@heroui/react";
import { useState } from "react";
import type { FormEvent } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [aboutYouText, setAboutYouText] = useState<string>("");

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      ...Object.fromEntries(new FormData(e.currentTarget)),
      aboutYou: aboutYouText,
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...data }),
    });

    setSubmitted(true);
  };

  return (
    <Form
      aria-label="Contact Form"
      className="w-full max-w-xs lg:max-w-2xl"
      onSubmit={onSubmit}
      data-netlify="true"
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
      {submitted && (
        <div className="text-small text-default-500">
          Thank you for reaching out! We'll get back to you as soon as possible.
        </div>
      )}
    </Form>
  );
};

export default ContactForm;
