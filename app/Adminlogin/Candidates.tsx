
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { MoreHorizontal, User, Mail, Phone, FileText, Loader2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for candidates
const mockCandidates = [
  {
    id: '1',
    name: "Emma Thompson",
    email: "emma@example.com",
    phone: "+1 (555) 123-4567",
    applications: 3,
    resume_url: "#",
  },
  {
    id: '2',
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "+1 (555) 234-5678",
    applications: 2,
    resume_url: "#",
  },
  {
    id: '3',
    name: "Sarah Davis",
    email: "sarah@example.com",
    phone: "+1 (555) 345-6789",
    applications: 5,
    resume_url: "#",
  },
  {
    id: '4',
    name: "David Wilson",
    email: "david@example.com",
    phone: "+1 (555) 456-7890",
    applications: 1,
    resume_url: "#",
  },
  {
    id: '5',
    name: "Jessica Brown",
    email: "jessica@example.com",
    phone: "+1 (555) 567-8901",
    applications: 4,
    resume_url: "#",
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

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, we'd fetch from Supabase
    // For now, using mock data
    setCandidates(mockCandidates);
    setIsLoading(false);
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Candidates</h1>
          <p className="text-muted-foreground">
            View and manage all job seekers who have applied to your positions.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center">
              <User className="mr-2 h-5 w-5" />
              All Candidates
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
                    <TableHead>Contact Information</TableHead>
                    <TableHead>Applications</TableHead>
                    <TableHead>Resume</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {candidates.map((candidate) => (
                    <TableRow key={candidate.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-dashboard-blue text-white">
                              {getInitials(candidate.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{candidate.name}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="flex items-center text-sm">
                            <Mail className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
                            {candidate.email}
                          </p>
                          <p className="flex items-center text-sm">
                            <Phone className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
                            {candidate.phone}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>{candidate.applications}</TableCell>
                      <TableCell>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center"
                        >
                          <FileText className="h-3.5 w-3.5 mr-1" />
                          View
                        </Button>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>View Applications</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
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
