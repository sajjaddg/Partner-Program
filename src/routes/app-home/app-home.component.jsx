import React from 'react'
import { ReactComponent as Chart } from '../../assets/appHome/chart.svg'
import { ReactComponent as SolutionChart } from '../../assets/appHome/solution-chart.svg'
import { ReactComponent as Summary } from '../../assets/appHome/summary.svg'
import { ReactComponent as Directory } from '../../assets/appHome/directory.svg'
import { ReactComponent as Benefits } from '../../assets/appHome/benefits.svg'





const AppHome = () => {
    return (
        <div className='flex flex-col min-h-screen min-w-full space-y-8  bg-[#FCFCFC]'>
            <section className='flex items-center border-b'>
                <div className='flex items-center justify-start p-4'>
                    <span className='font-medium text-2xl'>Home</span>
                </div>
            </section>
            <section className='flex flex-col space-y-3  '>
                <div className='flex items-center cursor-pointer justify-between px-4 py-2 bg-white border rounded-sm'>
                    <span className='font-normal text-lg'>Get to know Partner Program</span>
                    <ion-icon name="chevron-forward-outline" style={{ fontSize: '18px' }}></ion-icon>
                </div>
                <div className='px-4 flex flex-col space-y-4'>

                    <div className='flex flex-col py-2 px-3 space-y-4 bg-white border'>
                        <div className='flex justify-between items-center'>
                            <span className='font-medium text-base'>Balance</span>
                            <ion-icon name="arrow-forward-outline" style={{ fontSize: '18px' }}></ion-icon>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <span className='text-xl font-light'>$0.00</span>
                            <div className='flex justify-between'>
                                <span className='text-base'>total earnings</span>
                                <span className='text-sm font-light'>$0.00</span>
                            </div>
                        </div>
                        <div>
                            <button disabled className='px-3 py-1 text-[#8D8D90] text-sm cursor-not-allowed border rounded-sm'>Withdraw money</button>
                        </div>
                    </div>

                    <div className='flex flex-col py-2 px-3 space-y-4 bg-white border'>
                        <div className='flex justify-between items-center'>
                            <span className='font-medium text-base'>Affiliate Program</span>
                            <ion-icon name="arrow-forward-outline" style={{ fontSize: '18px' }}></ion-icon>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <span className='text-base cursor-pointer hover:text-blue-600 transition-all duration-300' >0<span className='text-xs'>{' '}Paid</span></span>
                            <span className='w-0 h-3 border-r border-[#767680]' />
                            <span className='text-base cursor-pointer hover:text-blue-600 transition-all duration-300' >0<span className='text-xs'>{' '}trials</span></span>
                            <span className='w-0 h-3 border-r border-[#767680]' />
                            <span className='text-base cursor-pointer hover:text-blue-600 transition-all duration-300' >0<span className='text-xs'>{' '}expired</span></span>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <button className='px-3 w-full transition-colors duration-300 bg-[#0066FF] py-2 text-white text-sm font-medium cursor-pointer border rounded-md hover:bg-[#0053cf]'>Get link</button>
                            <button className='px-3 w-full transition-colors duration-300 py-2 text-black text-sm font-medium cursor-pointer border rounded-md hover:bg-[#e4e3e3]'>Create a campaign</button>
                        </div>
                    </div>

                    <div className='flex flex-col py-2 px-3 space-y-4 bg-white border'>
                        <div className='flex justify-between items-center'>
                            <span className='font-medium text-base'>Solution Program</span>
                            <ion-icon name="arrow-forward-outline" style={{ fontSize: '18px' }}></ion-icon>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <span className='text-base cursor-pointer hover:text-blue-600 transition-all duration-300' >0<span className='text-xs'>{' '}Paid</span></span>
                            <span className='w-0 h-3 border-r border-[#767680]' />
                            <span className='text-base cursor-pointer hover:text-blue-600 transition-all duration-300' >0<span className='text-xs'>{' '}trials</span></span>
                            <span className='w-0 h-3 border-r border-[#767680]' />
                            <span className='text-base cursor-pointer hover:text-blue-600 transition-all duration-300' >0<span className='text-xs'>{' '}expired</span></span>
                        </div>
                        <div>
                            <button disabled className='px-3 py-1 bg-[#80B3FF] text-white text-sm cursor-not-allowed border rounded-sm'>Create a license</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-4 flex flex-col '>
                <span className='text-base font-medium'>Performance over time</span>
                <div className='flex flex-col space-y-6 py-4'>
                    <div className='flex flex-col space-y-4 py-6 px-3 items-center justify-center border bg-white'>
                        <Chart />
                        <span className='text-2xl px-6 font-medium text-center'>
                            You don't have any affiliate licenses yet
                        </span>
                        <span className='text-lg text-[#767680]  font-normal text-center'>
                            Get your link or create a campaign, get new licenses, and see how they perform over time.
                        </span>
                        <div>
                            <button className='py-2 px-4 bg-[white] text-blue-600 text-sm border hover:bg-[#f7f5f5] border-blue-500 transition-color duration-300 rounded-sm'>Get link</button>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4 py-6 px-3 items-center justify-center border bg-white'>
                        <SolutionChart />
                        <span className='text-2xl px-6 font-medium text-center'>
                            Solution Program

                        </span>
                        <span className='text-lg text-[#767680]  font-normal text-center'>
                            Create and customize product accounts for your customers. Manage payments and monitor performance of your licenses.
                        </span>
                        <div>
                            <button className='py-2 px-4 bg-[#0C66FF] text-white text-sm border hover:bg-[#0a5eee]  transition-color duration-300 rounded-sm'>Explore</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-4 space-y-4 flex flex-col '>
                <span className='text-base font-medium'>Enrich our partnership</span>
                <div className='flex'>
                    <div className="flex flex-col px-4  bg-[#F6F6F7]">
                        <div className='flex p-3 items-center space-x-4 py-6 '>
                            <div>
                                <Summary />
                            </div>
                            <span>
                                Discover <span className='text-blue-500 hover:underline cursor-pointer'>our Programsand</span> gain new functionalities within the app.
                            </span>
                        </div>
                        <div className='flex p-3 items-center space-x-4 py-6 border-t'>
                            <div>
                                <Directory />
                            </div>
                            <span>
                                Check our <span className='text-blue-500 hover:underline cursor-pointer'>educational materials </span>and make the most of our Partner Program.{' '}<span className='text-red-500'>NEW!</span>
                            </span>
                        </div>
                        <div className='flex p-3 items-center space-x-4 py-6 border-t'>
                            <div>
                                <Benefits />
                            </div>
                            <span >
                                Claim your <span className='text-blue-500 hover:underline cursor-pointer'>programs’ benefits </span>and discover new business opportunities.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <div className='py-10'>

            </div>
        </div>
    )
}

export default AppHome