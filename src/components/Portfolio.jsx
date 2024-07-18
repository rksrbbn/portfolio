import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import SkillsAndBudget from './SkillsAndBudget';

const Header = () => (
    <div className="mb-8 py-64">
      <p className="text-2xl italic mb-2">I am Raka Santang Rabbani</p>
      <div className="flex items-center justify-between">
      </div>
      <h2 className="text-5xl font-bold mt-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
          WEB
        </span>{' '}
        DEVELOPER
      </h2>
    </div>
  );

const About = () => (
  <section className="py-32 bg-gray-100">
    <div className="container mx-auto px-8">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg">
        Hi, my name is Raka Santang Rabbani, a 20 years old Web Developer. 
        I am someone who loves technology, especially in terms of UI/UX of a web. I'm also interested in problem solving, so I started learning programming.
        As a backend developer with 3 years of experience, I have developed solid skills in designing and implementing efficient and scalable systems. I have a passion for creating innovative technology solutions and am always enthusiastic to learn the latest technologies in the industry.
      </p>
      <p className="text-lg mt-4">
      I am always looking for new challenges to hone my skills and contribute to impactful projects. With a combination of practical experience and a desire to keep learning, I'm ready to take on the complexities of modern backend development and help teams achieve their goals.
      </p>
    </div>
  </section>
);

const Skills = () => {
  const skills = ['Laravel', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Python', 'Git', 'PostgreSQL'];
  
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Kemampuan</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-4">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Developed a full-stack e-commerce platform using MERN stack with features like product management, shopping cart, and payment integration."
    },
    {
      title: "Task Management App",
      description: "Built a real-time task management application using React and Firebase, allowing teams to collaborate efficiently."
    },
    {
      title: "Personal Finance Tracker",
      description: "Created a mobile-responsive web app for personal finance tracking using Vue.js and Chart.js for data visualization."
    }
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Proyek</h2>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4 flex justify-center space-x-4">
      <a target='blank' href="https://github.com/rksrbbn" className="text-2xl"><FaGithub /></a>
      <a href="mailto:rakasantang22@gmail.com" className="text-2xl"><FaEnvelope /></a>
    </div>
  </footer>
);

const Portfolio = () => (
  <div className="font-sans">
    <Header />
    <About />
    {/* <Skills /> */}
    <SkillsAndBudget/>
    <Projects />
    <Footer />
  </div>
);

export default Portfolio;