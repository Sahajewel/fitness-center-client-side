import React, { useContext, useEffect, useState } from 'react';
import logo from "../../assets/logo.jpg"
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { FaHome, FaUsers, FaBook, FaTachometerAlt, FaComments, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    // State to track whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { logout, user } = useContext(AuthContext);
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScrolled = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScrolled);
        return () => {
            window.removeEventListener("scroll", handleScrolled)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLogout = () => {
        logout()
            .then((result) => {
                console.log(result?.user)
            })
    }

    const navLinkClass = "text-lg font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800";
    const activeNavLinkClass = "text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30";

    return (
        <nav className={`p-4 top-0 left-0 shadow-lg fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl" : "bg-white dark:bg-gray-900 shadow-md"}`}>
            <div className="container mx-auto flex justify-between items-center">

                <div className="text-3xl font-semibold tracking-wide">
                    <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <img className='w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-md' src={logo} alt="Logo" />
                        <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tokyo Fitness</span>
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-2">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}
                    >
                        <FaHome /> Home
                    </NavLink>
                    {user && (
                        <NavLink
                            to="/all-trainers"
                            className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}
                        >
                            <FaUsers /> Trainers
                        </NavLink>
                    )}
                    <NavLink
                        to="/all-classes"
                        className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}
                    >
                        <FaBook /> Classes
                    </NavLink>
                    {user && (
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}
                        >
                            <FaTachometerAlt /> Dashboard
                        </NavLink>
                    )}
                    <NavLink
                        to="/community-forum"
                        className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}
                    >
                        <FaComments /> Community
                    </NavLink>
                    <DarkModeToggle></DarkModeToggle>
                </div>

                {/* Right side - Login/Register (Hidden on mobile) */}
                <div className="hidden md:flex items-center space-x-4">
                    {user && user ? (
                        <div className='flex items-center gap-3'>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                                <img className='w-10 h-10 rounded-full border-2 border-blue-500 object-cover' src={user?.photoURL} alt={user?.displayName || "User"} />
                                <span className="text-sm font-medium hidden lg:block">{user?.displayName || "User"}</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                            >
                                <FaSignOutAlt /> Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <NavLink
                                to="/login"
                                className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                            >
                                <FaSignInAlt /> Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                            >
                                <FaUserPlus /> Register
                            </NavLink>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <DarkModeToggle></DarkModeToggle>
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <FaTimes className="h-6 w-6" />
                        ) : (
                            <FaBars className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Show when 'isMenuOpen' is true */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-700 animate-slideDown">
                    <div className="flex flex-col p-4 space-y-2">
                        <NavLink
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}
                        >
                            <FaHome /> Home
                        </NavLink>
                        {user && (
                            <NavLink
                                to="/all-trainers"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}
                            >
                                <FaUsers /> All Trainers
                            </NavLink>
                        )}
                        <NavLink
                            to="/all-classes"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}
                        >
                            <FaBook /> All Classes
                        </NavLink>
                        {user && (
                            <NavLink
                                to="/dashboard"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}
                            >
                                <FaTachometerAlt /> Dashboard
                            </NavLink>
                        )}
                        <NavLink
                            to="/community-forum"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}
                        >
                            <FaComments /> Community
                        </NavLink>

                        {user && user ? (
                            <div className='flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700'>
                                <div className='flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800'>
                                    <img className='w-12 h-12 rounded-full border-2 border-blue-500 object-cover' src={user?.photoURL} alt={user?.displayName || "User"} />
                                    <div>
                                        <p className="font-semibold">{user?.displayName || "User"}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{user?.role || "Member"}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsMenuOpen(false);
                                    }}
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 font-medium w-full"
                                >
                                    <FaSignOutAlt /> Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <NavLink
                                    to="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium"
                                >
                                    <FaSignInAlt /> Login
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 font-medium"
                                >
                                    <FaUserPlus /> Register
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
