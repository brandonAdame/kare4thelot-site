import Footer from "@/components/footer/footer";
import HeroUINavbar from "@/components/navbar/HeroUINavbar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory-50">
      <HeroUINavbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
