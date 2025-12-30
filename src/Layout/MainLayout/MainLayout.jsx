import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Foooter/Footer";


export default function MainLayout() {
    return (
        <div className="bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white min-h-screen flex flex-col">
            <div className="sticky top-0 z-50">
                <Navbar></Navbar>
            </div>
            <div className="flex-1 pt-20">
                <div className="w-11/12 mx-auto min-h-[calc(100vh-447.25px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="mt-auto">
                <Footer></Footer>
            </div>
        </div>
    )
}
