import React from 'react'
import { Link } from 'react-router-dom'
import { SlArrowRight } from "react-icons/sl";
import { ConductLinkInfo } from '../assets/Data/FastLinkInfo';
import { NoteListItem, SpiritualData, SpiritualData2 } from '../assets/Data/NoteItemInfo';
// import { SlCompass } from "react-icons/sl";
import { FaRegCheckCircle } from "react-icons/fa"
const Conduct = () => {
    return (

        <section>
            <div className='w-full bg-[#023e8a] lg-px-0 px-2   border-gray-200'>
                <div className='container mx-auto py-20'>
                    <h1 className='text-2xl lg:text-3xl font-bold uppercase font-quickSand text-white pb-4'>Our Code of Conduct</h1>
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

                                    Code of Conduct
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className='container mx-auto'>
                <div className='flex flex-col  gap-2 lg:flex-row lg:gap-10 border-r border-l pt-16 px-10'>
                    <div className='w-full lg:w-[400px] '>



                        <div className=' pt-2'>

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
                    <div className='w-full pb-10  lg:pt-5'>
                        <h1 className='text-black text-2xl lg:text-3xl font-bold'>Code of Conduct</h1>
                        <p className='text-lg text-black p-3'>The following is a summary of rules, regulations and tenets of Celestial Church of Christ.</p>

                        {/* <div className='p-5 w-full bg-red-400  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'> */}
                        <div className='p-5 w-full bg-red-100'>
                            <h2 className='text-2xl text-black p-3 font-semibold'>Members are forbidden to :</h2>

                            <div>
                                {NoteListItem.map((item, id) => (
                                    <ul key={id} className='text-black pb-1 flex items-center gap-2'>
                                        {/* <span className='bg-white p-1 text-black'><SlCompass /></span> */}
                                        <span className='text-sm  shadow p-1 mr-2 text-black'><FaRegCheckCircle /></span>
                                        <li>{item.display}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>

                        <div className='pt-5'>
                            <h2 className='text-2xl font-semibold text-black'>Spiritual code of conduct</h2>
                            <div className=''>
                                <img src="" alt="" />
                            </div>
                            {SpiritualData.map((item, id) => (
                                <ul key={id} className='flex flex-col gap-2  pt-5 text-black'>
                                    <div className='flex gap-3'>
                                        <li className='pb-2 border-b'>{item.InfoText}</li>
                                    </div>
                                </ul>
                            ))}
                        </div>

                        <div className='pt-5'>
                            <h2 className='text-2xl  font-semibold'>The Altar</h2>

                            <div className='lg:pl-5'>
                                <div className='flex items-center gap-1'>
                                    <span className='h-[45px] w-[2px] bg-blue-500'></span>
                                    <p className=''>No Male not yet anointed is allowed into the altar.</p>
                                </div>
                                <div className='flex items-center gap-1 pt-2'>
                                    <span className='h-[45px] w-[3px] bg-blue-500'></span>
                                    <p>No female shall under any circumstance go beyond the threshold close to the altar and no female shall be allowed to
                                        touch the sacred items such as sanctification water vessel, the in-censer or the Cross in the altar.</p>
                                </div>
                            </div>

                        </div>

                        <div className=''>
                            {SpiritualData2.map((item, id) => (
                                <ul key={id} className='flex flex-col gap-2 text-black pt-5'>
                                    <li className='pb-2 border-b'>{item.InfoText}</li>
                                </ul>
                            ))}
                        </div>


                        <div className='pt-5'>

                            <p className='font-bold '>May the good Lord continue to guide and bless us
                                as you endeavor to make his holy sanctuary a place of reverence,
                                honor and fear. CCCSPL wish you sucess and Almighty God with be with us and our family's!!!</p>

                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Conduct



