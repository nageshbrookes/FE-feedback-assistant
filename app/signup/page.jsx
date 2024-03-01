import React from "react";
import Image from "next/image";
import authImage from "../../public/images/authImage.png"
import googleImage from "../../public/images/google.svg"
import logo from "@components/image/logo";
import Logo from "@components/image/logo";
import IconLogo from "@components/icon/IconLogo";
import Button from "@components/button/Button";
import InputField from "@components/input/InputField";
import PasswordValidationBox from "@components/PasswordValidationBox";
import Link from "next/link";

function page() {
  // const style = {
  //     border: "1px solid red"
  // }
  return (
      <div className={"w-full h-screen grid lg:grid-cols-2"}>

        <div className={"flex flex-col h-full"}>
          <div className={"p-6"}>
            <Logo />
          </div>
          <div className={"grow flex justify-center items-center"}>
            <div className={"w-full max-w-[400px]"}>
              <div className={"flex justify-center mb-6"}>
                <IconLogo />
              </div>
              <div>
                <div className={"text-[32px] font-semibold text-center m-3"}>Create your account</div>
                <div className={"text-[#4F4D55] text-center mb-6"}>Enter the fields below to get started</div>
              </div>

              <div>
                
                <div className={"border border-[#E6E6E6] rounded-lg text-sm"}>
                  <InputField placeholder={"Enter name*"} style={"w-full px-3 py-2 focus-visible:outline-0 rounded-t-lg border-b"}/>
                  <InputField placeholder={"Enter email*"} style={"w-full px-3 py-2 focus-visible:outline-0 border-b"}/>
                  <InputField placeholder={"Create a password*"} style={"w-full px-3 py-2 focus-visible:outline-0 rounded-b-lg"}/>
                </div>
                <div className={"my-5"}>
                  <PasswordValidationBox />
                </div>
                <div className={"mb-6"}>
                  <Button text={"Create account"} style={"shadow-md w-full border text-sm p-2.5 rounded-[7px] bg-[#6A5BC1] text-white rounded-full"}/>
                </div>
                <div className={"flex justify-center md:justify-start"}>
                  <span className={"font-medium text-sm"}>Already have an account?</span>
                  <Link className={"font-medium text-sm ml-2 text-[#6A5BC1]"} href={"/login"}>Log in</Link>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className={"hidden lg:flex justify-center items-center p-8"}>
          <div className={"h-full w-full max-w-2xl relative"}>
            <Image src={authImage} alt={"auth-image"} className={"w-full h-full object-cover"}/>
            <div className={"absolute top-0 h-full w-full flex flex-col justify-end p-8"}>
              <div className={"text-white text-xl"}>
                Discover groups, join events, and spark meaningful connections around shared interests.
              </div>
              <div className={"flex gap-2 mt-8"}>
                <div className={"w-2 h-2 rounded-full bg-white"}></div>
                <div className={"w-2 h-2 rounded-full bg-gray-50 bg-opacity-40"}></div>
                <div className={"w-2 h-2 rounded-full bg-gray-50 bg-opacity-40"}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default page;
