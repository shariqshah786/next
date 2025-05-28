"use client"
import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { RecentJobs } from '@/components/dashboard/RecentJobs';
import { RecentApplications } from '@/components/dashboard/RecentApplications';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { Briefcase, Users, User, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import { useSidebar } from '@/providers/SidebarProvider';
import { cn } from '@/lib/utils';

export function Dashboard() {
  const { isOpen } = useSidebar();

  // Update main content width when sidebar state changes
  useEffect(() => {
    const mainElement = document.getElementById('dashboard-main');
    if (mainElement) {
      if (isOpen) {
        mainElement.classList.remove('ml-20');
        mainElement.classList.add('ml-64');
      } else {
        mainElement.classList.remove('ml-64');
        mainElement.classList.add('ml-20');
      }
    }
  }, [isOpen]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your job portal metrics and recent activity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Jobs"
          value="124"
          icon={<Briefcase className="h-5 w-5 text-dashboard-blue" />}
          change={{ value: 12, positive: true }}
        />
        <StatCard
          title="Total Applications"
          value="842"
          icon={<Calendar className="h-5 w-5 text-dashboard-green" />}
          iconClassName="bg-dashboard-green/10"
          change={{ value: 18, positive: true }}
        />
        <StatCard
          title="Recruiters"
          value="28"
          icon={<Users className="h-5 w-5 text-dashboard-purple" />}
          iconClassName="bg-dashboard-purple/10"
          change={{ value: 5, positive: true }}
        />
        <StatCard
          title="Candidates"
          value="1,653"
          icon={<User className="h-5 w-5 text-dashboard-yellow" />}
          iconClassName="bg-dashboard-yellow/10"
          change={{ value: 24, positive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <RecentJobs />
          <RecentApplications />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
}
