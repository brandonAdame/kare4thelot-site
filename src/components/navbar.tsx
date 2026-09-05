import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";

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
  return (
    <header className="w-full">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList className="gap-3">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink render={<Link to={link.href} />}>
                  {link.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="rounded-md">Donate</Button>
      </div>
    </header>
  );
}
