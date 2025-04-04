import { Accordion, AccordionItem, Listbox, ListboxItem } from "@heroui/react";

const Footer = () => {
  return (
    <div className="rounded-t-3xl border-t bg-breaker-bay-200 px-2 py-3">
      <Accordion variant="light">
        <AccordionItem key={1} aria-label="Item 1" title="Resources">
          <Listbox>
            <ListboxItem>Upcoming Events</ListboxItem>
            <ListboxItem>Get Involved</ListboxItem>
            <ListboxItem>Donate</ListboxItem>
          </Listbox>
        </AccordionItem>
        <AccordionItem key={2} aria-label="Item 1" title="Connect with us">
          <p>Hi</p>
        </AccordionItem>
      </Accordion>
      <div>
        <p className="text-center text-xs">
          &copy; 2025 Kare4TheLot. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
