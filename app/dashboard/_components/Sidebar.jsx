"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"



const Sidebar = () => {
  const menuList = [
    { id: 1, name: "Dashboard", path: "/dashboard" ,icon:"ri-dashboard-horizontal-line"},
    { id: 2, name: "Update", path: "/update",icon:"ri-shield-line"},
    { id: 3, name: "Profile", path: "/profile" ,icon:"ri-profile-line"},
  ];

  const [showMenu, setShowMenu] = useState(false);
  const path = usePathname();

  return (
    <>
      {/* Mobile Navigation */}
      <div className="mobileNav flex justify-between">
        <div className="logo flex mb-6 md:hidden mx-2">
          <Image src="/img/logo.png" alt="Logo" width={70} height={50} />
          <h2 className="text-[1.1em] mt-5 ml-2 font-bold">Learn Sphere</h2>
        </div>
        <div className="md:hidden mt-4 text-1xl mx-2">
          <button onClick={() => setShowMenu(true)}>
            <i className="ri-menu-2-line text-2xl text-black"></i>
          </button>
        </div>
      </div>

      {/* Sidebar for Larger Screens */}
      <div className="hidden md:flex flex-col w-64 h-screen shadow-md bg-white p-4">
        <div className="logo mb-6 flex mt-4">
          <Image src="/img/logo.png" alt="Logo" width={70} height={50} />
          <h2 className="text-[1.1em] mt-5 ml-2 font-bold">Learn Sphere</h2>
        </div>
        <ul className="space-y-4 mt-6">
        <li>
  <Button className="bg-[#f22213] mb-4 text-white w-52 hover:bg-gray-800 ">+ Create New</Button>
</li>
          {menuList.map((menu) => (

            <div className="flex space-x-3 "   key={menu.id}>
              <div className="icon mt-2">
              <i className={menu.icon}></i>

              </div>
          
              <li
            
              className={`text-lg cursor-pointer hover:bg-slate-300 px-4 py-2 w-52 rounded-lg ${
                path === menu.path ? "bg-slate-300" : ""
              }`}
            >
              <Link href={menu.path}>{menu.name}</Link>
            </li>
            
            </div>
           
          ))}
        </ul>
        <div className="credit w-52 py-2 px-3 border rounded-sm bg-slate-100 ml-2 md:mt-[200px] ">
          <p className="mx-3 font-400 my-2">Available Credits:5</p>
          <Progress value={33} />
          <p>4 out of 5 Credit Used</p>
          <p className=" text-center text-[#f22213] text-xs my-2">upgrade to create more</p>

        </div>

       
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image src="/img/logo.png" alt="Logo" width={60} height={40} />
          <h2 className="text-[1.1em] mt-4 font-bold">Learn Sphere</h2>
          <button onClick={() => setShowMenu(false)}>
            <i className="ri-close-line text-3xl"></i>
          </button>
        </div>
        <ul className="space-y-4 mt-6 ml-4">
        <li>
  <Button className="bg-[#f22213] mb-4 text-white w-52 hover:bg-gray-800 ">+ Create New</Button>
</li>
          {menuList.map((menu) => (

            <div className="flex space-x-3 "   key={menu.id}>
              <div className="icon mt-2">
              <i className={menu.icon}></i>

              </div>
          
              <li
            
              className={`text-lg cursor-pointer hover:bg-slate-300 px-4 py-2 w-52 rounded-lg ${
                path === menu.path ? "bg-slate-300" : ""
              }`}
            >
              <Link href={menu.path}>{menu.name}</Link>
            </li>
            </div>
           
          ))}
        </ul>

        <div className="credit w-52 py-2 px-3 border rounded-sm bg-slate-100 ml-5 mt-36  ">
          <p className="mx-3 font-400 my-2">Available Credits:5</p>
          <Progress value={33} />
          <p>4 out of 5 Credit Used</p>
          <p className=" text-center text-[#f22213] text-xs my-2">upgrade to create more</p>

        </div>

        
      </div>

      {/* Overlay (for mobile) */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setShowMenu(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
