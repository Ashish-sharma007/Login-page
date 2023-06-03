import React from "react";
import image from "./assets/Rectangle 15.png";
import image2 from "./assets/login-leaf.png";
import logo from "./assets/Frame 45 2.png";
import rect from "./assets/Group 8998.png";
import Frame61 from "./assets/Frame 61.svg";
const App = () => {
  return (
    <div className="w-full h-screen flex bg-zinc-800 ">
      <div className=" w-[1280px] h-[610px] bg-white grid grid-cols-1 md:grid-cols-2  m-auto   shadow-gray-600 sm:max-w-[1280px] ">
        <div className="w-[620px] h-[550px] m-[27px]   hidden md:block">
          <img src={logo} className="absolute ml-[20px] mt-[27px]" alt="logo" />
          <div className="absolute mt-[280px] ml-[20px]  ">
            <p className="font-bold text-[38px]  text-white font-Poppins ">
              100% Uptime😎{" "}
            </p>
            <p className="text-zinc-400 text-[28px] font-Poppins ">
              Zero Infrastructure{" "}
            </p>
            <p className="text-zinc-400 text-[28px] font-Poppins ">
              Management
            </p>
            <img src={rect} className="mt-[34px]" alt="dotes" />
            <img
              src={Frame61}
              className="absolute mt-[60px] ml-[510px]"
              alt="fb-logo"
            />
            <p className=" text-white font-Inter text-[12px] mt-[50px]">
              🌐 aesthisia.com
            </p>
          </div>

          <img src={image}  alt="bg-image" />
        </div>
        <div className="flex flex-col justify-around">
          <form action="">
            <div className="flex gap-2  mt-[127px]">
              <h2 className="text-4xl font-semibold  mb-8 ml-[187px] font-Poppins ">
                Welcome{" "}
              </h2>

              <p className="text-teal-600 text-4xl font-semibold font-Poppins ">
                {" "}
                Back!
              </p>
            </div>
            <p className="text-zinc-400 ml-[244px] mb-[6px] font-Inter">
              Glad to see you,Again!
            </p>
            <div>
              <div className="flex flex-col ">
                <input
                  className="border p-2 my-4 mr-2 rounded-lg w-[360px] ml-[140px]  h-[49px] font-Inter "
                  type="text"
                  placeholder="Enter your email"
                />
                <input
                  className="border p-2 mr-2 rounded-lg w-[360px] h-[49px] ml-[140px] font-Inter "
                  type="password"
                  minLength={6}
                  placeholder="Enter your password"
                />
                <p className=" text-zinc-300 ml-[140px] font-Inter ">
                  Forgot Password?
                </p>
              </div>
            </div>
            <button className="w-[360px] h-[53px] ml-[140px]  py-2 rounded-lg my-4 font-Inter bg-black hover:bg-teal-600 text-white font-bold shadow-black shadow-2xl">
              Log In
            </button>
            <div className="flex justify-center mt-4 gap-1 ">
              <p className="  text-zinc-400 font-Inter">
                Don't have an account yet?
              </p>
              <p className="font-semibold text-teal-600 font-Inter"> Sign Up</p>
            </div>
            
          </form>
        </div>
        <img
          className=" absolute w-[61px] h-[49px] mt-[78px] ml-[930px] "
          src={image2}
          alt="leaf"
        />
      </div>
    </div>
  );
};

export default App;
