import React from "react";
import PhoneScreen from "./PhoneScreen";

const PhoneScreens = () => {
  return (
    <div className="min-h-[1024px] z-10 mt-20 xl:mt-0 bg-brand-bg px-0 sm:px-7 xl:px-[100px] flex">
      <div className="grid gap-6 lg:gap-10 grid-cols-1 md:grid-cols-2 mx-auto">
        <PhoneScreen
          heading="Share your favourite youtube playlist"
          color="text-[#F44336]"
          icon="/img/youtubeIcon.png"
        />
        <PhoneScreen
          heading="Embed your tweets"
          color="text-[#19B2E5]"
          icon="/img/tweeter.png"
        />
        <PhoneScreen
          heading="Share your favourite spotify playlist"
          color="text-[#00D95F]"
          icon="/img/spotify1.png"
        />
        <PhoneScreen
          heading="Embed your tweets"
          color="text-[#fa233b]"
          icon="/img/Apple_Music.png"
        />
      </div>
    </div>
  );
};

export default PhoneScreens;
