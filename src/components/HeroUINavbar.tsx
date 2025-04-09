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

const Logo = () => {
  return (
    <svg
      width="27"
      height="26"
      viewBox="0 0 315 314"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_28_7)">
        <path
          d="M119.5 219V195H25.5V305.5H103.5C103.541 265.746 107 243 107 232.5C107 222 103.521 221.237 103.5 219H119.5Z"
          fill="black"
        />
        <path
          d="M119.5 195H220L308.5 305.5H192.5L119.5 219M119.5 195V219M119.5 195H25.5V305.5H103.5C103.541 265.746 107 243 107 232.5C107 222 103.521 221.237 103.5 219H119.5"
          stroke="black"
        />
      </g>
      <g filter="url(#filter1_d_28_7)">
        <path
          d="M120 87.5V111.5H26V1H104C104.041 40.7543 107.5 63.5 107.5 74C107.5 84.5 104.021 85.2626 104 87.5H120Z"
          fill="black"
        />
        <path
          d="M120 111.5H220.5L309 1H193L120 87.5M120 111.5V87.5M120 111.5H26V1H104C104.041 40.7543 107.5 63.5 107.5 74C107.5 84.5 104.021 85.2626 104 87.5H120"
          stroke="black"
        />
      </g>
      <path
        d="M25.344 145.84V159.408H30.016V163.888H25.344V174H20.224V163.888H1.92V159.856L11.072 132.4H16.192L7.168 159.408H20.224V151.344L21.824 145.84H25.344ZM32.64 129.2H56.96V133.68H47.552V174H42.048V133.68H32.64V129.2ZM89.753 129.2V174H84.249V153.776H68.889V174H63.385V129.2H68.889V149.296H84.249V129.2H89.753ZM101.26 129.2H122.572L121.932 133.68H106.764V149.296H120.652V153.776H106.764V169.52H123.212V174H101.26V129.2ZM131.51 129.2H137.014V169.52H151.478V174H131.51V129.2ZM171.694 174.768C168.195 174.768 165.465 174.363 163.502 173.552C161.582 172.741 160.195 171.44 159.342 169.648C158.531 167.813 158.019 165.424 157.806 162.48C157.635 159.536 157.55 155.931 157.55 151.664C157.55 147.397 157.635 143.792 157.806 140.848C158.019 137.861 158.531 135.472 159.342 133.68C160.195 131.845 161.582 130.523 163.502 129.712C165.465 128.859 168.195 128.432 171.694 128.432C175.235 128.432 177.966 128.859 179.886 129.712C181.849 130.523 183.235 131.845 184.046 133.68C184.899 135.472 185.411 137.861 185.582 140.848C185.795 143.792 185.902 147.397 185.902 151.664C185.902 155.931 185.795 159.536 185.582 162.48C185.411 165.424 184.899 167.813 184.046 169.648C183.235 171.44 181.849 172.741 179.886 173.552C177.966 174.363 175.235 174.768 171.694 174.768ZM180.334 161.648V141.552C180.334 140.315 180.27 139.184 180.142 138.16C180.057 137.093 179.758 136.176 179.246 135.408C178.734 134.64 177.881 134.043 176.686 133.616C175.534 133.189 173.891 132.976 171.758 132.976C169.582 132.976 167.897 133.189 166.702 133.616C165.55 134.043 164.718 134.64 164.206 135.408C163.694 136.176 163.374 137.093 163.246 138.16C163.161 139.184 163.118 140.315 163.118 141.552V161.648C163.118 162.885 163.161 164.037 163.246 165.104C163.374 166.128 163.694 167.024 164.206 167.792C164.718 168.56 165.55 169.157 166.702 169.584C167.897 170.011 169.582 170.224 171.758 170.224C173.891 170.224 175.534 170.011 176.686 169.584C177.881 169.157 178.734 168.56 179.246 167.792C179.758 167.024 180.057 166.128 180.142 165.104C180.27 164.037 180.334 162.885 180.334 161.648ZM191.328 129.2H215.648V133.68H206.24V174H200.736V133.68H191.328V129.2Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_d_28_7"
          x="21"
          y="194.5"
          width="292.541"
          height="119.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_28_7"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_28_7"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_28_7"
          x="21.5"
          y="0.5"
          width="292.541"
          height="119.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_28_7"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_28_7"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const HeroUINavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Donate", href: "#" },
    { title: "Upcoming Events", href: "/upcomingevents" },
    { title: "Get Involved", href: "/getinvolved" },
    { title: "Contact Us", href: "/contactus" },
  ];

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
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default HeroUINavbar;
