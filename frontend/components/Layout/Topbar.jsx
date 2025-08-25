import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="rabbit-red text-white">
      <div className="flex justify-between items-center py-3 px-4 relative">
        <div className="container mx-auto space-x-4 hidden md:flex">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-sm text-center">
            We ship worldwide - Fast and reliable shipping!
          </span>
        </div>

        <div className="hidden md:block text-sm">
          <a href="tel:+1234567890" className="hover:text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
