'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react'

// Blog post type definition
type BlogPost = {
    id: number
    title: string
    excerpt: string
    image: string
    categories: string[]
    author: string
    date: string
    readTime: string
    url: string
}

// Sample blog data
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Recruiter and Land Your Dream Job Explore Nice Jobs",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet...",
        image: "/imgs/img-big1-404x257.png",
        categories: ["Job Tips"],
        author: "DreamJob",
        date: "2025",
        readTime: "1 min to read",
        url: "#"
    },
    {
        id: 2,
        title: "21 Job Interview Tips: How To Make a Great Impression",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet...",
        image: "/imgs/img-big1-404x257.png",
        categories: ["Events", "Job Tips"],
        author: "DreamJob",
        date: "2025",
        readTime: "2 mins to read",
        url: "#"
    },
    {
        id: 3,
        title: "Email Example: How To Respond to Employer Interview Requests",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet...",
        image: "/imgs/img-big1-404x257.png",
        categories: ["Events", "Job Tips"],
        author: "DreamJob",
        date: "2025",
        readTime: "2 mins to read",
        url: "#"
    },
    {
        id: 4,
        title: "How To Write an different Application Letter (With Examples)",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet...",
        image: "/imgs/img-big1-404x257.png",
        categories: ["Events", "Job Tips"],
        author: "DreamJob",
        date: "2025",
        readTime: "2 mins to read",
        url: "#"
    },
    {
        id: 5,
        title: "15 Important Tips: How To Write Organized Resume",
        excerpt: "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
        image: "/imgs/img-big1-404x257.png",
        categories: ["Job Tips"],
        author: "DreamJob",
        date: "2025",
        readTime: "2 mins to read",
        url: "#"
    },
    {
        id: 6,
        title: "21 Job Interview Tips: How To Make a Great Impression",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet...",
        image: "/imgs/img-big1-404x257.png",
        categories: ["Events"],
        author: "DreamJob",
        date: "2025",
        readTime: "2 mins to read",
        url: "#"
    },
    {
        id: 7,
        title: "Email Examples: How To Respond to Employer Interview Requests",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet...",
        image: "/imgs/img-big1-404x257.png",
        categories: ["Events"],
        author: "DreamJob",
        date: "2025",
        readTime: "2 mins to read",
        url: "#"
    },
    {
        id: 8,
        title: "How To Write an Application Letter (With Examples)",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet...",
        image: "/imgs/img-big1-404x257.png",
        categories: ["Events"],
        author: "DreamJob",
        date: "2025",
        readTime: "2 mins to read",
        url: "#"
    }
]

export default function BlogSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([])
    const [slidesPerView, setSlidesPerView] = useState(3)
    const containerRef = useRef<HTMLDivElement>(null)
    console.log(visiblePosts);
    // Handle responsive slides per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1)
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2)
            } else {
                setSlidesPerView(3)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Update visible posts when currentSlide or slidesPerView changes
    useEffect(() => {
        const startIndex = currentSlide
        const endIndex = Math.min(startIndex + slidesPerView, blogPosts.length)
        setVisiblePosts(blogPosts.slice(startIndex, endIndex))
    }, [currentSlide, slidesPerView])

    const nextSlide = () => {
        if (currentSlide + slidesPerView < blogPosts.length) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">News and Blog</h2>
                    <p className="text-muted-foreground text-lg">
                        Get the latest news, updates and tips
                    </p>
                </div>

                <div className="relative" ref={containerRef}>
                    {/* Navigation buttons */}
                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
                        <button
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className="p-2 rounded-full bg-primary text-primary-foreground shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    </div>

                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                        <button
                            onClick={nextSlide}
                            disabled={currentSlide + slidesPerView >= blogPosts.length}
                            className="p-2 rounded-full bg-primary text-primary-foreground shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Carousel */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
                        >
                            {blogPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="w-full px-4"
                                    style={{ flex: `0 0 ${100 / slidesPerView}%` }}
                                >
                                    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                                        <div className="relative h-48 w-full">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="p-6 flex-grow flex flex-col">
                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {post.categories.map((category, index) => (
                                                    <Link
                                                        href="#"
                                                        key={index}
                                                        className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                                    >
                                                        {category}
                                                    </Link>
                                                ))}
                                            </div>

                                            <h3 className="text-xl font-bold mb-3 line-clamp-2">
                                                <Link href={post.url} className="hover:text-primary transition-colors">
                                                    {post.title}
                                                </Link>
                                            </h3>

                                            <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-2 overflow-hidden">
                                                        <User size={16} className="text-muted-foreground" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">{post.author}</p>
                                                        <p className="text-xs text-muted-foreground">{post.date}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center text-xs text-muted-foreground">
                                                    <Clock size={14} className="mr-1" />
                                                    {post.readTime}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                        Load More Posts
                    </Link>
                </div>
            </div>
        </section>
    )
}