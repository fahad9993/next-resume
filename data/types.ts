export interface SkillType {
  category: string;
  skills: string[];
}

export interface ExperienceType {
  company: string;
  position: string;
  timeline: {
    from: string;
    to: string;
  };
  place: string;
  tors: string[];
}
