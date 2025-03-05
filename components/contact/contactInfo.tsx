import Image from "next/image";
import Link from "next/link";

export default function ContactInfo() {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Contact Info */}
                    <div>
                        <Link href="/">
                            <Image src="/imgs/Dreamjob3.png" alt="JobBox" width={32} height={4} className="w-32 mb-4" />
                        </Link>
                        <p className="text-sm text-gray-600 mb-2">
                            205 North Michigan Avenue, Chicago, 60601, USA
                        </p>
                        <p className="text-sm text-gray-600 mb-2">Phone: (123) 456-7890</p>
                        <p className="text-sm text-gray-600 mb-2">Email: contact@jobbox.com</p>
                        <a href="#" className="text-brand-2 uppercase text-sm">
                            View Map
                        </a>
                    </div>

                    {/* Additional Locations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h6 className="font-bold mb-2">London</h6>
                            <p className="text-sm text-gray-600">
                                2118 Thornridge Cir. Syracuse, Connecticut 35624
                            </p>
                        </div>
                        <div>
                            <h6 className="font-bold mb-2">Chicago</h6>
                            <p className="text-sm text-gray-600">
                                3891 Ranchview Dr. Richardson, California 62639
                            </p>
                        </div>
                        <div>
                            <h6 className="font-bold mb-2">New York</h6>
                            <p className="text-sm text-gray-600">
                                4517 Washington Ave. Manchester, Kentucky 39495
                            </p>
                        </div>
                        <div>
                            <h6 className="font-bold mb-2">San Francisco</h6>
                            <p className="text-sm text-gray-600">
                                4140 Parker Rd. Allentown, New Mexico 31134
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}