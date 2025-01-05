import React from "react";

const HomeSec3 = ({
  item = false,
  heading,
  para,
  img,
  container1,
  container2,
  container3,
  container4,
  container5,
  container6,
}) => {
  return (
    <div className="w-full flex justify-center items-center px-[clamp(30px,18.3vw,500px)]  min-h-fit">
      <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-[20px] max-lg:text-center  text-start h-full mx-auto  text-white justify-center w-full  gap-[80px]">
        <div
          className={` ${
            !item ? "lg:order-1 max-lg:order-1" : "lg:order-2 max-lg:order-1"
          }`}
        >
          <img
            src={img}
            className="w-[clamp(200px,18.3vw,550px)]"
            alt="mobile"
          />
        </div>

        <div
          className={`flex  ${
            !item ? "order-2 max-lg:order-2" : "order-1 max-lg:order-2"
          } items-start my-auto flex-col gap-[10px]`}
        >
          <img
            src="/images/btn/btn.svg"
            className="w-[40px] h-auto"
            alt="mobile"
          />
          <h1 className="text-[clamp(20px,5.2vw,40px)]">{heading}</h1>
          <p className="w-[350px] text-white/50 ">
            {para}
          </p>
          {!item ? (
            <div className="grid grid-cols-3 gap-[5px]">
              <div className="p-2 text-center rounded-xl text-white/70 bg-white/10">
              {container1}
              </div>
              <div className=" p-2 text-center rounded-xl text-white/70 bg-white/10">
                {container2}
              </div>
              <div className=" p-2 text-center px-5 rounded-xl text-white/70 bg-white/10">
                {container3}
              </div>
              <div className=" p-2 text-center rounded-xl text-white/70 bg-white/10">
                {container4}
              </div>
              <div className=" p-2 text-center rounded-xl text-white/70 bg-white/10">
                {container5}
              </div>
              <div className=" p-2 text-center rounded-xl text-white/70 bg-white/10">
                {container6}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-[5px]">
              <div className="p-2 text-center rounded-xl text-white/70 bg-white/10">
                Classic Tokens
              </div>
              <div className=" p-2 text-center rounded-xl text-white/70 bg-white/10">
                Meme Coins
              </div>
              <div className=" p-2 text-center px-5 rounded-xl text-white/70 bg-white/10">
                Hot & Fresh Tokens
              </div>
              <div className=" p-2 text-center rounded-xl text-white/70 bg-white/10">
                L1/L2 Tokens
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSec3;
