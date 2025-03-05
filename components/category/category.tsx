// components/category-section.tsx
import { Card } from "@/components/ui/card"
import { Briefcase, Code, PenTool, Smartphone, Star, Terminal } from "lucide-react"
import Link from "next/link"

export function CategorySection() {
    const categories = [
        {
            name: "Software Development",
            icon: Terminal,
            jobs: 5,
            path: "/jobs/software"
        },
        {
            name: "Mobile Development",
            icon: Smartphone,
            jobs: 4,
            path: "/jobs/mobile"
        },
        {
            name: "UI/UX Design",
            icon: PenTool,
            jobs: 5,
            path: "/jobs/design"
        },
        {
            name: "Marketing",
            icon: Star,
            jobs: 2,
            path: "/jobs/marketing"
        },
        {
            name: "DevOps & Cloud",
            icon: Code,
            jobs: 8,
            path: "/jobs/devops"
        },
        {
            name: "Project Management",
            icon: Briefcase,
            jobs: 6,
            path: "/jobs/management"
        },
        {
            name: "Project Management",
            icon: Briefcase,
            jobs: 4,
            path: "/jobs/management"
        },
        {
            name: "Project Management",
            icon: Briefcase,
            jobs: 4,
            path: "/jobs/management"
        },
        {
            name: "Project Management",
            icon: Briefcase,
            jobs: 4,
            path: "/jobs/management"
        },
    ]

    return (
        <section className="bg-muted/50">
            <div className="container ">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 m-2 ">
                        Explore Popular Categories
                    </h2>
                    <p className="text-muted-foreground">
                        Discover jobs in the most in-demand categories
                    </p>
                </div>

                <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.path}
                            className="group transition-all"
                        >
                            <Card className="p-2 hover:shadow-lg transition-shadow duration-300 h-25 md:h-30">
                                <div className="flex items-start gap-4">
                                    <category.icon className="md:h-8 md:w-8 mt-4 text-primary flex-shrink-0" />
                                    <div>
                                        <h3 className="text-sm sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                            {category.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground ">
                                            {category.jobs.toLocaleString()}+ jobs available
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}