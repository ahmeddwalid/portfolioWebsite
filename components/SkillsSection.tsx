
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
    description: "Proficient with Linux (Kali, RHEL, Linux+ Concepts) and Windows (Desktop/Server) environments.",
    details: ["System administration", "Hardening", "Scripting"]
  },
  { 
    name: 'Security Tools & Frameworks', 
    icon: <LockClosedIcon className="w-8 h-8 mr-3" />, 
    description: "Experienced in utilizing a variety of security tools for assessment and defense operations.",
    details: ["Metasploit Framework", "Nmap", "Wireshark", "Burp Suite", "Splunk (SIEM)"]
  },
  { 
    name: 'Networking & Firewalls', 
    icon: <NetworkIcon className="w-8 h-8 mr-3" />, 
    description: "Solid understanding of TCP/IP suite, routing, switching (CCNA concepts), VPNs, and firewall (FortiGate) administration.",
    details: ["Network security design", "Traffic analysis", "Firewall configuration", "SSH (Secure Shell)", "SCP (Secure Copy Protocol)"]
  },
  { 
    name: 'Programming & Scripting', 
    icon: <CodeBracketIcon className="w-8 h-8 mr-3" />, 
    description: "Skilled in multiple programming and scripting languages for tool development, automation, and application creation.",
    details: ["Python", "Bash", "Java/Kotlin (for Android)", "JavaFX (for Desktop)", "C/C++"]
  },
  { 
    name: 'Database Management', 
    icon: <DatabaseIcon className="w-8 h-8 mr-3" />, 
    description: "Knowledge of Oracle Database administration and SQL for data management and security.",
    details: ["Database security principles", "SQL querying", "Basic administration tasks"]
  },
  { 
    name: 'Firebase (BaaS)', 
    icon: <DatabaseIcon className="w-8 h-8 mr-3" />, // Reusing DatabaseIcon, as Firebase often handles data
    description: "Experience using Firebase for backend services in application development, including authentication and real-time databases.",
    details: ["Firestore", "Firebase Authentication", "Cloud Functions (basic understanding)"]
  },
  { 
    name: 'Hardware & Embedded Systems Security', 
    icon: <ChipIcon className="w-8 h-8 mr-3" />, 
    description: "Experience with electronics design, microcontroller programming (Arduino, Raspberry Pi, STM32), RTOS, and securing embedded systems against tampering.",
    details: ["Microcontroller programming", "RTOS (Real-Time Operating Systems)", "Device integrity checks", "Physical security concepts"]
  },
  {
    name: 'System Administration (RHEL)',
    icon: <CommandLineIcon className="w-8 h-8 mr-3" />,
    description: "Competent in Red Hat Enterprise Linux (RHEL) System Administration, focusing on stability and security.",
    details: ["User & group management", "Service configuration", "Security patching & updates"]
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
    details: ["Vulnerability Assessment", "Digital Forensics", "Malware Analysis (including professional training)", "Secure Coding Practices", "Penetration Testing Methodologies (OSCP concepts)", "Automotive Security (CAN bus, SPI, LIDAR)", "IoT Security"]
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
