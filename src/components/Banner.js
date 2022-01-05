import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 min-h-screen bg-[#F2F5FA]">
      <div className="col-span-1 row-span-2 relative">
        <img
          src="/img/Link.png"
          className="absolute top-[94px] left-[54px]"
          alt=""
        />
        <img
          src="/img/Calendly.png"
          className="absolute top-[302px] left-[178px]"
          alt=""
        />
        <img
          src="/img/Image.png"
          className="absolute top-[584px] left-[263px]"
          alt=""
        />
        <img
          src="/img/Youtube.png"
          className="absolute top-[697px] left-[60px]"
          alt=""
        />
        <img
          src="/img/Music.png"
          className="absolute top-[167px] right-[258px]"
          alt=""
        />
        <img
          src="/img/TWC.png"
          className="absolute top-[309px] right-[50px]"
          alt=""
        />
        <img
          src="/img/mailchimp.png"
          className="absolute top-[602px] right-[211px]"
          alt=""
        />
        <img
          src="/img/Paypal.png"
          className="absolute top-[718px] right-[29px]"
          alt=""
        />
        <img
          src="/img/spotify.png"
          className="absolute top-[995px] left-[30px]"
          alt=""
        />
        <img
          src="/img/tiktok.png"
          className="absolute top-[1186px] right-[29px]"
          alt=""
        />
      </div>
      {/* INTO TEXT AND CALL TO ACTION */}
      <div className="flex justify-center -mt-8 md:mt-0 items-center h-screen">
        <div className="flex flex-col col-span-1 row-span-1 mx-0 md:mx-12 z-10">
          <h1 className="font-bold max-w-[830px] text-3xl leading-8 md:leading-[67px] px-8 md:px-0 md:text-heroSize z-10 text-center">
            Create a one-page site to showcase your incredible works and{" "}
            <span className="text-brand-primary"> get more clients.</span>
          </h1>
          <p className="my-[32px] mx-auto px-10 md:px-0 leading-[150%] text-brand-gray  text-lg md:text-xl text-center max-w-[618px]">
            Mainstack connects your audience to all of your content,
            productivity with just one click to boost conversion rate.
          </p>

          <div className="flex z-10 px-2 flex-col lg:flex-row items-center mx-0 md:mx-[32px] justify-center">
            <div className="relative flex items-center">
              <p className="absolute pl-8 font-medium text-lg md:text-xl">
                Mainstack.app/
              </p>
              <input
                type="text"
                placeholder="yourname"
                className="h-12 sm:h-[74px] w-[341px] bg-[#DDE3F0] rounded-full my-2 focus:outline-none  pl-40 md:pl-44 pr-[66px] mx-1.5 focus:ring-brand-primary focus:ring-[3px]"
              />
              <img
                src="/img/check.png"
                className="absolute right-[27px]"
                alt=""
              />
            </div>
            <button className="px-[18px] py-[10px] sm:px-[32px] sm:py-[24px] bg-brand-primary my-2 text-white w-[341px] sm:w-auto rounded-full mx-1.5 font-medium text-lg sm:text-2xl">
              Create your stack
            </button>
          </div>
        </div>
      </div>
      {/* SCREENSHOTS */}
      <div className="mt- w-full z-10 col-span-1 row-span-1 flex px-0 md:px-5 lg:px-[96px] left-0">
        <div className="flex flex-col-reverse md:grid z-10 md:p-8 grid-cols-3 relative mx-auto">
          <div className="md:col-span-2 md:flex">
            <img src="/img/image_12.png" className="mr-[12px]" alt="" />
          </div>
          <div className="flex col-span-3 md:col-span-1 w-full mx-auto mb-0">
            <img
              src="/img/image_13.png"
              className="mx-auto w-4/5 md:w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
