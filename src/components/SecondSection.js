import React from "react";

const SecondSection = () => {
  return (
    <div className="min-h-[1024px] z-10 mt-20 xl:mt-0 bg-brand-bg px-0 sm:px-7 xl:px-[100px]">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[715px]">
          <h2 className="text-3xl md:text-[52px] z-10 md:leading-[120%] mb-6 tracking-[0.02rem] text-center font-bold text-black">
            Conversations designed for{" "}
            <span className="text-brand-primary-900">people, not bots.</span>
          </h2>
          <p className="text-xl leading-[120%] text-brand-gray text-center">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam
          </p>
        </div>
      </div>

      <div className="min-h-[523px] grid grid-rows-1 mt-[73px] bg-gradient-to-br rounded-[30px] z-10 px-4 md:px-12 xl:px-[72px] pt-[66px] pb-[76px] from-[#C91C5A] to-[#920034]">
        <div className=" row-span-1 grid grid-cols-2 gap-5 grid-rows-1 h-full">
          <div className="flex flex-col h-full col-span-2 lg:col-span-1">
            <div className="max-w-[500px]">
              <h2 className="text-3xl md:text-[40px] z-10 md:leading-[52px] tracking-[0.02rem] font-bold text-white">
                Conversations designed for people, not bots.
              </h2>
              <p className="text-brand-primary-100 z-10 font-medium text-base md:text-xl tracking-[-0.01em] mt-6 md:leading-[150%]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
              </p>
            </div>

            <div className="mt-12">
              <button className="px-[18px] z-10 py-[10px] border text-black bg-white border-white hover:text-white hover:bg-transparent rounded-full mx-2">
                Get Started
              </button>
            </div>
          </div>

          <div className=" col-span-2 lg:col-span-1 grid grid-rows-5 grid-cols-12 h-full gap-2 md:gap-5">
            <div className="row-span-5 col-span-7">
              <img
                src="/img/grid1.png"
                className="object-cover h-full w-full rounded-xl"
                alt=""
              />
            </div>
            <div className="col-span-5 row-span-3">
              <img
                src="/img/grid2.png"
                className="object-cover h-full w-full rounded-xl"
                alt=""
              />
            </div>
            <div className="row-span-2 col-span-5">
              <img
                src="/img/grid3.png"
                className="object-cover h-full w-full rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
