
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSidebar } from '@/providers/SidebarProvider';
import { cn } from '@/lib/utils';

export function Header() {
  const { isOpen } = useSidebar();
  
  return (
    <header className={cn(
      "fixed top-0 right-0 z-30 flex items-center h-16 border-b border-gray-200 bg-white transition-all duration-300",
      isOpen ? "left-64" : "left-20"
    )}>
      <div className="flex items-center justify-between w-full px-6">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search..." 
              className="pl-8"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-dashboard-red rounded-full"></span>
          </Button>
        </div>
      </div>
    </header>
  );
}
