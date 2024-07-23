import React from 'react'

const Linkpage = () => {
    return (
        <section className=''>
            <div className='container mx-auto flex flex-col items-center justify-center py-10 lg:py-40 '>
                <h1 className='text-2xl lg:text-4xl font-bold uppercase bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent'>Welcome Back Home </h1>
                <div className=' gap-5 pt-5'>
                    <button className='flex items-center  bg-yellow-200  p-3 capitalize font-semibold rounded-2xl border hover:bg-transparent transition-all'>Join Us for Church</button>
                </div>
            </div>
        </section>

    )
}

export default Linkpage