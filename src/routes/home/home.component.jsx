import { ReactComponent as Wave1 } from '../../assets/home/section1/wave.svg'
import { ReactComponent as Wave2 } from '../../assets/home/section2/wave.svg'
import { ReactComponent as Wave3 } from '../../assets/home/section3/wave.svg'
import { ReactComponent as Wave4 } from '../../assets/home/section5/wave.svg'
import { ReactComponent as Wave5 } from '../../assets/home/section6/wave.svg'
import { ReactComponent as Wave6 } from '../../assets/home/section7/wave.svg'
import { ReactComponent as Wave7 } from '../../assets/home/section8/wave.svg'
import { ReactComponent as LeftSection9 } from '../../assets/home/section9/left.svg'
import { ReactComponent as RightSection9 } from '../../assets/home/section9/right.svg'

import './home.styles.css'



import { ReactComponent as OrengeLogo } from '../../assets/home/section4/orenge.svg'
import { ReactComponent as BlueLogo } from '../../assets/home/section4/blue.svg'
import { Unilever, Ryanair, Ricoh, PayPal, Nikon, MercedesBenz, Ing, Ikea, Atlassian, Huawei } from '../../assets/home/section5'






const Home = () => {
    return (
        <div className="flex flex-col ">

            <section className="bg-white ">
                <div className='container flex flex-col px-5 py-3 lg:space-y-0 lg:items-center space-y-4 lg:flex-row'>
                    <div className='flex flex-col basis-1/2'>
                        <div className="flex flex-col justify-center pt-10 items-center lg:justify-start lg:items-start">
                            <h1 className="font-extrabold text-4xl md:text-6xl text-center lg:text-left">Let’s become <br />
                                <span className="px-1 bg-[#ffd000] rounded-md"> Partners!</span>
                            </h1>
                            <p className="text-center text-2xl px-2 md:text-4xl md:px-20 font-light lg:text-left lg:px-0">
                                We have excellent communication products, you have your audience. Let’s conquer the market together.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-1 md:flex-row md:space-y-0 md:space-x-2 md:px-36 lg:px-0">
                            <input type="email" placeholder='Enter your email' className='w-full md:basis-2/3 outline-[#ffd000] border border-black p-4 rounded-md md:text-xl ' />
                            <button className="p-4 w-full font-semibold md:basis-1/3 transition-color duration-300 text-white rounded-md bg-[#ee0007] md:text-base md:px-2 hover:bg-[#bd0309]">Join Partner Program</button>
                        </div>
                        <div className="flex flex-col space-y-16 py-8 lg:px-0 md:flex-row md:space-y-0 md:justify-around md:px-20">
                            <div className="flex justify-center items-center md:basis-1/2">
                                <h1 className="text-lg font-extrabold text-center leading-6 md:text-xl" >37,000+ <br /> <span className="font-light">businesses using our products</span></h1>
                            </div>
                            <div className="flex justify-center items-center md:basis-1/2">
                                <h1 className="text-lg font-extrabold text-center leading-6 md:text-xl" >1,500+ <br /> <span className="font-light">active Partners</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className='relative lg:basis-1/2 lg:flex lg:justify-end '>
                        <img src={require('../../assets/home/section1/sm.jpg')} className='relative md:hidden' alt='' />
                        <img src={require('../../assets/home/section1/md.jpg')} className='relative hidden md:block lg:hidden' alt='' />
                        <img src={require('../../assets/home/section1/lg.jpg')} className='relative hidden lg:block -mr-16' alt='' />
                        <div className='flex px-2 py-1 items-center rounded-md bg-[#F6F6F7] absolute left-2 bottom-4 md:left-8 md:bottom-16 lg:left-32 lg:bottom-12'>
                            <span className='text-sm font-medium leading-6 md:text-xl lg:text-base'>Brandon Klayman,
                                <span className='font-light text-[#7E7D88] md:font-normal'> Conscious Commerce</span>
                                <br />
                                <button className='md:pt-1 text-blue-600 hover:border-b lg:pt-0 hover:border-blue-600 '>
                                    Read success story
                                    <ion-icon name="chevron-forward-outline" style={{ verticalAlign: '-2.5px', fontSize: '12px', marginLeft: '1px' }}></ion-icon>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <Wave1 className='pt-6' />

            <section className=' bg-[#F6F6F7] '>
                <div className='flex flex-col px-5 py-10 container'>
                    <div className='flex flex-col lg:hidden'>
                        <p className='font-extrabold text-4xl md:leading-[3.2rem] md:text-5xl'>Make your business <br />
                            <span className='px-1 bg-[#FED000] rounded-md'>
                                our business
                            </span>
                        </p>
                        <img src={require('../../assets/home/section2/sm.jpg')} alt='sm' />
                    </div>
                    
                    <div className='flex flex-col space-y-6 md:flex-row md:flex-wrap md:space-y-0 lg:hidden'>
                        <div className='flex flex-col md:justify-between md:pr-6 pt-4 space-y-8 md:basis-1/2  '>
                            <div>
                                <h2 className='font-extrabold text-2xl'>Promote, earn, and grow</h2>
                                <span className='font-light text-lg'>Promote products that define excellent customer service. Monetize your audience by simply sharing a link.</span>
                            </div>
                            <button className='transition-color duration-300 hover:bg-[#000000d2] px-6 py-2 bg-black rounded-sm w-3/4 font-bold text-white'>
                                Affiliate Program
                            </button>
                        </div>
                        <div className='flex flex-col md:justify-between pt-4 md:pr-6 space-y-8 md:basis-1/2'>
                            <div>
                                <h2 className='font-extrabold text-2xl'>Become a solution provider</h2>
                                <span className='font-light text-lg'>Create licenses for your customers and offer services around them. Get training, support, and resources dedicated to helping your business grow.</span>
                            </div>
                            <button className='transition-color duration-300 hover:bg-[#000000d2] px-6 py-2 bg-black rounded-sm w-3/4 font-bold text-white'>
                                Solution Program
                            </button>
                        </div>
                        <div className='flex flex-col pt-4 md:justify-between md:pr-6 space-y-8 md:basis-1/2'>
                            <div>
                                <h2 className='font-extrabold text-2xl'>Build and monetize apps</h2>
                                <span className='font-light text-lg'>Create new solutions and market them to our customer base of over 37,000 businesses.</span>
                            </div>
                            <div className='flex'>
                                <button className='text-black hover:underline hover:text-black  font-semibold text-lg '>Visit Developer Program <ion-icon style={{ verticalAlign: '-2.5px' }} name="create-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>

                    {/* lg screen */}
                    <div className='lg:flex flex-col items-end hidden'>
                        <div className="flex">
                            <div className='basis-1/2'>
                                <img src={require('../../assets/home/section2/lg.jpg')} alt='' className='-ml-40' />
                            </div>
                            <div className='flex flex-col basis-1/2 pt-10'>
                                <p className='font-extrabold text-4xl md:leading-[3.2rem] md:text-5xl'>Choose a program <br />that{' '}
                                    <span className='px-1 bg-[#FED000] rounded-md'>
                                        fits you best
                                    </span>
                                </p>
                                <div className='flex space-x-10 pt-8'>
                                    <div className='flex flex-col justify-between space-y-12 basis-1/2  '>
                                        <div className='flex flex-col space-y-6'>
                                            <h2 className='font-extrabold text-3xl'>Promote, earn, and grow</h2>
                                            <span className='font-light text-2xl'>Promote products that define excellent customer service. Monetize your audience by simply sharing a link.</span>
                                        </div>
                                        <button className='transition-color duration-300 hover:bg-[#000000d2] p-2  bg-black rounded-sm w-3/4 text-lg font-bold text-white'>
                                            Affiliate Program
                                        </button>
                                    </div>
                                    <div className='flex flex-col justify-between space-y-12 basis-1/2  '>
                                        <div className='flex flex-col space-y-6'>
                                            <h2 className='font-extrabold text-3xl'>Become a solution provider</h2>
                                            <span className='font-light text-2xl'>Create licenses for your customers and offer services around them. Get training, support, and resources dedicated to helping your business grow.</span>
                                        </div>
                                        <button className='transition-color duration-300 hover:bg-[#000000d2] p-2 text-lg bg-black rounded-sm w-3/4 font-bold text-white'>
                                            Solution Program
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className='basis-1/2'>
                                <img src={require('../../assets/home/section2/lg1.jpg')} alt='' className='-ml-20' />
                            </div>
                            <div className='flex flex-col basis-1/2 pt-10'>
                                <div className='flex space-x-10 pt-8'>
                                    <div className='flex flex-col pt-4 md:justify-between md:pr-6 space-y-8 md:basis-1/2'>
                                        <div>
                                            <h2 className='font-extrabold text-3xl'>Build and monetize apps</h2>
                                            <span className='font-light text-2xl'>Create new solutions and market them to our customer base of over 37,000 businesses.</span>
                                        </div>
                                        <div className='flex'>
                                            <button className='text-black hover:underline hover:text-black  font-semibold text-xl '>Visit Developer Program <ion-icon style={{ verticalAlign: '-2.5px' }} name="create-outline"></ion-icon></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Wave2 className='pt-6 bg-[#F6F6F7]' />

            <section className=' bg-[#FFD000] '>
                <div className='container flex md:items-center  flex-col-reverse md:space-x-8 md:py-14 px-5 py-10 md:space-y-0   space-y-3 md:flex-row'>
                    <div className='flex flex-col'>
                        <p className='text-xl lg:text-4xl font-extrabold md:text-3xl'>“My experience with this Partner Program has been <span className='bg-white px-1 rounded-md'>incredible</span>.
                            Products are easy-to-use, the set up is simple, and we receive a great partner discount.”</p>
                        <div className='py-6 pb-4'>
                            <span className='text-lg font-medium md:text-xl'>Bernard May,<br /></span>
                            <span className='font-light text-sm tracking-wider md:text-lg'>CEO at National Positions</span>
                        </div>
                    </div>
                    <div className=' relative '>
                        <img src={require('../../assets/home/section3/sm.png')} alt='' className='md:max-w-md lg:max-w-lg' />
                    </div>


                </div>
            </section>

            <Wave3 />

            <section style={{ background: 'linear-gradient(to bottom, #fff 50%, #F6F6F7 50%)' }}>
                <div className='container flex flex-col px-5 pb-0 py-10 space-y-3'>

                    <div className='flex space-y-6 flex-col md:px-12 items-center md:space-y-12 justify-center pt-10'>
                        <span className='font-extrabold text-4xl md:text-6xl text-center'>
                            Apps you’re going to love working with
                        </span>
                        <p className='font-light md:text-2xl md:font-normal text-lg text-center'>
                            Excellent alone, powerful when combined.<br />
                            Meet the products from our customer service suite.
                        </p>
                    </div>
                    <div className='flex flex-col space-y-10 py-20'>
                        <div className='flex flex-col  md:pl-6 md:flex-row md:space-y-0 shadow-xl space-y-3 overflow-hidden rounded-lg bg-white' >
                            <div className='flex flex-col lg:pt-32 md:space-y-8 space-y-6 justify-start p-10 bg-white' style={{ flexBasis: '41.66666667%' }}>
                                <OrengeLogo className='h-10 w-44' />
                                <div className='flex flex-col space-y-6 md:space-y-2 '>
                                    <p className='font-light text-lg md:text-xl'>A complete customer service platform for connecting with customers and boosting sales.</p>
                                    <button className='transition-color duration-300 hover:bg-[#000000d2] px-6 py-2 md:px-5 md:py-3 bg-black rounded-sm w-3/4 font-bold text-white'>
                                        Discover LiveChat
                                    </button>
                                </div>
                            </div>
                            <div className='relative md:-bottom-10' style={{ flexBasis: '75%' }}>
                                <img src={require('../../assets/home/section4/smLiveChat.png')} alt="smLiveChat" className='md:hidden' />
                                <img src={require('../../assets/home/section4/mdLiveChat.png')} alt="smChatBot" className='md:block hidden' />
                            </div>

                        </div>
                        <div className='flex flex-col md:pl-6 md:flex-row md:space-y-0 shadow-xl space-y-3 overflow-hidden rounded-lg bg-white'>
                            <div className='flex flex-col lg:pt-32 md:space-y-8 space-y-6 justify-start p-10 bg-white' style={{ flexBasis: '41.66666667%' }}>
                                <BlueLogo className='h-10 w-44' />
                                <div className='flex flex-col space-y-6 md:space-y-2'>
                                    <p className='font-light text-lg md:text-xl'>An all-in-one platform for building and launching chatbots without coding.</p>
                                    <button className='transition-color duration-300 hover:bg-[#000000d2] md:px-5 md:py-3 px-6 py-2 bg-black rounded-sm w-3/4 font-bold text-white'>
                                        Discover ChatBot
                                    </button>
                                </div>
                            </div>
                            <div style={{ flexBasis: '75%' }} className='relative md:-bottom-10'>
                                <img src={require('../../assets/home/section4/smChatBot.png')} alt="smChatBot" className='md:hidden' />
                                <img src={require('../../assets/home/section4/mdChatBot.png')} alt="smChatBot" className='md:block hidden' />
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section className=' bg-[#F6F6F7]'>
                <div className='container flex flex-col md:space-y-20 px-5 py-10'>
                    <p className='font-extrabold text-xl text-center md:text-3xl lg:text-4xl'>
                        <span className='px-2 rounded-md bg-[#FFD000]'>37,000+</span> businesses in over <br />
                        150 countries grow with our products
                    </p>
                    <div className='grid items-center md:gap-14  lg:gap-24 md:grid-cols-4 lg:grid-cols-5 grid-cols-2 overflow-hidden place-items-center gap-8 '>
                        <Huawei className='h-16' />
                        <PayPal className='h-12' />
                        <Ikea className='h-12' />
                        <Ing className='h-12' />
                        <MercedesBenz className='h-16' />
                        <Nikon className='h-16' />
                        <Ricoh className='h-16' />
                        <Ryanair className='h-12' />
                        <Unilever className='h-16 md:hidden lg:block' />
                        <Atlassian className='h-12 md:hidden lg:block' />
                    </div>
                </div>
            </section>

            <Wave4 />

            <section className='bg-white'>
                <div className='container flex flex-col  md:space-x-32 items-center px-5 md:max-h-[34rem]  space-y-6 relative md:justify-start  py-10 md:flex-row  '>
                    <div className='flex flex-col md:pt-24 items-start md:space-y-10 '  >
                        <h2 className='font-extrabold text-3xl md:text-4xl lg:text-6xl'>
                            Together,<br />
                            we’re <span className='px-1 rounded-md bg-[#FFD000]'>stronger</span>
                        </h2>
                        <p className='font-light text-lg md:text-xl lg:text-2xl '>
                            You don’t have to look for a new direction for your business on your own. Join forces with us, and let growth opportunities find you.
                        </p>
                    </div>
                    <div className='z-10 relative md:-bottom-24'  >
                        <img src={require('../../assets/home/section6/sm.png')} alt='' className='max-w-[30rem]' />
                    </div>
                </div>
            </section>

            <Wave5 />

            <section className='bg-[#F6F6F7] '>
                <div className='gap-y-12 grid grid-cols-1 px-5 py-10 md:py-20' style={{ maxWidth: '72.5rem', margin: '0 auto' }}>
                    <div className='gap-y-12 grid grid-cols-1 md:grid-cols-3 md:gap-y-0 md:gap-x-10 lg:gap-x-16'>
                        <div className='flex flex-col space-y-3'>
                            <h2 className='font-extrabold leading-7 text-2xl md:text-3xl lg:text-4xl'>
                                Strengthen your
                                <br />
                                online presence
                            </h2>
                            <p className='font-light text-lg leading-6'>
                                By offering reliable products, you reinforce your brand and gain the credibility you need to attract more customers.

                            </p>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <h2 className='font-extrabold leading-7 text-2xl md:text-3xl lg:text-4xl'>
                                Discover new
                                <br />
                                revenue streams
                            </h2>
                            <p className='font-light text-lg leading-6'>
                                Opening up to the online communication industry will help you to create additional product and service offerings.

                            </p>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <h2 className='font-extrabold leading-7 text-2xl md:text-3xl lg:text-4xl'>
                                Grow your
                                <br />
                                customer base
                            </h2>
                            <p className='font-light text-lg leading-6'>
                                Have your business promoted among our audience and get even more exposure for your business.
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <button className="py-2 px-10  font-semibold transition-color duration-300 text-white rounded-sm bg-[#EE0007]  hover:bg-[#bd0309] items-center flex justify-center">Join Partner Program</button>
                    </div>
                </div>
            </section>

            <Wave6 />

            <section className='bg-white'>
                <div className='px-5 py-10 md:gap-x-10 md:grid  md:grid-flow-col md:px-10 flex flex-col md:py-20 lg:space-y-6  lg:space-x-14 space-y-6 ' style={{ maxWidth: '72.5rem', margin: '0 auto' }}>
                    <img src={require('../../assets/home/section7/sm.jpg')} alt='' className='md:max-w-sm ' />
                    <div className='flex flex-col space-y-6'>
                        <p className='text-2xl font-bold md:font-extrabold md:text-3xl lg:text-4xl'>
                            In this partnership, I was simply looking for <span className='px-1 rounded-md shrink-0 bg-[#FFD000]'>new streams</span> of revenue. A great thing is that I also found lots of co-marketing opportunities and amazing support.
                        </p>
                        <p className='font-bold text-lg'>
                            Syed Balkhi,
                            <br />
                            <span className='font-light'>
                                Owner at WPBeginner
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <Wave7 />

            <section className='bg-[#FFD000] relative overflow-hidden'>
                <div className='hidden md:flex o-decor' style={{ maxWidth: '72.5rem', margin: '0 auto' }}>
                    <LeftSection9 className='o-decor__item u-w-auto v--under v--left u-Mt-xl u--Ml-md' />
                    <RightSection9 className='o-decor__item u-w-auto u-w-auto v--under v--right' />
                </div>
                <div className='flex  flex-col justify-center lg:py-26 md:space-y-6 px-5 py-10 md:py-20' style={{ maxWidth: '34rem', margin: '0 auto' }}>
                    <h1 className='text-3xl lg:text-5xl md:text-4xl font-extrabold text-center'>
                        We can’t wait to see you succeed
                    </h1>
                    <div className='flex flex-col  space-y-2 '>
                        <div className='flex flex-col space-y-2  md:flex-row md:space-y-0 md:space-x-2 items-center justify-center'>
                            <input type="email" placeholder='Enter your email' className='w-full md:w-2/3 border border-black p-4 md:py-3 rounded-sm ' />
                            <button className="p-4 w-full font-semibold md:w-1/3 transition-color duration-300 text-white  md:py-3 rounded-sm bg-[#ee0007]  hover:bg-[#bd0309]">Let’s team up</button>
                        </div>

                        <div className='flex flex-col md:flex-row md:space-x-6 pt-2 justify-center items-center'>
                            <div className='flex space-x-2 '>
                                <ion-icon name="checkmark" style={{ marginTop: '2.5px' }}></ion-icon>
                                <span>Free membership</span>
                            </div>
                            <div className='flex space-x-2 '>
                                <ion-icon name="checkmark" style={{ marginTop: '2.5px' }}></ion-icon>
                                <span>Easy money withdrawal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home