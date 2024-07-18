import React, { useState } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import SkillsAndBudget from './SkillsAndBudget';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Pastikan ini sesuai dengan root element di aplikasi Anda


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
      <div className="flex justify-center mb-8">
        <img src="/me2.jpg" alt="Foto Saya" className="rounded-sm w-24 h-24" />
      </div>
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

const ProjectCard = ({ title, description, img }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
      <center>
        <img src={img} alt="" className="rounded-sm w-80 h-80" onClick={openModal} />
      </center>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      >
        <div className="bg-white p-4 rounded-lg">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
          >
            Close
          </button>
          <img src={img} alt="" className="rounded-sm max-w-full max-h-screen" />
        </div>
      </Modal>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Sistem Pembayaran Sekolah",
      description: "Developed an REST API Service for SPS web application using MERN (MySQL, Express JS, React, Node.js) stack.",
      img: "/sps.png"
    },
    {
      title: "Antrian Online",
      description: "Developed online queuing system using CodeIgniter and Tailwind CSS",
      img: "/2.png"
    },
    {
      title: "JKT48 Lineup Creator",
      description: "Developed a fullstack JKT48 lineup creator; a JKT48 fan-made web application using React JS.",
      img: "/3.png"
    }
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} img={project.img} />
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