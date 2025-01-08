import React from 'react'
import { IoSend } from "react-icons/io5";   

const Contact = () => {
  return (
    <div className='w-full h-[80vh] flex-col gap-[30px] flex justify-center items-center' >
                    <h1 className='text-white text-[clamp(16px,2.6vw,50px)] uppercase quicksand ' >Contact Us</h1>
    <div className='w-[70%] min-h-fit py-[50px]  px-[clamp(20px,5.3vw,100px)] bg-white/10 rounded-3xl glass' >
                <form action="">
                    <div className='flex  flex-col gap-4' >
                        <label htmlFor="" className='text-white text-[20px]'>Name</label>
                        <input type="text" className='px-[10px] text-white py-3 rounded-xl border bg-transparent '  placeholder='Enter Your Name' />
                    </div>
                    <div className='flex mt-3 flex-col gap-4' >
                        <label htmlFor="" className='text-white text-[20px]'>Email</label>
                        <input type="text" className='px-[10px] text-white py-3 rounded-xl border bg-transparent '  placeholder='Enter Your Email' />
                    </div>
                    <div className='flex mt-3 flex-col gap-4' >
                        <label htmlFor="" className='text-white text-[20px]'>Message</label>
                        <textarea type="text" rows={4} className='px-[10px] text-white py-3 rounded-xl border bg-transparent '  placeholder='Write Your Message' />
                    </div>
                    <div className='w-full flex mt-5 justify-end' >
                        <button className='btn ' >Send <span><IoSend /></span> </button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Contact
