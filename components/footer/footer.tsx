import Image from 'next/image';

const Footer = () => {
    return (
        <footer className=" footer pt-10">
            <div className="container mx-auto px-4">
                <div className="row justify-center flex flex-wrap ">
                    {/* Footer Column 1 */}<div className="flex w-full md:justify-around ">
                        <div className="footer-col-1 md:w-1/4 lg:w-1/4 mb-4">
                            <div id="block-11" className="widget widget_block widget_media_image">
                                <figure className="wp-block-image size-full text-start">
                                    <Image
                                        src="/imgs/Dreamjob3.png"
                                        alt="JobBox Logo"
                                        width={150}
                                        height={50}
                                        className=""
                                    />
                                </figure>
                            </div>
                            <div id="block-12" className="widget widget_block widget_text">
                                <p className="text-sm mt-5 mb-5">
                                    Dreamjob choose your dream Job Now
                                </p>
                            </div>
                            <div id="block-13" className="widget widget_block">
                                <ul className="wp-block-social-links flex space-x-4">
                                    <li className="wp-social-link wp-social-link-facebook">
                                        <a href="https://#" className="wp-block-social-link-anchor">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="wp-social-link wp-social-link-twitter">
                                        <a href="https://#" className="wp-block-social-link-anchor">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="wp-social-link wp-social-link-linkedin">
                                        <a href="https://#" className="wp-block-social-link-anchor">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer Column 2 */}
                        <div className=" w-full md:w-1/6 lg:w-1/6 mb-8">
                            <div id="nav_menu-1" className="widget widget_nav_menu">
                                <h6 className="mb-5 font-semibold">Resources</h6>
                                <nav className="menu-resources-container" aria-label="Resources">
                                    <ul id="menu-resources" className="menu">
                                        <li className="menu-item">
                                            <a href="https://jthemes.net/themes/wp/jobbox/index.php/about-us/">About Us</a>
                                        </li>
                                        {/* <li className="menu-item">
                                            <a href="https://jthemes.net/themes/wp/jobbox/index.php/candidates/">Candidates</a>
                                        </li> */}
                                        <li className="menu-item">
                                            <a href="https://jthemes.net/themes/wp/jobbox/index.php/contact-us/">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* Footer Column 3 */}
                        {/* <div className="footer-col-3 w-full md:w-1/6 lg:w-1/6 mb-8">
                            <div id="nav_menu-2" className="widget widget_nav_menu">
                                <h6 className="mb-5 font-semibold">Community</h6>
                                <nav className="menu-community-container" aria-label="Community">
                                    <ul id="menu-community" className="menu">
                                        <li className="menu-item">
                                            <a href="#">Feature</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Pricing</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Credit</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">FAQ</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div> */}

                        {/* Footer Column 4 */}
                        {/* <div className="footer-col-4 w-full md:w-1/6 lg:w-1/6 mb-8">
                            <div id="nav_menu-3" className="widget widget_nav_menu">
                                <h6 className="mb-5 font-semibold">Quick links</h6>
                                <nav className="menu-quick-links-container" aria-label="Quick links">
                                    <ul id="menu-quick-links" className="menu">
                                        <li className="menu-item">
                                            <a href="#">iOS</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Android</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Microsoft</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Desktop</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div> */}

                        {/* Footer Column 5 */}
                        <div className="footer-col-5 w-full md:w-1/6 lg:w-1/6 mb-8">
                            <div id="nav_menu-4" className="widget widget_nav_menu">
                                <h6 className="mb-5 font-semibold">More</h6>
                                <nav className="menu-legal-menu-container" aria-label="More">
                                    <ul id="menu-legal-menu" className="menu">
                                        <li className="menu-item">
                                            <a href="#">Privacy</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Helps</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Terms</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">FAQ</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* Footer Column 6 */}

                    </div></div>

                {/* Footer Bottom */}
                <div className="footer-bottom  border-t border-gray-200 pt-6">
                    <div className="row flex flex-wrap">
                        <div className="col-md-6 w-full md:w-1/2">
                            <span className="text-xs text-gray-600">
                                Copyright © 2025. DreamJob all right reserved
                            </span>
                        </div>
                        <div className="col-md-6 w-full md:w-1/2 text-right">
                            <div className="footer-social flex space-x-4 justify-end">
                                <a href="#" className="text-xs text-gray-600">Privacy Policy</a>
                                <a href="#" className="text-xs text-gray-600 ml-4">Terms & Conditions</a>
                                <a href="#" className="text-xs text-gray-600 ml-4">Security</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;