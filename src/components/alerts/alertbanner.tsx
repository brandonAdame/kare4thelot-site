import { Alert, Button } from "@heroui/react";

export default function AlertBanner() {
  return (
    <div className="flex w-full lg:w-1/2">
      <Alert
        description="Now offering a clothing boutique!"
        color="secondary"
        endContent={
          <Button
            variant="solid"
            color="secondary"
            size="sm"
            as="a"
            href="/clothing"
          >
            Learn More
          </Button>
        }
      />
    </div>
  );
}
