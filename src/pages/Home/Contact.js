import React from 'react'
import SectionTitle from '../../components/SectionTitle'
function Contact() {
  return (
    <div>
        <SectionTitle title="Contact Info"/>
        <div className='flex w-full items-center sm:flex-col'>
            {/* <div className='h-[70vh] w-1/2 sm:w-full'>
            <dotlottie-player src="https://lottie.host/f57ad195-1ff5-457e-bcb0-a80596964b6b/3ef1dJNxOb.json" background="transparent" speed="1" autoplay></dotlottie-player>
            </div> */}
            <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                <p className='text-white'>Name: Krishna Jadhav</p>
                <p className='text-white'>Email: kj317246@gmail.com</p>
                <p className='text-white'>Contact No: 8623071778</p>
                <p className='text-white'>Linkedin: https://www.linkedin.com/in/krishna-jadhav-34312a257/</p>
            </div>

        </div>
    </div>
  )
}

export default Contact