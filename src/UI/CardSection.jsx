import React from 'react'
import { ParishAimCard } from '../assets/Data/SubMenuItems'
const CardSection = () => {
    return (
        <section className="py-24  ">
            {/* grid grid-flow-col  lg:grid-row  */}
            <h1 className="font-semibold uppercase text-2xl text-center pb-7 sm:pt-6 sm:pb-5  lg:pb-16  lg:pt-16 lg:text-3xl  text-black"> The aim and objectives of the Parish </h1>
            <div className='flex items-center justify-center'>

                <div className="grid lg:grid-cols-3 sm:grid-cols-1  gap-7">

                    {ParishAimCard.map((item, id) => {
                        return (
                            // <div className='w-[350px] h-[350px]   flex flex-col items-center justify-center   gap-5 border shadow border-y-2 border-black  bg-white  hover:border-primary rounded-full cursor-pointer' key={id}>
                            <div className='w-[350px] h-[350px]   flex flex-col items-center justify-center   gap-5      border border-black shadow-md shadow-white/5 saturate-200  cursor-pointer' key={id}>
                                <div className='  w-[300px] h-[300px] border border-black border-dashed   rounded-full  flex flex-col items-center justify-center'>
                                    {/* <h5 className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-white hover:border hover:text-white hover:bg-transparent'>{item.desNum}</h5> */}
                                    <div>
                                        <p className='px-5 text-center text-black'>{item.FullNote}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })}


                </div>

            </div>
        </section>
    )
}

export default CardSection

// bg-[#121533]/10 backdrop-filter backdrop-blur-lg shadow-lg px-7 py-5  shodow-lg w-[400px] h-[170px] rounded-3xl
// < div class=" px-4 bg-red-400 lg:flex lg:flex-row gap-4" key = { id } >
//                             <h5 class="text-xl font-semibold pb-4 text-center">
//                                 {item.desNum}
//                             </h5>
//                             <div>
//                                 <p>{item.FullNote}</p>
//                             </div>
//                         </ >