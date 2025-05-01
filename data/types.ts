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

export interface EducationType {
  degree: string;
  institution: string;
  timeline: {
    from: string;
    to: string;
  };
}

export interface ReferenceType {
  name: string;
  designation: string;
  email: string;
}
