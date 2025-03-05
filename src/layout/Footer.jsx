import React from 'react'
import { Link } from 'react-router-dom';
import { FaTelegram , FaYoutube , FaInstagram , FaCircle } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import Nav from '../data/navData';
const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <div className='mt-auto px-[clamp(20px,4.3vw,150px)] w-full  py-10 ' >
        <div className='w-full text-white gap-y-[15px] flex min-h-fit  flex-col' >
            <div className='space-y-4  '  >
                <img src="/images/logo.png" loading="lazy" width="500" height="300" alt="bozecoin" className='w-[120px] h-auto' />
                <p className='w-72 max-sm:w-full text-md capitalize  text-white/50 ' >

                Boze Coin is a community where growth is nurtured, and possibilities bloom
                </p>
            </div>
          
            <div className='text-white text-lg max-lg:flex-col  max-lg:items-center flex justify-between' >

                <div className='flex items-center max-[350px]:flex-col capitalize  max-lg:order-2 text-white   gap-[10px]' >
                <Link onClick={handleClick} to = {"/support/#"}>Contact Support</Link>
                <h4 className='text-sm my-auto' ><FaCircle/></h4>
                <Link to={'https://t.me/bozecoincommunity'} target='_blank' >Join  Community</Link>
                </div>

                <div className='flex items-center max-md:flex-col capitalize  max-lg:order-1 gap-3' >
                    <div className='flex gap-[20px]' >

                    <Link onClick={handleClick} to = {"/publicPolicy"}  >Public Policy</Link>
                    <Link onClick={handleClick} to = {"/whitePaper"}  >White Paper</Link>
                    <Link onClick={handleClick} to = {"/collab"}  >Collab with Us</Link>
                    </div>
                    <ul className="menu menu-horizontal quicksand  text-2xl lg:items-center text-white px-1">
          {
            Nav && Nav?.map((val, key)=>(
            <li key={key}  >
                {
                    val.title === 'telegram' ? <Link to={val?.link} target='_blank' className='text-white' ><FaTelegram/></Link> :
                    val.title === 'youtube' ? <Link to={val?.link} target='_blank' className='text-white' ><FaYoutube/> </Link> :
                    val.title === 'instagram' ? <Link to={val?.link} target='_blank' className='text-white' ><FaInstagram/></Link> :
                    val.title === 'threads' ? <Link to={val?.link} target='_blank' className='text-white' ><FaSquareThreads/> </Link> :
                    null
                }
          </li>
            ))
          }

        </ul>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Footer
