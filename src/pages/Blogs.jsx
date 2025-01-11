import React , {useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Blogs = () => {
  const [blogs , setBlogs] = useState(null)

  const getData = async () => {
    try {
      const {data} = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blogs`
      );
      const blogs = data?.data;
      if(blogs && blogs.length > 0) {
        setBlogs(blogs)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])

 

  return (
    <div className='w-full min-h-screen flex flex-col max-lg:px-[clamp(30px,6.7vw,100px)]  gap-[clamp(30px,12.2vw,150px)] pt-[100px] justify-center items-center bg-black' >
          {
            blogs && blogs.map((val)=>(

            // /blogs/:id
          <div key={val.id} className='max-w-[800px] bg-slate-900 w-full h-auto  max-lg:w-full  flex flex-col gap-[clamp(10px,2.3vw,30px)] ' >
                <Link to={`/blogs/${val.slug}`} className='w-full max-lg:h-auto h-[500px]  rounded-2xl overflow-hidden' >
                <img src={`${import.meta.env.VITE_API_URL}/${val.cover_img}`} alt={val.cover_img} className=' w-full h-full object-cover object-center' />
                </Link>
                <div className='w-full flex flex-col items-center justify-center '>
                 <Link to={`/blogs/${val.slug}`} > <h1 className='text-white text-[clamp(20px,5.2vw,50px)] mb-10' >{val.title}</h1></Link>
                  <div className='w-full h-1 bg-white rounded-xl max-md:mt-0 mt-auto' ></div>
                </div>
          </div>
          ))
        }
    </div>
  )
}

export default Blogs
