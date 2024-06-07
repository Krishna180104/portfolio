import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
  const skills = [
    "JavaScript",
    "React",
    "Python - Data Analytics",
    "Node",
    "Express",
    "C++"
  ]
  return (
    <div>
        <SectionTitle title="About Me"/>
        <div className="flex w-full items-center sm:flex-col">
            <div className='h-[70vh] w-1/2 sm:w-full'>
            <dotlottie-player src="https://lottie.host/9a980d9d-a657-4d39-8cd0-71b57081dce9/Ir1IJeWlrH.json" background="transparent" speed="1"autoplay></dotlottie-player>
            </div>
            <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                <p className="text-white">
                I am a curious student with a strong interest in data science, artificial intelligence, and machine learning. As I build my foundation in data analysis and statistical methods, I enjoy uncovering patterns and insights from data. My goal is to develop skills in predictive modeling and data visualization to drive strategic decision-making
                </p>
                <p className="text-white">
                Fascinated by the potential of AI, I am exploring neural networks, deep learning, natural language processing, and computer vision. Committed to continuous learning and collaboration, I am eager to contribute to projects that challenge me and help me grow. Let’s connect and explore how we can turn data into valuable insights.
                </p>
            </div>
        </div>
        <div className='py-5'>
          <h1 className='text-emerald-600 text-xl '>
            Here are a few technologies I have been working on recently
          </h1>
          <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill,index)=>(
            <div className='border border-emerald-600 py-3 px-10'>
              <h1 className='text-emerald-600 '>{skill}</h1>
            </div>
          ))}
          </div>
        </div>
    </div>
  )
}

export default About