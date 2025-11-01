import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactSchema } from "@/schemas/contact";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const sendForm = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const resp = await axios.post(process.env.FORM_CARRY_URL as string, data, {
      headers: { Accept: "application/json" },
    });

    return resp.data;
  });

export default function ContactForm({
  title,
  aboutText,
}: {
  title: string;
  aboutText: string;
}) {
  const sf = useServerFn(sendForm);
  const submitFormMutation = useMutation({
    mutationFn: (data: { name: string; email: string; message: string }) =>
      sf({ data }),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value }) => {
      submitFormMutation.mutate(value, {
        onError: () => {
          toast.error("Failed to submit form. Try again later");
        },
        onSuccess: () => {
          toast.success("Form submitted successfully!");
        },
      });
    },
  });
  return (
    <div className="flex flex-col justify-center items-center gap-10 my-20 lg:pt-0">
      <h1 className="text-5xl text-center font-monteilga-regular">{title}</h1>
      <p className="text-sm md:text-lg text-center w-2/3 font-klimaks-bold">
        {aboutText}
      </p>
      <div className="w-5/6 lg:w-[700px] flex flex-col gap-6">
        <form
          id="contact-form"
          className="font-quicksand-variable"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Enter your name"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Enter your email"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="message"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Message</FieldLabel>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Enter your message"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
        <Field className="font-quicksand-variable">
          <Button
            type="submit"
            form="contact-form"
            className="bg-breaker-bay-500 text-white px-6 py-2 rounded hover:bg-breaker-bay-600 cursor-pointer"
          >
            Submit
          </Button>
        </Field>
      </div>
    </div>
  );
}
