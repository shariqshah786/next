"use client"
// components/ui/job-card.tsx
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function JobCard({ job }: { job: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4 pb-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                        <Image
                            src={job.companyLogo}
                            alt={job.company}
                            width={48}
                            height={48}
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-1">
                        <CardTitle className="text-lg font-medium">{job.company}</CardTitle>
                        <CardDescription className="flex items-center gap-1 text-sm">
                            <span className="inline-block h-2 w-2 rounded-full bg-primary/50" />
                            {job.location}
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                        <Link href={`/jobs/${job.slug}`} className="hover:text-primary">
                            {job.title}
                        </Link>
                    </h3>

                    <div className="flex gap-3 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                            <span className="i-lucide-briefcase" />
                            {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="i-lucide-clock" />
                            {job.postedDate}
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill: string, index: number) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="px-3 py-1 text-sm font-medium hover:bg-primary/10"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center border-t pt-4">
                    <div className="space-y-1">
                        <span className="text-lg font-semibold">{job.salary}</span>
                        <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <Button asChild>
                        <Link href={'/jobsdetail'}>
                            Apply Now
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}