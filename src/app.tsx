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
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 p-4">
              {/* <Outlet /> */}
              <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
                test
              </div>
              <div className="bg-primary-foreground p-4 rounded-lg">test</div>
              <div className="bg-primary-foreground p-4 rounded-lg">test</div>
              <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
                test
              </div>
              <div className="bg-primary-foreground p-4 rounded-lg">test</div>
              <div className="bg-primary-foreground p-4 rounded-lg">test</div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
