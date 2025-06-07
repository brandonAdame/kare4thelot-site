import { Button, Link } from "@heroui/react";

const DonateButton = () => {
  const paymentUrl = import.meta.env.PAYMENT_URL;
  return (
    <Button
      className="bg-gradient-to-r from-terracotta-300/65 to-breaker-bay-200 px-12"
      radius="full"
      size="lg"
      as={Link}
      href={paymentUrl}
      target="_blank"
    >
      Donate
    </Button>
  );
};

export default DonateButton;
