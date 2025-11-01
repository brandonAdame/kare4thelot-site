import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "@/components/form/contact-form";

export const Route = createFileRoute("/_contact/getinvolved")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ContactForm
      title="Get Involved"
      aboutText="Would you like to help serve your community? Fill out the form below and
        we'll get back to you!"
    />
  );
}
