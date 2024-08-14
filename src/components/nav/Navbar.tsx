"use client"
import React from "react";
import Search from "../search/Search";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter()
  return (
    <nav className="w-full h-[4rem] flex justify-between lg:px-[12rem] px-[1rem] items-center">
      <div className="text-white cursor-pointer font-bold lg:text-2xl text-lg tracking-wider"
      onClick={()=>router.push("/")}
      >
        <p>Daily Stock</p>
      </div>
    <Search />
    </nav>
  );
};

export default Navbar;
