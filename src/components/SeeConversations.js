import React from "react";

const SeeConversations = () => {
  return (
    <div className="z-10 mt-12 xl:mt-0 bg-brand-bg px-0 sm:px-7 xl:px-[100px]">
      <div className="bg-white px-8 lg:px-[60px] pt-8 min-h-[523px] rounded-[30px] lg:grid lg:gap-[68px] grid-cols-2 flex flex-col items-center my-12">
        <div className="col-span-1 max-w-[500px]">
          <h4 className="text-lg text-brand-gray leading=[22px] tracking-[-0.02em] my-7 font-semibold">
            Set up all your media links
          </h4>

          <h2 className="text-2xl md:text-[40px] z-10 md:leading-[120%] mb-6 mt-30 tracking-[0.02rem] font-bold text-black">
            See your most important{" "}
            <span className="text-brand-primary-900">conversations first</span>
          </h2>
          <p className="text-brand-gray z-10 font-medium text-base md:text-lg mt-6 md:leading-[150%] tracking-[-0.01em]">
            See your most important conversations first. Snooze, archive, or
            jump back in. Activity Feed always keeps your conversations within
            reach, so you can quickly
          </p>
          <button className="px-[18px] py-[10px] border mt-[60px] text-white bg-black border-black hover:text-black hover:bg-transparent rounded-full mx-2">
            Get started
          </button>
        </div>
        <div className="col-span-1">
          <img src="/img/iphone_pair.png" alt="iphone_pair" />
        </div>
      </div>
    </div>
  );
};

export default SeeConversations;
