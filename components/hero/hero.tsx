import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Briefcase, MapPin, Search } from 'lucide-react'
import { CategorySection } from "../category/category"

import HiringSection from "../hiring/hiringsection"

const Hero = () => {
    return (
        <div className="">
            <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14'>
                <div className="md:mt-15">
                    <div className="">
                        <h2 className='font-bold text-5xl'>The <span className='text-blue-500'>Easiest Way</span> To Get Your New Job</h2>
                        <p className="text-lg">Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
                    </div>
                    <div className="bg-card mt-3 rounded-lg justify-center shadow-lg p-6 flex flex-col md:flex-row gap-4">
                        <div className="flex-1 flex items-center gap-2">
                            <Search className="text-muted-foreground" />
                            <Input placeholder="Job title or keywords" className="border-0 text-lg" />
                        </div>
                        <div className=" ">
                            <Select >
                                <SelectTrigger className="w-[180px]">
                                    <Briefcase className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="Job Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="full-time">Full-time</SelectItem>
                                    <SelectItem value="part-time">Part-time</SelectItem>
                                    <SelectItem value="remote">Remote</SelectItem>
                                </SelectContent>
                            </Select></div>
                        <div className="">
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
                            </Select></div>

                        <Button size="lg" className="px-8 text-lg">
                            Search
                        </Button>
                    </div>


                </div>

                <div className="flex justify-center">
                    <Image
                        src="/imgs/hero-image.png"
                        alt="Hero banner"
                        width={450}
                        height={380}
                        className="mt-1"
                    /></div>
            </div>
            <div className="mt-10"><CategorySection /></div>

            {/* small banner for apply now  */}
            <div className="mt-10  ">
                <HiringSection />
            </div>
        </div>

    )
}

export default Hero
