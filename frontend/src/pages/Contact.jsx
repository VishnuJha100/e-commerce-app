import React from 'react'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-evenly md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[400px]' src={assets.contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'> 
          <p className='font-semibold text-xl text-gray-600'>Our Office</p>
          <p className='text-gray-500'>54709 Lorem ipsum <br/>Lorem ipsum dolor</p>
          <p className='text-gray-500'>Tel: (+1) 2345 6789 <br/> Email: admin@techbox.com</p>
          <p className='text-gray-500'>Careers at TechBox</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetter />

    </div>
  )
}

export default Contact
