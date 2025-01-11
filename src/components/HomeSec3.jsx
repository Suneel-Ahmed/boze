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
    <div className="w-full flex justify-center overflow-x-hidden items-center px-[clamp(30px,18.3vw,500px)]  min-h-fit">
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
          className={`flex min-h-fit  ${
            !item ? "order-2 max-lg:order-2" : "order-1 max-lg:order-2"
          } items-start my-auto flex-col   gap-[10px]`}
        >
          <img
            src="/images/btn/btn.svg"
            className="w-[40px] h-auto"
            alt="mobile"
          />
          <h1 className="text-[clamp(20px,5.2vw,40px)] capitalize">{heading}</h1>
          <p className="w-[350px] capitalize text-white/50 ">
            {para}
          </p>
          {!item ? (
            null
          ) : (
            <div className="grid grid-cols-3 gap-[5px]">
            <div className="p-2 text-center rounded-xl capitalize max-sm:text-[16px] flex items-center justify-center text-white/70 bg-white/10">
            {container1}
            </div>
            <div className=" p-2 text-center capitalize rounded-xl max-sm:text-[16px] flex items-center justify-center text-white/70 bg-white/10">
              {container2}
            </div>
            <div className=" p-2 text-center px-5 capitalize rounded-xl max-sm:text-[16px] flex items-center justify-center text-white/70 bg-white/10">
              {container3}
            </div>
            <div className=" p-2 text-center rounded-xl capitalize max-sm:text-[16px] flex items-center justify-center text-white/70 bg-white/10">
              {container4}
            </div>
            <div className=" p-2 text-center rounded-xl capitalize max-sm:text-[16px] flex items-center justify-center text-white/70 bg-white/10">
              {container5}
            </div>
            <div className=" p-2 text-center rounded-xl capitalize max-sm:text-[16px] flex items-center justify-center text-white/70 bg-white/10">
              {container6}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSec3;
