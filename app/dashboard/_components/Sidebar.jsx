"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { usePathname, useRouter } from "next/navigation"; // ✅ Import useRouter
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Sidebar = () => {
  const menuList = [
    { id: 1, name: "Dashboard", path: "/dashboard", icon: "ri-dashboard-horizontal-line" },
    { id: 2, name: "Update", path: "/update", icon: "ri-shield-line" },
    { id: 3, name: "Profile", path: "/profile", icon: "ri-profile-line" },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const path = usePathname();
  const router = useRouter(); // ✅ Initialize router

  return (
    <>
      {/* Sidebar for Larger Screens */}
      <div className="hidden md:flex flex-col w-64 h-screen shadow-md bg-white p-4">
        <div className="logo mb-6 flex mt-4">
          <Image src="/img/logo.png" alt="Logo" width={70} height={50} />
          <h2 className="text-[1.1em] mt-5 ml-2 font-bold">Learn Sphere</h2>
        </div>
        <ul className="space-y-4 mt-6">
          <li>
            <Button 
              className="bg-primary mb-4 text-white w-52 hover:bg-gray-800" 
              onClick={() => router.push("/create")} // ✅ Navigate to /create
            >
              + Create New
            </Button>
          </li>
          {menuList.map((menu) => (
            <div className="flex space-x-3" key={menu.id}>
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
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}>
        <ul className="space-y-4 mt-6 ml-4">
          <li>
            <Button 
              className="bg-primary mb-4 text-white w-52 hover:bg-gray-800" 
              onClick={() => { 
                router.push("/create"); // ✅ Navigate on mobile too
                setShowMenu(false);  // ✅ Close menu after navigation
              }}
            >
              + Create New
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
