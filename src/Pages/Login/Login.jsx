import { useForm } from "react-hook-form"
import { Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock, FaUserShield, FaUserTie, FaUser, FaSignInAlt } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Login() {
    const { signIn, google, user } = useContext(AuthContext);
    const [emailRole, setEmailRole] = useState("");
    const [passwordRole, setPasswordRole] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const fillCredentiasls = (role) => {
        if (role === "admin") {
            setEmailRole("jewelsaha@gmail.com");
            setPasswordRole("123456");
        } else if (role === "trainer") {
            setEmailRole("mom@gmail.com");
            setPasswordRole("123456");
        } else {
            setEmailRole("pavel55@gmail.com");
            setPasswordRole("123456");
        }
    };
    
    useEffect(() => {
        if (user?.role === "admin") {
            setEmailRole("jewelsaha@gmail.com");
            setPasswordRole("123456")
        } else if (user?.role === "trainer") {
            setEmailRole("mom@gmail.com");
            setPasswordRole("123456")
        } else  {
            setEmailRole("pavel55@gmail.com")
            setPasswordRole("123456")
        }
    }, [user]);
     
    const navigate = useNavigate();
    const location = useLocation()
    
    const handleGoogle = () => {
        setIsLoading(true);
        google()
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Logged In with Google",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
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
        signIn(data.email, data.password)
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Logged In",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message || "Invalid email or password"
                });
            })
            .finally(() => {
                setIsLoading(false);
                reset()
            });
    }
    
    useEffect(() => {
        reset({
            email: emailRole,
            password: passwordRole
        });
    }, [emailRole, passwordRole, reset]);
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
            <div className="max-w-md mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                            <FaSignInAlt className="text-white text-2xl" />
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Welcome Back</h1>
                        <p className="text-gray-600 dark:text-gray-400">Sign in to your account to continue</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                                value={emailRole}
                                onChange={(e) => setEmailRole(e.target.value)}
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
                                value={passwordRole}
                                onChange={(e) => setPasswordRole(e.target.value)}
                                className={`${errors.password ? "border-red-500" : ""}`}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <button
                                onClick={() => fillCredentiasls("admin")}
                                type="button"
                                className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
                            >
                                <FaUserShield /> Admin
                            </button>
                            <button
                                onClick={() => fillCredentiasls("trainer")}
                                type="button"
                                className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
                            >
                                <FaUserTie /> Trainer
                            </button>
                            <button
                                onClick={() => fillCredentiasls("user")}
                                type="button"
                                className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
                            >
                                <FaUser /> User
                            </button>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Logging in...
                                </>
                            ) : (
                                <>
                                    <FaSignInAlt /> Login
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
                            className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FaGoogle className="text-xl" /> Sign in with Google
                        </button>

                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                            Don't have an account?{" "}
                            <Link 
                                to="/register" 
                                className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                            >
                                Register here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
