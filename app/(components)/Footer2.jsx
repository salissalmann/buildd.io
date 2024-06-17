import React from "react";
// import Image from "next/image";
import Link from "next/link";

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
            <button className="mt-8 bg-[#EC5863] font-bold text-md text-white shadow px-8 py-2 rounded-lg hover:bg-[#EC5863]/50 transition duration-300">Contact Sales</button>
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
              <div className="flex gap-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M24.175 27.5H5.825C3.9875 27.5 2.5 26.0125 2.5 24.175V5.825C2.5 3.9875 3.9875 2.5 5.825 2.5H24.1625C26.0125 2.5 27.5 3.9875 27.5 5.825V24.1625C27.5 26.0125 26.0125 27.5 24.175 27.5Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 22.5V10.4375C15 7.87497 17.05 7.07497 19.1 7.69997"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.875 13.75H18.125"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M24.175 27.5H5.825C3.9875 27.5 2.5 26.0125 2.5 24.175V5.825C2.5 3.9875 3.9875 2.5 5.825 2.5H24.1625C26.0125 2.5 27.5 3.9875 27.5 5.825V24.1625C27.5 26.0125 26.0125 27.5 24.175 27.5Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 15C20 17.7625 17.7625 20 15 20C12.2375 20 10 17.7625 10 15C10 12.2375 12.2375 10 15 10C17.7625 10 20 12.2375 20 15Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.75 6.875C23.75 7.225 23.475 7.5 23.125 7.5C22.775 7.5 22.5 7.225 22.5 6.875C22.5 6.525 22.775 6.25 23.125 6.25C23.475 6.25 23.75 6.525 23.75 6.875Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="28"
                  viewBox="0 0 31 28"
                  fill="none"
                >
                  <path
                    d="M24.3959 0H29.1458L18.7686 11.8605L30.9766 28H21.4178L13.9311 18.2115L5.36451 28H0.611692L11.7112 15.3138L0 0H9.80143L16.5688 8.94708L24.3959 0ZM22.7288 25.1569H25.3608L8.37128 2.69374H5.54687L22.7288 25.1569Z"
                    fill="black"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                >
                  <path
                    d="M25.4391 25H6.51406C4.83906 25 3.47656 23.5875 3.47656 21.825V8.1625C3.47656 6.4125 4.83906 5 6.51406 5H25.4516C27.1141 5 28.4766 6.4125 28.4766 8.1625V21.825C28.4766 23.5875 27.1141 25 25.4391 25Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.2266 10V20L20.9766 14.45L12.2266 10Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
