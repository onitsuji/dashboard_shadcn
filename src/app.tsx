import { Outlet } from "react-router";
import Navbar from "./components/navbar";
import AppSidebar from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="antialiased flex w-full">
          <AppSidebar />
          <main className="w-full">
            <Navbar />
            <div className="px-4">
              <Outlet />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
