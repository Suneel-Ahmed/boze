import React from 'react'

const HomeSec4 = () => {
  return (
    <div className='w-full flex  justify-center items-center min-h-fit   py-[15vh] px-[clamp(20px,10.3vw,150px)] ' >
         <div className=' w-full grid grid-cols-3 max-lg:gap-[20px] max-lg:grid-cols-1 ' >
                <div className=' h-full grid grid-rows-2 max-md:grid-cols-1 max-lg:grid-rows-1 max-lg:grid-cols-2 max-lg:mt-[30px] max-lg:gap-10 max-lg:order-2 max-lg:items-center max-lg:justify-center ' >
                    <div className='flex flex-col me-auto max-lg:mx-auto max-lg:items-center max-lg:text-center items-start' >
                            <img src="/images/logo/1.svg" loading="lazy" width="500" height="300" alt="boze" className='w-[80px]' />
                            <h1 className='text-[30px] capitalize text-white mt-4 ' >Easy to use</h1>
                            <p className='text-[18px] w-[300px] capitalize text-white/50' >Open Tasks → Insert Code → Claim Reward</p>
                    </div>
                    <div className='flex flex-col me-auto max-lg:mx-auto max-lg:items-center max-lg:text-center items-start' >
                            <img src="/images/logo/2.svg" loading="lazy" width="500" height="300" alt="boze" className='w-[80px]' />
                            <h1 className='text-[30px] text-white mt-4 capitalize ' >Let’s Watch and Earn</h1>
                            <p className='text-[18px] w-[300px] text-white/50 capitalize ' >Unlike other platforms where users need to create content to earn, with Boze Coin, it’s all about watching and earning!</p>
                    </div>
                </div>
                <div  className=' flex justify-center max-md:hidden max-lg:order-1 ' >
                    <img src="/images/mobile/1.png" loading="lazy" width="500" height="300" className='w-[300px]'  alt="mobile" />
                </div>
                <div className=' h-full grid  grid-rows-2 max-md:grid-cols-1 max-lg:mt-[40px] max-lg:grid-rows-1 max-lg:grid-cols-2  max-lg:gap-10 max-lg:items-start max-lg:justify-center max-lg:order-3' >
                <div className='flex flex-col ms-auto max-lg:mx-auto max-lg:items-center max-lg:text-center items-start ' >
                            <img src="/images/logo/3.svg" alt="boze" className='w-[80px]' />
                            <h1 className='text-[30px] text-white mt-4 capitalize ' >Earn Via Telegram</h1>
                            <p className='text-[18px] w-[300px] text-white/50 capitalize' >Open Telegram, interact with Boze Coin, complete tasks, and earn points.</p>
                    </div>
                    <div className='flex flex-col ms-auto max-lg:mx-auto max-lg:items-center max-lg:text-center items-start' >
                            <img src="/images/logo/4.svg" loading="lazy" width="500" height="300" alt="boze" className='w-[80px]' />
                            <h1 className='text-[30px] text-white mt-4 capitalize ' >Earn like never before</h1>
                            <p className='text-[18px] w-[300px] text-white/50 capitalize ' >Redefine your earnings experience rewards like never before
</p>
                    </div>
                </div>
         </div>
    </div>
  )
}

export default HomeSec4
