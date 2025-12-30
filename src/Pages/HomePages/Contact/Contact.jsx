import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Contact() {
    const naviaget = useNavigate()
    const handlesub = (e)=>{
        e.preventDefault();
        
      const name = e.target.name.value;
      const email = e.target.email.value;
      const message = e.target.message.value;
      console.log({name, email, message})
         Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Message has been sent",
                    showConfirmButton: false,
                    timer: 1500
                  });
naviaget("/")

    }
    return (
        <div>
            <section className="bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-8">
                        Have questions or need help? We're here for you! Reach out to us using the form below or through the provided contact details.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                            <form onSubmit={handlesub} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="Write your message"
                                        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition duration-300 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col justify-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-6 border border-gray-200 dark:border-gray-700">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact Details</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Phone:</strong> +123-456-7890
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Email:</strong> support@fitnesscenter.com
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Address:</strong> 123 Fitness Street, Healthy City, HC 45678
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Follow Us</h3>
                                <div className="flex space-x-4 justify-center">
                                    <a
                                        href="https://facebook.com"
                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition duration-300"
                                        aria-label="Facebook"
                                    >
                                        Facebook
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        className="text-blue-400 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-200 transition duration-300"
                                        aria-label="Twitter"
                                    >
                                        Twitter
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition duration-300"
                                        aria-label="Instagram"
                                    >
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
