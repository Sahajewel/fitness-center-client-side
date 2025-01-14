import { useForm } from "react-hook-form"
import { Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
export default function Register() {
    const {createUser, updateUserProfile, google} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const handleGoogle = ()=>{
        google()
        .then((result)=>{
            console.log(result.user)
            navigate(location?.state? location.state : "/")
        })
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then((result)=>{
            console.log(result.user)
            updateUserProfile(data.name, data.photo)
            .then((result)=>{
                console.log(result.user)
                navigate(location?.state? location.state : "/")
            })
            reset()
        })
    }
    return (
        <div className="pb-10">
            <h1 className="text-center pt-10 text-4xl text-white font-bold mb-5">Register</h1>
            <div className="flex justify-center items-center  ">
                <form  onSubmit={handleSubmit(onSubmit)} className="w-[300px] flex max-w-md flex-col gap-4">
                    <div >
                        <div className="mb-2 block text-white ">
                            <Label className="text-xl"  value="Your Name" />
                        </div>
                        <TextInput {...register("name" ,{required:true})} className="" type="text" placeholder="name" required />
                    </div>
                    <div >
                        <div className="mb-2 block text-white ">
                            <Label className="text-xl"  value="photo URL" />
                        </div>
                        <TextInput {...register("photo",{required:true})} className="" type="text" placeholder="photo url" required />
                    </div>
                    <div >
                        <div className="mb-2 block text-white ">
                            <Label className="text-xl"  value="Your email" />
                        </div>
                        <TextInput {...register("email" ,{required:true})} className="" type="email" placeholder="email" required />
                    </div>
                    <div>
                        <div className="mb-2 block text-white">
                            <Label className="text-xl"  value="Your password" />
                        </div>
                        <TextInput {...register("password" ,{required:true})} placeholder="password"  type="password" required />
                    </div>
                    <button className="bg-gray-400 p-3 rounded-xl text-white hover:bg-gray-300">Register</button>
                    <p className="bg-white p-2">If you already an account please <Link className="text-red-500" to="/login">Login</Link></p>
                    <button onClick={handleGoogle} className="flex justify-center items-center border p-2 "><span className="mr-4 text-white">Sign up google</span> <FaGoogle /></button>
                </form>
            </div>
        </div>
    )
}
