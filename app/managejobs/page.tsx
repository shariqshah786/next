"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
interface IJob {
    id: string;
    position: string;
    jobLevel: string;
    employmentType: string;
    skills: string[];
    salary: number;
    keywords: string[];
    description: string;
    requirement: string;
    category: string;
}

const ManageJobsPage = () => {
    const [jobs, setJobs] = useState<IJob[]>([]);

    // Fetch jobs from localStorage on component mount
    useEffect(() => {
        const savedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
        setJobs(savedJobs);
    }, []);

    const handleDeleteJob = (id: string) => {
        const updatedJobs = jobs.filter((job) => job.id !== id);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
        setJobs(updatedJobs);
        alert('Job deleted successfully!');
    };

    return (
        <>
                      <Navbar /> 

        
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Manage Jobs</h1>
                <Link href="/postjobs">
                    <div className="text-blue-500 hover:underline">Create New Job</div>
                </Link>
            </div>
            <div className="space-y-4">
                {jobs.length === 0 ? (
                    <p className="text-gray-600">No jobs found.</p>
                ) : (
                    jobs.map((job) => (
                        <div key={job.id} className="border border-gray-300 rounded-md p-4">
                            <h2 className="text-xl font-semibold">{job.position}</h2>
                            <p className="text-gray-600">{job.jobLevel}</p>
                            <p className="text-gray-600">{job.employmentType}</p>
                            <p className="text-gray-600">Salary: IDR {job.salary.toLocaleString()}</p>
                            <div className="mt-4 flex gap-4">
                                <button
                                    onClick={() => handleDeleteJob(job.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                >
                                    Delete
                                </button>
                                <button>
                                    <Link href={`/edit-job/${job.id}`}>
                                        <div className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                            Edit
                                        </div>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
        <Footer />

        </>
    );
};

export default ManageJobsPage;