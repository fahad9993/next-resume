import { Skills as skillData } from "@/data/data";
import { SkillType } from "@/data/types";

export default function Skills() {
  return (
    <section className="section-mt">
      <h2 className="section-title">Skills</h2>
      <div className="mt-2">
        {skillData.map(({ category, skills }: SkillType) => {
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
