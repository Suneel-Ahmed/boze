import React , {useState , useEffect} from "react";
import { useParams   } from "react-router-dom";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import axios from "axios";
import { Helmet } from "react-helmet";
const SingleBlog = () => {
  const {slug} = useParams();
  const [btn1 , setBtn1] = useState(false);
  const [timmer1 , setTimmer1] = useState(false);
  const [timmer2 , setTimmer2] = useState(false);
  const [code1 , setCode1] = useState();
  const [code2 , setCode2] = useState();
  const [blog ,setBlog] = useState();

  const handleBtn1 = ()=>{
    setTimmer2(true)
    window.open(blog[0]?.button1, "_blank");
    setTimeout(
      ()=>{
        setCode1(blog[0]?.action1)
        setTimmer2(false)
      },blog[0]?.sec
    )
  }

  const handleBtn2 = ()=>{
    setTimmer1(true)
    window.open(blog[0]?.button2, "_blank");
    setTimeout(
      ()=>{
        setBtn1(true)
        setCode2(blog[0]?.action2)
        setTimmer1(false)
      },blog[0]?.sec
    )

  }

  const getData = async () => {
    try {
    
      const {data} = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blogs/${slug}`
      );
      const blogs = data?.data;
      if(blogs && blogs?.length > 0) {
        setBlog(blogs)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{    
    getData();
  },[])

  return (
    <>
               <Helmet>
                    <meta charSet="utf-8" />
                    <title>Boze Coin | {slug} </title>
                </Helmet>
    <div className="w-full min-h-screen flex flex-col  max-lg:px-[clamp(30px,6.7vw,100px)]  gap-[clamp(30px,12.2vw,150px)]  justify-center items-center bg-black">
      {/* {blog && blog[0] && <Link to={blog[0]?.button1} className = "btn btn-neutral" >{blog[0]?.action1}</Link>} */}
      {blog &&
        blog?.map((val) => (
          // /blogs/:id
          <div key={val?.id} className="w-[70%] max-lg:w-full flex flex-col gap-[30px] ">
            <div
              
              className="w-full h-[500px] max-lg:h-auto   rounded-2xl overflow-hidden"
            >
              <h1 className="text-white text-[clamp(20px,5.2vw,50px)] text-center mb-10">{val?.title}</h1>
              <img
                src={`${import.meta.env.VITE_API_URL}/${val?.cover_img}`}
                alt={val?.cover_img}
                className=" w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center ">
              
                {" "}
                
                { btn1 && blog && blog[0] && <button onClick={handleBtn1} className = {`btn btn-neutral  h-fit p-2  ${timmer2 && "bg-[#feb51f] rounded-full text-black "}  my-3`} >
                  
                  {
                timmer2 ?  <CountdownCircleTimer
                isPlaying
                strokeWidth={3}
                size={100}
                duration={blog[0]?.sec / 1000}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer> :
                "Generate Code"}</button>}
               {code1 &&  <span className="text-xl text-red-500 text-center" >{code1}</span>  }
              
              <div className="w-full h-1 bg-white rounded-3xl max-lg:mt-0 mt-auto"></div>
            </div>
            <div className="w-full flex flex-col gap-5 text-[16px] text-white/50" >
            <div dangerouslySetInnerHTML={{ __html: val?.content }} />
            <div className="flex flex-col items-center gap-[10px]" >
            {blog && blog[0] && <button onClick={handleBtn2} className = {` w-fit mx-auto btn  h-fit p-2 btn-neutral ${timmer1 && "bg-[#feb51f] rounded-full text-black "}  `} >  {
            timmer1 ?
            <CountdownCircleTimer
    isPlaying
    strokeWidth={3}
    size={100}
    duration={blog[0]?.sec / 1000}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
        : "Generate Code"   }</button>}
            {code2 && <span className="text-xl text-red-500 text-center" >{code2}</span>}
         
           
            </div>
            </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default SingleBlog;
