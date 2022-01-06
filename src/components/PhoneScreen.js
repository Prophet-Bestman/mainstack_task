import React from "react";

const PhoneScreen = ({ heading, color, icon }) => {
  return (
    <div className="bg-white px-8 lg:px-[72px] pt-[92px] max-w-[600px] rounded-[30px] flex flex-col">
      <img src={icon} className="mb-[20px] w-[40px]" alt="" />

      <div className="mb-[60px]">
        <h4
          className={`text-base lg:text-lg font-bold leading-[22px] mb-[10px] ${color}`}
          a
        >
          {heading}
        </h4>
        <p className="text-brand-gray font-bold text-base lg:text-xl">
          <span className="text-black">
            See your most important conversations first. Snooze, archive, or
            jump back in.
          </span>{" "}
          Activity Feed always keeps your conversations within reach, so you can
          quickly catch up on what’s new.
        </p>
      </div>
      <img src="/img/iphone.png" className="mx-auto mt-auto" alt="" />
    </div>
  );
};

export default PhoneScreen;
