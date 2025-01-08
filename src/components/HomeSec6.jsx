import React from "react";

const HomeSec6 = () => {
  return (
    <div className="w-full min-h-fit  flex justify-center py-[100px] px-[clamp(20px,4.3vw,150px)]">
      <div className="flex justify-between max-lg:justify-center items-center w-full px-[200px] gap-[100px]">
        <div className="max-lg:hidden" >
          <img src="/images/mobile/4.png" className="w-[350px] " alt="" />
        </div>
        <div className="flex gap-[80px] max-lg:mx-auto flex-col">
          <div className="flex flex-col me-auto max-lg:mx-auto max-lg:items-center max-lg:text-center items-start">
            <img src="/images/logo/5.png" alt="Binance" className="w-[180px] " />
            <p className="text-[18px] w-[300px] mt-4 text-white/50 capitalize ">
            Username and Binance Identification Number are Necessary to Claim Your Reward
            </p>
          </div>
          <div className="flex flex-col me-auto max-lg:mx-auto max-lg:items-center max-lg:text-center items-start">
            <img src="/images/logo/6.png" alt="Bitget" className="w-[80px]" />
            <p className="text-[18px] w-[300px] mt-4 text-white/50 capitalize ">
            Username and Bidget Identification Number are Necessary to Claim Your Reward
            </p>
          </div>
          <div className="w-full">
            <div className="px-10 py-2 rounded-xl capitalize bg-slate-300">
              <span>Note:</span>{" "}
              <span className="text-black/50">
              Users can update their details but cannot change the exchange.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec6;
