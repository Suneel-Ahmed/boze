import React from 'react'

const HomeSec4 = () => {
  return (
    <div className='w-full flex justify-center items-center min-h-screen py-[100px] px-[clamp(20px,10.3vw,150px)] ' >
         <div className=' w-full grid grid-cols-3 ' >
                <div className=' h-full grid grid-rows-2' >
                    <div className='flex flex-col me-auto items-start' >
                            <img src="/images/logo.png" alt="boze" className='w-[100px]' />
                            <h1 className='text-[30px] text-white ' >Easy to use</h1>
                            <p className='text-[18px] w-[300px] text-white/50' >Trade without chain switching, native token gas fees, or endless transaction confirmations.</p>
                    </div>
                    <div className='flex flex-col me-auto items-start' >
                            <img src="/images/logo.png" alt="boze" className='w-[100px]' />
                            <h1 className='text-[30px] text-white ' >Enter memecoin world</h1>
                            <p className='text-[18px] w-[300px] text-white/50' >Launch and trade memecoins with ease, reaching millions of users from the very start</p>
                    </div>
                </div>
                <div  className=' flex justify-center ' >
                    <img src="/images/mobile/mobile.png" className='w-[300px]'  alt="mobile" />
                </div>
                <div className=' h-full grid  grid-rows-2' >
                <div className='flex flex-col ms-auto ' >
                            <img src="/images/logo.png" alt="boze" className='w-[100px]' />
                            <h1 className='text-[30px] text-white ' >Trading via Telegram</h1>
                            <p className='text-[18px] w-[300px] text-white/50' >A unique mini app experience with mobile-first design and integrated gamified mechanics</p>
                    </div>
                    <div className='flex flex-col ms-auto items-start' >
                            <img src="/images/logo.png" alt="boze" className='w-[100px]' />
                            <h1 className='text-[30px] text-white ' >Earn like never before</h1>
                            <p className='text-[18px] w-[300px] text-white/50' >Make your on-chain activity Earn real rewards</p>
                    </div>
                </div>
         </div>
    </div>
  )
}

export default HomeSec4
