import { Card } from "flowbite-react";
import { Link, useLoaderData } from 'react-router-dom'
import BeATrainer from "../../BeATrainer/BeATrainer";
export default function TrainerDetails() {
    const loader = useLoaderData()
    console.log(loader)
    return (

        <div>
            <h1 className='text-center py-10 text-white text-4xl font-bold'>Trainer Details</h1>
            <div className='md:flex justify-center items-center gap-10 p-10'>
                <div >

                    <h1 className='text-center py-10 text-white text-2xl font-bold'>Trainer Info</h1>
                    <div>
                        <Card
                            className="max-w-sm"
                            imgSrc={loader.profileImage} imgAlt={loader.name}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Trainer: {loader.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {loader.details}
                            </p>
                            <p className="text-bold"><span className="font-bold">Expertise:</span> {loader.expertise.map((exper, ind) => <li key={ind}>
                                {exper}
                            </li>)}</p>
                            <p ><span className="font-bold">Background: </span>  {loader.background}</p>
                            <p><span className="font-bold">Qualifications:</span> {loader.qualifications.map((quali, ind) => <li key={ind}>{quali}</li>)}</p>
                        </Card>
                    </div>

                </div>
                <div className="md:ml-20">
                    <h1 className='text-center py-10 text-white text-2xl font-bold'>Available Slots</h1>
                    <div className="flex flex-col gap-2 mt-2 ">
                        {loader.availableSlots.map((slot, index) => (
                            <Link key={index} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-blue-500 text-sm text-white" to={`/trainer-booked/${loader._id}/${slot}`}>  <button


                            >
                                {slot}
                            </button></Link>
                        ))}
                    </div>
                </div>
            </div >
            <BeATrainer></BeATrainer>
        </div>


    )
}
