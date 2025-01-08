import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen flex-col gap-[30px] flex justify-center items-center' >
                    <h1 className='text-white text-[50px] ' >Hello I am Support Page</h1>
        <div className='w-[70%] min-h-fit py-[100px] px-[100px] bg-white/10 rounded-3xl glass' >
                <form action="">
                    <div className='flex flex-col gap-4' >
                        <label htmlFor="" className='text-white text-[20px]'>Name</label>
                        <input type="text" className='px-[10px] py-3 rounded-xl border bg-transparent '  placeholder='Enter Your Name' />
                    </div>
                    <div className='flex mt-3 flex-col gap-4' >
                        <label htmlFor="" className='text-white text-[20px]'>Email</label>
                        <input type="text" className='px-[10px] py-3 rounded-xl border bg-transparent '  placeholder='Enter Your Email' />
                    </div>
                    <div className='flex mt-3 flex-col gap-4' >
                        <label htmlFor="" className='text-white text-[20px]'>Message</label>
                        <input type="text" className='px-[10px] py-3 rounded-xl border bg-transparent '  placeholder='Enter Your Name' />
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Contact
