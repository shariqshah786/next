
import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MoreHorizontal, Loader2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Application = {
  id: string;
  candidate: {
    name: string;
    email: string;
  };
  job: {
    title: string;
    company: string;
  };
  status: string;
  application_date: string;
};

// Mock data for applications (we'll replace with real data in a production app)
const mockApplications = [
  {
    id: '1',
    candidate: {
      name: "Emma Thompson",
      email: "emma@example.com",
    },
    job: {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
    },
    status: "interview",
    application_date: "2023-05-02",
  },
  {
    id: '2',
    candidate: {
      name: "Michael Johnson",
      email: "michael@example.com",
    },
    job: {
      title: "Product Manager",
      company: "InnovateTech",
    },
    status: "review",
    application_date: "2023-05-01",
  },
  {
    id: '3',
    candidate: {
      name: "Sarah Davis",
      email: "sarah@example.com",
    },
    job: {
      title: "UX Designer",
      company: "DesignHub Co.",
    },
    status: "rejected",
    application_date: "2023-04-30",
  },
  {
    id: '4',
    candidate: {
      name: "David Wilson",
      email: "david@example.com",
    },
    job: {
      title: "Backend Developer",
      company: "DataSys Solutions",
    },
    status: "hired",
    application_date: "2023-04-29",
  },
  {
    id: '5',
    candidate: {
      name: "Jessica Brown",
      email: "jessica@example.com",
    },
    job: {
      title: "Marketing Specialist",
      company: "GrowthGenius",
    },
    status: "new",
    application_date: "2023-04-28",
  }
];

// Helper function to format dates
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
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

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, we'd fetch from Supabase
    // For now, using mock data
    setApplications(mockApplications);
    setIsLoading(false);
  }, []);

  const updateApplicationStatus = (id: string, newStatus: string) => {
    // In real app, this would update the database
    const updatedApplications = applications.map(app =>
      app.id === id ? { ...app, status: newStatus } : app
    );
    setApplications(updatedApplications);
    
    toast({
      title: "Status Updated",
      description: `Application status has been updated to ${newStatus}`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Applications</h1>
          <p className="text-muted-foreground">
            Manage and track candidate applications.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              All Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-10 w-10 animate-spin text-dashboard-blue" />
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Applied On</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-dashboard-blue text-white">
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
                          {application.job.title}
                          <p className="text-xs text-gray-500">{application.job.company}</p>
                        </div>
                      </TableCell>
                      <TableCell>{formatDate(application.application_date)}</TableCell>
                      <TableCell>{getStatusBadge(application.status)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => updateApplicationStatus(application.id, 'new')}>
                              Mark as New
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateApplicationStatus(application.id, 'review')}>
                              Move to Review
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateApplicationStatus(application.id, 'interview')}>
                              Set to Interview
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateApplicationStatus(application.id, 'hired')}>
                              Mark as Hired
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateApplicationStatus(application.id, 'rejected')}>
                              Reject Application
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
