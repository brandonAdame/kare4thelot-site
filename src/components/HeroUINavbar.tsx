import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@heroui/react";

import { useState } from "react";
import LotLogo from "../assets/kare4thelot-logo.png?url";

const Logo = () => {
  return <Image src={LotLogo} alt="Kare4TheLot Logo" width={40} height={40} />;
};

const HeroUINavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Donate", "Upcoming Events", "Get Involved", "Contact Us"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
          <Link
            color="foreground"
            href="/alternative"
            className="font-bold text-inherit"
          >
            Kare4TheLot
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/getinvolved">
            Get Involved
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color="foreground"
            href="/upcomingevents"
            className="text-terracotta-500"
          >
            Upcoming Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contactus">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            href="#"
            variant="flat"
            className="font-semibold"
          >
            Donate
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default HeroUINavbar;
