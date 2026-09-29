import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { Field, FieldGroup, FieldLabel } from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { InputGroup, InputGroupTextarea } from "#/components/ui/input-group";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/contact-us")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  return (
    <div className="w-full max-w-4/5 mx-auto pt-10 flex flex-col gap-3 items-center justify-center">
      <h1 className="text-5xl font-bold">Contact Us</h1>
      <p>
        We'd love to hear from you! Fill out the form below and we'll get back
        to you as soon as possible.
      </p>

      <div className="w-full max-w-lg mt-4">
        <form
          id="contact-us-form"
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <div className="flex flex-col gap-3 md:flex-row md:gap-3">
              <form.Field
                name="email"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Enter your email"
                        autoComplete="email"
                      />
                    </Field>
                  );
                }}
              />
              <form.Field
                name="name"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Enter your name"
                        autoComplete="name"
                      />
                    </Field>
                  );
                }}
              />
            </div>
            <form.Field
              name="message"
              children={(field) => {
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Message</FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Enter your message"
                        autoComplete="off"
                      />
                    </InputGroup>
                  </Field>
                );
              }}
            />
          </FieldGroup>
          <Button type="submit" form="contact-us-form">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
