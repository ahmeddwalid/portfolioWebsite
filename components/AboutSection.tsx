
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
            <h4 className="text-2xl text-green-300 mb-2">// Experience_Log</h4>
            <div className="text-gray-400 pl-4 space-y-4">
              <div>
                <p className="text-green-200 font-semibold">Bibliotheca Alexandrina - Network Security & Systems Engineering Intern</p>
                <p className="text-sm text-gray-500">September 2025 | Alexandria</p>
                <ul className="list-disc list-inside mt-1 text-sm">
                  <li>Enterprise data center operations, fiber optic cabling (single/multi-mode), Cisco UCS servers</li>
                  <li>Configured FortiGate 40F firewall, site-to-site VPN, static/dynamic routing</li>
                  <li>Administered Cisco routers (1800/800 Series) and 3560G PoE-48 switch with security features</li>
                  <li>Operated Cisco Firepower NGFWs (1010/4215) for advanced threat protection</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-2xl text-green-300 mb-2">// Education_Log</h4>
            <ul className="list-disc list-inside text-gray-400 pl-4">
              <li>Bachelor's in Computing and Information Technology (Cybersecurity), AAST (2022-2026) - Alexandria, Egypt</li>
              <li>Egyptian English Language School (EELS) - Graduated 2022</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-2xl text-green-300 mb-2">// Certifications_&_Training</h4>
            <ul className="list-disc list-inside text-gray-400 pl-4">
              <li>Red Hat Certified System Administrator (RHCSA) - Information Technology Institute (2025)</li>
              <li>Cisco Certified Network Associate (CCNA) - Cisco (2024)</li>
              <li>
                <a
                  href="https://www.credly.com/badges/7d0ff400-e0c7-4c79-948f-e5118a3a517f/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-200 hover:underline"
                >
                  Fortinet Certified in Cybersecurity (FCF) - Fortinet (2025)
                </a>
              </li>
              <li>CompTIA Linux+ (2023)</li>
              <li>Developing Secure Software - The Linux Foundation (2025)</li>
              <li>Offensive Security Certified Professional (OSCP) - Currently Preparing</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-2xl text-green-300 mb-2">// Human_Languages</h4>
            <p className="text-gray-400">Arabic (Native), English (C2 Fluent), French (A2), German (A2)</p>
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