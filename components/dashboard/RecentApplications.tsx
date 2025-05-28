
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from '@/lib/utils';

// Mock data for recent applications
const recentApplications = [
  {
    id: 1,
    candidate: {
      name: "Emma Thompson",
      email: "emma@example.com",
      avatar: "",
    },
    job: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    date: "2023-05-02",
    status: "interview"
  },
  {
    id: 2,
    candidate: {
      name: "Michael Johnson",
      email: "michael@example.com",
      avatar: "",
    },
    job: "Product Manager",
    company: "InnovateTech",
    date: "2023-05-01",
    status: "review"
  },
  {
    id: 3,
    candidate: {
      name: "Sarah Davis",
      email: "sarah@example.com",
      avatar: "",
    },
    job: "UX Designer",
    company: "DesignHub Co.",
    date: "2023-04-30",
    status: "rejected"
  },
  {
    id: 4,
    candidate: {
      name: "David Wilson",
      email: "david@example.com",
      avatar: "",
    },
    job: "Backend Developer",
    company: "DataSys Solutions",
    date: "2023-04-29",
    status: "hired"
  },
  {
    id: 5,
    candidate: {
      name: "Jessica Brown",
      email: "jessica@example.com",
      avatar: "",
    },
    job: "Marketing Specialist",
    company: "GrowthGenius",
    date: "2023-04-28",
    status: "new"
  },
  {
    id: 6,
    candidate: {
      name: "Jessica Brown",
      email: "jessica@example.com",
      avatar: "",
    },
    job: "Marketing Specialist",
    company: "GrowthGenius",
    date: "2023-04-28",
    status: "new"
  },
  {
    id: 7,
    candidate: {
      name: "Jessica Brown",
      email: "jessica@example.com",
      avatar: "",
    },
    job: "Marketing Specialist",
    company: "GrowthGenius",
    date: "2023-04-28",
    status: "new"
  }
];

// Helper function to format dates
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(date);
};

// Helper function to get status badge
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'new':
      return <Badge className="bg-dashboard-blue">New</Badge>;
    case 'review':
      return <Badge className="bg-dashboard-yellow">In Review</Badge>;
    case 'interview':
      return <Badge className="bg-dashboard-purple">Interview</Badge>;
    case 'hired':
      return <Badge className="bg-dashboard-green">Hired</Badge>;
    case 'rejected':
      return <Badge variant="outline" className="text-dashboard-red border-dashboard-red">Rejected</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

// Helper function to get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

export function RecentApplications() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Applications</CardTitle>
        <a href="#" className="text-sm text-dashboard-blue hover:underline">
          View All
        </a>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Applied On</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentApplications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={application.candidate.avatar} />
                      <AvatarFallback className={cn(
                        "bg-dashboard-blue text-white",
                      )}>
                        {getInitials(application.candidate.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{application.candidate.name}</p>
                      <p className="text-xs text-gray-500">{application.candidate.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    {application.job}
                    <p className="text-xs text-gray-500">{application.company}</p>
                  </div>
                </TableCell>
                <TableCell>{formatDate(application.date)}</TableCell>
                <TableCell>{getStatusBadge(application.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
