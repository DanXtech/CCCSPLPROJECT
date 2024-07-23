import React from 'react'
import { CriteriaUnitData } from '../assets/Data/SubMenuItems'
import { FaRegCheckCircle } from "react-icons/fa"
import About2 from "../assets/others/aboutimgshow2.jpg"
const CriteriaUnit = () => {
    return (
        <div className='sm:px-6 lg:pt-12  pt-12'>
            <div className='container mx-auto'>
                <h1 className='font-semibold uppercase text-2xl lg:pt-20 text-center pb-7  sm:pt-20 sm:pb-5  lg:pb-16  lg:text-3xl text-black'>Criteria for joining or functioning in any unit</h1>
            </div>
            <div className='grid lg:grid-flow-col  sm:px-5  lg:gap-10 gap-5 relative '>
                <div className='lg:w-[500px] h-[300px] sm:w-full'>
                    <div>
                        {CriteriaUnitData.map((item, i) => {
                            return (
                                <ul className='' key={i}>
                                    <li className='flex  items-center gap-4 lg:pb-7 sm:pb-4 text-black' >
                                        <span className='lg:text-2xl  bg-black shadow p-1 text-white'><FaRegCheckCircle /></span>
                                        <li>{item.CriteriaInfo}</li>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
                <div className="block lg:hidden pb-10">
                    <img src={About2} className=" rounded-lg  shadow-xl w-full bg-blue-700" alt="" />
                </div>
                <div className="lg:block hidden">
                    <img src={About2} className=" max-w-full rounded-lg shadow-xl lg:w-[550px] h-[350px] bg-blue-700" style={{
                        transform: "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                    }} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CriteriaUnit