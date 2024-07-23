import React from "react";
import HeroContact from "../assets/others/church-halter.png"
const Sermon = () => {
    return (

        <section>

            <div class="relative w-full h-96">
                <img src={HeroContact} className='absolute h-full w-full object-cover object-center' alt="" />
                <div class="absolute container mx-auto bottom-0 right-0 left-0 bg-inset-0  w-full bg-black/50 h-[150px]">
                    <div class="relative pt-10 text-center z-55">

                        <h2 class="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl uppercase">New Sermons</h2>
                        <p class="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70 ">The word of God is our strength</p>
                    </div>
                </div>
                {/* <div class="absolute inset-0 h-full w-full bg-black/50"></div> */}

            </div>


            <div className="container mx-auto flex items-center justify-center pt-10">
                <div className=" flex flex-wrap   lg:flex lg:flex-row  gap-5 lg:gap-10 py-10  lg:pt-5 lg:pb-5">
                    <div className="bg-transparent shadow-lg border rounded-2xl text-black  w-[300px]">
                        <span className="bg-blue-600 text-white px-3 rounded-tl h-[50px] w-[50px]">1</span>
                        <h1 className="border-b-2 px-5 py-2  flex items-center justify-center capitalize font-bold">Lesson Update Veiw</h1>
                        <ul className="flex flex-col gap-2 ">
                            <li className="border-b-2 px-5 py-2">
                                <span className="pr-2 font-semibold">First lesson :</span> Gen 2 vs 23 to 25
                            </li>
                            <li className=" px-5 py-2">
                                <span className="pr-2 font-semibold">Second lesson :</span> Col 2 vs 23 to 25
                            </li>
                        </ul>
                    </div>
                    <div className="bg-transparent shadow-lg border rounded-2xl text-black  w-[300px]">
                        <span className="bg-blue-600 text-white px-3 rounded-tl h-[50px] w-[50px]">2</span>
                        <h1 className="border-b-2 px-5 py-2  flex items-center justify-center capitalize font-bold">Lesson Update Veiw</h1>
                        <ul className="flex flex-col gap-2 ">
                            <li className="border-b-2 px-5 py-2">
                                <span className="pr-2 font-semibold">First lesson :</span> Gen 2 vs 23 to 25
                            </li>
                            <li className=" px-5 py-2">
                                <span className="pr-2 font-semibold">Second lesson :</span> Col 2 vs 23 to 25
                            </li>
                        </ul>
                    </div>
                    <div className="bg-transparent shadow-lg border rounded-2xl text-black  w-[300px]">
                        <span className="bg-blue-600 text-white px-3 rounded-tl h-[50px] w-[50px]">3</span>
                        <h1 className="border-b-2 px-5 py-2  flex items-center justify-center capitalize font-bold">Lesson Update Veiw</h1>
                        <ul className="flex flex-col gap-2 ">
                            <li className="border-b-2 px-5 py-2">
                                <span className="pr-2 font-semibold">First lesson :</span> Gen 2 vs 23 to 25
                            </li>
                            <li className=" px-5 py-2">
                                <span className="pr-2 font-semibold">Second lesson :</span> Col 2 vs 23 to 25
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </section>


    )
};

export default Sermon;



// <div class="text-center my-10 text-5xl font-extrabold">
// <span class=" bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent uppercase lg:text-4xl text-2xl"> Sermon Update Programs </span>
// </div>