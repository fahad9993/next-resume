import { FaCalendarDays } from "react-icons/fa6";

import { Education as educationData } from "@/data/data";
import { EducationType } from "@/data/types";
import StaticIcon from "@/component/StaticIcon";

export default function Education() {
  return (
    <section className="section-mt">
      <h2 className="section-title">Education</h2>
      {educationData.map((edu: EducationType) => (
        <div key={edu.degree}>
          <h3 className="section-h1">{edu.degree}</h3>
          <h4 className="section-h2">{edu.institution}</h4>
          <div className="flex items-center space-x-2 mt-1 text-sm">
            <FaCalendarDays size={11} className="relative top-[-1px]" />
            {/* <StaticIcon name="calendar" className="relative top-[-1px]" /> */}
            <span>
              {edu.timeline.from} &ndash; {edu.timeline.to}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
