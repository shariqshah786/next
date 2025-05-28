
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

// Mock data for recent jobs
const recentJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    date: "2023-04-28",
    status: "active",
    applications: 24
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateTech",
    location: "New York, NY",
    date: "2023-04-25",
    status: "active",
    applications: 18
  },
  {
    id: 3,
    title: "UX Designer",
    company: "DesignHub Co.",
    location: "Austin, TX",
    date: "2023-04-22",
    status: "closed",
    applications: 36
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "DataSys Solutions",
    location: "Chicago, IL",
    date: "2023-04-20",
    status: "active",
    applications: 15
  },
  {
    id: 5,
    title: "Marketing Specialist",
    company: "GrowthGenius",
    location: "Miami, FL",
    date: "2023-04-18",
    status: "paused",
    applications: 12
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

// Helper function to get status badge color
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-dashboard-green">Active</Badge>;
    case 'closed':
      return <Badge className="bg-dashboard-red">Closed</Badge>;
    case 'paused':
      return <Badge variant="outline" className="text-dashboard-yellow border-dashboard-yellow">Paused</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export function RecentJobs() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Jobs</CardTitle>
        <a href="#" className="text-sm text-dashboard-blue hover:underline">
          View All
        </a>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Posted</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Applications</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentJobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">
                  <div>
                    {job.title}
                    <p className="text-xs text-gray-500">{job.company}</p>
                  </div>
                </TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{formatDate(job.date)}</TableCell>
                <TableCell>{getStatusBadge(job.status)}</TableCell>
                <TableCell>{job.applications}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
