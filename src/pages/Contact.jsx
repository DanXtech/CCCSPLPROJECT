


import React from 'react'
import HeroContact from "../assets/contact-img.png"
const Contact = () => {
    return (
        <section>

            <div class="relative w-full h-96">
                <img src={HeroContact} className='absolute h-full w-full object-cover object-center' alt="" />
                <div class="absolute inset-0 h-full w-full bg-black/50"></div>
                <div class="relative pt-28 text-center">
                    <h2 class="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl uppercase">Contact Information</h2>
                    <p class="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70 ">CCCSPL is always avaliable to hear from you. May God bless us </p>
                </div>
            </div>


            <div className='-mt-16 mb-8'>
                <div className='container mx-auto'>
                    <div className=' w-full bg-white "w-full py-12 flex gap-10 justify-center rounded-xl border border-white shadow-md shadow-black/5 saturate-200 '>
                        <div className='px-2'>
                            <h2 className='font-bold text-lg lg:text-2xl border-b'>If you have any Subjection for us please contact us</h2>
                            <p className='lg:text-center pt-3'>Location : Our Location is at  under G Lautech along l500l akowonjo</p>
                            <div className='flex  lg:flex-row pt-5 '>
                                <div className='bg-green-400 shadow text-white p-3 w-full'>WhatsApp</div>
                                <div className='bg-pink-400 shadow text-white p-3 w-full'>Instagram</div>
                                <div className='bg-black text-white shadow p-3 w-full'>twitter</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

// gitHub.com/moses000