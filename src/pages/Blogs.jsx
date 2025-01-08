import React from 'react'
import { Link } from 'react-router-dom'
const Blogs = () => {
  
  const data = [
    {
      id : 1,
      img : 'https://plus.unsplash.com/premium_photo-1681487464375-7cde580bf4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      heading : "Boze Coin Trading"
    },
    {
      id : 2,
      img : 'https://images.unsplash.com/photo-1640679280345-55d95b7b961b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D',
      heading : "Boze Coin Trading"
    },
    {
      id : 3,
      img : 'https://images.unsplash.com/photo-1642576422624-fd0df2b084d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D',
      heading : "Boze Coin Trading"
    },
    {
      id : 4,
      img : 'https://images.unsplash.com/photo-1640055704241-46bdb0bacbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D',
      heading : "Boze Coin Trading"
    },
    {
      id : 5,
      img : 'https://images.unsplash.com/photo-1641370417425-951641190fff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D',
      heading : "Boze Coin Trading"
    },
    {
      id : 6,
      img : 'https://images.unsplash.com/photo-1641197059056-7c4a6736de7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D',
      heading : "Boze Coin Trading"
    },
  ]

  return (
    <div className='w-full min-h-screen flex flex-col max-lg:px-[clamp(30px,6.7vw,100px)]  gap-[clamp(30px,12.2vw,150px)] pt-[100px] justify-center items-center bg-black' >
          {
            data && data.map((val)=>(

            // /blogs/:id
          <div key={val.id} className='max-w-[800px] h-auto  max-lg:w-full  flex flex-col gap-[clamp(10px,2.3vw,30px)] ' >
                <Link to={`/blogs/${val.id}`} className='w-full max-lg:h-auto h-[500px]  rounded-2xl overflow-hidden' >
                <img src={val.img} alt={val.img} className=' w-full h-full object-cover object-center' />
                </Link>
                <div className='w-full flex flex-col items-center justify-center '>
                 <Link to={`/blogs/${val.id}`} > <h1 className='text-white text-[clamp(20px,5.2vw,50px)] mb-10' >{val.heading}</h1></Link>
                  <div className='w-full h-1 bg-white rounded-xl max-md:mt-0 mt-auto' ></div>
                </div>
          </div>
          ))
        }
    </div>
  )
}

export default Blogs
