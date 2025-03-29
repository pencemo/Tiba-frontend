import { AppSidebar } from "@/app/Admin/Page/app-sidebar"
import { SiteHeader } from "@/app/Admin/Page/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom";

export default function Page() {
  return (
    (<div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="w-full min-h-screen ">
                <Outlet/>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>)
  );
}
