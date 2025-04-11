export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  github: string;
  demo?: string;
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  description: string;
  icon: string;
  iconColor: string;
  bgColor: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  badgeColor: string;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  shortBio: string;
  dob: string;
  location: string;
  email: string;
  phone: string;
  bioP1: string;
  bioP2: string;
  bioP3: string;
  social: {
    facebook: string;
    twitter: string;
    github: string;
    linkedin: string;
    youtube: string;
    zalo: string;
    discord: string;
  }
}
