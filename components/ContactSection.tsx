
import React from 'react';
import Section from './Section.tsx';
import TerminalText from './TerminalText.tsx';

const contactLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmeddwalid', handle: 'ahmeddwalid' },
  { name: 'GitHub', url: 'https://github.com/ahmeddwalid', handle: 'ahmeddwalid' },
  { name: 'TryHackMe', url: 'https://tryhackme.com/p/ahmeddwalid', handle: 'ahmeddwalid' },
  { name: 'HackTheBox', url: 'https://ctf.hackthebox.com/user/profile/701937', handle: 'ahmeddwalid (ID: 701937)' },
  { name: 'Codewars', url: 'https://www.codewars.com/users/ahmeddwalid', handle: 'ahmeddwalid' },
];

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="secure_channel" className="bg-gray-900/50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          <TerminalText text="// Direct_lines_of_communication_established..." speed={40} /> <br/>
          Feel free to reach out. I'm always open to new connections and opportunities.
        </p>
        
        <div className="bg-black/50 border border-green-500/40 p-6 md:p-8 text-left space-y-6">
          <div>
            <h4 className="text-2xl text-green-300 mb-1">{'>'}{'>'} Email_Protocol:</h4>
            <a href="mailto:devahmedwalid@proton.me" className="text-xl text-gray-300 hover:text-green-400 hover:underline underline-offset-2 decoration-green-500">
              devahmedwalid@proton.me
            </a>
          </div>
          
          <div>
            <h4 className="text-2xl text-green-300 mb-1">{'>'}{'>'} Voice_Link_Established:</h4>
            <p className="text-xl text-gray-300 break-all">Session id: 05b0d42f6ad105b3523c503e210c600bb71e5a1bc57b2feed2d5ed4c59056e1468</p>
          </div>

          <div>
            <h4 className="text-2xl text-green-300 mb-1">{'>'}{'>'} Current_Location_Broadcast:</h4>
            <p className="text-xl text-gray-300">Alexandria, Egypt</p>
          </div>

          <div>
            <h4 className="text-2xl text-green-300 mb-3">{'>'}{'>'} Network_Presence:</h4>
            <ul className="space-y-3">
              {contactLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xl text-gray-300 hover:text-green-400 hover:underline underline-offset-2 decoration-green-500 group"
                  >
                    <span className="text-green-400 font-semibold">{link.name}:</span> {link.handle}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm text-green-500">  &gt; connect</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <p className="mt-10 text-gray-500 text-md">
            // "The keyboard is my conduit to the world."
        </p>
      </div>
    </Section>
  );
};

export default ContactSection;