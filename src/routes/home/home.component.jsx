import { ReactComponent as Wave1} from '../../assets/home/section1/wave.svg'
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
                            <a  className='text-blue-600 hover:border-b hover:border-blue-600 '>
                                Read success story
                                <ion-icon name="chevron-forward-outline" style={{verticalAlign:'-2.5px' ,fontSize:'12px' , marginLeft:'1px'}}></ion-icon>
                                </a>
                        </span>
                    </div>
                </div>
            </section>
            <Wave1/>
        </div>
    )
}

export default Home