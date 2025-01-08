import React from "react";
import { Link } from "react-router-dom";
const HomeSec5 = () => {
  return (
    <div className="w-full min-h-fit  flex justify-center mt-10 items-end">
      <div className="w-[80%] h-full grid grid-cols-2 max-lg:grid-cols-1 max-lg:pt-16 yellow-gradient max-sm:pt-5 rounded-2xl">
        <div className="flex justify-center lg:ms-28 items-center flex-col">
          <h1 className="text-[clamp(16px,2.6vw,50px)] capitalize px-[10px] lg:px-[25px] text-white font-semibold quicksand  text-center ">
          Start Your Earning Journey with Boze Coin Today
          </h1>
          <Link
            to={"https://t.me/BozeCoinBot/bozecoin"}
            target="_blank"
            className="text-center capitalize z-10 btn  btn-lg  max-lg:btn-md max-lg:btn-xl max-md:btn-xs  text-[clamp(16px,2.1vw,24px)] max-lg:mt-[10px] mt-[40px]  "
          >
            Boze Coin on Telegram
          </Link>
        </div>
        <div className="ms-auto mt-auto me-28 flex justify-end  max-lg:me-0 max-md:flex max-md:justify-center  max-lg:mx-auto">
          <img
            src="/images/mobile/1.png"
            alt="mobile"
            className="w-[clamp(100px,80%,300px)]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSec5;
