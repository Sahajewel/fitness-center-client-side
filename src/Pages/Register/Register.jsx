import { useForm } from "react-hook-form"
import { Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaUser, FaEnvelope, FaLock, FaImage, FaPhone, FaMapMarkerAlt, FaUserPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export default function Register() {
    const { createUser, updateUserProfile, google } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(false);

    const handleGoogle = () => {
        setIsLoading(true);
        google()
            .then((result) => {
                console.log(result.user)
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    image: result?.user?.photoURL
                }
                axiosPublic.post("/users", userInfo)
                    .then((res) => {
                        console.log(res.data)
                    })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Signed Up with Google",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Sign Up Failed",
                    text: error.message
                });
            })
            .finally(() => setIsLoading(false));
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        setIsLoading(true);
        createUser(data.email, data.password)
            .then((result) => {
                console.log(result.user)
                updateUserProfile(data.name, data.photo, data.phoneNumber, data.address)
                    .then((result) => {
                        console.log(result)
                        const userProfile = {
                            name: data.name,
                            email: data.email,
                            image: data.photo,
                            phoneNumber: data.phoneNumber,
                            address: data.address,
                        }
                        axiosPublic.post("/users", userProfile)
                            .then((res) => {
                                console.log(res.data)
                                reset()
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Successfully Registered",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate(location?.state ? location.state : "/")
                            })
                            .catch((error) => {
                                Swal.fire({
                                    icon: "error",
                                    title: "Registration Failed",
                                    text: error.message
                                });
                            })
                    })
                    .catch((error) => {
                        console.log(error)
                        Swal.fire({
                            icon: "error",
                            title: "Profile Update Failed",
                            text: error.message
                        });
                    })
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Registration Failed",
                    text: error.message || "Failed to create account"
                });
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                            <FaUserPlus className="text-white text-2xl" />
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Create Account</h1>
                        <p className="text-gray-600 dark:text-gray-400">Join us and start your fitness journey today</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    <FaUser className="inline mr-2" /> Full Name
                                </Label>
                                <TextInput
                                    id="name"
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: {
                                            value: 2,
                                            message: "Name must be at least 2 characters"
                                        }
                                    })}
                                    type="text"
                                    placeholder="Enter your full name"
                                    className={`${errors.name ? "border-red-500" : ""}`}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="photo" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    <FaImage className="inline mr-2" /> Photo URL
                                </Label>
                                <TextInput
                                    id="photo"
                                    {...register("photo", {
                                        required: "Photo URL is required",
                                        pattern: {
                                            value: /^https?:\/\/.+/,
                                            message: "Please enter a valid URL"
                                        }
                                    })}
                                    type="text"
                                    placeholder="https://example.com/photo.jpg"
                                    className={`${errors.photo ? "border-red-500" : ""}`}
                                />
                                {errors.photo && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.photo.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    <FaEnvelope className="inline mr-2" /> Email Address
                                </Label>
                                <TextInput
                                    id="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`${errors.email ? "border-red-500" : ""}`}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="password" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    <FaLock className="inline mr-2" /> Password
                                </Label>
                                <TextInput
                                    id="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    })}
                                    placeholder="Enter your password"
                                    type="password"
                                    className={`${errors.password ? "border-red-500" : ""}`}
                                />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="phoneNumber" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    <FaPhone className="inline mr-2" /> Phone Number
                                </Label>
                                <TextInput
                                    id="phoneNumber"
                                    type="text"
                                    {...register("phoneNumber", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                                            message: "Please enter a valid phone number"
                                        }
                                    })}
                                    placeholder="Enter your phone number"
                                    className={`${errors.phoneNumber ? "border-red-500" : ""}`}
                                />
                                {errors.phoneNumber && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phoneNumber.message}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="address" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    <FaMapMarkerAlt className="inline mr-2" /> Address
                                </Label>
                                <TextInput
                                    id="address"
                                    type="text"
                                    {...register("address", {
                                        required: "Address is required",
                                        minLength: {
                                            value: 5,
                                            message: "Address must be at least 5 characters"
                                        }
                                    })}
                                    placeholder="Enter your address"
                                    className={`${errors.address ? "border-red-500" : ""}`}
                                />
                                {errors.address && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.address.message}</p>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    <FaUserPlus /> Create Account
                                </>
                            )}
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <button
                            onClick={handleGoogle}
                            type="button"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FaGoogle className="text-xl" /> Sign up with Google
                        </button>

                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                            >
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
