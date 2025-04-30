import React from "react";
import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";

export default function Courses() {
  return (
    <section className="section-mt">
      <h2 className="section-title">Training</h2>
      <h4 className="section-h2 mt-2">Industrial Training</h4>
      <p className="mt-1">110 MW & 115 MW Barge-Mounted Power Plant</p>
      <div className="flex items-baseline space-x-4 text-sm">
        <div className="flex items-center space-x-2 mt-1">
          <FaRegCalendarDays />
          <span>21 days</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaLocationDot />
          <p>Khulna, Bangladesh</p>
        </div>
      </div>
    </section>
  );
}
