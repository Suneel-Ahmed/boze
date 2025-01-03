import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-full h-[90vh] flex flex-col justify-start   items-center '  >
        <h1 className='text-[110px] mt-[200px] quicksand font-extrabold text-white'>All Crypto — One App</h1>
        
        
        <Link to={'/'} className='text-center btn btn-lg  text-[24px] mt-[40px]  ' >Launch Boze on Telegram</Link>

        
    </div>
  )
}

export default Home
