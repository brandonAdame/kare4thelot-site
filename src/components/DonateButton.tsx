import { Button, Link, Skeleton } from "@heroui/react";
import { Suspense } from "react";

const DonateButton = () => {
  const paymentUrl = import.meta.env.PAYMENT_URL;

  function Loading() {
    return (
      <Skeleton className="">
        <div className="h-12 w-full" />
      </Skeleton>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <Button
        className="bg-gradient-to-r from-terracotta-300/65 to-breaker-bay-200 px-12"
        radius="full"
        size="lg"
        as={Link}
        href={paymentUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate
      </Button>
    </Suspense>
  );
};

export default DonateButton;
