import BlogSection from "@/components/blogs/blogsection";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import HeroTwo from "@/components/hero/hero_two";
import Jobs from "@/components/job/jobs";
import { Navbar } from "@/components/navbar/navbar";


export default function Home() {
    return (
        <>
            <Navbar />

            <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="flex gap-8 row-start-2 justify-center">
                    <Hero />
                </main>
            </div>
            {/* jobs  */}
            <div className="">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Job of the day</h2>
                    <p >Search and connect with the right candidates faster</p>
                </div>
                <div className="">
                    <Jobs /></div>
            </div>
            {/* banner 2 herobanner two  */}
            <div className="">
                <HeroTwo />
            </div>
            <div className="">
                <BlogSection />
            </div>
            <Footer />

        </>
    )
}