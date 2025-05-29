import { Moon } from "lucide-react";
import { Link } from "react-router";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* Left */}
      collapseButton
      {/* Right */}
      <div className="flex items-center gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Moon />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/203975120?v=4"
                className="cursor-pointer"
              />
              <AvatarFallback>JOC</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
