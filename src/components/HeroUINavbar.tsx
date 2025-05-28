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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

import { useState } from "react";

interface SVGProps {
  fill: string;
  size: number;
  height?: number;
  width?: number;
}

const LotLogo = () => {
  return (
    <svg
      width="35"
      height="34"
      viewBox="0 0 317 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_28_7)">
        <path
          d="M119.5 220V196H25.5V306.5H103.5C103.541 266.746 107 244 107 233.5C107 223 103.521 222.237 103.5 220H119.5Z"
          fill="white"
        />
        <path d="M220 196H119.5V220L192.5 306.5H308.5L220 196Z" fill="black" />
        <path
          d="M119.5 196H220L308.5 306.5H192.5L119.5 220M119.5 196V220M119.5 196H25.5V306.5H103.5C103.541 266.746 107 244 107 233.5C107 223 103.521 222.237 103.5 220H119.5"
          stroke="black"
          strokeWidth="3"
        />
      </g>
      <g filter="url(#filter1_d_28_7)">
        <path
          d="M120 88.5V112.5H26V2H104C104.041 41.7543 107.5 64.5 107.5 75C107.5 85.5 104.021 86.2626 104 88.5H120Z"
          fill="white"
        />
        <path d="M220.5 112.5H120V88.5L193 2H309L220.5 112.5Z" fill="black" />
        <path
          d="M120 112.5H220.5L309 2H193L120 88.5M120 112.5V88.5M120 112.5H26V2H104C104.041 41.7543 107.5 64.5 107.5 75C107.5 85.5 104.021 86.2626 104 88.5H120"
          stroke="black"
          strokeWidth="3"
        />
      </g>
      <path
        d="M25.344 146.84V160.408H30.016V164.888H25.344V175H20.224V164.888H1.92V160.856L11.072 133.4H16.192L7.168 160.408H20.224V152.344L21.824 146.84H25.344ZM32.64 130.2H56.96V134.68H47.552V175H42.048V134.68H32.64V130.2ZM89.753 130.2V175H84.249V154.776H68.889V175H63.385V130.2H68.889V150.296H84.249V130.2H89.753ZM101.26 130.2H122.572L121.932 134.68H106.764V150.296H120.652V154.776H106.764V170.52H123.212V175H101.26V130.2ZM131.51 130.2H137.014V170.52H151.478V175H131.51V130.2ZM171.694 175.768C168.195 175.768 165.465 175.363 163.502 174.552C161.582 173.741 160.195 172.44 159.342 170.648C158.531 168.813 158.019 166.424 157.806 163.48C157.635 160.536 157.55 156.931 157.55 152.664C157.55 148.397 157.635 144.792 157.806 141.848C158.019 138.861 158.531 136.472 159.342 134.68C160.195 132.845 161.582 131.523 163.502 130.712C165.465 129.859 168.195 129.432 171.694 129.432C175.235 129.432 177.966 129.859 179.886 130.712C181.849 131.523 183.235 132.845 184.046 134.68C184.899 136.472 185.411 138.861 185.582 141.848C185.795 144.792 185.902 148.397 185.902 152.664C185.902 156.931 185.795 160.536 185.582 163.48C185.411 166.424 184.899 168.813 184.046 170.648C183.235 172.44 181.849 173.741 179.886 174.552C177.966 175.363 175.235 175.768 171.694 175.768ZM180.334 162.648V142.552C180.334 141.315 180.27 140.184 180.142 139.16C180.057 138.093 179.758 137.176 179.246 136.408C178.734 135.64 177.881 135.043 176.686 134.616C175.534 134.189 173.891 133.976 171.758 133.976C169.582 133.976 167.897 134.189 166.702 134.616C165.55 135.043 164.718 135.64 164.206 136.408C163.694 137.176 163.374 138.093 163.246 139.16C163.161 140.184 163.118 141.315 163.118 142.552V162.648C163.118 163.885 163.161 165.037 163.246 166.104C163.374 167.128 163.694 168.024 164.206 168.792C164.718 169.56 165.55 170.157 166.702 170.584C167.897 171.011 169.582 171.224 171.758 171.224C173.891 171.224 175.534 171.011 176.686 170.584C177.881 170.157 178.734 169.56 179.246 168.792C179.758 168.024 180.057 167.128 180.142 166.104C180.27 165.037 180.334 163.885 180.334 162.648ZM191.328 130.2H215.648V134.68H206.24V175H200.736V134.68H191.328V130.2Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_d_28_7"
          x="20"
          y="194.5"
          width="295.623"
          height="121.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          x="20.5"
          y="0.5"
          width="295.623"
          height="121.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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

const ChevronDown = ({ fill, size, height, width, ...props }: SVGProps) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

const CrossIcon = ({ fill, size, height, width, ...props }: SVGProps) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      {...props}
    >
      <path
        fill="#ed6a5a"
        d="M200 76h-44V32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v44H56a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h44v92a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-92h44a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12m4 44a4 4 0 0 1-4 4h-48a4 4 0 0 0-4 4v96a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-96a4 4 0 0 0-4-4H56a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h48a4 4 0 0 0 4-4V32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v48a4 4 0 0 0 4 4h48a4 4 0 0 1 4 4Z"
      />
    </svg>
  );
};

const HeroUINavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    cross: <CrossIcon fill="#ed6a5a" size={30} />,
  };

  const paymentUrl = import.meta.env.PAYMENT_URL;

  const menuItems = [
    { title: "Donate", href: paymentUrl },
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
          <LotLogo />
          <Link color="foreground" href="/" className="font-bold text-inherit">
            Kare4TheLot
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/ourservices" className="text-lg">
            Our Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color="foreground"
            href="/upcomingevents"
            className="text-lg text-terracotta-500"
          >
            Upcoming Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contactus" className="text-lg">
            Contact Us
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 text-lg data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                More
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="More Kare4TheLot pages">
            <DropdownItem
              as={Link}
              href="/getinvolved"
              key="Get Involved"
              description="Help us make an impact in our community"
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#ed6a5a"
                    d="M200 74h-42V32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v42H56a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h42v90a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-90h42a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14m2 46a2 2 0 0 1-2 2h-48a6 6 0 0 0-6 6v96a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2v-96a6 6 0 0 0-6-6H56a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h48a6 6 0 0 0 6-6V32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v48a6 6 0 0 0 6 6h48a2 2 0 0 1 2 2Z"
                  />
                </svg>
              }
            >
              Get Involved
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            href={paymentUrl}
            target="_blank"
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
