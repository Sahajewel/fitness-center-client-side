import ser1 from "../../assets/ser-1.webp"
import ser2 from "../../assets/ser-2.webp"
import ser3 from "../../assets/ser-3.webp"
import { FaDumbbell, FaUsers, FaHeartbeat } from "react-icons/fa";

const ServicesSection = () => {
    const services = [
        {
            icon: <FaDumbbell className="text-4xl" />,
            image: ser1,
            title: "Personal Training",
            description: "Our expert trainers will design personalized fitness plans to help you reach your full potential.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FaUsers className="text-4xl" />,
            image: ser2,
            title: "Group Classes",
            description: "Join our energetic group classes and enjoy working out with others in a motivating and fun environment.",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: <FaHeartbeat className="text-4xl" />,
            image: ser3,
            title: "Wellness Programs",
            description: "Our wellness programs focus on overall health, from nutrition advice to stress management and recovery.",
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-black dark:text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Our Fitness Services
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Explore our wide range of services designed to help you achieve your fitness goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                                
                                <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 transition-all duration-300">
                                    <span>Learn More</span>
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
