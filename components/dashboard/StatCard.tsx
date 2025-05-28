
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: {
    value: string | number;
    positive: boolean;
  };
  className?: string;
  iconClassName?: string;
}

export function StatCard({ 
  title, 
  value, 
  icon, 
  change, 
  className, 
  iconClassName 
}: StatCardProps) {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg border border-gray-200 shadow-sm",
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              <span className={cn(
                "text-xs font-medium",
                change.positive ? "text-dashboard-green" : "text-dashboard-red"
              )}>
                {change.positive && '+'}{change.value}%
              </span>
              <span className="text-xs text-gray-500 ml-1">vs last month</span>
            </div>
          )}
        </div>
        <div className={cn(
          "p-3 rounded-full",
          iconClassName || "bg-dashboard-blue/10"
        )}>
          {icon}
        </div>
      </div>
    </div>
  );
}
