import ContactForm from "@/components/form/contact-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_contact/contactus")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ContactForm
      title="Contact us"
      aboutText="We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible."
    />
  );
}
