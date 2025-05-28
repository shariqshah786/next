import Image from 'next/image';

const HiringSection = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            {/* Left Background Image */}
            <div className="absolute top-0 left-0 w-1/3 h-full z-0 opacity-0 md:opacity-100 ">
                <Image
                    src="imgs/bg-left-hiring.svg" // Path to your SVG file
                    alt="Left Background"
                    layout="fill"

                    className="opacity-50 object-contain" // Adjust opacity as needed
                />
            </div>

            {/* Right Background Image */}
            <div className="absolute top-0 right-0 w-1/3 h-full z-0 opacity-0 md:opacity-100 ">
                <Image
                    src="imgs/bg-right-hiring.svg" // Path to your SVG file
                    alt="Right Background"
                    layout="fill"

                    className="opacity-50 object-contain" // Adjust opacity as needed
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className=" p-8 rounded-lg text-center">
                    {/* Text: We Are Hiring */}
                    <div className="text-4xl font-bold mb-4">
                        <span className="text-gray-800">We Are</span>
                        <span className="text-primary ml-2">Hiring</span>
                    </div>

                    {/* Subtext */}
                    <div className="text-lg text-gray-600 mb-8">
                        Let’s Work Together & Explore Opportunities
                    </div>

                    {/* Apply Now Button */}
                    <div>
                        <a
                            href="/findjobs"
                            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                        >
                            Apply Now
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiringSection;