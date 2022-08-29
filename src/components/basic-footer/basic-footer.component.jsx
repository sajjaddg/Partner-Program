import React from 'react'
import { ReactComponent as FaceBook } from '../../assets/footer/facebook.svg'
import { ReactComponent as Twitter } from '../../assets/footer/twitter.svg'
import { ReactComponent as Logo } from '../../assets/logo/logo.svg'

const BasicFooter = () => {
  return (
    <section className=' bg-[#F6F6F7]'>
                <div className='px-5 py-10 flex flex-col space-y-14' style={{ maxWidth: '72.5rem', margin: '0 auto' }}>
                    <div className='grid p grid-cols-1 md:grid-cols-2 gap-y-10 '  >
                        <div className='flex  max-w-lg flex-col space-y-8 w-56 '>
                            <Logo className='shrink-0 w-56 h-8 ' />
                            <div className='pr-4'>
                                <button className="w-full  h-10  font-semibold transition-color duration-300 text-white rounded-sm bg-[#ee0007]  hover:bg-[#bd0309]">Join Partner Program</button>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-y-20 md:grid-cols-3 '>
                            <div className='flex flex-col  space-y-2 justify-start'>
                                <h3 className='font-bold text-md tracking-wider'>Partnerships</h3>
                                <div className='flex flex-col space-y-2'>
                                    <span className='font-light tracking-wider text-sm cursor-pointer hover:underline'>Affiliate Program</span>
                                    <span className='font-light tracking-wider text-sm cursor-pointer hover:underline'>Solution Program</span>
                                </div>
                            </div>
                            <div className='flex flex-col   space-y-2 justify-start'>
                                <h3 className='font-bold text-md tracking-wider'>Our products</h3>
                                <div className='flex flex-col space-y-2'>
                                    <span className='font-light tracking-wider text-sm cursor-pointer hover:underline'>LiveChat</span>
                                    <span className='font-light tracking-wider text-sm cursor-pointer hover:underline'>ChatBot</span>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-2 justify-start'>
                                <h3 className='font-bold text-md tracking-wider'>Resources</h3>
                                <div className='flex flex-col space-y-2'>
                                    <span className='font-light tracking-wider text-sm cursor-pointer hover:underline'>Blog</span>
                                    <span className='font-light tracking-wider text-sm cursor-pointer hover:underline'>Help Center</span>
                                    <span className='font-light tracking-wider text-sm cursor-pointer hover:underline'>Documentation</span>
                                    <span className='font-light tracking-wider text-sm cursor-pointer hover:underline'>Changelog</span>
                                    <span className='font-light tracking-wider text-sm cursor-pointer hover:underline'>Terms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-6 '>
                        <div className='flex justify-between  items-center'>
                            <div className='flex items-center space-x-4 group text-xl cursor-pointer' >
                                <ion-icon name="mail" style={{ color: '#808189' }}></ion-icon>
                                <span className='text-sm text-[#808189] group-hover:underline '>Contact Us</span>
                            </div>
                            <div className='flex items-center space-x-3 text-xl cursor-pointer' >
                                <FaceBook className='h-6 w-6 text-[#808189] hover:text-black cursor-pointer' />
                                <Twitter className='h-6 w-6 text-[#808189] hover:text-black  cursor-pointer' />
                            </div>
                        </div>
                        <hr className='bg-[#808189]' />
                        <div className='flex flex-col space-y-6'>
                            <span className='text-[#808189] text-xs'>
                                Copyright © 2022 LiveChat, Inc. All rights reserved
                            </span>
                            <span className='text-[#808189] text-xs'>
                                Hi! We are glad to have you here! Before you start visiting our Site, please note that for the best user experience, we use Cookies. By continuing to browse our Site, you consent to the collection, use, and storage of cookies on your device for us and our partners. You can revoke your consent any time in your device browsing settings. <span className='text-black cursor-pointer hover:underline'>Click “Cookies Policy”</span> to check how you can control them through your device.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default BasicFooter