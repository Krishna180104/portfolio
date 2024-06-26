import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Contact() {
  const user = {
    name:"Krishna Jadhav",
    email:"kj317246@gmail.com",
    age:"20",
    gender:"Male",
    mobile:"8623071778",
    country:"INDIA"
  }
  return (
    <div>
      <SectionTitle title = "Say Hello"/>
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1 ">
        <h1 className='text-emerald-600 text-md'>{"{"}</h1>
        {
          Object.keys(user).map((key)=>(
            <h1 className='ml-5 text-md'>
              <span className='text-emerald-600'>{key}</span> <span className='text-emerald-600'>:</span> <span className='text-emerald-600'>{user[key]}</span>
            </h1>
          ))
        }
        <h1 className='text-emerald-600 text-md'>{"}"}</h1>
        </div>

        <div className='h-[400px]'>
        <dotlottie-player src="https://lottie.host/b90c06a9-073b-4533-9b58-bac7676423b8/rATJV0B70A.json" background="transparent" speed="1" autoplay></dotlottie-player>
        </div>
      </div>
    </div>
  )
}

export default Contact