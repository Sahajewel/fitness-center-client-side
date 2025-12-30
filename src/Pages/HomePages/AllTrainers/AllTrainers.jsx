import React, { useContext } from 'react'
import UseAllTrainers from '../../../Hooks/UseAllTrainers'
import AllTrainersCard from './AllTrainersCard'
import { AuthContext } from '../../../Provider/AuthProvider';
import {Helmet} from "react-helmet"
import { FaUsers, FaSearch } from 'react-icons/fa';

export default function AllTrainers() {
    const [allTrainers] = UseAllTrainers();
    const {user} = useContext(AuthContext)
    const [searchTerm, setSearchTerm] = React.useState('');
    
    const filteredTrainers = allTrainers.filter(trainer =>
        trainer.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div className='w-11/12 mx-auto md:px-10 pt-28 mt-10 mb-20 pb-16'>
           <Helmet>
            <title>All Trainers | Tokyo Fitness</title>
           </Helmet>
           
           {/* Header Section */}
           <div className='text-center mb-12'>
               <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                   <FaUsers className="text-white text-3xl" />
               </div>
               <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4'>
                   Our Expert Trainers
               </h1>
               <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
                   Meet our team of certified fitness professionals dedicated to helping you achieve your goals
               </p>
               <div className="mt-6 flex items-center justify-center">
                   <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-semibold">
                       {allTrainers.length} {allTrainers.length === 1 ? 'Trainer' : 'Trainers'} Available
                   </span>
               </div>
           </div>

           {/* Search Bar */}
           <div className='mb-10 max-w-md mx-auto'>
               <div className="relative">
                   <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                   <input
                       type="text"
                       placeholder="Search trainers by name..."
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                   />
               </div>
           </div>

           {/* Trainers Grid */}
           {filteredTrainers.length > 0 ? (
               <div className='grid justify-center gap-8 p-4 items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                   {filteredTrainers.map((allTrainer) => (
                       <AllTrainersCard key={allTrainer._id} allTrainer={allTrainer}></AllTrainersCard>
                   ))}
               </div>
           ) : (
               <div className="text-center py-20">
                   <FaUsers className="text-6xl text-gray-400 mx-auto mb-4" />
                   <p className="text-xl text-gray-600 dark:text-gray-400">No trainers found matching your search.</p>
               </div>
           )}
        </div>
    )
}
