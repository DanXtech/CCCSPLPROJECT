import homeIntro1 from "../assets/page4_img5.jpg"
import homeIntro2 from "../assets/page3_img1.jpg"
import "../Styles/main.css"
import Logo from "../assets/ccc-logo.png"
import React from 'react'


// Import Swiper styles
import 'swiper/css';


const introsectioninf = () => {
    return (
        <div className=' w-full flex flex-col lg:flex-row shadow'>

            <div className="w-full borderDesigns">
                <div className=" relative">
                    <div className="absolute w-full h-full bg-black/50  text-white">
                        <div className="flex items-center justify-center h-full">
                            <img src={Logo} className="lg:w-[400px] p-20 lg:p-0 w-full" alt="" />
                        </div>
                    </div>
                    <img
                        className=" lg:max-h-full lg:h-[578px] w-full object-cover"
                        src={homeIntro1}
                        alt="/"
                    />
                </div>
            </div>
            <div className="w-full borderDesigns">
                <div className=" relative">
                    <div className="absolute w-full h-full bg-black/50  text-white">
                        <div className="flex items-center justify-center flex-col h-full">
                            <h1 className="text-2xl lg:text-7xl  font-semibold text-white">✨ Our Mission!!!</h1>
                            <h4 className="text-lg text-center text-white  pt-5" >
                                Our Great Mission is to share the Good of jesus Christ, loving, faith and Best wonderfull success in our academics. Matthew 11 vs 28 says Come to me all who labor are heavy laden, and i will give you rest 🙇‍♀️.</h4>
                        </div>
                    </div>
                    <img
                        className=" lg:h-[578px] w-full h-[300px] object-cover  "
                        src={homeIntro2}
                        alt="/"
                    />
                </div>
            </div>

        </div>

    )
}

export default introsectioninf

