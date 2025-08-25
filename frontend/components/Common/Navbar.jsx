import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      <div>
        <Link to="/" className="text-2xl font-medium">
          Rabbit
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          MEN
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Women
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Top Wear
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Bottom Wear
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/profile" className="hover:text-black">
          <HiOutlineUser/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
