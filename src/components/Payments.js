import React from "react";

const Payments = () => {
  return (
    <div className="bg-brand-bg min-h-[530px] w-full px-0 sm:px-7 xl:px-[100px] pb-28 grid gap-10 grid-cols-1 lg:grid-cols-12">
      <div className="bg-white col-span-full lg:col-span-5 p-4 lg:p-[52px] rounded-[30px]">
        <div>
          <h4 className="text-lg text-[#4360FD] leading-[22px] text-center lg:mr-auto lg:text-left tracking-[-0.02em] font-semibold">
            Collect payment from your fans
          </h4>

          <p className="text-brand-gray my-6 font-bold text-base text-center lg:mr-auto lg:text-left lg:text-xl">
            <span className="text-black">
              See your most important conversations first.
            </span>{" "}
            Snooze, archive, or jump back in.
          </p>
        </div>

        <div className="h-full grid">
          <img src="img/payment1.png" className="mx-auto" alt="" />
        </div>
      </div>

      <div className="bg-white col-span-full lg:col-span-7 rounded-[30px] p-4 lg:p-[52px] ">
        <div>
          <h4 className="text-lg text-[#FE4110] leading-[22px] text-center lg:mr-auto lg:text-left tracking-[-0.02em] font-semibold">
            Collect payment from your fans
          </h4>

          <p className="text-brand-gray my-6 font-bold text-base text-center lg:mr-auto lg:text-left lg:text-xl">
            <span className="text-black">
              See your most important conversations first.
            </span>{" "}
            Snooze, archive, or jump back in.
          </p>
        </div>
        <div className="h-full grid">
          <img src="img/payment2.png" className="mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Payments;
