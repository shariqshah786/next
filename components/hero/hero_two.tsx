import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link"


export default function HeroTwo() {
    return (<>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14'>

            <div className="flex justify-center">
                <Image
                    src="/imgs/banner3-Card.png"
                    alt="Hero banner"
                    width={450}
                    height={380}
                    className="mt-1"
                /></div>
            <div className="w-full px-10 md:mt-15 ">
                <div className="">
                    <h2 className="font-bold text-2xl text-gray-500">Millon Of Jobs.</h2>
                    <h2 className='font-bold text-3xl'>Find The Right <span className='text-blue-500'>One</span> For You</h2>
                    <p className="text-lg mt-2">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
                </div>
                <div className=" mt-3 rounded-lg justify-start p-6 flex flex-col md:flex-row gap-4">

                    <div className="">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-800 px-8 text-lg">
                            <Link href={'/findjobs'}>Search Jobs</Link>
                        </Button>
                        <Button size="lg" className="ml-2 px-10 text-lg bg-link text-black underline">
                            Learn More
                        </Button>
                    </div>
                </div>

            </div>


        </div>
    </>)
}