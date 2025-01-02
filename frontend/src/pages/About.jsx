import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.l1} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam, et iste nisi placeat eum autem illo, consectetur blanditiis incidunt sit harum ratione saepe! A modi incidunt tenetur pariatur consectetur facere recusandae odit iste dolore, laboriosam voluptate, similique temporibus sit eveniet alias veritatis ab debitis.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus pariatur, neque cum cumque sequi iure veritatis numquam assumenda asperiores culpa, id corporis dolore recusandae! Tempora quibusdam harum doloremque dolorem voluptas minima in, aut autem, libero amet ut eum rem laboriosam explicabo at dignissimos dicta facere?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias aperiam, eligendi dolorum corrupti vitae qui ea minus, repudiandae maiores natus veritatis voluptate fugiat officiis excepturi. Libero illo temporibus nulla nam possimus accusantium quisquam cum, distinctio deserunt aliquid?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, similique adipisci. Quibusdam ut tempora eius!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at maxime explicabo consequuntur aut omnis.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id, provident suscipit minima voluptas quibusdam.</p>
        </div>
      </div>

    </div>
  )
}

export default About
