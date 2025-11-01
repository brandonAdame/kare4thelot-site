import footerLogo from "@/assets/footerLogo.svg";
import Instagram from "@/assets/instagramIcon.svg";
import FacebookIcon from "@/assets/facebookIcon.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const paymentUrl = process.env.VITE_PAYMENT_URL as string;

  return (
    <footer className="bg-footer-green py-12 px-6 mt-10 relative font-league-spartan-variable">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-footer-green p-4 rounded-full">
        <img
          src={footerLogo}
          className="w-9 h-9 md:w-10 md:h-10 fill-footer-green"
          alt="Kare4TheLot footer logo"
        />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Resources --> */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h3 className="text-xl lg:text-2xl font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/upcomingevents" className="hover:underline font-thin">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a
                  href={paymentUrl}
                  target="_blank"
                  className="hover:underline font-thin"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Center logo and social media links --> */}
          <div className="flex flex-col items-center justify-center mt-20 md:order-2">
            <div className="flex items-center mb-4">
              <h1 className="text-5xl font-medium">Kare4TheLot</h1>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3">Follow us</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.instagram.com/kare4thelot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-thin"
                >
                  <img
                    src={Instagram}
                    alt="Instagram Icon"
                    className="h-6 w-6"
                  />
                  {/* <Instagram width="24" height="24" /> */}
                </a>
                <a
                  href="https://www.facebook.com/kare.thelot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-thin"
                >
                  <img
                    src={FacebookIcon}
                    alt="Facebook Icon"
                    className="h-6 w-6"
                  />
                  {/* <FacebookIcon width="24" height="24" /> */}
                </a>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right order-3">
            <h3 className="text-xl lg:text-2xl font-medium mb-4">
              Connect with us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:252-375-4403"
                  className="hover:underline font-thin"
                >
                  252-375-4403
                </a>
              </li>
              <li>
                <a
                  href="mailto:kare4thelot@gmail.com"
                  className="hover:underline font-thin"
                >
                  kare4thelot@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm">
          <div className="mb-3 md:mb-0 flex items-center">
            <span className="mr-2">&lt; / &gt;</span>
            <span>by Brandon Adame Gachuz</span>
          </div>
          <div>&copy; {currentYear} Kare4TheLot. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
