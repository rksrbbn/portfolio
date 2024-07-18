import React from 'react';

const SkillButton = ({ skill, isActive }) => (
  <button
    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-purple-500 text-white'
        : 'bg-gray-800 text-white hover:bg-gray-700'
    }`}
  >
    {skill}
  </button>
);

const Skills = () => {
  const skills = [
    { name: 'PHP', active: true },
    { name: 'Javascript', active: true },
    { name: 'HTML5', active: true },
    { name: 'CSS3', active: true },
    { name: 'Python', active: true },
    { name: 'JQuery', active: true },
    { name: 'Laravel', active: true },
    { name: 'CodeIgniter', active: true },
    { name: 'Tailwind CSS', active: true },
    { name: 'Bootstrap', active: true },
    { name: 'MySQL', active: true },
    { name: 'PostgreSQL', active: true },
    { name: 'SQL Server', active: true },
    { name: 'Git', active: true },
  ];

  return (
    <div className="bg-black text-white p-8">
      {/* <h2 className="text-3xl font-bold mb-6">SERVICES</h2> */}
      <div className="flex flex-wrap gap-4 text-center items-center justify-center">
        {skills.map((skill, index) => (
          <SkillButton key={index} skill={skill.name} isActive={skill.active} />
        ))}
      </div>
    </div>
  );
};

const SkillsAndBudget = () => (
  <div className="bg-black min-h-300 flex items-center">
    <div className="container mx-auto px-12 py-32 text-center">
      <h1 className="text-6xl font-bold text-white mb-16">My Skills</h1>
      <Skills />
    </div>
  </div>
);

export default SkillsAndBudget;