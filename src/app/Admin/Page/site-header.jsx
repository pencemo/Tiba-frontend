import { Bell, SidebarIcon } from "lucide-react"

import { SearchForm } from "@/app/Admin/Page/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { useAdminNotification } from "@/hooks/QueryHooks/useNotification"
import { useNavigate } from "react-router-dom"

export function SiteHeader() {
  const navigate = useNavigate()
  const { toggleSidebar } = useSidebar()
  const {data, isError, isLoading}=useAdminNotification()
  return (
    (<header
      className="fle sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button className="h-8 w-8" variant="ghost" size="icon" onClick={toggleSidebar}>
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* <SearchForm className="w-full sm:ml-auto sm:w-auto" /> */}
        <Button onClick={()=>navigate('/admin/notification')} variant="outline" className='relative sm:ml-auto rounded-full ' size="icon">
                <Bell className="h-4 w-4" />
                {data?.data?.count > 0  && (
                  <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
                    {data.data.count}
                  </span>
                )}
              </Button>
        
      </div>
    </header>)
  );
}
