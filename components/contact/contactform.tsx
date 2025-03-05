import Image from "next/image";

export default function ContactForm() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Form Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-8">
                            The right move at the right time saves your investment. Live the
                            dream of expanding your business.
                        </p>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-3 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Company (optional)"
                                    className="w-full p-3 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full p-3 border border-gray-300 rounded"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="w-full p-3 border border-gray-300 rounded"
                                />
                            </div>
                            <textarea
                                rows={5}
                                placeholder="Tell us about yourself"
                                className="w-full p-3 border border-gray-300 rounded"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-primary text-white px-6 py-3 rounded"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div>
                        <Image
                            src="/imgs/contact-image.png"
                            alt="Contact"
                            className=" md:*:ml-30 "
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}