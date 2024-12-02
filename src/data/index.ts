import { Project, Experience } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'BagSalesNepal',
    description: 'E-commerce platform for curated bags with a backend-focused design.',
    status: 'Completed',
    link: 'https://bagsalesnepal.000.pe/project-ecommerce/',
    tags: ['Node.js', 'Express', 'MongoDB', 'React']
  },
  {
    id: '2',
    title: 'MarvelPopExpress',
    description: 'E-commerce site for Marvel Funko Pops collectors, featuring seamless frontend and backend integration.',
    link: 'https://marvelpop.aayushrestha.com',
    tags: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    id: '3',
    title: 'Donation Hero',
    description: 'Donation platform for disaster relief using PHP, HTML, CSS. Created during Sagarmatha Hacks.',
    link: 'https://donationhero.000.pe/?i=1',
    tags: ['PHP', 'HTML', 'CSS', 'MySQL']
  },
  {
    id: '4',
    title: 'Text-to-Art',
    description: 'Converts text to ASCII art using Node.js and EJS.',
    link: 'https://texttoart.azurewebsites.net/',
    tags: ['Node.js', 'EJS', 'Express']
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Vice-President',
    company: 'Sagarmatha IT Club',
    period: 'Jan 2024 - Present',
    description: 'Organized 10+ events and led the national-level Sagarmatha Tech Fest with 20+ technical activities. Managed a team of 15 members and coordinated various workshops and seminars.'
  },
  {
    id: '2',
    title: 'HR Lead',
    company: 'AWS Student Community Day Nepal 2024',
    period: 'Jul 2024 - Sep 2024',
    description: 'Managed team coordination and human resources for an international tech event. Successfully organized community engagement initiatives and handled event logistics.'
  },
  {
    id: '3',
    title: 'Executive Member',
    company: 'AWS Cloud Club Nepal',
    period: 'Jan 2024 - Present',
    description: 'Contributing to cloud computing initiatives and promoting AWS services among students. Organizing workshops and training sessions to enhance cloud computing knowledge.'
  }
];

export const personalInfo = {
  name: 'Aayush Shrestha',
  role: 'Full Stack Developer',
  education: 'Bachelor in Computer Applications at Sagarmatha College of Science and Technology (Apr 2022 - Present)',
  summary: 'Strong foundation in technologies like Express.js and Node.js. Passionate about contributing to dynamic tech environments.',
  contact: {
    email: 'aayustha21@gmail.com',
    phone: '+9779864673159',
    github: 'https://github.com/AayuStha',
    linkedin: 'https://linkedin.com/in/ayz-sth'
  }
};