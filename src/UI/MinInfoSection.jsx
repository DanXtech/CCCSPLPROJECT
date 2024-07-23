import React from 'react'
import { Link } from 'react-router-dom'

const MinInfoSection = () => {
    return (
        <section className='py-10 lg:py-20'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-2xl lg:text-4xl font-bold  text-center'>Join us to see you the greatness of God in power</h1>
                    <p className='font-medium text-lg pt-2'>We are expecting you on sunday and we wll all give our wonderfull  testimony in christ jesus. For we are the peculiar people  </p>
                    <Link to={"/about"} className='mt-5 bg-yellow-200  p-3 capitalize font-semibold rounded-2xl border hover:bg-transparent transition-all'>See more about us </Link>
                </div>
            </div>
        </section>
    )
}

export default MinInfoSection