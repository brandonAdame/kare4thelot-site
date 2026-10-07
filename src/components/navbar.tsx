import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { LotLogo } from "./lot-logo";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";

const NAV_LINKS = [
  {
    name: "Our Services",
    href: "/our-services",
  },
  {
    name: "Upcoming Events",
    href: "/upcoming-events",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full shrink-0 min-h-(--header-height) items-center justify-center">
      <div className="items-center mx-auto flex h-full w-full max-w-350 min-[1800px]:max-w-384 sm:px-6 px-4">
        <div className="flex w-full items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <LotLogo />
            <span className="font-bold text-lg">Kare4TheLot</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-3">
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    render={<Link to={link.href} />}
                    className=""
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="rounded-md hidden md:inline-flex">Donate</Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="md:hidden"
              render={
                <Button
                  variant={"outline"}
                  size="icon"
                  aria-label="Open menu"
                  className="rounded-md"
                >
                  <MenuIcon className="h-6 w-6" />
                </Button>
              }
            ></SheetTrigger>
            <SheetContent
              side="right"
              className="w-3/4 max-h-screen overflow-y-auto"
            >
              <nav className="mt-10 flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="p-2"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="rounded-md">Donate</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
