
import React from 'react';
import Section from './Section';
import TerminalText from './TerminalText';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="status_report" className="bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/30 border border-green-500/30 p-6 md:p-8 shadow-xl shadow-green-500/10">
          <h3 className="text-3xl mb-6 text-left">
            <TerminalText text="> whoami" speed={100} />
          </h3>
          <p className="text-xl md:text-2xl mb-6 leading-relaxed text-gray-300">
            I'm Ahmed Walid, a final year Cybersecurity student at the Arab Academy for Science, Technology & Maritime Transport (AAST), expecting to graduate in 2026. My journey into the world of cybersecurity is driven by a deep curiosity and a commitment to understanding and mitigating digital threats.
          </p>

          <div className="mb-6">
            <h4 className="text-2xl text-green-300 mb-2">// Education_Log</h4>
            <ul className="list-disc list-inside text-gray-400 pl-4">
              <li>Bachelor of Science in Cybersecurity, AAST (Expected 2026) - Alexandria, Egypt</li>
              <li>Egyptian English Language School (EELS) - Graduated 2022</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-2xl text-green-300 mb-2">// Certifications_&_Training</h4>
            <ul className="list-disc list-inside text-gray-400 pl-4">
              <li>Red Hat Certified System Administrator (RHCSA) (ITI institute) - Target 2025</li>
              <li>Fortinet Certified Professional (FCF) - Cybersecurity - Target 2025</li>
              <li>Offensive Security Certified Professional (OSCP) - Currently Preparing</li>
              <li>
                <a 
                  href="https://www.credly.com/badges/7d0ff400-e0c7-4c79-948f-e5118a3a517f/public_url" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-200 hover:underline"
                >
                  Fortinet Certified Fundamentals in Cybersecurity
                </a>
              </li>
              <li>Effective Test Case and Bug Report Writing Techniques (ITI Egypt)</li>
              <li>Malware Analysis Professional Training Course</li>
              <li>Coursework Knowledge: CompTIA Linux+, Cisco CCNA</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-2xl text-green-300 mb-2">// Human_Languages</h4>
             <p className="text-gray-400">Arabic (Native), English (Fluent), French (A2), German (A2)</p>
          </div>

          <div className="mb-6">
            <h4 className="text-2xl text-green-300 mb-2">// Additional_Competencies</h4>
            <p className="text-gray-400">Touch Typing: 70 WPM</p>
          </div>

          <div className="mt-8 text-left">
            <p className="text-green-400 text-lg opacity-80">
              <span className="font-bold text-green-300">// Current_Focus:</span> Deepening expertise in offensive security, network defense, and system administration.
            </p>
            <p className="text-green-400 text-lg opacity-80">
              <span className="font-bold text-green-300">// Objective:</span> To contribute to a safer digital environment through continuous learning and practical application of cybersecurity principles.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;