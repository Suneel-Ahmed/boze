import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div className='w-full min-h-screen px-[clamp(20px,4.3vw,150px)] flex flex-col bg-[#000]' >
      <Navbar/>
      {children}
      
      <Footer/>
    </div>
  )
}

export default Layout
