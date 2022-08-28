import { ReactComponent as Wave1 } from '../../assets/home/section1/wave.svg'
import { ReactComponent as Wave2 } from '../../assets/home/section2/wave.svg'
import { ReactComponent as Wave3 } from '../../assets/home/section3/wave.svg'
import { ReactComponent as Wave4 } from '../../assets/home/section5/wave.svg'
import { ReactComponent as Wave5 } from '../../assets/home/section6/wave.svg'
import { ReactComponent as Wave6 } from '../../assets/home/section7/wave.svg'
import { ReactComponent as Wave7 } from '../../assets/home/section8/wave.svg'




import { ReactComponent as OrengeLogo } from '../../assets/home/section4/orenge.svg'
import { ReactComponent as BlueLogo } from '../../assets/home/section4/blue.svg'
import { Unilever, Ryanair, Ricoh, PayPal, Nikon, MercedesBenz, Ing, Ikea, Atlassian, Huawei } from '../../assets/home/section5'






const Home = () => {
    return (
        <div className="flex flex-col ">

            <section className="flex flex-col px-5 py-3 space-y-4">

                <div className="flex flex-col justify-center pt-10 items-center">
                    <h1 className="font-extrabold text-4xl text-center ">Let’s become <br />
                        <span className="px-1 bg-[#ffd000] rounded-md"> Partners!</span>
                    </h1>
                    <p className="text-center text-2xl px-2 font-light">
                        We have excellent communication products, you have your audience. Let’s conquer the market together.
                    </p>
                </div>
                <div className="flex flex-col space-y-1">
                    <input type="email" placeholder='Enter your email' className='w-full outline-[#ffd000] border border-black p-4 rounded-md ' />
                    <button className="p-4 w-full font-semibold transition-color duration-300 text-white rounded-md bg-[#ee0007]  hover:bg-[#bd0309]">Join Partner Program</button>
                </div>
                <div className="flex flex-col space-y-16 py-8">
                    <div className="flex justify-center items-center">
                        <h1 className="text-lg font-extrabold text-center leading-6" >37,000+ <br /> <span className="font-light">businesses using our products</span></h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1 className="text-lg font-extrabold text-center leading-6" >1,500+ <br /> <span className="font-light">active Partners</span></h1>
                    </div>
                </div>

                <div className='relative'>
                    <img src={require('../../assets/home/section1/sm.jpg')} className='relative' />
                    <div className='flex px-2 py-1 items-center rounded-md bg-[#F6F6F7] absolute left-2 bottom-4'>
                        <span className='text-sm font-medium leading-6'>Brandon Klayman,
                            <span className='font-light text-[#7E7D88]'> Conscious Commerce</span>
                            <br />
                            <a className='text-blue-600 hover:border-b hover:border-blue-600 '>
                                Read success story
                                <ion-icon name="chevron-forward-outline" style={{ verticalAlign: '-2.5px', fontSize: '12px', marginLeft: '1px' }}></ion-icon>
                            </a>
                        </span>
                    </div>
                </div>
            </section>

            <Wave1 className='pt-6' />

            <section className='flex bg-[#F6F6F7] flex-col px-5 py-10 '>
                <p className='font-extrabold text-4xl'>Make your business <br />
                    <span className='px-1 bg-[#FED000] rounded-md'>
                        our business
                    </span>
                </p>
                <img src={require('../../assets/home/section2/sm.jpg')} />
                <div className='flex flex-col space-y-6'>
                    <div className='flex flex-col pt-4 space-y-8'>
                        <div>
                            <h2 className='font-extrabold text-2xl'>Promote, earn, and grow</h2>
                            <span className='font-light text-lg'>Promote products that define excellent customer service. Monetize your audience by simply sharing a link.</span>
                        </div>
                        <button className='transition-color duration-300 hover:bg-[#000000d2] px-6 py-2 bg-black rounded-sm w-3/4 font-bold text-white'>
                            Affiliate Program
                        </button>
                    </div>
                    <div className='flex flex-col pt-4 space-y-8'>
                        <div>
                            <h2 className='font-extrabold text-2xl'>Become a solution provider</h2>
                            <span className='font-light text-lg'>Create licenses for your customers and offer services around them. Get training, support, and resources dedicated to helping your business grow.</span>
                        </div>
                        <button className='transition-color duration-300 hover:bg-[#000000d2] px-6 py-2 bg-black rounded-sm w-3/4 font-bold text-white'>
                            Solution Program
                        </button>
                    </div>
                    <div className='flex flex-col pt-4 space-y-8'>
                        <div>
                            <h2 className='font-extrabold text-2xl'>Build and monetize apps</h2>
                            <span className='font-light text-lg'>Create new solutions and market them to our customer base of over 37,000 businesses.</span>
                        </div>
                        <div className='flex'>
                            <a className='text-black hover:underline hover:text-black  font-semibold text-lg '>Visit Developer Program <ion-icon style={{ verticalAlign: '-2.5px' }} name="create-outline"></ion-icon></a>
                        </div>
                    </div>
                </div>
            </section>

            <Wave2 className='pt-6 bg-[#F6F6F7]' />

            <section className='flex bg-[#FFD000] flex-col px-5 py-10 space-y-3'>
                <img src={require('../../assets/home/section3/sm.png')} />
                <p className='text-xl font-extrabold'>“My experience with this Partner Program has been <span className='bg-white px-1 rounded-md'>incredible</span>.
                    Products are easy-to-use, the set up is simple, and we receive a great partner discount.”</p>
                <div className='py-6 pb-4'>
                    <span className='text-lg font-medium'>Bernard May,<br /></span>
                    <span className='font-light text-sm tracking-wider'>CEO at National Positions</span>
                </div>
            </section>

            <Wave3 />

            <section className='flex flex-col px-5 pb-0 py-10 space-y-3' style={{ background: 'linear-gradient(to bottom, #fff 50%, #F6F6F7 50%)' }}>
                <div className='flex space-y-6 flex-col items-center justify-center pt-10'>
                    <span className='font-extrabold text-4xl text-center'>
                        Apps you’re going to love working with
                    </span>
                    <p className='font-light text-lg text-center'>
                        Excellent alone, powerful when combined.
                        Meet the products from our customer service suite.
                    </p>
                </div>
                <div className='flex flex-col space-y-10 py-20'>
                    <div className='flex flex-col shadow-xl space-y-3 overflow-hidden rounded-lg bg-white'>
                        <div className='flex flex-col space-y-6 justify-start p-10 bg-white'>
                            <OrengeLogo className='h-10 w-44' />
                            <p className='font-light text-lg'>A complete customer service platform for connecting with customers and boosting sales.</p>
                            <button className='transition-color duration-300 hover:bg-[#000000d2] px-6 py-2 bg-black rounded-sm w-3/4 font-bold text-white'>
                                Discover LiveChat
                            </button>
                        </div>

                        <img src={require('../../assets/home/section4/smLiveChat.png')} alt="" />

                    </div>
                    <div className='flex flex-col shadow-xl space-y-3 overflow-hidden rounded-lg bg-white'>
                        <div className='flex flex-col space-y-6 justify-start p-10 bg-white'>
                            <BlueLogo className='h-10 w-44' />
                            <p className='font-light text-lg'>An all-in-one platform for building and launching chatbots without coding.</p>
                            <button className='transition-color duration-300 hover:bg-[#000000d2] px-6 py-2 bg-black rounded-sm w-3/4 font-bold text-white'>
                                Discover ChatBot
                            </button>
                        </div>
                        <img src={require('../../assets/home/section4/smChatBot.png')} alt="" />
                    </div>
                </div>
            </section>

            <section className='flex bg-[#F6F6F7] flex-col px-5 py-10'>
                <p className='font-extrabold text-xl text-center'>
                    <span className='px-2 rounded-md bg-[#FFD000]'>37,000+</span> businesses in over
                    150 countries grow with our products
                </p>
                <div className='grid items-center grid-cols-2 overflow-hidden place-items-center gap-8 '>
                    <Huawei className='h-16' />
                    <PayPal className='h-12' />
                    <Ikea className='h-12' />
                    <Ing className='h-12' />
                    <MercedesBenz className='h-16' />
                    <Nikon className='h-16' />
                    <Ricoh className='h-16' />
                    <Ryanair className='h-12' />
                    <Unilever className='h-16' />
                    <Atlassian className='h-12' />
                </div>
            </section>

            <Wave4 />

            <section className='flex flex-col bg-white px-5 space-y-6 relative py-10 '>
                <div className='flex flex-col space-y-5'>
                    <h2 className='font-extrabold text-3xl'>
                        Together,<br />
                        we’re <span className='px-1 rounded-md bg-[#FFD000]'>stronger</span>
                    </h2>
                    <p className='font-light text-lg '>
                        You don’t have to look for a new direction for your business on your own. Join forces with us, and let growth opportunities find you.
                    </p>
                </div>
                <div className='z-10' >
                    <img src={require('../../assets/home/section6/sm.png')} />
                </div>
            </section>

            <Wave5 className='' />

            <section className='bg-[#F6F6F7] gap-y-12 grid grid-cols-1 px-5 py-10'>
                <div className='flex flex-col space-y-3'>
                    <h2 className='font-extrabold leading-7 text-2xl'>
                        Strengthen your
                        <br />
                        online presence
                    </h2>
                    <p className='font-light text-lg leading-6'>
                        By offering reliable products, you reinforce your brand and gain the credibility you need to attract more customers.

                    </p>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h2 className='font-extrabold leading-7 text-2xl'>
                        Discover new
                        <br />
                        revenue streams
                    </h2>
                    <p className='font-light text-lg leading-6'>
                        Opening up to the online communication industry will help you to create additional product and service offerings.

                    </p>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h2 className='font-extrabold leading-7 text-2xl'>
                        Grow your
                        <br />
                        customer base
                    </h2>
                    <p className='font-light text-lg leading-6'>
                        Have your business promoted among our audience and get even more exposure for your business.
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className="py-2 px-10  font-semibold transition-color duration-300 text-white rounded-sm bg-[#EE0007]  hover:bg-[#bd0309] items-center flex justify-center">Join Partner Program</button>
                </div>
            </section>

            <Wave6 />

            <section className='px-5 py-10 flex flex-col space-y-6'>
                <img src={require('../../assets/home/section7/sm.jpg')} />
                <div className='flex flex-col space-y-6'>
                    <p className='text-2xl font-bold'>
                        In this partnership, I was simply looking for <span className='px-1 rounded-md bg-[#FFD000]'>new streams</span> of revenue. A great thing is that I also found lots of co-marketing opportunities and amazing support.
                    </p>
                    <p className='font-bold text-lg'>
                        Syed Balkhi,
                        <br />
                        <span className='font-light'>
                            Owner at WPBeginner
                        </span>
                    </p>
                </div>
            </section>

            <Wave7 />

            <section className='flex flex-col px-5 py-10 bg-[#FFD000]'>
                <h1 className='text-3xl font-extrabold text-center'>
                    We can’t wait to see you succeed
                </h1>
                <div className='flex flex-col space-y-2'>
                    <input type="email" placeholder='Enter your email' className='w-full border border-black p-4 rounded-sm ' />
                    <button className="p-4 w-full font-semibold transition-color duration-300 text-white rounded-sm bg-[#ee0007]  hover:bg-[#bd0309]">Let’s team up</button>
                    <div className='flex flex-col pt-2 justify-center items-center'>
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
            </section>
        </div>
    )
}

export default Home