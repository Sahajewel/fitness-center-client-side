import about from "../../../../assets/about.jpg"

const AboutUs = () => {
    return (
        <section className="py-12 md:px-10  bg-white text-black dark:bg-gray-900 dark:text-white shadow-2xl mt-32 mb-20">
             <h2 className="text-4xl underline font-bold mb-12 text-center text-gray-900 dark:text-white">About Us</h2>
            <div className="container mx-auto flex flex-col items-center lg:flex-row lg:space-x-12">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <img
                        src={about} 
                        alt="Fitness Center"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 text-center lg:text-left p-5 md:p-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Tokyo fitness center</h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                        Welcome to Tokyo Fitness Center, where your fitness journey begins! We are committed to helping you
                        achieve your fitness goals with state-of-the-art equipment, expert trainers, and a motivating community.
                        Whether you are looking to lose weight, build muscle, or just stay active, our center provides everything you
                        need to succeed.
                    </p>
                    <p className="text-xl text-gray-700 dark:text-gray-300">
                        Join us and experience a personalized approach to fitness that is designed to inspire and transform your
                        body and mind. Together, we will help you become the best version of yourself.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
