
import React from 'react';
import { Link } from 'react-router-dom';
import { useSidebar } from '@/providers/SidebarProvider';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  User, 
  ChevronRight, 
  ChevronLeft, 
  Settings, 
  ChartBar,
  Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Jobs",
    href: "/admin/jobs",
    icon: Briefcase,
  },
  {
    title: "Applications",
    href: "/admin/applications", 
    icon: Calendar,
  },
  {
    title: "Recruiters",
    href: "/admin/recruiters",
    icon: Users,
  },
  {
    title: "Candidates",
    href: "/admin/candidates",
    icon: User,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: ChartBar,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const { isOpen, toggle } = useSidebar();
  
  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className={cn("flex items-center", isOpen ? "justify-between w-full" : "justify-center")}>
            {isOpen && <span className="text-xl font-semibold text-dashboard-blue">JobAdmin</span>}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggle} 
              className="ml-auto"
            >
              {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </Button>
          </div>
        </div>
        
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  to={item.href}
                  className={cn(
                    "flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 group",
                    !isOpen && "justify-center"
                  )}
                >
                  <item.icon className="w-5 h-5 text-dashboard-blue" />
                  {isOpen && <span className="ml-3">{item.title}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className={cn("flex items-center", !isOpen && "justify-center")}>
            <div className="w-8 h-8 rounded-full bg-dashboard-blue text-white flex items-center justify-center">
              A
            </div>
            {isOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
