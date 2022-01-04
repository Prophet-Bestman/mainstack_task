import React from "react";

const Header = () => {
  return (
    <div className="h-[88px] sticky top-0 z-20 flex items-center bg-[#F2F5FA] px-[88px] justify-between">
      <div>
        <img src="/img/Mainstack_Logo.png" alt="" />
      </div>
      {/* Nav Links */}
      <div className="flex-1 pl-24">
        <ul className="flex space-x-6 font-medium">
          <li className="">Pricing</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="flex">
        <button className="px-[18px] py-[10px] border hover:bg-black hover:text-white border-black rounded-full mx-2">
          Sign In
        </button>
        <button className="px-[18px] py-[10px] border text-white bg-black border-black hover:text-black hover:bg-transparent rounded-full mx-2">
          Create free account
        </button>
      </div>
    </div>
  );
};

export default Header;
