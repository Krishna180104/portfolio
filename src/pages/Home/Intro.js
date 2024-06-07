import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white'>Hi, I am</h1>
        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Krishna  Jadhav</h1>
        <h1 className='text-6xl sm:text-3xl text-white font-semibold'>Computer Science enthusiast.</h1>
        <p className='text-white w-2/3'>I am a passionate computer science enthusiast with a keen interest in exploring the vast realms of technology and innovation. My journey in computer science has been driven by a curiosity to understand how things work and a desire to create solutions that make a difference. From coding complex algorithms to building intuitive applications, I am dedicated to honing my skills and contributing to the tech community.</p>
        <button className='border-2 border-emerald-600 text-emerald-600 px-10 py-3 rounded'>Get Started</button>
    </div>
    
  )
}

export default Intro