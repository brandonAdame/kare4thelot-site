import MenuIcon from "../assets/menu-icon.svg?url";
import {
  Listbox,
  ListboxSection,
  ListboxItem,
  Button,
  Image,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@heroui/react";

const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // TODO: add this on bigger screens
  const stuff = () => (
    <div className="flex gap-4 text-lg font-semibold text-ivory-50">
      <a href="#" className="hover:underline">
        {" "}
        About Us{" "}
      </a>
      <a href="/upcomingevents" className="hover:underline">
        Upcoming Events
      </a>
      <a href="#" className="hover:underline">
        Blog
      </a>
    </div>
  );

  return (
    <div className="absolute inset-x-0 top-0 mt-5 flex items-center justify-between px-6 lg:px-32">
      <h1 className="text-3xl font-semibold">
        Kare<span className="text-terracotta-500">4</span>TheLot
      </h1>
      <Button isIconOnly variant="light" onPress={onOpen}>
        <Image src={MenuIcon} alt="Menu" />
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xs"
        backdrop="blur"
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.4,
              },
            },
            exit: {
              x: 100,
              opacity: 0,
              transition: {
                duration: 0.3,
              },
            },
          },
        }}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>Kare4TheLot</DrawerHeader>
              <DrawerBody>
                <Listbox>
                  <ListboxSection title="Resources">
                    <ListboxItem key="Donations">Donations</ListboxItem>
                    <ListboxItem key="Upcoming events">
                      Upcoming events
                    </ListboxItem>
                    <ListboxItem key="Get involved">Get involved</ListboxItem>
                    <ListboxItem key="Contact us">Contact us</ListboxItem>
                  </ListboxSection>
                </Listbox>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
