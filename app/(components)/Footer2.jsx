
import React from "react";
// import Image from "next/image";
import Link from "next/link";
import { Facebook, FacebookIcon, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer2 = ({ isVisible = true, className="" }) => {
  return (
    <div
      className="px-4 mt-20 flex flex-col px-18 max-w-screen-xl mx-auto z-10 relative"
    >
      {isVisible && (
        <>
          <div className="flex flex-col">
            <h1 className="text-3xl text-white md:text-6xl text-center font-extrabold">Innovate, Iterate, Slay</h1>
            <h2 className="text-xl text-white md:text-3xl mt-4 text-center font-semibold">That’s the Pre<span className="text-[#EC5863]">M</span>ed Way!</h2>
            <p className="font-medium text-base md:text-md text-center text-white w-[75%] mx-auto mt-2">
              At PreMed, we're dedicated to turning your visions into reality. Let’s build your next awesome product together. Your success is our mission!
            </p>
            <div className="flex flex-row items-center justify-center gap-4 mt-2">
            <button className="mt-8 bg-[#EC5863] font-bold text-md text-white shadow px-8 py-2 rounded-lg hover:bg-[#EC5863]/50 transition duration-300"
                        onClick={() => window.open("https://wa.link/4xbyq3")}
            >Contact Sales</button>
          </div>

          </div>

        </>
      )}
      {/* main Footer */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-x-4 mt-8">
        <div className="flex flex-col pr-4">
          <div className="w-[150px] relative">
            <img
              src="/PreMedLogo.svg"
              alt="logo"
              className=" hover:transform hover:scale-110 transition duration-300 cursor-pointer"
            />
          </div>
          <p className="pb-8 text-md font-medium text-left text-white">
          We are a group of passionate individuals dedicated to changing education in Pakistan and the world. As we progress, we're also committed to helping other startups succeed. Let's bring your ideas to life!
          </p>
          <div>
            <h6 className="text-[15px] font-semibold text-white">Find Us on Socials</h6>
            <div className="flex items-center gap-6">
              <div className="flex gap-3 py-2" >
                <Facebook size={24} className="text-white cursor-pointer" onClick={() => window.open("https://www.facebook.com/premed.pk")}/>
                <Instagram size={24} className="text-white cursor-pointer" onClick={() => window.open("https://www.instagram.com/premed.pk/")}/>
                <Twitter size={24} className="text-white cursor-pointer" onClick={() => window.open("https://twitter.com/premedpk?s=21")}/>
                <Linkedin size={24} className="text-white cursor-pointer" onClick={() => window.open("https://www.linkedin.com/company/premed-pk/")}/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-x-4 py-4 justify-between gap-y-4">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-3xl text-[#EC5863] font-bold tracking-tight">
              INFO
            </h2>
            <div
              className="w-[88px] h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, #EC5863 0%, rgba(236, 88, 99, 0.00) 100%)",
              }}
            />
            <Link href={"/"} className="text-white font-normal w-fit">
              Vision
            </Link>
            <Link href={"/"} className="text-white font-normal w-fit">
              Blog
            </Link>
            <Link href={"/"} className="text-white font-normal w-fit">
              Testimonials
            </Link>
            <Link href={"/"} className="text-white font-normal w-fit">
              Scholarships
            </Link>
          </div>
          <div className="flex flex-col gap-y-4">
          <h2 className="text-3xl text-[#EC5863] font-bold tracking-tight">
          CAREERS
            </h2>
            <div
              className="w-[88px] h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, #EC5863 0%, rgba(236, 88, 99, 0.00) 100%)",
              }}
            />
            <Link href={"/"} className="text-white font-normal w-fit">
              Meet The Team
            </Link>
            <Link href={"/"} className="text-white font-normal w-fit">
              Ambassadors
            </Link>
            <Link href={"/"} className="text-white font-normal w-fit">
              Join Us
            </Link>
          </div>
          <div className="flex flex-col gap-y-4">
          <h2 className="text-3xl text-[#EC5863] font-bold tracking-tight">
          CONTACT US
            </h2>
            <div
              className="w-[88px] h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, #EC5863 0%, rgba(236, 88, 99, 0.00) 100%)",
              }}
            />
            <Link href={"/"} className="text-white font-normal w-fit">
              contact@premed.pk
            </Link>
            <Link href={"/"} className="text-white font-normal w-fit">
              1813 - 251 Jarvis Street,<br/>
              Toronto, ON M5B 0C3, CA 
            </Link>
            <Link href={"/"} className="text-white font-normal w-fit">
            +92 302 8609690 (Hasnain Mankani)
            </Link>
          </div>
        </div>
      </div>
      {/* FUlL BOTTOM */}
      <div className="w-full flex items-center justify-between lg:justify-evenly py-4 md:px-32 mt-5 flex-wrap">
        <span className="text-xs md:text-[15px] text-gray-300 font-medium">
          &copy; 2021-2024, All Rights Reserved, PreMed.PK
        </span>

        <span className="text-xs md:text-[15px] text-gray-300 font-medium">
          Privacy Policy
        </span>
        <span className="text-xs md:text-[15px] text-gray-300 font-medium">
          Terms and Conditions
        </span>
      </div>
    </div>
  );
};

export default Footer2;
