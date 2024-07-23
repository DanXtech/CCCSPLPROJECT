import React from 'react'
import logo from "../assets/ccc-logo.png";
const MoreInfo = () => {
    return (
        <div className='container  py-16 '>
            <div className='relative'>
                <div className='relative'>
                    <div className='flex items-center justify-center pt-10'>
                        <img
                            src={logo}
                            className="w-full lg:w-[400px] mx-auto  object-cover pb-4 sm:mt-5 "
                            alt=""
                        />

                    </div>
                    <div className='flex-col  text-center items-center justify-center'>
                        <span className='font-semibold uppercase pb-4 block text-black  animate-pulse group-hover:scale-105 duration-100'>We are the celestial church of christ student' parish, ladoke akintola university of technology ogromoso oyo state </span>
                        <span className='font-semibold uppercase pb-4 block  text-secondary-200  animate-pulse group-hover:scale-105 duration-200'>Come and worship with us God Bless you</span>
                        <span className='font-semibold uppercase pb-4 block   text-primary  animate-pulse group-hover:scale-105 duration-300'>The motto of the church is “THE PECULIAR PEOPLE” drawn from 1 Peter 2:9.</span>
                    </div>
                </div>

                <div className='absolute top-[20px] -left-0 hidden lg:block   w-[300px] h-[250px]'>
                    <img
                        src={logo}
                        className="w-full lg:w-[300px] pb-4 sm:mt-5  opacity-5"
                        alt=""
                    />
                </div>
                <div className='absolute -bottom-[150px] hidden lg:block -z-50 right-0  w-[300px] h-[250px]'>
                    <img
                        src={logo}
                        className="w-full lg:w-[300px] pb-4 sm:mt-5 opacity-5"
                        alt=""
                    />
                </div>

                <div className='flex items-center justify-center'>
                    <button className="w-full lg:w-[200px] bg-blue-700 py-3 mt-4 text-white font-semibold hover:bg-white hover:text-black  transition-all  rounded-full inline-block animate-bounce ">Know more about us</button>

                </div>

                {/* <div className='absolute sm:top-[100px]  lg:-right-[30px] lg:-top-[100px] w-[300px] bg-opacity-40 rounded-full  bg-blue-500  rotate-6'></div> */}



            </div>
        </div>
    )
}

export default MoreInfo