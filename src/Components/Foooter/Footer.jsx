import logo from "../../assets/logo.jpg"
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelopeOpen } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                {/* Grid for footer sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Logo and About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <img className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover" src={logo} alt="Tokyo Fitness Logo" />
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Tokyo Fitness
                            </h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            We offer expert guidance, tailored workout plans, and nutrition advice to help you achieve your goals. Join our community and transform your lifestyle today!
                        </p>
                        <div className="flex items-center gap-2 text-gray-400">
                            <FaMapMarkerAlt className="text-blue-400" />
                            <span className="text-sm">123 Fitness Street, Tokyo</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <FaPhone className="text-blue-400" />
                            <span className="text-sm">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <FaEnvelopeOpen className="text-blue-400" />
                            <span className="text-sm">info@tokyofitness.com</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></span>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                                >
                                    <FaHome className="group-hover:translate-x-1 transition-transform" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about-us"
                                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                                >
                                    <FaInfoCircle className="group-hover:translate-x-1 transition-transform" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/all-trainers"
                                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                                >
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    All Trainers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/all-classes"
                                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                                >
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    All Classes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                                >
                                    <FaEnvelope className="group-hover:translate-x-1 transition-transform" />
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></span>
                            Services
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                                    Personal Training
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                                    Group Classes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                                    Wellness Programs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                                    Nutrition Counseling
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                                    Online Coaching
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-red-500 rounded"></span>
                            Follow Us
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm">
                            Stay connected with us on social media for the latest updates, fitness tips, and community events.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="text-xl" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="text-xl" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            &copy; {new Date().getFullYear()} Tokyo Fitness Center. All Rights Reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
