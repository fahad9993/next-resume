import { FaRegCalendarDays } from "react-icons/fa6";

import { Education as educationData } from "@/data/data";
import { EducationType } from "@/data/types";

export default function Education() {
  return (
    <section className="section-mt">
      <h2 className="section-title">Education</h2>
      {educationData.map((edu: EducationType) => (
        <div key={edu.degree}>
          <h3 className="section-h1">{edu.degree}</h3>
          <h4 className="section-h2">{edu.institution}</h4>
          <div className="flex items-center space-x-2 mt-1 text-sm">
            <FaRegCalendarDays />
            <span>
              {edu.timeline.from} &ndash; {edu.timeline.to}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
