import React , {useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
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
    <>
      <Helmet>
                    <meta charSet="utf-8" />
                    <title>Boze Coin | Blogs</title>
                    <link rel="canonical" href="http://bozecoin.com/blogs" />
                </Helmet>
    <div className='w-full min-h-screen grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-2xl:grid-cols-3 max-xl:gap-[30px] max-2xl:gap-[100px]  px-[clamp(20px,4.3vw,150px)]  gap-[60px] pt-[100px] justify-center items-center py-[50px] pb-[100px] bg-black' >
          {
            blogs && blogs?.map((val)=>(

            // /blogs/:id
          <div key={val?.id} className='max-w-full  rounded-xl  w-full h-auto  max-lg:w-full  flex flex-col gap-[clamp(10px,2.3vw,30px)] ' >
                <Link to={`/blogs/${val?.slug}`} className='w-full max-lg:h-auto h-[500px]  rounded-2xl overflow-hidden' >
                <img src={`${import.meta.env.VITE_API_URL}/${val?.cover_img}`} alt={val?.cover_img} className=' w-full h-full object-cover object-center' />
                </Link>
                <div className='w-full flex flex-col items-center justify-center '>
                 <Link to={`/blogs/${val?.slug}`} > <h1 className='text-white text-[clamp(20px,5.2vw,50px)] mb-10' >{val?.title}</h1></Link>
                  <div className='w-full h-1 bg-white rounded-3xl max-md:mt-0 mt-auto' ></div>
                </div>
          </div>
          ))
        }
    </div>
    </>
  )
}

export default Blogs
