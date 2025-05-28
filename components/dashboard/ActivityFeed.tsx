
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Calendar, User, Briefcase } from "lucide-react";
import { cn } from '@/lib/utils';

// Mock data for activity feed
const activities = [
  {
    id: 1,
    type: "application",
    user: "Emma Thompson",
    action: "applied for",
    target: "Senior Frontend Developer",
    time: "2 hours ago",
    icon: Calendar,
    iconClass: "bg-dashboard-blue/10 text-dashboard-blue"
  },
  {
    id: 2,
    type: "status",
    user: "HR Manager",
    action: "moved",
    target: "Michael Johnson",
    detail: "to interview stage",
    time: "3 hours ago",
    icon: User,
    iconClass: "bg-dashboard-purple/10 text-dashboard-purple"
  },
  {
    id: 3,
    type: "job",
    user: "Tech Solutions Inc.",
    action: "posted a new job",
    target: "DevOps Engineer",
    time: "5 hours ago",
    icon: Briefcase,
    iconClass: "bg-dashboard-green/10 text-dashboard-green"
  },
  {
    id: 4,
    type: "application",
    user: "Sarah Davis",
    action: "was rejected for",
    target: "UX Designer",
    time: "8 hours ago",
    icon: X,
    iconClass: "bg-dashboard-red/10 text-dashboard-red"
  },
  {
    id: 5,
    type: "status",
    user: "David Wilson",
    action: "was hired for",
    target: "Backend Developer",
    time: "1 day ago",
    icon: Check,
    iconClass: "bg-dashboard-green/10 text-dashboard-green"
  }
];

interface ActivityItemProps {
  activity: typeof activities[0];
}

function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-4 py-3">
      <div className={cn(
        "rounded-full p-2 mt-0.5",
        activity.iconClass
      )}>
        <activity.icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm">
          <span className="font-medium">{activity.user}</span>{" "}
          {activity.action}{" "}
          <span className="font-medium">{activity.target}</span>{" "}
          {activity.detail && activity.detail}
        </p>
        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
      </div>
    </div>
  );
}

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
