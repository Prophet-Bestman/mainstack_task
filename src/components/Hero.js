import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-[#F2F5FA] min-h-[1340px]">
      <div className="h-screen min-h-[1340px]  relative">
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
        <div className="flex absolute w-full -max-m min-h-screen min-h-[00px] z-10 justify-center items-center ">
          <div className="z-10">
            {/* INTO TEXT AND CALL TO ACTION */}
            <div className="flex flex-col mx-0 md:mx-12">
              <h1 className="font-bold max-w-[830px] text-3xl leading-8 md:leading-[67px] px-8 md:px-0 md:text-heroSize z-10 text-center">
                Create a one-page site to showcase your incredible works and{" "}
                <span className="text-brand-primary"> get more clients.</span>
              </h1>
              <p className="my-[32px] mx-auto px-10 md:px-0 leading-[150%] text-brand-gray  text-lg md:text-xl text-center max-w-[618px]">
                Mainstack connects your audience to all of your content,
                productivity with just one click to boost conversion rate.
              </p>

              <div className="flex flex-col lg:flex-row items-center mx-0 md:mx-[32px] justify-center">
                <div className="relative flex items-center">
                  <p className="absolute pl-8 font-medium text-xl">
                    Mainstack.app/
                  </p>
                  <input
                    type="text"
                    placeholder="yourname"
                    className="h-14 md:h-[74px] w-[341px] bg-[#DDE3F0] rounded-full my-2 focus:outline-none  pl-44 pr-[66px] mx-1.5 focus:ring-brand-primary focus:ring-[3px]"
                  />
                  <img
                    src="/img/check.png"
                    className="absolute right-[27px]"
                    alt=""
                  />
                </div>
                <button className="px-[32px] py-4 md:py-[24px] bg-brand-primary my-2 text-white rounded-full mx-1.5 font-medium text-2xl">
                  Create your stack
                </button>
              </div>
            </div>
            {/* SCREENSHOTS */}
            <div className="mt-[250px] w-full z-10 absolute flex px-0 md:px-5 lg:px-[96px] left-0">
              <div className="md:grid z-10 md:p-8 grid-cols-3 relative mx-auto">
                <div className="hidden md:col-span-2 md:flex">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
