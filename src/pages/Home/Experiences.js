import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import Experience from "../../resources/Experience.js";
function Experiences() {
    const [selectedItemIndex,setselectedItemIndex] = React.useState(0);
  return (
    <div>
        <SectionTitle title="Experiences"/>
        <div className="flex py-10 gap-20 sm:flex-col">
            <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-scroll sm:w-full'>
                {Experience.map((experience,index)=>(
                    <div onClick={()=>{
                        setselectedItemIndex(index);
                    }} className='cursor-pointer'>
                        <h1 className={`px-5 text-xl ${selectedItemIndex ===  index ? 'text-emerald-600 border-emerald-600 border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-full':'text-white'}` }>{experience.period}</h1>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-secondary text-xl'>{Experience[selectedItemIndex].title}</h1>
                <h1 className='text-emerald-600 text-xl'>{Experience[selectedItemIndex].company}</h1>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo iusto autem quas incidunt nobis natus quam! Optio quae voluptatibus debitis, accusamus nesciunt et eum modi! Aliquid porro mollitia numquam!
                </p>f 
            </div>
        </div>
    </div>
  )
}

export default Experiences