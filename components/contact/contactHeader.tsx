import Link from "next/link";
export default function ContactHeader() {
    return (
        <section className=" bg-cover bg-center bg-linear-to-bl from-gray-600 to-black" style={{ backgroundImage: "url('/imgs/img-contact.png')", }}>
            <div className="container mx-auto py-10">
                <div className="grid mx-2 grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-white  ">Contact Us</h2>
                        <p className="text-lg text-white ">
                            Get the latest news, updates, and tips
                        </p>
                    </div>
                    <div className="text-right  ">
                        <ul className="breadcrumbs list-none ">
                            <li>
                                <Link href="/home" className="text-gray-600 hover:text-brand-2">
                                    Home
                                </Link>
                            </li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-600">Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}