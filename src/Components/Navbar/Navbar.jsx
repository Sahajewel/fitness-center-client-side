import React, { useState } from 'react';
import logo from "../../assets/logo.jpg"
const Navbar = () => {
    // State to track whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left side - Logo */}
                <div className="text-white text-3xl font-semibold tracking-wide hover:text-gray-200 transition duration-300">
                    <a href="/"><img className='w-32 rounded-full h-32' src={logo} alt="This is logo" /></a>
                </div>

                {/* Middle - Menu (Hidden on mobile) */}
                <div className="hidden md:flex space-x-8">
                    <a href="/" className="text-white text-lg hover:text-yellow-300 transition duration-300">Home</a>
                    <a href="/about" className="text-white text-lg hover:text-yellow-300 transition duration-300">About</a>
                    <a href="/services" className="text-white text-lg hover:text-yellow-300 transition duration-300">Services</a>
                    <a href="/contact" className="text-white text-lg hover:text-yellow-300 transition duration-300">Contact</a>
                </div>

                {/* Right side - Login/Register (Hidden on mobile) */}
                <div className="hidden md:flex space-x-6">
                    <a href="/login" className="text-white text-lg hover:bg-yellow-400 hover:text-white py-2 px-4 rounded-full transition duration-300">Login</a>
                    <a href="/register" className="text-white text-lg bg-yellow-500 hover:bg-yellow-600 hover:text-white py-2 px-4 rounded-full transition duration-300">Register</a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Show when 'isMenuOpen' is true */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 via-pink-800 to-red-800 m-10 p-6 space-y-4">
                    <a href="/" className="text-white text-lg hover:text-yellow-300 transition duration-300">Home</a>
                    <a href="/about" className="text-white text-lg hover:text-yellow-300 transition duration-300">About</a>
                    <a href="/services" className="text-white text-lg hover:text-yellow-300 transition duration-300">Services</a>
                    <a href="/contact" className="text-white text-lg hover:text-yellow-300 transition duration-300">Contact</a>
                    <a href="/login" className="text-white text-lg hover:bg-yellow-400 hover:text-white py-2 px-4 rounded-full transition duration-300">Login</a>
                    <a href="/register" className="text-white text-lg bg-yellow-500 hover:bg-yellow-600 hover:text-white py-2 px-4 rounded-full transition duration-300">Register</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
