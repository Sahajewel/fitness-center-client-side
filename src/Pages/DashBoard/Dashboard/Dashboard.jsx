import React, { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthProvider'
import UseAdmin from '../../../Hooks/UseAdmin';
import UseTrainer from '../../../Hooks/UseTrainer';
import DarkModeToggle from '../../../Components/DarkModeToggle/DarkModeToggle';
import {
    FaHome,
    FaUser,
    FaUsers,
    FaUserCheck,
    FaBook,
    FaComments,
    FaChartBar,
    FaCalendarAlt,
    FaHistory,
    FaTachometerAlt
} from 'react-icons/fa';

export default function Dashboard() {
    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin();
    const [isTrainer] = UseTrainer();

    const baseNavLinkClass = "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm";
    const activeNavLinkClass = "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg transform scale-105";
    const inactiveNavLinkClass = "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:translate-x-1";

    let content;
    if (isAdmin) {
        content = (
            <div className='flex flex-col gap-3 py-8 px-6'>
                <div className="mb-6 px-4">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Admin Dashboard</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Manage your fitness center</p>
                </div>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/all-newsletter-subscriber"
                >
                    <FaUsers className="text-lg" /> Newsletter Subscribers
                </NavLink>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/profile"
                >
                    <FaUser className="text-lg" /> Profile
                </NavLink>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/all-trainers"
                >
                    <FaUsers className="text-lg" /> All Trainers
                </NavLink>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/applied-trainers"
                >
                    <FaUserCheck className="text-lg" /> Applied Trainers
                </NavLink>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/add-a-new-class"
                >
                    <FaBook className="text-lg" /> Add New Class
                </NavLink>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/add-new-forum"
                >
                    <FaComments className="text-lg" /> Add New Forum
                </NavLink>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/balance"
                >
                    <FaChartBar className="text-lg" /> Overview
                </NavLink>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <NavLink
                        className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                        to="/"
                    >
                        <FaHome className="text-lg" /> Home
                    </NavLink>
                    <div className="mt-4 px-4">
                        <DarkModeToggle></DarkModeToggle>
                    </div>
                </div>
            </div>
        )
    }
    else if (isTrainer) {
        content = (
            <div className='flex flex-col gap-3 py-8 px-6'>
                <div className="mb-6 px-4">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Trainer Dashboard</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Manage your schedule</p>
                </div>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/manage-slot"
                >
                    <FaCalendarAlt className="text-lg" /> Manage Slot
                </NavLink>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/add-new-forum"
                >
                    <FaComments className="text-lg" /> Add New Forum
                </NavLink>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <NavLink
                        className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                        to="/"
                    >
                        <FaHome className="text-lg" /> Home
                    </NavLink>
                    <div className="mt-4 px-4">
                        <DarkModeToggle></DarkModeToggle>
                    </div>
                </div>
            </div>
        )
    }
    else {
        content = (
            <div className='flex flex-col gap-3 py-8 px-6'>
                <div className="mb-6 px-4">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">User Dashboard</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Track your fitness journey</p>
                </div>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/activity-log"
                >
                    <FaHistory className="text-lg" /> Activity Log
                </NavLink>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/profile"
                >
                    <FaUser className="text-lg" /> Profile
                </NavLink>
                <NavLink
                    className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                    to="/dashboard/booked-trainer"
                >
                    <FaCalendarAlt className="text-lg" /> Booked Trainer
                </NavLink>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <NavLink
                        className={({ isActive }) => `${baseNavLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}
                        to="/"
                    >
                        <FaHome className="text-lg" /> Home
                    </NavLink>
                    <div className="mt-4 px-4">
                        <DarkModeToggle></DarkModeToggle>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen'>
            <div className='mx-auto md:flex'>
                <div className='md:w-80 md:min-h-screen bg-white dark:bg-gray-900 shadow-xl border-r border-gray-200 dark:border-gray-700 sticky top-0'>
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <FaTachometerAlt className="text-white" />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-gray-800 dark:text-white">Dashboard</h1>
                                {user && (
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{user.email}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    {content}
                </div>
                <div className='p-6 md:p-10 w-full bg-transparent'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}


