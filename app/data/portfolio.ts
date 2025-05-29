// app/data/portfolio.ts
import avatarImage from "~/assets/images/dev.png";




export const personalInfo = {
    name: "LAVKUSH SINGH",
    title: "Full Stack Developer",
    email: "lavkushsingh1998@gmail.com",
    location: "Sulatanpur, Uttar Pradesh",
    bio: "Passionate developer creating modern web applications with cutting-edge technologies.",
    avatar: avatarImage, // Add your avatar to public folder
    social: {
      github: "https://github.com/Lavkush-Singh34",
      linkedin: "https://linkedin.com/in/lavkush34",
      twitter: "https://twitter.com/lavkush_singh34",
    }
  };
  
  export const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "MongoDB", "AWS", "Docker", "Git", "Tailwind CSS"
  ];
  
  export const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      image: "/project1.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/project1",
      live: "https://yourproject1.com",
      featured: true
    },
    // Add more projects
  ];
  
  export const experience = [
    {
      company: "Tech Company",
      position: "Senior Developer",
      duration: "2022 - Present",
      description: "Led development of key features and mentored junior developers.",
      skills: ["React", "TypeScript", "AWS"]
    },
    // Add more experience
  ];