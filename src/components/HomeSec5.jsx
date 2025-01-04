import React from 'react'
import { Link } from 'react-router-dom'
const HomeSec5 = () => {
  return (
    <div className='w-full h-[70vh] flex justify-center mt-10 items-end' >
        <div className='w-[80%] h-full grid grid-cols-2 yellow-gradient rounded-2xl' >
                    <div className='flex justify-center items-center flex-col' >
                        <h1 className='text-[50px] text-white font-semibold quicksand w-[500px] text-center ' >Start your crypto journey with Blum today</h1>
                        <Link to={'/'} className='text-center z-10 btn btn-lg  text-[24px] mt-[40px]  ' >Launch Boze on Telegram</Link>
                    </div>
                    <div className='ms-auto mt-auto me-16' >
                        <img src="/images/mobile/mobile2.png" alt="mobile" className='w-[400px]' />
                    </div>
        </div>
      
    </div>
  )
}

export default HomeSec5
