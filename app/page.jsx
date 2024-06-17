'use client';
import TrustedBy from "./(components)/TrustedBy";
import MotionDiv from '@/app/(components)/motion-div'
import Marquee from "react-fast-marquee";
import Footer2 from "./(components)/Footer2";
import Navigationv2 from "./(components)/Navigationv2";


export default function Home() {

  const MocksData = [
    {
      image: "premedlanding.png",
      title: "PreMed",
      page: "LANDING PAGE"
    },
    {
      image: "Mock3.png",
      title: "PreMed",
      page: "LANDING PAGE"
    },
    {
      image: "Mock4.svg",
      title: "PreMed",
      page: "User Statistics & LMS"
    },
    {
      image: "Mock5.svg",
      title: "MedSchool",
      page: "Landing Page"
    },
    {
      image: "Mock6.svg",
      title: "Content Management",
      page: ""
    },
    {
      image: "Mock7.svg",
      title: "MedSchool",
      page: "Test Results"
    },

  ]


  return (
    <main className="relative bg-[#17171f]">
      <Navigationv2/>

      <div style={{
        backgroundImage: `url("/bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
        <Header />
        <TrustedBy />
      </div>


      <div className="-mt-80 pt-40 md:-mt-20 md:pt-0 flex flex-col justify-center items-center" style={{ backgroundImage: `url("/bg1.png")`, backgroundSize: "cover", backgroundPosition: "top", minHeight: "100vh" }}>
        <MotionDiv
          x1="0"
          x2="-10%"
        >
          <div className="text-center text-white text-3xl md:text-7xl font-bold mt-8">What We Offer?</div>
          <div className="w-[75%] md:w-1/2 mx-auto text-center text-white text-md md:text-2xl font-normal mt-4">From captivating landing pages to dynamic content management systems, and lead generation, our team of expert developers and designers creates unforgettable digital experiences. Let's turn your vision into reality!</div>
          <div className="flex flex-row items-center justify-center gap-4 mt-2">
            <button className="mt-8 bg-[#EC5863] font-bold text-md text-white shadow px-8 py-2 rounded-lg hover:bg-[#EC5863]/50 transition duration-300">Book a Call</button>
          </div>
        </MotionDiv>
      </div>

      <div className="flex flex-col justify-center pb-80" style={{ backgroundImage: `url("/bg2.png")`, backgroundSize: "cover", backgroundPosition: "top", minHeight: "100vh" }}>
        <div className="w-[90%] mx-auto flex flex-col justify-center">
          <MotionDiv
            x1="0"
            x2="-10%"
          >

            <div className="relative flex flex-col">
              <div
                className="absolute text-9xl hidden md:block -top-8 left-0 text-gray-200 font-bold opacity-30">
                Our Products
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white"> Our Products</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col">
                <div className="rounded-lg p-4" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.18)", }}>
                  <img src="/PreMedLogo.svg" alt="image" className="h-36 w-full rounded" />
                </div>
                <div className="text-left text-white text-md mt-4">A platform for the highly esteemed MDCAT exam in Pakistan which is written by over 200,000 students annually.</div>
                <div className="text-left text-white text-md mt-4">With a QBank of over 100,000 questions and detailed explanations, real-time stats and analysis, and AI generated feedback and correction system, we’re here to help you ace your future!</div>
              </div>
              <div className="flex flex-col">
                <div className="rounded-lg p-4" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.18)", }}>
                  <img src="/englogo.svg" alt="image" className="h-36 w-full rounded" />
                </div>
                <div className="text-left text-white text-md mt-4">A platform for the various engineering university entry test exams in Pakistan which is written by over 300,000 students annually.</div>
                <div className="text-left text-white text-md mt-4">With a QBank of over 100,000 questions with LaTex incorporation, real-time stats and SnapCourse integration, and AI-feedback and correction system, we’re here to help you ace your future!</div>
              </div>
              <div className="flex flex-col">
                <div className="rounded-lg p-4" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.18)", }}>
                  <img src="/ahslogo.svg" alt="image" className="h-36 w-full rounded" />
                </div>
                <div className="text-left text-white text-md mt-4">A platform for the highly esteemed MDCAT exam in Pakistan which is written by over 200,000 students annually.</div>
                <div className="text-left text-white text-md mt-4">With a QBank of over 100,000 questions with LaTex incorporation, real-time stats and SnapCourse integration, and AI-feedback and correction system, we’re here to help you ace your future!</div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            x1="0"
            x2="-10%"
          >
            <div className="text-center text-gray-200 text-xl md:text-2xl font-bold mt-36">Our Motto</div>
            <div className="md:w-[75%] mx-auto text-center font-bold text-white text-4xl md:text-6xl mt-4">Great Design Sings,<br />
              But It Cannot Hit a Bad Note. <br />
              Usability Matters<br />
            </div>
          </MotionDiv>

          <div className="relative flex flex-col mt-[10rem]">
            <div
              className="absolute text-9xl hidden md:block -top-8 left-0 text-gray-200 font-bold opacity-30">
              Best UI in Town
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8"> Best UI in Town</h1>
          </div>

        </div>

        <Marquee gradient={false} direction="right" speed={50}>
          {MocksData.map((data) => {
            return (
              <div className="relative rounded ml-4 mt-4">
                <img src={`/${data.image}`} alt="image" className="h-36 w-full rounded" />
                <div className="absolute flex p-2 justify-between  rounded items-center min-h-[20px] w-full bottom-0 left-0" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.18)", }}>
                  <div className="text-sm bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold">{data.title}</div>
                  <div className="text-xs bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-500">{data.page}</div>
                </div>
              </div>)
          })}
        </Marquee>
        <Marquee gradient={false} direction="left" speed={50}>
          {MocksData.map((data) => {
            return (
              <div className="relative rounded ml-4 mt-4">
                <img src={`/${data.image}`} alt="image" className="h-36 w-full rounded" />
                <div className="absolute flex p-2 justify-between  rounded items-center min-h-[20px] w-full bottom-0 left-0" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.18)", }}>
                  <div className="text-sm bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold">{data.title}</div>
                  <div className="text-xs bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-500">{data.page}</div>
                </div>
              </div>)
          })}
        </Marquee>

        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between mt-[5rem] md:mt-[10rem]">
          <div className="flex flex-col gap-1 md:w-1/2">
            <div className="text-left font-bold text-[#EC5863]">BOOK A DEMO</div>
            <div className="text-4xl font-bold text-gray-400 opacity-30">Ready to Get Started? </div>
            <div className="text-5xl font-bold text-white">Request an Appointment</div>
            <div className="text-md text-[#EC5863]">Let’s hop on a call and discuss the future of your startup!</div>
          </div>
          <div className="flex flex-col gap-2 md:w-1/2 mt-4 md:mt-0">
            <div className="flex flex-col border rounded p-1 px-2 border-gray-200">
              <div className="text-gray-200 font-bold">YOUR NAME</div>
              <input type="text" className="text-white border-none bg-transparent focus:border-none" placeholder="Fahd Niaz Sheikh" />
            </div>
            <div className="flex flex-col border rounded p-1 px-2 border-gray-200">
              <div className="text-gray-200 font-bold">PHONE NUMBER</div>
              <input type="text" className="text-white border-none bg-transparent focus:border-none" placeholder="+1 ...." />
            </div>
            <div className="flex flex-col border rounded p-1 px-2 border-gray-200">
              <div className="text-gray-200 font-bold">EMAIL</div>
              <input type="email" className="text-white border-none bg-transparent focus:border-none" placeholder="someone@xyz.com" />
            </div>
            <div className="flex flex-row items-start justify-start gap-4 mt-2">
              <button className="bg-[#EC5863] font-bold text-md text-white shadow px-8 py-2 rounded-md hover:bg-[#EC5863]/50 transition duration-300">Submit Request</button>
            </div>

          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 w-[80%] mx-auto relative -mt-[14rem]">
        <div className="flex items-center relative justify-center gap-x-2 -ml-4 mt-5 ">
          <img
            className="w-14 h-14 md:w-24 md:h-24"
            src={"/rightPoint.svg"}
            alt="right"
          />
          <div className="-ml-2 flex flex-col justify-center items-center">
            <strong className="text-xl md:text-3xl text-white">NIC</strong>
            <span className="text-[#EC5863] text-md font-normal text-center">
              INCUBATED <br />
              STARTUP
            </span>
          </div>
          <img
            className="w-14 h-14 md:w-24 md:h-24"
            src={"/leftPoint.svg"}
            alt="right"
          />
        </div>
        <div className="flex items-center relative justify-center gap-x-2 -ml-4 mt-5">
          <img
            className="w-14 h-14 md:w-24 md:h-24"
            src={"/rightPoint.svg"}
            alt="right"
          />
          <div className="-ml-2 flex flex-col justify-center gap-x-2 items-center">
            <strong className="text-xl md:text-3xl text-white">IGNITE
            </strong>
            <span className="text-[#EC5863] text-md font-normal text-center">
              TOP 3 <br />
              STARTUPS
            </span>
          </div>
          <img
            className="w-14 h-14 md:w-24 md:h-24"
            src={"/leftPoint.svg"}
            alt="right"
          />
        </div>
        <div className="flex items-center relative justify-center -ml-4 mt-5">
          <img
            className="w-14 h-14 md:w-24 md:h-24"
            src={"/rightPoint.svg"}
            alt="right"
          />
          <div className="-ml-2 flex flex-col justify-center items-center">
            <strong className="text-xl md:text-3xl text-white">CLIENTS
            </strong>
            <span className="text-[#EC5863] text-md font-normal text-center">
              CAN,PAK,US,UK,UAE <br />
              5+ Countries
            </span>
          </div>
          <img
            className="w-14 h-14 md:w-24 md:h-24"
            src={"/leftPoint.svg"}
            alt="right"
          />
        </div>
      </div>

      <div className="w-[75%] mx-auto text-center font-bold text-white text-4xl md:text-6xl mt-14">Most Decorated<br />Startup of Pakistan</div>

      <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-2 md:w-[50%] mx-auto relative mt-10">
        <div className="flex items-center relative justify-center gap-x-2 -ml-4 mt-5 ">
          <img
            className="w-14 h-14 md:w-24 md:h-24"
            src={"/rightPoint.svg"}
            alt="right"
          />
          <div className="-ml-2 flex flex-col justify-center items-center">
            <strong className="text-xl md:text-3xl text-white text-center">ARY NEWS</strong>
            <span className="text-white text-md font-normal text-center">
              Exclusive <br />
              Feature
            </span>
          </div>
          <img
            className="w-14 h-14 md:w-24 md:h-24"
            src={"/leftPoint.svg"}
            alt="right"
          />
        </div>
        <div className="flex items-center relative justify-center -ml-4 mt-5">
          <img
            className="w-14 h-14 md:w-24 md:h-24"
            src={"/rightPoint.svg"}
            alt="right"
          />
          <div className="-ml-2 flex flex-col justify-center items-center">
            <img src="/collision.svg" className="w-full h-12"/>
            <span className="text-white text-md font-normal text-center">
              Selected for <br />
              Collision 2024
            </span>
          </div>
          <img
            className="w-14 h-14 md:w-24 md:h-24"
            src={"/leftPoint.svg"}
            alt="right"
          />
        </div>
      </div>


      <Footer2/>

    </main>
  );
}


const Header = () => {

  return (
    <div className="relative w-[90%] mt-12 pt-4 p-2 mx-auto flex justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-5xl font-bold text-white">Let Pre<span className="text-[#EC5863]">M</span>ed Design Your Next</h1>
        <h1 className="text-3xl md:text-8xl z-10 font-extrabold text-white">AWESOME PRODUCT</h1>

        <button className="mt-4 md:mt-8 w-fit bg-[#EC5863] font-bold text-md text-white px-4 py-2 rounded-lg shadow hover:bg-[#EC5863]/50 transition duration-300">
          Book a Demo
        </button>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 w-full max-w-2xl relative ">
          <div className="flex items-center relative justify-center gap-x-2 -ml-4 mt-5 ">
            <img
              className="w-14 h-14 md:w-16 md:h-16"
              src={"/rightPoint.svg"}
              alt="right"
            />
            <div className="-ml-2 flex flex-col justify-center items-center">
              <strong className="text-xl md:text-2xl text-white">Top</strong>
              <span className="text-[#EC5863] text-xs font-normal text-center">
                NIC-KHI <br />
                STARTUP
              </span>
            </div>
            <img
              className="w-14 h-14 md:w-16 md:h-16 -ml-2"
              src={"/leftPoint.svg"}
              alt="right"
            />
          </div>
          <div className="flex items-center relative justify-center gap-x-2 -ml-4 mt-5">
            <img
              className="w-14 h-14 md:w-16 md:h-16"
              src={"/rightPoint.svg"}
              alt="right"
            />
            <div className="-ml-2 flex flex-col justify-center gap-x-2 items-center">
              <strong className="text-xl md:text-2xl text-white">50+
              </strong>
              <span className="text-[#EC5863] text-xs font-normal text-center">
                VIBRANT <br />
                DESIGNERS
              </span>
            </div>
            <img
              className="w-14 h-14 md:w-16 md:h-16 -ml-2"
              src={"/leftPoint.svg"}
              alt="right"
            />
          </div>
          <div className="flex items-center relative justify-center -ml-4 mt-5">
            <img
              className="w-14 h-14 md:w-16 md:h-16"
              src={"/rightPoint.svg"}
              alt="right"
            />
            <div className="-ml-2 flex flex-col justify-center items-center">
              <strong className="text-xl md:text-2xl text-white">3
              </strong>
              <span className="text-[#EC5863] text-xs font-normal text-center">
                SUCCESSFUL <br />
                PRODUCTS
              </span>
            </div>
            <img
              className="w-14 h-14 md:w-16 md:h-16 -ml-2"
              src={"/leftPoint.svg"}
              alt="right"
            />
          </div>
          <div className="flex items-center relative justify-center -ml-4 mt-5">
            <img
              className="w-14 h-14 md:w-16 md:h-16"
              src={"/rightPoint.svg"}
              alt="right"
            />
            <div className="-ml-2 flex flex-col justify-center items-center">
              <strong className="text-xl md:text-2xl text-white">100K
              </strong>
              <span className="text-[#EC5863] text-xs font-normal text-center">
                SATISFIED <br />
                USERS
              </span>
            </div>
            <img
              className="w-14 h-14 md:w-16 md:h-16 -ml-2"
              src={"/leftPoint.svg"}
              alt="right"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="absolute top-0 right-[10vw]">
          <div className="relative rounded -skew-x-[16deg] rotate-[16deg]">
            <img src="/premedlanding.png" alt="image" className="h-36 w-full rounded" />
            <div className="absolute flex p-2 justify-between  rounded items-center min-h-[20px] w-full bottom-0 left-0" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.18)", }}>
              <div className="text-sm bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold">PreMed</div>
              <div className="text-xs bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-500">LANDING PAGE</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[8vw] right-0">
          <div className="relative rounded -skew-x-[16deg] rotate-[16deg]">
            <img src="/Moc2.png" alt="image" className="h-36 w-62 object-cover rounded" />
            <div className="absolute flex p-2 justify-between  rounded items-center min-h-[20px] w-full bottom-0 left-0" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.18)" }}>
              <div className="text-sm bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold">PreMed</div>
              <div className="text-xs bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-500">COURSES UI</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[12vw] right-[15vw]">
          <div className="relative rounded -skew-x-[16deg] rotate-[16deg]">
            <img src="/Mock3.png" alt="image" className="h-36 w-full rounded" />
            <div className="absolute flex p-2 justify-between  rounded items-center min-h-[20px] w-full bottom-0 left-0" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.18)", }}>
              <div className="text-sm bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold">MedSchool</div>
              <div className="text-xs bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-500">STATISTICS PAGE</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[20vw] right-[8vw]">
          <div className="relative rounded -skew-x-[16deg] rotate-[16deg]">
            <img src="/Mock3.png" alt="image" className="h-36 w-full rounded" />
            <div className="absolute flex p-2 justify-between  rounded items-center min-h-[20px] w-full bottom-0 left-0" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.18)", }}>
              <div className="text-sm bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold">MedSchool</div>
              <div className="text-xs bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text font-500">STATISTICS PAGE</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
