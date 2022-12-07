import React from "react";
import { Link } from "react-router-dom";
import { HiMailOpen } from "react-icons/hi";

const Header = () => {
  const navItems = ["Rent", "Buy", "Sell", "Manage Property", "Resources"];
  return (
    <header className="py-6 border-b">
      <div className="container mx-auto flex  items-center">
        <Link className="font-bold text-[25px] flex items-center gap-1" to="/">
          <HiMailOpen className="text-violet-700" />
          <h1 className="">Estatery</h1>
        </Link>
        <div className="flex ml-10 gap-8 items-center ">
          {navItems.map((items) => (
            <div className="cursor-pointer hover:bg-violet-100 hover:text-violet-900 px-4 py-2 rounded-lg">
              <h1>{items}</h1>
            </div>
          ))}
        </div>
        <div className="flex items-center ml-auto gap-6">
          <Link
            className="hover:text-violet-900 transition hover:bg-violet-100 hover:text-violet-900 px-4 py-3 outline outline-1 rounded-lg"
            to="/"
          >
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to="/"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
