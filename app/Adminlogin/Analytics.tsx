
import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line
} from 'recharts';
import { ArrowUpRight, ChartBar, TrendingUp, PieChart as PieChartIcon } from 'lucide-react';

const jobsByMonth = [
  { name: 'Jan', jobs: 12 },
  { name: 'Feb', jobs: 19 },
  { name: 'Mar', jobs: 15 },
  { name: 'Apr', jobs: 27 },
  { name: 'May', jobs: 21 },
  { name: 'Jun', jobs: 32 },
  { name: 'Jul', jobs: 24 },
  { name: 'Aug', jobs: 28 },
  { name: 'Sep', jobs: 31 },
  { name: 'Oct', jobs: 36 },
  { name: 'Nov', jobs: 40 },
  { name: 'Dec', jobs: 43 },
];

const applicationsByMonth = [
  { name: 'Jan', applications: 65 },
  { name: 'Feb', applications: 85 },
  { name: 'Mar', applications: 72 },
  { name: 'Apr', applications: 100 },
  { name: 'May', applications: 89 },
  { name: 'Jun', applications: 120 },
  { name: 'Jul', applications: 95 },
  { name: 'Aug', applications: 105 },
  { name: 'Sep', applications: 118 },
  { name: 'Oct', applications: 132 },
  { name: 'Nov', applications: 150 },
  { name: 'Dec', applications: 162 },
];

const jobsByStatus = [
  { name: 'Active', value: 52 },
  { name: 'Paused', value: 12 },
  { name: 'Closed', value: 36 },
];

const applicationsByStatus = [
  { name: 'New', value: 32 },
  { name: 'In Review', value: 25 },
  { name: 'Interview', value: 18 },
  { name: 'Hired', value: 10 },
  { name: 'Rejected', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Overview of job posting and application metrics.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium flex items-center">
                <ChartBar className="mr-2 h-5 w-5" />
                Jobs Posted by Month
              </CardTitle>
              <span className="text-sm text-green-600 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                15% increase
              </span>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={jobsByMonth}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="jobs" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Applications Received
              </CardTitle>
              <span className="text-sm text-green-600 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                23% increase
              </span>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={applicationsByMonth}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="applications" 
                      stroke="#0ea5e9" 
                      strokeWidth={2} 
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center">
                <PieChartIcon className="mr-2 h-5 w-5" />
                Jobs by Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={jobsByStatus}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {jobsByStatus.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center">
                <PieChartIcon className="mr-2 h-5 w-5" />
                Applications by Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={applicationsByStatus}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {applicationsByStatus.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
