import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import axios from "axios";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";
import { FaRegCopy } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';

const SingleBlog = () => {
  const { slug } = useParams();
  const [btn1, setBtn1] = useState(false);
  const [timmer1, setTimmer1] = useState(false);
  // const [timmer2, setTimmer2] = useState(false);
  // const [code1, setCode1] = useState();
  const [code2, setCode2] = useState();
  const [blog, setBlog] = useState(null);


  
const [, copy] = useCopyToClipboard();
 
const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};



const handleBtn2 = () => {
    setTimmer1(true);
 
    const url = blog[0]?.button2 
   

    // window.open(url, '_blank');
    //Like this??          
    openInNewTab(url);   // x is first link
    
    
    
    setTimeout(() => {
      setBtn1(true);
      
      setCode2(blog[0]?.action2);
      setTimmer1(false);
    }, blog[0]?.sec);
  };

  

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blogs/${slug}`
      );
      const blogs = data?.data;
      if (blogs && blogs?.length > 0) {
        setBlog(blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

 

  if (!blog) {
    return (
      <div className="w-full flex justify-center min-h-screen items-center bg-black">
        <Loading />
      </div>
    );
  }

  return (
    <>
    <Toaster/>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Boze Coin | {slug} </title>
        <meta
          name="keywords"
          content="Boze Coin, Meme Coin, Alt Coins, Meme vs Alt, Meme Coins are Best to Invest, Best Meme, Best Alt Coins, Best Coins, Best Meme Coins Project, 2025, Best Crypto Investments 2025, High ROI Crypto Projects, Long-Term Crypto Investment, Passive Income Crypto 2025, Best DeFi Investment Strategies, Web3 Investment Opportunities, Cryptocurrency Portfolio Management, Crypto Trading for Beginners, Earn Free Cryptocurrency, Free Bitcoin Earning Sites, Airdrop Crypto 2025, Best Free Airdrops 2025, Watch Videos and Earn Crypto, Earn Bitcoin Watching Ads, Social Media Engagement Rewards, Web3 Task-Based Earning, Play-to-Earn vs Watch-to-Earn, Best Crypto Referral Programs 2025, Passive Income Through Crypto Referrals, Web3 Affiliate Marketing, High-Paying Crypto Referral Programs, New Airdrops with Low Competition, Best Play-to-Earn Crypto Games, Web3 Social Media Rewards, NFT Staking for Passive Income, Play-to-Earn vs Free-to-Earn, Cloud Mining Free Trial, Best Proof-of-Stake Coins, No Deposit Free Crypto, Telegram Airdrops No Gas Fee, Passive Income Crypto Mining, Crypto Faucet List 2025, Upcoming Airdrops 2025, Free Tokens Without Investment, Best Blockchain Airdrops 2025, Crypto Insurance & Risk Management, Best Blockchain-Based Insurance Platforms, Decentralized Finance Insurance, Smart Contract Insurance Solutions, Boze Coin Free Earning, Free Learning & Crypto Rewards, Tap-to-Earn Crypto, Best Crypto Mining Without Investment, Watch and Earn Crypto, Best Staking Coins 2025"
        />
      </Helmet>
      <div className="w-full min-h-screen flex flex-col  max-lg:px-[clamp(30px,6.7vw,100px)]  gap-[clamp(30px,12.2vw,150px)]  justify-center items-center bg-black">
   
        {/* {blog && blog[0] && <Link to={blog[0]?.button1} className = "btn btn-neutral" >{blog[0]?.action1}</Link>} */}
        {blog &&
          blog?.map((val) => (
            // /blogs/:id
            <div
              key={val?.id}
              className="w-[70%] max-lg:w-full flex flex-col gap-[30px] "
            >
              <div className="w-full  max-h-[630px] flex flex-col items-center    rounded-2xl overflow-hidden">
                <h1 className="text-white text-[clamp(20px,5.2vw,50px)] text-center single_blog_heading ">
                  {val?.title}
                </h1>
                <img
                  src={`${import.meta.env.VITE_API_URL}/${val?.cover_img}`}
                  alt={val?.cover_img}
                  loading="lazy" width="500" height="300"
                  className="  max-h-[630px] w-full h-full object-cover object-bottom  "
                />
              </div>
            
              <div className="w-full flex flex-col items-center justify-center ">
               
                <div className="w-full h-1 bg-white/30 rounded-3xl max-lg:mt-0 mt-auto"></div>
              </div>
              <div className="w-full flex flex-col gap-5 text-[16px] text-white/50">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: val?.content }}
                />
                <div className="flex flex-col items-center gap-[10px]">
                  {blog && blog[0] && (
                    <button
                      onClick={handleBtn2}
                      className={` w-fit mx-auto btn  h-fit p-2 ${
                        !timmer1 && "btn-neutral"
                      }  ${
                        timmer1 &&
                        "bg-transparent outline-none rounded-full text-[#feb51f] "
                      }  `}
                    >
                      {" "}
                      {timmer1 ? (
                        <CountdownCircleTimer
                          isPlaying
                          onComplete={()=>window.open(blog[0]?.button2 , "_blank")}
                          strokeWidth={3}
                          size={100}
                          duration={blog[0]?.sec / 1000}
                          colors={["#feb51f"]}
                        >
                          {({ remainingTime }) => remainingTime}
                        </CountdownCircleTimer>
                      ) : (
                        "Generate Code"
                      )}
                    </button>
                  )}
                  {code2 && (
                    <span className="text-xl text-[#feb51f] mt-3 flex  gap-[10px] text-center">
                      {code2} <span><FaRegCopy className="text-xl cursor-pointer"  onClick={()=>{ 
                  copy(code2)
                  toast.success("Copied Code");
                }} /> </span>
                    </span>
                  )}
                </div>
          
              </div>
            </div>
          ))}
       
      </div>
    </>
  );
};

export default SingleBlog;
