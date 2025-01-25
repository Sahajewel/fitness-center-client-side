import React from 'react'
import Carousel from './Slider/Slider'
import Featured from './Featured/Featured'
import AboutUs from './AboutUs/AboutUs'
import NewsLetter from './NewsLetter/NewsLetter'
import CommunityForum from '../../DashBoard/AddNewForum/CommunityForum'
import Review from '../../DashBoard/Dashboard/Review/Review'
import TeamSection from '../TeamSection/TeamSection'


export default function Home() {
  return (
    <div className='w-10/12 mx-auto'>
      <Carousel></Carousel>
      <Featured></Featured>
      <AboutUs></AboutUs>
      <Review></Review>
      <CommunityForum></CommunityForum>
      <NewsLetter></NewsLetter>
      <TeamSection></TeamSection>
    </div>
  )
}
