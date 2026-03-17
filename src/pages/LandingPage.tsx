import CampusGallery from '@widgets/Home/CampusGallery'
import Carousel from '@widgets/Home/Carousel'
import CounterFrame from '@widgets/Home/CounterFrame'
import News from '@widgets/Home/News'
import OurCourses from '@widgets/Home/OurCourses'
import Philosophy from '@widgets/Home/Philosophy'
import Welcome from '@widgets/Home/Welcome'
import React from 'react'

export default function LandingPage() {
  return (
    <main className='w-full'>
      <News/>
      <Carousel/>
      <Welcome/>
      <Philosophy/>
      <OurCourses/>
      <CounterFrame/>
      <CampusGallery/>
    </main>
  )
}
