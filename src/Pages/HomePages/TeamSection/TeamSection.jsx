import React from 'react'
import UseAllTrainers from '../../../Hooks/UseAllTrainers'
import { Link, useLoaderData } from 'react-router-dom';

export default function TeamSection() {
  const [allTrainers] = UseAllTrainers();

  console.log(allTrainers)
  return (
    <section className="py-12 shadow-2xl md:px-10 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Meet Our Trainers</h2>
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTrainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={trainer.profileImage}
                alt={trainer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {trainer.name}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{trainer.background}</p>
                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Areas of Expertise:
                </h4>
                <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
                  {trainer.expertise.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>

              </div>
              <div className='flex mx-auto justify-center mb-3'>
                <Link className='mb-3 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 duration-300 transition p-3 rounded-lg shadow-md hover:shadow-lg' to={`/single-trainer/${trainer._id}`}>View More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
