import React from 'react'
import { Link } from 'react-router-dom'
const HomeSec5 = () => {
  return (
    <div className='w-full min-h-fit  flex justify-center mt-10 items-end' >
        <div className='w-[80%] h-full grid grid-cols-2 yellow-gradient max-sm:pt-5 rounded-2xl' >
                    <div className='flex justify-center items-center flex-col' >
                        <h1 className='text-[clamp(16px,2.6vw,50px)] px-[10px] lg:px-[25px] text-white font-semibold quicksand  text-center ' >Start your crypto journey with Blum today</h1>
                        <Link to={'/'} className='text-center z-10 btn  btn-lg  max-lg:btn-md max-lg:btn-xl max-md:btn-xs  text-[clamp(16px,2.1vw,24px)] max-lg:mt-[10px] mt-[40px]  ' >Boze on Telegram</Link>
                    </div>
                    <div className='ms-auto mt-auto me-16 max-md:me-0' >
                        <img src="/images/mobile/mobile2.png" alt="mobile" className='w-[clamp(100px,80%,400px)]' />
                    </div>
        </div>
      
    </div>
  )
}

export default HomeSec5
