import { Outlet } from "react-router";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="antialiased flex">
        <Sidebar />
        <main className="w-full">
          <Navbar />
          <div className="px-4">
            <Outlet />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
