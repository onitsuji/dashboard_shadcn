import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";
import AccountMenu from "./account-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* Left */}
      <SidebarTrigger />
      {/* Right */}
      <div className="flex items-center gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <ModeToggle />
        <AccountMenu />
      </div>
    </nav>
  );
}
