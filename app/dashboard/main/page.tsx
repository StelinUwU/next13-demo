import { WidgetsGrid } from "@/components/dashboard";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h2 className="mt-2 text-3xl">Dashboad</h2>
      <span className="text-xl">Información general</span>
      <WidgetsGrid />
    </div>
  );
}
