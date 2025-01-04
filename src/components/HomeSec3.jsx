import React from 'react'

const HomeSec3 = ({item=false}) => {
  return (
    <div className='w-full flex justify-center items-center px-[clamp(30px,18.3vw,500px)]  min-h-screen' >
        <div className='flex text-start h-full mx-auto  text-white justify-between w-full  gap-[80px]' >
                <div className={` ${!item ? "order-1" : "order-2" }`} >
                    <img src="/images/mobile/mobile.png" className='w-[350px]' alt="mobile" />
                </div>
               
                <div className={`flex  ${!item ? "order-2" : "order-1" } items-start my-auto flex-col gap-[10px]`} >
                <img src="/images/btn/btn.svg" className='w-[40px] h-auto' alt="mobile" />
                    <h1 className='text-[40px]' >Every crypto you need</h1>
                    <p className='w-[350px] text-white/50 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic natus eveniet dicta expedita et dolorum minima, praesentium quam tempore?</p>
                    <div className='grid grid-cols-2 gap-[5px]' >
                        <div className='p-2 text-center rounded-xl text-white/70 bg-white/10' >
                        Classic Tokens
                        </div>
                        <div className=' p-2 text-center rounded-xl text-white/70 bg-white/10' >
                        Meme Coins
                        </div>
                        <div className=' p-2 text-center px-5 rounded-xl text-white/70 bg-white/10' >
                        Hot & Fresh Tokens
                        </div>
                        <div className=' p-2 text-center rounded-xl text-white/70 bg-white/10' >
                        L1/L2 Tokens
                        </div>
                        
                    </div>
                </div>
        </div>
       
      
    </div>
  )
}

export default HomeSec3
