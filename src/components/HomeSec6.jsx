import React from "react";

const HomeSec6 = () => {
  return (
    <div className="w-full min-h-fit  flex justify-center py-[100px] max-lg:px-[20px] px-[clamp(20px,4.3vw,150px)]">
      <div className="flex justify-between max-lg:justify-center items-center w-full max-lg:px-[20px] px-[200px] max-xl:gap-[50px] gap-[100px]">
        <div className="max-lg:hidden  max-xl:min-w-[300px]  min-w-[380px] " >
          <img src="/images/mobile/4.png" className="w-[380px] h-auto " loading="lazy" width="500" height="300" alt="mobile" />
        </div>
        <div className="grid grid-cols-2 w-full  max-2xl:grid-cols-1 max-2xl:gap-[20px] gap-[60px]  max-lg:mx-auto ">
          <div className="flex flex-col  me-auto max-lg:mx-auto max-lg:items-center max-lg:text-center items-start">
            <img src="/images/logo/5.png" loading="lazy" width="500" height="300" alt="Binance" className=" max-2xl:w-[60px] w-[75px] " />
            <p className="text-[clamp(14px,5.5vw,18px)] max-lg:w-full max-xl:w-[400px] w-[300px] mt-4 text-white/50 capitalize ">
            Username and Binance Identification Number are Necessary to Claim Your Reward
            </p>
          </div>
          <div className="flex flex-col me-auto max-lg:mx-auto max-lg:items-center max-lg:text-center items-start">
            <img src="/images/logo/6.png" loading="lazy" width="500" height="300" alt="Bidget" className="max-2xl:w-[60px] w-[80px]" />
            <p className="text-[clamp(14px,5.5vw,18px)] max-lg:w-full  max-xl:w-[400px] w-[300px] mt-4 text-white/50 capitalize ">
            Username and Bidget Identification Number are Necessary to Claim Your Reward
            </p>
          </div>
          <div className="flex flex-col me-auto max-lg:mx-auto max-lg:items-center max-lg:text-center items-start">
            <img src="/images/logo/easypaisa.png" loading="lazy" width="500" height="300" alt="easypaisa" className=" max-2xl:w-[60px]  w-[75px] " />
            <p className="text-[clamp(14px,5.5vw,18px)]  max-lg:w-full max-xl:w-[400px] w-[300px] mt-4 text-white/50 capitalize ">
            Username and Account Number are necessary to claim reward.
            </p>
          </div>
          <div className="flex flex-col me-auto max-lg:mx-auto max-lg:items-center max-lg:text-center items-start">
            <img src="/images/logo/Jazzcash.png" loading="lazy" width="500" height="300" alt="jaazCash" className="max-2xl:h-[60px] w-auto h-[70px]" />
            <p className="text-[clamp(14px,5.5vw,18px)]  max-lg:w-full  max-xl:w-[400px] w-[300px] mt-4 text-white/50 capitalize ">
            Username and Account Number are necessary to claim reward.
            </p>
          </div>
          <div className="w-fit">
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
