import { JobCard } from "./jobsCard";

const jobs = [
    {
        id: 1,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹38,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-1.svg"
    },
    {
        id: 2,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹30,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-2.svg"
    },
    {
        id: 3,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹35,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-3-1.svg"
    },
    {
        id: 4,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹28,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-4.svg"
    },
    {
        id: 5,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹40,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-5.svg"
    },
    {
        id: 6,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹80,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-6.svg"
    },
    {
        id: 7,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹45,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-7.svg"
    }, {
        id: 8,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹5,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-8.svg"
    },
    {
        id: 9,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹33,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-9.svg"
    },
    {
        id: 10,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹48,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-10.svg"
    },
    {
        id: 11,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹24,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-11.svg"
    },
    {
        id: 12,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹55,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-12.svg"
    },
    {
        id: 13,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹100,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-13.svg"
    },
    {
        id: 14,
        company: "Tech Corp",
        title: "Senior Frontend Developer",
        location: "New York, NY",
        type: "Full Time",
        postedDate: "Posted 2 days ago",
        description: "We're looking for an experienced frontend developer to join our growing team...",
        skills: ["React", "TypeScript", "Next.js", "GraphQL"],
        salary: "₹77,000",
        slug: "senior-frontend-developer",
        companyLogo: "/imgs/recruiter-14.svg"
    },

]
export default function Jobs() {
    return (
        <>
            <div className="container  py-4">
                {/* <div className=" flex flex-col items-center" >
                    <h2 className="text-2xl font-bold  pb-2">Jobs of the day</h2>
                    <p className="pb-6">Search and connect with the right candidates faster </p>
                </div> */}
                <div className="mx-2 md:ml-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {
                        jobs.map((job) => (<JobCard key={job.id} job={job} />))
                    }
                </div>
            </div>
        </>
    )
}