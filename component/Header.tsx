import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="bg-primary text-white padding-x padding-t">
      <div className="text-center flex flex-row justify-between pb-4 w-full">
        <div className="w-fit">
          <div className="text-left mb-2">
            <h1 className="text-4xl font-bold mb-2 uppercase">
              Md. Fahad Rahman
            </h1>
            <p className=" text-lg">
              Mechanical Engineer | Administrative<br></br>Experience | Web &
              App Dev Enthusiast
            </p>
          </div>
          <div></div>
        </div>
        <div className="w-fit">
          <Image
            src="/PP_Photo_Square.jpg"
            width={100}
            height={100}
            alt="Profile Photo"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col items-end text-right gap-1 w-fit">
          <div className="flex items-center space-x-2">
            <MdEmail />
            <a href="mailto:fahad9993@gmail.com">fahad9993@gmail.com</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <a href="tel:+8801760979908">+880-1760 979 908</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/fahad9993/">
              linkedin.com/in/fahad9993
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaGithub />
            <a href="https://github.com/fahad9993">github.com/fahad9993</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaGlobe />
            <a href="https://portfolio-fahad9993.vercel.app/">
              portfolio-fahad9993.vercel.app
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
