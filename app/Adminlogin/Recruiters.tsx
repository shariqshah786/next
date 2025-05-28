
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
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, MoreHorizontal, Building, Phone, Mail, Loader2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for recruiters
const mockRecruiters = [
  {
    id: '1',
    name: "John Smith",
    email: "john.smith@techsolutions.com",
    company: "Tech Solutions Inc.",
    phone: "+1 (555) 123-4567",
    jobs: 12,
    status: "active",
  },
  {
    id: '2',
    name: "Linda Chen",
    email: "linda.chen@innovatetech.com",
    company: "InnovateTech",
    phone: "+1 (555) 234-5678",
    jobs: 8,
    status: "active",
  },
  {
    id: '3',
    name: "Robert Johnson",
    email: "robert@designhub.co",
    company: "DesignHub Co.",
    phone: "+1 (555) 345-6789",
    jobs: 5,
    status: "inactive",
  },
  {
    id: '4',
    name: "Maria Rodriguez",
    email: "maria@datasys.com",
    company: "DataSys Solutions",
    phone: "+1 (555) 456-7890",
    jobs: 10,
    status: "active",
  },
  {
    id: '5',
    name: "David Wilson",
    email: "david@growthgenius.com",
    company: "GrowthGenius",
    phone: "+1 (555) 567-8901",
    jobs: 3,
    status: "inactive",
  },
];

// Helper function to get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

// Helper function to get status badge
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-dashboard-green">Active</Badge>;
    case 'inactive':
      return <Badge variant="outline" className="text-dashboard-red border-dashboard-red">Inactive</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default function RecruitersPage() {
  const [recruiters, setRecruiters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, we'd fetch from Supabase
    // For now, using mock data
    setRecruiters(mockRecruiters);
    setIsLoading(false);
  }, []);

  const toggleRecruiterStatus = (id: string) => {
    const updatedRecruiters = recruiters.map(recruiter => {
      if (recruiter.id === id) {
        const newStatus = recruiter.status === 'active' ? 'inactive' : 'active';
        return { ...recruiter, status: newStatus };
      }
      return recruiter;
    });
    setRecruiters(updatedRecruiters);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Recruiters</h1>
            <p className="text-muted-foreground">
              Manage external recruiters who post jobs on your platform.
            </p>
          </div>
          <Button className="bg-dashboard-blue hover:bg-dashboard-blue/90">
            <Plus className="mr-2 h-4 w-4" />
            Add Recruiter
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center">
              <Building className="mr-2 h-5 w-5" />
              All Recruiters
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
                    <TableHead>Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Active Jobs</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recruiters.map((recruiter) => (
                    <TableRow key={recruiter.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-dashboard-purple text-white">
                              {getInitials(recruiter.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{recruiter.name}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="flex items-center text-sm">
                            <Mail className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
                            {recruiter.email}
                          </p>
                          <p className="flex items-center text-sm">
                            <Phone className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
                            {recruiter.phone}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>{recruiter.company}</TableCell>
                      <TableCell>{recruiter.jobs}</TableCell>
                      <TableCell>{getStatusBadge(recruiter.status)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => toggleRecruiterStatus(recruiter.id)}>
                              {recruiter.status === 'active' ? 'Deactivate' : 'Activate'}
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
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
