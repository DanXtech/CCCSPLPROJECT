import React from 'react'
import hierarchyImg from "../assets/hierarchy1.jpg"
const AboutHierarchy = () => {
    return (
        // <div className='py-24'>
        //     <h1 className="font-semibold uppercase text-2xl text-center pb-7 sm:pt-6 sm:pb-5  lg:pb-16   lg:text-3xl  text-primary"> Chrurch  Hierarchy </h1>
        //     <div className='flex items-center justify-center  lg:border'>
        //         <img className=' sm:px-2 sm:pb-16 sm:w-full lg:w-[900px]  rounded-full' src={hierarchyImg} alt="" />
        //     </div>
        // </div>
        <div className='pb-12 lg:pb-0'>
            <h1 className="font-semibold uppercase text-2xl text-center pb-7 sm:pt-6 sm:pb-5  lg:pb-16   lg:text-3xl  text-black shadow "> Chrurch  Hierarchy </h1>
            <div className='flex items-center justify-center  lg:border lg:animate-pulse group-hover:scale-105 duration-200'>
                <img className=' sm:px-2 lg:pt-10 sm:pb-16 sm:w-full lg:w-[900px]  rounded-full' src={hierarchyImg} alt="" />
            </div>
        </div>
    )
}

export default AboutHierarchy