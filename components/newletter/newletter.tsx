const NewsletterSection = () => {
    return (
        <section className=" py-16 bg-blue-500 rounded-2xl shadow-2xl ">
            <div className="  mx-auto px-4">
                <div className=" p-8">
                    <div className="flex flex-col items-center text-center">
                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl text-white font-bold  mb-6">
                            New Things Will Always Update Regularly
                        </h2>

                        {/* Newsletter Form */}
                        <form className="w-full max-w-md">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email here"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>

                        {/* Response Message */}
                        <div id="mc-response" className="mt-4 text-sm text-gray-600"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;