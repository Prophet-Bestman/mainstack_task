import React from "react";

const Conversations = () => {
  return (
    <div className="min-h-[1024px] bg-brand-bg px-0 sm:px-7 md:px-[100px]">
      <div className="min-h-[822px] rounded-[30px] px-[72px] pt-[66px] pb-[76px] bg-gradient-to-r from-brand-darkGradientFrom  to-brand-darkGradienttO flex items-center">
        <div className="flex flex-col md:grid grid-cols-2 xl:grid-cols-3 gap-14 h-full w-full">
          <div className="col-span-2 xl:col-span-1 flex flex-col lg:flex-row xl:flex-col h-full ">
            <div className="max-w-[400px]">
              <h2 className="text-2xl md:text-[40px] md:leading-[52px] tracking-[0.02rem] font-bold text-white">
                Conversations designed for people, not bots.
              </h2>
              <p className="text-brand-gray font-medium text-base md:text-xl mt-6 md:leading-[150%]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
              </p>
            </div>

            <div className="mt-12 md:mt-auto md:ml-auto">
              <button className="px-[18px] py-[10px] border text-black bg-white border-white hover:text-white hover:bg-transparent rounded-full mx-2">
                Get Started
              </button>
            </div>
          </div>
          <div className="col-span-1 mx-auto">
            <img src="/img/image_16.png" className="h-full" alt="" />
          </div>
          <div className="col-span-1 mx-auto">
            <img src="/img/image_15.png" className="h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
