// app/dashboard/layout.tsx

import { AppSidebar } from "@/components/appSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata = {
  title: "Dashboard",
  description: "Admin dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <main className="">{children}</main>
      </SidebarProvider>
    </div>
  );
}
