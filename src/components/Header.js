import { Transition } from "@headlessui/react";
import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-4 lg:py-0 lg:min-h-[88px] sticky top-0 z-20 grid grid-cols-3 lg:flex items-center bg-[#F2F5FAcc] backdrop-blur-2xl px-8 xl:px-[88px] justify-around">
      <div className="w-4">
        <Transition
          show={isOpen}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <AiOutlineClose
            className="lg:hidden my-auto"
            size="30"
            onClick={() => setIsOpen(false)}
          />
        </Transition>

        <Transition
          show={!isOpen}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <AiOutlineMenu
            onClick={() => setIsOpen(true)}
            className="lg:hidden"
            size="30"
          />
        </Transition>
      </div>

      <div className="mx-auto col-span-1">
        <img src="/img/Mainstack_Logo.png" alt="" />
      </div>
      {/* Nav Links */}
      <div className="hidden lg:flex flex-1 pl-24 col-span-1">
        <ul className="flex space-x-6 text-sm font-medium">
          <li className="">Pricing</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="hidden lg:flex col-span-1">
        <button className="px-2 py-1 lg:px-[18px] tex lg:py-[10px] border hover:bg-black hover:text-white border-black rounded-full mx-2">
          Sign In
        </button>
        <button className="px-[18px] py-[10px] border text-white bg-black border-black hover:text-black hover:bg-transparent rounded-full mx-2">
          Create free account
        </button>
      </div>
      <br />
      {/* {isOpen && ( */}
      <div>
        <Transition
          // as={Fragment}
          show={isOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-90"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-out duration-750"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="h-[90vh] -ml-8 lg:hidden absolute top-[88px] bg-brand-primaryTransparent backdrop-blur-2xl w-full">
            <div className="flex justify-center flex-col items-center h-full">
              <ul className="text-center pt-14 my-auto text-xl text-pink-200">
                <li className="py-4 hover:text-pink-50">
                  <button className="font-bold">Pricing</button>
                </li>
                <li className="py-4 hover:text-pink-50">
                  <button className="font-bold">Blog</button>
                </li>
                <li className="py-4 hover:text-pink-50">
                  <button className="font-bold">About Us</button>
                </li>
                <li className="py-4 hover:text-pink-50">
                  <button className="font-bold">Contact Us</button>
                </li>
              </ul>
              <div className="mt-auto mb-16 flex flex-col">
                <button className="px-[18px] my-2 py-[10px] border text-white font-bold hover:bg-white hover:text-brand-primary border-white rounded-full mx-2">
                  Sign In
                </button>
                <button className="px-[18px] my-2 py-[10px] border text-brand-primary font-bold bg-white border-white hover:text-white hover:bg-transparent rounded-full mx-2">
                  Create free account
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      {/* )} */}
    </div>
  );
};

export default Header;
