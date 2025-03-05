// app/page.tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Briefcase, MapPin, Search } from 'lucide-react'
import { CategorySection } from '@/components/category/category'

import Jobs from '@/components/job/jobs'
import NewsletterSection from '@/components/newletter/newletter'
import Footer from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
export default function Findjobs() {

    const stats = [
        { number: "10k+", label: "Jobs Available" },
        { number: "5k+", label: "Companies" },
        { number: "8k+", label: "Candidates" },
    ]

    return (
        <>
            <Navbar />

            <div className="grid place-items-center gap-2">
                {/* Hero Section */}
                <section className="from-primary/5 to-background py-20">
                    <div className="container max-w-6xl items-center">
                        <div className="text-center space-y-6 mb-12">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                Find Your <span className="text-primary">Dream Job</span> Today
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Join thousands of companies and candidates in the modern job market
                            </p>
                        </div>

                        {/* Search Form */}
                        <div className="bg-card rounded-lg mx-2 shadow-lg p-6 flex flex-col md:flex-row gap-4">
                            <div className="flex-1 flex items-center gap-2">
                                <Search className="text-muted-foreground" />
                                <Input placeholder="Job title or keywords" className="border-0 text-lg" />
                            </div>

                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <Briefcase className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="Job Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="full-time">Full-time</SelectItem>
                                    <SelectItem value="part-time">Part-time</SelectItem>
                                    <SelectItem value="remote">Remote</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="new-york">New York</SelectItem>
                                    <SelectItem value="london">London</SelectItem>
                                    <SelectItem value="remote">Remote</SelectItem>
                                </SelectContent>
                            </Select>

                            <Button size="lg" className="px-8 text-lg">
                                Search
                            </Button>
                        </div>


                    </div>
                </section>

                {/* Categories Section */}
                <div className="mx-2"><CategorySection /></div>

                {/* Featured Jobs */}
                <section className="py-16 bg-muted/50">
                    <div className="container max-w-6xl">
                        <h2 className="text-3xl font-bold mb-12 text-center">Featured Jobs</h2>
                        <div className="mx-2"><Jobs /></div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16">
                    <div className="container max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            {stats.map((stat) => (
                                <div key={stat.label} className="space-y-2">
                                    <div className="text-4xl font-bold text-primary">{stat.number}</div>
                                    <p className="text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="mx-2"><NewsletterSection /></div>

            </div>
            <Footer />

        </>
    )
}