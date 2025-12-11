
import React from 'react';
import Section from './Section.tsx';
import { SkillItem } from '../types.ts';
import { LockClosedIcon } from './icons/LockClosedIcon.tsx';
import { CommandLineIcon } from './icons/CommandLineIcon.tsx';
import { CodeBracketIcon } from './icons/CodeBracketIcon.tsx';
import { BrainIcon } from './icons/BrainIcon.tsx';
import { DatabaseIcon } from './icons/DatabaseIcon.tsx';
import { NetworkIcon } from './icons/NetworkIcon.tsx';
import { ChipIcon } from './icons/ChipIcon.tsx';

const skillsData: SkillItem[] = [
  {
    name: 'Operating Systems',
    icon: <CommandLineIcon className="w-8 h-8 mr-3" />,
    description: "Proficient with Linux (Debian-based, RHEL, Linux+ Concepts), Windows (Desktop/Server), and BSD servers.",
    details: ["System administration", "Hardening", "Scripting"]
  },
  {
    name: 'Security Tools & Frameworks',
    icon: <LockClosedIcon className="w-8 h-8 mr-3" />,
    description: "Experienced in utilizing a variety of security tools for assessment and defense operations.",
    details: ["Metasploit Framework", "Nmap", "Wireshark", "Burp Suite", "Splunk (SIEM)", "Postman"]
  },
  {
    name: 'Networking & Firewalls',
    icon: <NetworkIcon className="w-8 h-8 mr-3" />,
    description: "Solid understanding of TCP/IP, routing, switching (CCNA certified), VPNs, and firewall administration.",
    details: ["Cisco Routers & Switches", "FortiGate Firewalls", "Cisco Firepower NGFW", "pfSense with Snort", "OOBM", "Site-to-Site VPN"]
  },
  {
    name: 'Programming & Scripting',
    icon: <CodeBracketIcon className="w-8 h-8 mr-3" />,
    description: "Skilled in multiple programming and scripting languages for tool development, automation, and application creation.",
    details: ["Python", "Bash", "Java/Kotlin", "JavaFX", "C/C++"]
  },
  {
    name: 'Web Development',
    icon: <CodeBracketIcon className="w-8 h-8 mr-3" />,
    description: "Experience building modern web applications with various frontend and backend technologies.",
    details: ["HTML/CSS", "React.js", "Angular", "RESTful APIs (ASP.NET Core & FastAPI)"]
  },
  {
    name: 'Database Management',
    icon: <DatabaseIcon className="w-8 h-8 mr-3" />,
    description: "Knowledge of database administration and SQL for data management and security.",
    details: ["Oracle Database", "PostgreSQL", "Microsoft SQL Server", "Database security principles"]
  },
  {
    name: 'Version Control',
    icon: <CodeBracketIcon className="w-8 h-8 mr-3" />,
    description: "Proficient in version control systems for collaborative development and code management.",
    details: ["Git", "GitHub", "Branch management", "Code review workflows"]
  },
  {
    name: 'Hardware & Embedded Systems Security',
    icon: <ChipIcon className="w-8 h-8 mr-3" />,
    description: "Experience with electronics design, microcontroller programming, and securing embedded systems.",
    details: ["Arduino", "Raspberry Pi", "STM32", "ESP32", "IoT Security"]
  },
  {
    name: 'Cryptography',
    icon: <LockClosedIcon className="w-8 h-8 mr-3" />,
    description: "Understanding of Symmetric and Public Key Encryption principles and their applications.",
    details: ["Encryption algorithms (AES, RSA)", "Key management concepts", "Hashing functions"]
  },
  {
    name: 'Cybersecurity Concepts & Methodologies',
    icon: <BrainIcon className="w-8 h-8 mr-3" />,
    description: "Comprehensive knowledge of core cybersecurity concepts, threat modeling, and defensive/offensive strategies.",
    details: ["Vulnerability Assessment", "Digital Forensics", "Malware Analysis", "Secure Coding Practices", "Penetration Testing (OSCP concepts)"]
  },
];

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" title="skill_matrix" className="bg-gray-900/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill) => (
          <div key={skill.name} className="bg-black/50 border border-green-500/40 p-6 hover:shadow-xl hover:shadow-green-500/20 transition-shadow duration-300 flex flex-col">
            <div className="flex items-center text-2xl mb-3">
              {skill.icon}
              <h3 className="font-semibold">{skill.name}</h3>
            </div>
            <p className="text-gray-400 text-md mb-3 flex-grow">{skill.description}</p>
            {skill.details && skill.details.length > 0 && (
              <div className="mt-2">
                <ul className="list-disc list-inside text-green-300/80 text-sm pl-1">
                  {skill.details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-center mt-12 text-gray-400 text-lg">
        // My skills are constantly evolving. The mission is perpetual learning.
      </p>
    </Section>
  );
};

export default SkillsSection;
