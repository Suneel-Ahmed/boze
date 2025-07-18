import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    lastPage: 1,
    perPage: 5,
    total: 0
  });
  const [loading, setLoading] = useState(true);

  const getData = async (page = 1) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blogs?page=${page}`
      );
      setBlogs(data.data);
      setPagination({
        currentPage: data.pagination.current_page,
        lastPage: data.pagination.last_page,
        perPage: data.pagination.per_page,
        total: data.pagination.total
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.lastPage) {
      getData(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="w-full flex justify-center min-h-screen items-center bg-black">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Boze Coin | Blogs</title>
        <link rel="canonical" href="https://bozecoin.com/blogs" />
        <meta
          name="keywords"
          content="Boze Coin, Meme Coin, Alt Coins, Meme vs Alt, Meme Coins are Best to Invest, Best Meme, Best Alt Coins, Best Coins, Best Meme Coins Project, 2025, Best Crypto Investments 2025, High ROI Crypto Projects, Long-Term Crypto Investment, Passive Income Crypto 2025, Best DeFi Investment Strategies, Web3 Investment Opportunities, Cryptocurrency Portfolio Management, Crypto Trading for Beginners, Earn Free Cryptocurrency, Free Bitcoin Earning Sites, Airdrop Crypto 2025, Best Free Airdrops 2025, Watch Videos and Earn Crypto, Earn Bitcoin Watching Ads, Social Media Engagement Rewards, Web3 Task-Based Earning, Play-to-Earn vs Watch-to-Earn, Best Crypto Referral Programs 2025, Passive Income Through Crypto Referrals, Web3 Affiliate Marketing, High-Paying Crypto Referral Programs, New Airdrops with Low Competition, Best Play-to-Earn Crypto Games, Web3 Social Media Rewards, NFT Staking for Passive Income, Play-to-Earn vs Free-to-Earn, Cloud Mining Free Trial, Best Proof-of-Stake Coins, No Deposit Free Crypto, Telegram Airdrops No Gas Fee, Passive Income Crypto Mining, Crypto Faucet List 2025, Upcoming Airdrops 2025, Free Tokens Without Investment, Best Blockchain Airdrops 2025, Crypto Insurance & Risk Management, Best Blockchain-Based Insurance Platforms, Decentralized Finance Insurance, Smart Contract Insurance Solutions, Boze Coin Free Earning, Free Learning & Crypto Rewards, Tap-to-Earn Crypto, Best Crypto Mining Without Investment, Watch and Earn Crypto, Best Staking Coins 2025"
        />
      </Helmet>
      
      <div className="w-full min-h-screen flex flex-col px-[clamp(20px,4.3vw,150px)] gap-[clamp(50px,2.3vw,100px)] pt-[100px] justify-center items-center py-[50px] pb-[100px] bg-black">
        {blogs.map((val) => (
          <div
            key={val?.id}
            className="max-w-[1200px] rounded-xl w-full min-h-fit max-lg:w-full flex flex-col gap-[clamp(10px,2.3vw,30px)]"
          >
            <Link
              onClick={handleClick}
              to={`/blogs/${val?.slug}`}
              className="max-w-[1200px] max-h-[630px] mx-auto rounded-2xl overflow-hidden"
            >
              <img
                src={`${import.meta.env.VITE_API_URL}/${val?.cover_img}`}
                alt={val?.cover_img}
                loading="lazy"
                width="500"
                height="500"
                className="w-full h-full object-cover object-center"
              />
            </Link>
            <div className="w-full flex flex-col items-center justify-center">
              <Link onClick={handleClick} to={`/blogs/${val?.slug}`}>
                <h1 className="text-white text-[clamp(20px,5.2vw,50px)] mb-10">
                  {val?.title}
                </h1>
              </Link>
              <div className="w-full h-[1px] bg-white/40 max-w-[1200px] rounded-3xl max-md:mt-0 mt-auto"></div>
            </div>
          </div>
        ))}

        {/* Pagination Controls */}
        {pagination.lastPage > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                pagination.currentPage === 1 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            >
              Previous
            </button>
            
            <span className="text-white">
              Page {pagination.currentPage} of {pagination.lastPage}
            </span>
            
            <button
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={pagination.currentPage === pagination.lastPage}
              className={`px-4 py-2 rounded-md ${
                pagination.currentPage === pagination.lastPage 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;