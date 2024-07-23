

import React, { useState } from 'react'
import "../Styles/main.css"
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinkFirstSesstion, navLinkSecondSesstion, navLinkThirdSesstion } from '../assets/Data/SubMenuItems';
import { SlArrowDown } from 'react-icons/sl';

const Header = () => {
    let [open, setOpen] = useState(false);

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen2(false); // Close other dropdown
        setIsOpen3(false); // Close other dropdown
    };
    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen1(false);
        setIsOpen3(false);
    };
    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
        setIsOpen1(false);
        setIsOpen2(false);
    };
    return (
        <header className='main-header-area'>
            <div className='bg-white hidden lg:flex w-full  fixed top-0 z-50 shadow py-3'>

                <div className='container mx-auto lg:py-0'>
                    <div className='flex items-center justify-between'>
                        <div className=''>
                            <Link to="/" className='design font-bold sm:text-2xl  lg:text-4xl'>
                                <span className="font-bold lg:text-5xl text-2xl text-blue-900  sm:text-2xl design">CCCSPL</span>
                            </Link>
                        </div>
                        <div>
                            <nav className="main-nav hidden lg:block">
                                <ul className="nav ">
                                    <li>
                                        <span className="active">
                                            <Link to={"/"} className="menu-text hover:text-blue-600 font-extrabold">Home</Link>
                                            <i className="fa fa-angle-down"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className=" " onClick={toggleAccordion1}>
                                            <span className="menu-text hover:text-blue-600 font-extrabold">About Us</span>
                                            <i className="fa fa-angle-down"></i>
                                        </span>
                                        <div className={`mega-menu dropdown-hover mt-3 ${isOpen1 ? 'block' : 'hidden'}`}>
                                            <div className="menu-colum">
                                                <ul>
                                                    {navLinkFirstSesstion.map((item, index) => (
                                                        <li className='py-1 border-b' key={index}>
                                                            <Link className='' to={item.path} onClick={() => setIsOpen1(false)}>
                                                                {item.display}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <span className=" " onClick={toggleAccordion1}>
                                            <span className="menu-text hover:text-blue-600 font-extrabold">Ministries | Sermons</span>
                                            <i className="fa fa-angle-down"></i>
                                        </span>
                                        <div className={`mega-menu dropdown-hover mt-3 ${isOpen1 ? 'block' : 'hidden'}`}>
                                            <div className="menu-colum">
                                                <ul>
                                                    {navLinkThirdSesstion.map((item, index) => (
                                                        <li className='py-1 border-b' key={index}>
                                                            <Link className='' to={item.path} onClick={() => setIsOpen1(false)}>
                                                                {item.display}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="" >
                                            <Link to="/event" className="menu-text hover:text-blue-600 font-extrabold">Events</Link>
                                        </span>
                                    </li>
                                    {/* <li>
                                        <span className="">
                                            <Link to="/contact" className="menu-text hover:text-blue-600 font-extrabold">Communities</Link>
                                            <i className="fa fa-angle-down"></i>
                                        </span>
                                    </li> */}

                                    <li>
                                        <span className=" " onClick={toggleAccordion1}>
                                            <span className="menu-text hover:text-blue-600 font-extrabold">Communities</span>
                                            <i className="fa fa-angle-down"></i>
                                        </span>
                                        <div className={`mega-menu dropdown-hover mt-3 ${isOpen1 ? 'block' : 'hidden'}`}>
                                            <div className="menu-colum">
                                                <ul>
                                                    {navLinkSecondSesstion.map((item, index) => (
                                                        <li className='py-1 border-b' key={index}>
                                                            <Link className='' to={item.path} onClick={() => setIsOpen1(false)}>
                                                                {item.display}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="">
                                            <Link to="/contact" className="menu-text hover:text-blue-600 font-extrabold">Contact</Link>
                                            <i className="fa fa-angle-down"></i>
                                        </span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="">
                            <ul className="flex items-center gap-5">
                                <img src="" alt="" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* {Mobile nav} */}
            <div className='shadow-md  w-full fixed top-0 left-0  z-50 lg:hidden block '>
                <div className='md:flex items-center justify-between bg-white py-4  px-5'>
                    {/* logo section */}
                    <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                        <span className="font-bold lg:text-5xl text-2xl text-blue-900 sm:text-2xl design">CCCSPL</span>
                    </div>
                    {/* Menu icon */}
                    <div onClick={() => setOpen(!open)} className='absolute right-5 top-6 cursor-pointer md:hidden w-7 h-7'>
                        {open ? <FaTimes /> : <FaBars />}
                    </div>
                    {/* link items */}
                    <ul className={` md:flex md:items-center md:pb-0 pb-12 pt-5  absolute md:static bg-white shadow-md md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                        <li className=" font-semibold borderDesign" >
                            <Link className="cursor-pointer font-semibold text-sm" to='/'>Home</Link>
                        </li>
                        <li className=" font-semibold flex items-center justify-between borderDesign">
                            <Link className="cursor-pointer font-semibold text-sm">About</Link>
                            <div className=' cursor-pointer' onClick={toggleAccordion1}>
                                <SlArrowDown className='font-bold h-3' />
                            </div>
                        </li>
                        {isOpen1 && (
                            <div className="accordion-content">
                                <ul className="pl-4">
                                    {navLinkFirstSesstion.map((item, index) => (
                                        <li className='py-1 ' key={index}>
                                            <Link className='' to={item.path} onClick={() => setIsOpen1(false)}>
                                                {item.display}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <li className="font-semibold flex items-center justify-between borderDesign">
                            <Link className="cursor-pointer font-semibold text-sm">Ministries | Sermons</Link>
                            <div className=' cursor-pointer' onClick={toggleAccordion2}>
                                <SlArrowDown className='font-bold h-3' />
                            </div>
                        </li>
                        {isOpen2 && (
                            <div className="accordion-content">
                                <ul className="pl-4">
                                    {navLinkSecondSesstion.map((item, index) => (
                                        <li className='py-1' key={index}>
                                            <Link className='' to={item.path} onClick={() => setIsOpen2(false)}>
                                                {item.display}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}


                        <li className=" font-semibold borderDesign">
                            <Link className="cursor-pointer font-semibold text-sm">Events</Link>
                        </li>

                        <li className="font-semibold flex items-center justify-between borderDesign">
                            <Link className="cursor-pointer font-semibold text-sm">Communities</Link>
                            <div className=' cursor-pointer' onClick={toggleAccordion3}>
                                <SlArrowDown className='font-bold h-3' />
                            </div>
                        </li>
                        {isOpen3 && (
                            <div className="accordion-content ">
                                <ul className="pl-4">
                                    {navLinkThirdSesstion.map((item, index) => (
                                        <li className='py-1' key={index}>
                                            <Link className='' to={item.path} onClick={() => setIsOpen3(false)}>
                                                {item.display}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <li className=" font-semibold borderDesign">
                            <Link className="cursor-pointer font-semibold text-sm">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
