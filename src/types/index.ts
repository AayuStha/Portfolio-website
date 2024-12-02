export interface Project {
  id: string;
  title: string;
  description: string;
  status?: string;
  link: string;
  tags: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}