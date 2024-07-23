import React from "react";
import Helmet from "../components/Helmet";
import CardSection from "../UI/CardSection";
import aboutimg from "../assets/galaxy.svg"
import { History } from "../assets/Data/SubMenuItems";
import AboutHierarchy from "../UI/AboutHierarchy";
import CriteriaUnit from "../UI/CriteriaUnit";
import MoreInfo from "../UI/MoreInfo";
import About1 from "../assets/others/aboutimgbanner1.png"

const About = () => {
    return (

        <Helmet title="About - Us">
            <section className="py-10  container mx-auto sm:mt-20">

                <h1 className="font-semibold uppercase text-2xl lg:pt-20  text-center pb-7 sm:pt-6 sm:pb-5  lg:pb-16  lg:text-3xl text-black"> History of the Church
                </h1>
                {/* <h1 className="font-semibold uppercase text-2xl lg:pt-12 text-center pb-10 sm:pt-6 sm:pb-5  lg:pb-10  lg:text-3xl animate-pulse group-hover:scale-105 duration-200  text-primary"> About Us </h1> */}
                <div className="px-6 container ">
                    <div className="grid lg:grid-flow-col sm:px-5  gap-5 lg:gap-10 items-center relative">
                        <img src={aboutimg} className="absolute animate-pulse sm:top-[100px]  lg:-right-[30px] lg:-top-[100px] w-[400px] bg-opacity-40 -z-40 rotate-6" alt="bg" />
                        {/* <img src={About1} alt="photo" className="lg:block hidden max-w-full rounded-lg shadow-xl lg:w-[550px] h-[300px] bg-blue-700" style={{
                            transform: "scale(1) perspective(1040px) rotateY(11deg) rotateX(2deg) rotate(2deg)",
                        }} /> */}


                        <div className="block lg:hidden pb-10">
                            <img src={About1} className=" rounded-lg  shadow-xl w-full bg-blue-700" alt="" />
                        </div>
                        <div className="lg:block hidden">
                            <img src={About1} className=" max-w-full rounded-lg shadow-xl lg:w-[550px] h-[350px] bg-blue-700" style={{
                                transform: "scale(1) perspective(1040px) rotateY(11deg) rotateX(2deg) rotate(2deg)",
                            }} alt="" />
                        </div>



                        {History.map((item, i) => {
                            return (
                                <div className="two" key={i}>
                                    {/* <h1 clsassName="font-semibold text-2xl pb-4  text-white sm:text-center lg:text-left"> {item.desInfo} </h1> */}
                                    {/* <p className="bg-secondary-300 bg-opacity-60  text-black font-medium p-4 border  rounded-2xl  lg:bg-transparent lg:text-black">{item.FullInfo}</p> */}
                                    <p className="p-5 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">{item.FullInfo}</p>
                                </div>
                            )
                        })}
                    </div>
                    <CardSection />

                    <AboutHierarchy />


                    <CriteriaUnit />


                    <MoreInfo />




                </div>

            </section>
        </Helmet>


    )
};

export default About;





