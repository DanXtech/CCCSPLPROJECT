import React from 'react'
import Slider from "react-slick"
import "../Styles/homeSlider.css"
import motiveImage from "../assets/ccc-logo.png"


const HomeSlider = () => {
    const settings = {
        fade: true,
        speed: 5000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        sliderToShow: 1,
        sliderToScroll: 1,
        pauseOnHover: false,
    }
    return (
        <Slider {...settings} className="hero__slider -z-50">
            <div className="slider__item slider__item-01 mto  ">
                <section className='container mx-auto px-5 relative'>
                    <div className="slider__content relative flex items-center flex-col  text-cente">
                        <span className="text-light  text-white capitalize flex items-center flex-col lg:text-4xl font-bold">We are Lives Changed By Christ</span>
                        <h4 className="text-light mt-1 text-white lg:text-3xl font-semibold pt-2">Wecome into the world of believers for we are the light of the world.</h4>
                    </div>
                    <img src={motiveImage} className='absolute right-0 botton-0 w-[200px] ' alt="" />
                </section>
            </div>

            <div className="slider__item slider__item-02 mto">
                <section className='container mx-auto px-5'>
                    <div className="slider__content flex items-center flex-col  text-center">
                        <h6 className="text-white lg:text-4xl font-bold ">Life is hard to navigate  you don't have to do it alone </h6>
                        {/* <h4 className="text-white mt-2  lg:text-4xl font-bold"> </h4> */}
                        <h4 className="text-white mt-1  lg:text-3xl font-semibold pt-2 ">Come To me all,who labour and are heavy laden and i will give you rest ,
                            take my yoke upon you and learn from me,for i am gentle and lowly in heart,and yu will find rest in your souls (Matt 11:28-29) </h4>
                    </div>
                </section>
            </div>

            <div className="slider__item slider__item-03 mto">
                <section className='container mx-auto px-5'>
                    <div className="slider__content flex items-center flex-col text-center ">
                        <h6 className="text-white capitalize font-bold lg:text-4xl">Join us in CCCSPL to see the greatness of God</h6>
                        <h4 className="text-white mt-1 font-semibold  lg:text-3xl pt-2">We help you in following  Christ, assist you to know Him and proclaim his name to the whole world (Phil 3: 10; John 1: 12). Join us in worshiping his holy name on Sunday Service God bless you</h4>
                    </div>
                </section>
            </div>
        </Slider>
    )
}

export default HomeSlider