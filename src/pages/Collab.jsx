import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import { Helmet } from 'react-helmet';
const Collab = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    whatsapp : ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:tajordermenow@gmail.com?subject=Collaboration Request from ${encodeURIComponent(
      formData.name
    )}&body=Hello,%0D%0A%0D%0AName: ${encodeURIComponent(
      formData.name
    )}%0D%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0D%0Awhatsapp: ${encodeURIComponent(
      formData.whatsapp
    )}
    %0D%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Helmet>
                    <meta charSet="utf-8" />
                    <title>Boze Coin | Collab Us</title>
                    <link rel="canonical" href="https://bozecoin.com/collab" />
                </Helmet>
    <div className='w-full h-[80vh] flex-col gap-[30px] flex justify-center items-center'>
      <h1 className='text-white text-[clamp(16px,2.6vw,50px)] uppercase quicksand'>Collab With Us</h1>
      <div className='w-[70%] min-h-fit py-[50px] px-[clamp(20px,5.3vw,100px)] bg-white/10 rounded-3xl glass'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <label className='text-white text-[20px]'>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='px-[10px] text-white py-3 rounded-xl border bg-transparent'
              placeholder='Enter Your Name'
              required
            />
          </div>
          <div className='flex mt-3 flex-col gap-4'>
            <label className='text-white text-[20px]'>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='px-[10px] text-white py-3 rounded-xl border bg-transparent'
              placeholder='Enter Your Email'
              required
            />
          </div>
          <div className='flex mt-3 flex-col gap-4'>
            <label className='text-white text-[20px]'>Whats App</label>
            <input
              type="number"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className='px-[10px] text-white py-3 rounded-xl border bg-transparent'
              placeholder='Enter Your WhatsApp Number'
              required
            />
          </div>
          <div className='flex mt-3 flex-col gap-4'>
            <label className='text-white text-[20px]'>Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className='px-[10px] text-white py-3 rounded-xl border bg-transparent'
              placeholder='Write Your Message'
              required
            />
          </div>
          <div className='w-full flex mt-5 justify-end'>
            <button type="submit" className='btn'>
              Send <span><IoSend /></span>
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Collab;
