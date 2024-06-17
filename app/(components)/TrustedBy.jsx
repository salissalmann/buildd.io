import MotionDiv from '@/app/(components)/motion-div'
import NumInc from '@/app/(components)/numInc'
import React from 'react'
const TrustedBy = () => {
  return (
    <div className="relative px-4 md:px-0 w-full md:w-3/4 lg:mx-auto ml-4 md:mt-20 pt-20 lg:pt-32 relative"
    >
    <div
      className={`absolute w-[300px] h-[550px] shrink-0 top-0 right-0 home_shadow_six -z-10`}
    />
    <MotionDiv
      x1="0"
      x2="0"
      y1="0"
      y2="-10%"
      className="HomePageDiv relative flex flex-col gap-2 md:gap-4 justify-center items-center"
    >
      <div className="w-full flex flex-row gap-0.5 md:gap-2 items-center justify-center">
        <img
          src="https://premedpk-cdn.sgp1.cdn.digitaloceanspaces.com//Group%201000001605.svg"
          alt="Group 1"
          className="w-12 md:w-16 h-auto"
        />
        <div className="text-2xl md:text-4xl text-gray-800 text-center font-bold text-nowrap text-white">
          TRUSTED BY <br />
          <span className="text-[#EC5863] font-bold">75 THOUSAND</span>
        </div>
        <img
          src="https://premedpk-cdn.sgp1.cdn.digitaloceanspaces.com//Group%201000001606.svg"
          alt="Group 1"
          className="w-12 md:w-16 h-auto"
        />
      </div>
      <MotionDiv
        x1="0"
        x2="0"
        y1="0"
        y2="10%"
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3"
      >
        <div className="p-4 text-center sm:text-left lg:text-left flex flex-col items-center text-white">
          <p
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 lg:mb-4 "
            style={{ color: "white" }}
          >
            <NumInc num={89} />
            <span className="text-[#EC5863]">%</span>
          </p>
          <p
            className="text-lg sm:text-xl lg:text-2xl font-medium text-center"
            style={{ color: "white" }}
          >
            MDCAT PASSING RATIO
          </p>
        </div>
        <div className="p-4 text-center sm:text-left lg:text-left flex flex-col items-center">
          <p
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 lg:mb-4 text-center text-white"
            style={{ color: "white" }}
          >
            <NumInc num={75} delay={1} />
            <span className="text-[#EC5863]">K+</span>
          </p>
          <p
            className="text-lg sm:text-xl lg:text-2xl font-medium text-center"
            style={{ color: "white" }}
          >
            MDCAT STUDENTS
          </p>
        </div>
        <div className="p-4 text-center sm:text-left lg:text-left flex flex-col items-center ">
          <p
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 lg:mb-4 text-center"
            style={{ color: "white" }}
          >
            <NumInc num={92} delay={2} />
            <span className="text-[#EC5863]">M+</span>
          </p>
          <p
            className="text-lg sm:text-xl lg:text-2xl font-medium text-center"
            style={{ color: "white" }}
          >
            MCQS ATTEMPTED
          </p>
        </div>
        <div className="p-4 text-center sm:text-left lg:text-left flex flex-col items-center">
          <p
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 lg:mb-4 text-center"
            style={{ color: "white" }}
          >
            <NumInc num={40} delay={3} />
            <span className="text-[#EC5863]">M</span>
          </p>
          <p
            className="text-lg sm:text-xl lg:text-2xl font-medium text-center"
            style={{ color: "white" }}
          >
            MINUTES SPENT
          </p>
        </div>
      </MotionDiv>
    </MotionDiv>
  </div>
  )
}

export default TrustedBy
