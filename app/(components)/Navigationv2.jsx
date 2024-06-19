"use client";

import React, { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";


const ComingSoonTag = () => (
  <div className="bg-gradient-to-r from-purple-400 to-rose-500 rounded-full py-1 text-xs px-4 text-white">
    Launching Soon
  </div>
);


export default function Navigationv2() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const router = useRouter()

  return (
    <div className="md:flex flex-row justify-around pl-4 pr-4 md:pl-0 md:pt-4 md:pr-0 items-center bg-transparent z-[100]">
      <div className="md:block flex justify-between items-center my-1">
        <div className="flex items-center pt-4 md:p-0">
          <img
            src="/PreMedLogo.svg"
            alt="logo"
            className="h-12 md:h-12 hover:transform hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
        <div className="md:block flex justify-end items-center gap-4 pt-2 md:p-0">
          {isMobile && (
            <div className="md:hidden block justify-center">
              <MenuIcon
                className="text-red-500 w-8 h-8"
                onClick={() => setOpen(!open)}
              />
            </div>
          )}
        </div>
      </div>
      <div className={`${open || !isMobile ? "block" : "hidden"}`}>
        <NavigationMenu className="md:mx-none mx-auto md:text-left text-center">
          <NavigationMenuList className="md:flex block md:mx-none">
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="text-md text-white font-bold hover:text-gray-300 transition duration-300 bg-transparent">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.18)" }}>
                <div className="flex gap-2 p-4">
                  <div className="bg-white border shadow rounded hover:bg-gray-100 transition duration-300 cursor-pointer" onClick={() => router.push('https://premed.pk')}>
                    <div className="rounded-lg p-4 w-[10rem]">
                      <img src="https://premedpk-cdn.sgp1.cdn.digitaloceanspaces.com/CDN/PreMed%20Logo%204.svg" alt="image" className="h-12 w-full rounded" />
                    </div>
                  </div>
                  <div className="bg-white border shadow rounded hover:bg-gray-100 transition duration-300 cursor-pointer" onClick={() => router.push('https://www.medschool.pk/')}>
                    <div className="rounded-lg p-4 w-[10rem]" >
                      <img src="https://www.medschool.pk/assets/MedSchoolLogo.svg" alt="image" className="h-12 w-full rounded" />
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <div className="text-white ml-6 font-bold hover:text-gray-300 transition duration-300" onClick={() => router.push('https://premed.pk/about/ourTeam')}>
            Our Team
          </div>
        </NavigationMenu>
        <button className="md:hidden bg-[#EC5863] font-bold text-md text-white px-4 py-2 rounded hover:bg-[#EC5863]/50 transition duration-300"           onClick={() => window.open("https://wa.link/4xbyq3")}
        >
        Book a Demo
      </button>
      </div>
      <button className="hidden md:block bg-[#EC5863] font-bold text-md text-white px-4 py-2 rounded hover:bg-[#EC5863]/50 transition duration-300"           onClick={() => window.open("https://wa.link/4xbyq3")}
      >
        Book a Demo
      </button>


    </div>
  );
}
