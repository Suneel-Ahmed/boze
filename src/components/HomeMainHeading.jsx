import React , {memo} from 'react'

const HomeMainHeading = memo( () => {
  return (
    <h1
    className="text-[clamp(30px,6.3vw,100px)] px-[30px] leading-[140%] lg:w-[60%] 
    text-center z-10 quicksand font-extrabold text-white"
    style={{ fontDisplay: "swap" }} // Prevents render blocking
  >
    Boze Coin <br /> A Revenue Sharing Project
  </h1>
  )
});

export default HomeMainHeading
