import React , {useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SingleBlog = () => {
  const {slug} = useParams();

  const [blog ,setBlog] = useState();
  const getData = async () => {
    try {
      const {data} = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blogs/${slug}`
      );
      const blogs = data?.data;
      if(blogs && blogs.length > 0) {
        setBlog(blogs)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="w-full min-h-screen flex flex-col  max-lg:px-[clamp(30px,6.7vw,100px)]  gap-[clamp(30px,12.2vw,150px)] pt-[100px] justify-center items-center bg-black">
      {blog &&
        blog.map((val) => (
          // /blogs/:id
          <div key={val?.id} className="w-[70%] max-lg:w-full flex flex-col gap-[30px] ">
            <div
              
              className="w-full h-[500px] max-lg:h-auto   rounded-2xl overflow-hidden"
            >
              <img
                src={`${import.meta.env.VITE_API_URL}/${val?.cover_img}`}
                alt={val?.cover_img}
                className=" w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center ">
              
                {" "}
                <h1 className="text-white text-[clamp(20px,5.2vw,50px)] mb-10">{val?.title}</h1>
              
              <div className="w-full h-1 bg-white rounded-xl max-lg:mt-0 mt-auto"></div>
            </div>
            <div className="w-full flex flex-col gap-10 text-[16px] text-white/50" >
            <div dangerouslySetInnerHTML={{ __html: val?.content }} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleBlog;
