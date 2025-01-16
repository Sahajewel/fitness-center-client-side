import { Link } from "react-router-dom"
import become from "../../assets/become.webp"

export default function BeATrainer() {
    return (
        <div>
            <h1 className='text-center py-10 text-white text-4xl font-bold underline mt-10'>Be A Trainer</h1>
            <div className="md:flex justify-center items-center md:gap-20 py-20">
                <div>
                    <img className="w-[400px]" src={become} alt="" />
                </div>

                <div className="mt-8 bg-blue-500 text-white p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-semibold">Want to Become a Trainer?</h3>
                    <p className="mt-4 text-lg">If you're passionate about fitness and want to share your knowledge with others, become a part of our team of trainers!</p>
                    <Link
                        to="/become-a-trainer"
                        className="mt-6 inline-block bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition hover:bg-yellow-400"
                    >
                        Become a Trainer
                    </Link>
                </div>

            </div>
        </div>
    )
}
