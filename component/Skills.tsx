import { Skills as skillData } from "@/data/data";
import { SkillCategory } from "@/data/types";

export default function Skills() {
  return (
    <section className="mt-8">
      <h2 className="section-title">Skills/Core Competencies</h2>
      <div className="mt-1">
        {skillData.map(({ category, skills }: SkillCategory) => {
          return (
            <div key={category} className="flex mb-2 items-baseline flex-wrap">
              <span className="section-h2 mr-2">{category}</span>
              {skills.map((item, index) => (
                <span
                  key={index}
                  className="after:content-['•'] after:px-2 last:after:content-none"
                >
                  {item}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
