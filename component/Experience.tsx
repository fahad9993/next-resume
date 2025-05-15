import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";

import { Experience as experienceData } from "@/data/data";
import { ExperienceType } from "@/data/types";
import MyIcon from "@/component/MyIcon";

export default function Experience() {
  return (
    <section className="section-mt">
      <h2 className="section-title">Experience</h2>
      {experienceData.map((exp: ExperienceType) => (
        <div key={exp.company}>
          <h3 className="section-h1">{exp.position}</h3>
          <h4 className="section-h2">{exp.company}</h4>
          <div className="flex items-center space-x-4 text-sm mt-1">
            <div className="flex items-center space-x-2">
              <MyIcon Icon={FaCalendarDays} />
              <p>
                {exp.timeline.from} &ndash; {exp.timeline.to}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <MyIcon Icon={FaLocationDot} />
              <p>{exp.place}</p>
            </div>
          </div>
          <div className="space-y-6">
            <ul className="list-disc pl-5 mt-2">
              {exp.tors.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
