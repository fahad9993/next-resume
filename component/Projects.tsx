import React from "react";
import {
  FaLocationDot,
  FaClock,
  FaCalendarDays,
  FaGraduationCap,
} from "react-icons/fa6";
import MyIcon from "@/component/MyIcon";
import { FaUniversity } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="section-mt">
      <h2 className="section-title">Projects</h2>

      {/* Coursera Course */}
      {/* <h4 className="section-h2 mt-2">Course</h4> */}
      <p className="mt-1">
        Automated Library System—Robotic Book Retrieval Prototype
      </p>
      <div className="flex items-baseline space-x-4 text-sm mt-1">
        <div className="flex items-center space-x-2">
          <MyIcon Icon={FaCalendarDays} />
          <span>2015</span>
        </div>
        <div className="flex items-center space-x-2">
          <MyIcon Icon={FaUniversity} />
          <span>Bangladesh University of Engineering and Technology</span>
        </div>
      </div>
      <ul className="list-disc pl-5 mt-2">
        <li>Designed robotic claws and chassis using SolidWorks</li>
        <li>Controlled servo motors and claw movement using Arduino Uno</li>
      </ul>
    </section>
  );
}
