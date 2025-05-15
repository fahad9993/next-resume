import React from "react";
import { FaLocationDot, FaClock, FaCalendarDays } from "react-icons/fa6";
import StaticIcon from "@/component/StaticIcon";

export default function Courses() {
  return (
    <section className="section-mt">
      <h2 className="section-title">Training</h2>
      <h4 className="section-h2 mt-2">Industrial Training</h4>
      <p className="mt-1">110 MW & 115 MW Barge-Mounted Power Plant</p>
      <div className="flex items-baseline space-x-4 text-sm mt-1">
        <div className="flex items-center space-x-2">
          <FaCalendarDays size={11} className="relative top-[-1px]" />
          {/* <StaticIcon name="calendar" className="relative top-[-1px]" /> */}
          <span>08/2016</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaClock size={11} className="relative top-[-1px]" />
          {/* <StaticIcon name="clock" className="relative top-[-1px]" /> */}
          <span>21 days</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaLocationDot size={11} className="relative top-[-1px]" />
          {/* <StaticIcon name="location" className="relative top-[-1px]" /> */}
          <p>Khulna, Bangladesh</p>
        </div>
      </div>
    </section>
  );
}
