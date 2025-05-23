
import React from 'react';
import Section from './Section';
import { ProjectItem } from '../types';
import TerminalText from './TerminalText';

const projectsData: ProjectItem[] = [
  {
    id: 'finjan_android_app',
    title: 'Native Android Application (Finjan)',
    description: "Developed a native Android application named 'Finjan'. This project involved full-cycle app development, focusing on user experience, functionality, and clean architecture using MVVM.",
    tags: ['Android', 'Java/Kotlin', 'Mobile Development', 'Software Engineering', 'MVVM', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwc2hvcCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60', // New, different coffee shop image
    link: 'https://github.com/ahmeddwalid/Finjan',
    category: "Software Development",
  },
  {
    id: 'javafx_restaurant_system',
    title: 'JavaFX Restaurant Food Ordering System',
    description: "Modern design responsive restaurant food ordering system that interacts with a MySQL database, implemented using JavaFX. Focuses on clean UI/UX and robust backend interaction.",
    tags: ['JavaFX', 'Java', 'MySQL', 'DesktopApp', 'SoftwareEngineering', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudCUyMGFwcGxpY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    link: 'https://github.com/ahmeddwalid/AdvProgProj',
    category: 'Software Development',
  },
  {
    id: 'needham_schroeder_protocol',
    title: 'Needham-Schroeder Protocol Implementation',
    description: "An implementation of the Needham-Schroeder key exchange protocol, a fundamental concept in network security for secure communication.",
    tags: ['Cryptography', 'NetworkSecurity', 'Protocol', 'Java', 'Security'],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VjdXJpdHklMjBwcm90b2NvbHxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=600&q=60',
    link: 'https://github.com/ahmeddwalid/Needham-Schroeder-protocol',
    category: 'Software Development',
  },
  {
    id: 'dss_rpc_project',
    title: 'Distributed Systems RPC Project',
    description: "A project demonstrating Remote Procedural Call (RPC) concepts, crucial for building robust and scalable distributed applications.",
    tags: ['DistributedSystems', 'RPC', 'Networking', 'SoftwareEngineering', 'Java'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpc3RyaWJ1dGVkJTIwc3lzdGVtc3xlbnwwfHwwfHx8MA&auto=format&fit=crop&w=600&q=60',
    link: 'https://github.com/ahmeddwalid/DSS-RPC',
    category: 'Software Development',
  },
  {
    id: 'alex_uni_ev_project',
    title: 'Alexandria University Electric Car Project',
    description: "Collaborated with Alexandria University Motorsport (AUM) on their Electric Car Project in 2021. Contributed to the technical development and teamwork aspects of the project.",
    tags: ['Automotive', 'Engineering', 'Collaboration', 'Electric Vehicle'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    category: "Engineering Project",
  },
  {
    id: 'ieee_volunteer',
    title: 'IEEE Volunteer',
    description: "Actively volunteered with IEEE, participating in events and initiatives aimed at advancing technology and engineering education and collaboration.",
    tags: ['Community', 'Volunteering', 'IEEE', 'Networking'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3klMjBjb21tdW5pdHl8ZW5wbnwwfHwwfHx8MA&auto=format&fit=crop&w=600&q=60',
    category: "Community Engagement",
  },
  {
    id: 'ctf_platform_engagement',
    title: 'CTF & Online Platform Engagement',
    description: "Actively honing cybersecurity skills through Capture The Flag (CTF) competitions and online learning platforms. Continuously challenging myself and expanding my knowledge base in practical, hands-on environments.",
    tags: ['CTF', 'Ethical Hacking', 'Skill Development', 'TryHackMe', 'HackTheBox', 'Codewars'],
    image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=600&q=60',
    link: '#contact', 
    category: "Skill Development",
  },
];

// Helper component for the card's visual content
const CardContentInner: React.FC<{ project: ProjectItem }> = ({ project }) => (
  <>
    <div className="relative h-48 overflow-hidden">
      <img 
        src={project.image || `https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60`} 
        alt={`${project.title} preview`} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-50 group-hover:opacity-75"
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
      <h3 className="absolute bottom-0 left-0 p-4 text-2xl font-bold text-white z-10">
        <TerminalText text={`> ${project.title}`} speed={80} loop={false} />
      </h3>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-gray-300 mb-4 text-md leading-relaxed flex-grow min-h-[60px]">{project.description}</p>
      {/* Explicit text links removed as the whole card is now the link if project.link exists */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-xs bg-green-700/50 text-green-300 border border-green-600">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </>
);

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  if (project.link) {
    return (
      <a
        href={project.link}
        target={project.link.startsWith('#') ? '_self' : '_blank'}
        rel={project.link.startsWith('#') ? '' : 'noopener noreferrer'}
        className="block bg-gray-900/60 border border-green-500/30 overflow-hidden hover:border-green-400 transition-all duration-300 group flex flex-col text-current no-underline hover:text-current focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
        aria-label={`View details for ${project.title}`}
      >
        <CardContentInner project={project} />
      </a>
    );
  } else {
    return (
      <div className="bg-gray-900/60 border border-green-500/30 overflow-hidden group flex flex-col">
        <CardContentInner project={project} />
      </div>
    );
  }
};

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" title="accomplishment_log" className="bg-black">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
       <p className="text-center mt-12 text-gray-400 text-lg">
        // These are records of my current engagements and developments.
      </p>
    </Section>
  );
};

export default ProjectsSection;
