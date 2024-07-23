import React from 'react'

const Table = () => {
    return (

        <section class="py-1 bg-blueGray-50">
            {/* <div class="w-full xl:w-8/12 mb-2 xl:mb-0 px-4 mx-auto mt-5"> */}
            <div class="w-full  mb-2 xl:mb-0 px-4 mx-auto mt-5">
                <div class="relative flex flex-col min-w-0 break-words bg-slate-100 w-full mb-6 shadow-lg rounded ">
                    {/* <div class="rounded-t mb-0 px-4 py-3 border-0">
                        <div class="flex flex-wrap items-center">
                            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 class="font-semibold text-base text-blueGray-700">Page Visits</h3>
                            </div>
                            <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                            </div>
                        </div>
                    </div> */}

                    <div class="block w-full overflow-x-auto">
                        <table class="items-center bg-transparent w-full border-collapse ">
                            <thead>
                                <tr className='bg-[#000000] text-[#ffffff]'>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                                        Days
                                    </th>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Periods of Service
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className='bg-[#00b4d8] text-[#ffffff] '>
                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Mondays – Bible study
                                    </th>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        5:30pm
                                    </td>

                                </tr>
                                <tr className='bg-[#ffffff] text-[#000000] '>
                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                        Tuesdays – Spiritual War fare day
                                    </th>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        9:00am
                                    </td>

                                </tr>
                                <tr className='bg-[#00b4d8] text-[#ffffff] '>
                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                        Wednesdays-Seekers Service
                                    </th>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        9:00am
                                    </td>

                                </tr>
                                <tr className='bg-[#ffffff] text-[#000000] '>
                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                        Thursdays – Every 1st Thursday Of Every Month (New Moon Service)/Prophet&Prophetess Night
                                    </th>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        12:00am/10:00pm
                                    </td>

                                </tr>

                                <tr className='bg-[#00b4d8] text-[#ffffff] '>
                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                        Fridays-Special Service For Pregnant Women
                                    </th>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        3:00pm
                                    </td>

                                </tr>

                                <tr className='bg-[#ffffff] text-[#000000] '>
                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                        Saturdays – Cleansing/Sanitation Of The House Of God
                                    </th>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Any Desired Time
                                    </td>

                                </tr>

                                <tr className='bg-[#00b4d8] text-[#ffffff] '>
                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                        Sundays-Sunday Morning Service
                                    </th>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        10:00am
                                    </td>

                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <footer class="relative pt-8 pb-6 mt-16">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                            <div class="text-sm text-blueGray-500 font-semibold py-1">
                                {/* Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>. */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Table