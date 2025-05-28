"use client";

import React, { useState } from 'react';
import { MapPin, Briefcase, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SimilarJobCard from '@/components/job/similarJob';
import Newsletter from '@/components/newletter/newsletter';
import JobApplicationModal from '@/components/job/jobapplication';
import Footer from '@/components/footer/footer';
import { Navbar } from '@/components/navbar/navbar';

export default function JobListing() {
    function handleClick() {
        alert("Job Saved ")
    }
    const [isModelOpen, setIsModelOpen] = useState(false);
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    {/* Job Header */}
                    <div className="w-full bg-gray-100 h-40 rounded-lg mb-8 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <Briefcase className="w-8 h-8 text-primary" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                        <div className="md:w-2/3">
                            <h1 className="text-3xl font-bold mb-2">Full Stack Engineer</h1>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                <span className="flex items-center gap-1">
                                    <Briefcase className="w-4 h-4" />
                                    Full Time
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    Posted 2 years ago
                                </span>
                            </div>
                        </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            {/* Employment Info */}
                            <Card className="p-6 mb-8">
                                <h2 className="text-xl font-semibold mb-6 pb-4 border-b">Employment Info</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Industry</p>
                                            <p className="font-medium">Content Writer/ Market Research</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Job level</p>
                                            <p className="font-medium">Experienced</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Salary</p>
                                            <p className="font-medium">₹80000<span className="text-sm text-muted-foreground"> Month</span></p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Experience</p>
                                            <p className="font-medium">2-4 Years</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Job type</p>
                                            <p className="font-medium">Full Time</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Deadline</p>
                                            <p className="font-medium">22/10/2025</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Published</p>
                                            <p className="font-medium">22/09/2022</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Updated</p>
                                            <p className="font-medium">22/09/2022</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Location</p>
                                            <p className="font-medium">New York, Germany</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Job Description */}
                            <Card className="p-6 mb-8">
                                <div className="prose max-w-none">
                                    <h3 className="text-xl font-semibold mb-4">Welcome to Jthemes Team</h3>
                                    <p className="mb-4">
                                        The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.
                                    </p>
                                    <p className="mb-4">
                                        The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4 mt-6">Essential Knowledge, Skills, and Experience</h3>
                                    <ul className="list-disc pl-5 mb-4 space-y-2">
                                        <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                        <li>5+ years of industry experience in interactive design and / or visual design</li>
                                        <li>Excellent interpersonal skills</li>
                                        <li>Aware of trends in mobile, communications, and collaboration</li>
                                        <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                                        <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                                        <li>History of impacting shipping products with your work</li>
                                        <li>A Degree in Design (or related field) or equivalent professional experience</li>
                                        <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold mb-4 mt-6">Preferred Experience</h3>
                                    <ul className="list-disc pl-5 mb-4 space-y-2">
                                        <li>Designing user experiences for enterprise software / services</li>
                                        <li>Creating and applying established design principles and interaction patterns</li>
                                        <li>Aligning or influencing design thinking with teams working in other geographies</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold mb-4 mt-6">Product Designer</h3>
                                    <p className="mb-2"><strong>Product knowledge:</strong> Deeply understand the technology and features of the product area to which you are assigned.</p>
                                    <p className="mb-2"><strong>Research:</strong> Provide human and business impact and insights for products.</p>
                                    <p className="mb-2"><strong>Deliverables:</strong> Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.</p>
                                    <p className="mb-2"><strong>Communication:</strong> Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.</p>
                                </div>

                                <div className="mt-6 text-sm font-medium">
                                    <span>Exela Movers</span>
                                </div>
                            </Card>

                            {/* Apply Section */}
                            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                                <div className="flex gap-2">
                                    <div className="">
                                        <Button onClick={() => setIsModelOpen(true)}>Apply for Job</Button>
                                        <JobApplicationModal isOpen={isModelOpen} onClose={() => setIsModelOpen(false)} />
                                    </div> <Button variant="outline" onClick={handleClick} >Save Job</Button>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">Share this</span>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                            <Facebook className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                            <Twitter className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                            <Linkedin className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            {/* Company Card */}
                            <Card className="p-6 mb-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Briefcase className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Exela Movers</h3>
                                        <p className="text-sm text-muted-foreground">Chicago, US</p>
                                        <a href="#" className="text-sm text-primary mt-1 inline-block">1 Open Job</a>
                                    </div>
                                </div>

                                <div className="mb-4 bg-gray-100 rounded-lg h-48 w-full overflow-hidden">
                                    <iframe
                                        src="https://maps.google.com/maps?q=40.712776,-74.005974&z=14&output=embed"
                                        className="w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                                <ul className="space-y-2 text-sm">
                                    <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                                    <li>Phone: (123) 456-7890</li>
                                    <li>Email: contact@Evara.com</li>
                                </ul>
                            </Card>

                            {/* Similar Jobs */}
                            <Card className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Similar Jobs</h3>
                                <div className="space-y-4">
                                    <SimilarJobCard
                                        title="Figma Designer"
                                        company="Car Toys"
                                        jobType="Full Time"
                                        salary="₹25000"
                                        salaryPeriod="Month"
                                        location="Denmark"
                                        postedTime="Posted 2 years ago"
                                    />

                                    <SimilarJobCard
                                        title="UI / UX Designer fulltime"
                                        company="Baseball Savings"
                                        jobType="Full Time"
                                        salary="₹40000"
                                        salaryPeriod="Month"
                                        location="Australia"
                                        postedTime="Posted 2 years ago"
                                    />

                                    <SimilarJobCard
                                        title="Frontend Developer Private"
                                        company="Wanderu"
                                        jobType="Full Time"
                                        salary="₹35000"
                                        salaryPeriod="Month"
                                        location="London"
                                        postedTime="Posted 2 years ago"
                                    />

                                    <SimilarJobCard
                                        title="Java Software Engineer"
                                        company="Callaway Golf"
                                        jobType="Part Time"
                                        salary="₹25000"
                                        salaryPeriod="Month"
                                        location="London"
                                        postedTime="Posted 2 years ago"
                                    />

                                    <SimilarJobCard
                                        title="Full Stack Engineer"
                                        company="Callaway Golf"
                                        jobType="Full Time"
                                        salary="₹60000"
                                        salaryPeriod="Month"
                                        location="Australia"
                                        postedTime="Posted 2 years ago"
                                    />
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <Newsletter />
                </div>
            </main>
            <Footer />

        </>
    );
}