import { Button } from "@heroui/react";

const Header = () => {
  return (
    <header className="mt-6 flex justify-center border-b border-b-terracotta-400 bg-white pb-6">
      <nav className="relative flex w-full items-center justify-between px-16">
        {/* Links to other available pages */}
        <div className="flex gap-4 font-medium">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="/upcomingevents" className="hover:underline">
            Upcoming Events
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="#" className="text-4xl">
            Kare<span className="text-earth-orange">4</span>TheLot
          </a>
        </div>
        <div>
          {/* Navigate user to Stripe */}
          <Button variant="shadow" size="md" className="bg-breaker-bay-300">
            Donate
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
