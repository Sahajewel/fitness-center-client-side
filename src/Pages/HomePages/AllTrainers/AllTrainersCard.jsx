import { FaFacebook, FaInstagram, FaTwitter, FaUser, FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AllTrainersCard({allTrainer}) {
    
    return (
        <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2">
            {/* Trainer Image */}
            <div className="relative overflow-hidden">
                <img
                    src={allTrainer.profileImage}
                    alt={allTrainer.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3 justify-center">
                        <a 
                            href={allTrainer.socialLinks?.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                        >
                            <FaFacebook />
                        </a>
                        <a 
                            href={allTrainer.socialLinks?.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                        >
                            <FaInstagram />
                        </a>
                        <a 
                            href={allTrainer.socialLinks?.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Trainer Info */}
            <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                    <FaUser className="text-blue-600 dark:text-blue-400" />
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white"> {allTrainer.name}</h2>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                    <FaClock className="text-purple-600 dark:text-purple-400" />
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {allTrainer.experience} years of experience
                    </p>
                </div>
                
                {/* Available Slots */}
                <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Available Slots:</h3>
                    <div className="flex flex-wrap gap-2">
                        {allTrainer.availableSlots?.slice(0, 3).map((slot, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800"
                            >
                                {slot}
                            </span>
                        ))}
                        {allTrainer.availableSlots?.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                                +{allTrainer.availableSlots.length - 3} more
                            </span>
                        )}
                    </div>
                </div>
                
                {/* Know More Button */}
                <Link to={`/trainer-details/${allTrainer._id}`}>
                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-semibold group-hover:gap-3">
                        View Details
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </div>
        </div>
    )
}
