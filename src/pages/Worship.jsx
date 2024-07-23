import React from 'react'
import { Link } from 'react-router-dom'
import { ConductLinkInfo } from '../assets/Data/FastLinkInfo'
import { SlArrowRight } from 'react-icons/sl'
import Table from '../UI/Table'

const worship = () => {
    return (
        <section>
            <div className='w-full bg-[#023e8a] lg-px-0 px-2   border-gray-200'>
                <div className='container mx-auto py-20'>
                    <h1 className='text-2xl lg:text-3xl font-bold uppercase font-quickSand text-white pb-4'>Mode of Worship</h1>
                    <div className=''>
                        <div className='sublink'>
                            <ul className='flex items-center gap-1  '>
                                <li className='flex items-center text-slate-300 hover:text-black'>

                                    <Link to='/' className='flex items-center'>
                                        <span >Home</span>
                                        <span> <SlArrowRight className='h-3' /></span>
                                    </Link>

                                </li>
                                <li className='flex items-center gap-1 text-slate-300 hover:text-black'>

                                    <Link to='/about' className='flex items-center '>
                                        <span >History Of The Church</span>
                                        <span> <SlArrowRight className='h-3' /></span>
                                    </Link>

                                </li>
                                <li className='text-slate-300 '>

                                    Mode of Worship
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className='container mx-auto'>
                <div className='flex flex-col  gap-2 lg:flex-row lg:gap-10 border-r border-l pt-16 px-10'>
                    <div className='w-full lg:w-[400px] '>
                        <div className='pt-2'>
                            <div className='lg:pt-5 pb-5'>
                                <ul className='flex flex-col gap-3 cursor-pointer'>
                                    {ConductLinkInfo.map((item, index) => (
                                        <Link to={item.path} className='p-3 bg-yellow-300 hover:bg-white border transition-all w-full' key={index}>
                                            <span key={index}>
                                                {item.display}
                                            </span>
                                        </Link>
                                    ))}
                                    {/* p-3 bg-yellow-300 hover:bg-white transition-all */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-full pb-10 lg:pt-5 '>
                        <h1 className='text-[#14213d] text-2xl  font-bold'>Our church began the activity in 1997, which later became a Parish in 2008 and a lot has changed for us over the years but one thing has remained consistent: a focus on helping people live in love for the Kingdom of God.</h1>

                        <div className='w-full lg:w-[#300] p-5 bg-slate-200 mt-5'>
                            <h3 className='text-3xl font-semibold capitalize'>mission</h3>
                            <p className='text-lg px-5'>
                                Our mission is to continually build a church that is relevant, constantly recognizes and meets people’s needs, pursues the teaching of God’s Word and always provides an atmosphere for positive relationships to grow and develop.
                            </p>

                        </div>

                        <div className='pt-5'>
                            <h2 className='text-[#14213d] text-2xl  font-bold text-center'>Days of worship</h2>
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default worship