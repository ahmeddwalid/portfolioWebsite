
import React, { useState } from 'react';
import Section from './Section.tsx';
import TerminalText from './TerminalText.tsx';

const contactLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmeddwalid', handle: 'ahmeddwalid' },
  { name: 'GitHub', url: 'https://github.com/ahmeddwalid', handle: 'ahmeddwalid' },
  { name: 'TryHackMe', url: 'https://tryhackme.com/p/ahmeddwalid', handle: 'ahmeddwalid' },
  { name: 'HackTheBox', url: 'https://ctf.hackthebox.com/user/profile/701937', handle: 'ahmeddwalid (ID: 701937)' },
  { name: 'Codewars', url: 'https://www.codewars.com/users/ahmeddwalid', handle: 'ahmeddwalid' },
];

const pgpPublicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEaEIkrxYJKwYBBAHaRw8BAQdAQmkxMwOu8gXelR0dWdlRib/73Xc47/2zQ3tw
7jUaqNe0C0FobWVkIFdhbGlkiJkEExYKAEEWIQQdAw6SkRhA4etnTqtDWLVHsmHA
KAUCaEIkrwIbAwUJBaV1YQULCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRBD
WLVHsmHAKFCUAP0VuwkSUK4YhFYLvHbT76z4IEpXQWBcsnBvb+qtj1OtvwEA+R4A
QlcuiNjpEbOiqbS3rsiLSWpHu1JleICdCQ5lIQG4OARoQiSvEgorBgEEAZdVAQUB
AQdAZIe8QxY3+o01YzpwidpML6y1Frg6rZwb65HREiAuinoDAQgHiH4EGBYKACYW
IQQdAw6SkRhA4etnTqtDWLVHsmHAKAUCaEIkrwIbDAUJBaV1YQAKCRBDWLVHsmHA
KLo4AP9aSOZ/kAJpPiz4zRzR1lB8OhLPnoCk6bJaZqDFdBwu4wD/Uxo3MSSgxYjy
eMG9HoK5Jz4bDCP4CxiSm/vpBHRcngQ=
=7hs9
-----END PGP PUBLIC KEY BLOCK-----`;

const ContactSection: React.FC = () => {
  const [isPgpKeyCopied, setIsPgpKeyCopied] = useState(false);

  const handleCopyPgpKey = async () => {
    try {
      await navigator.clipboard.writeText(pgpPublicKey);
      setIsPgpKeyCopied(true);
      setTimeout(() => setIsPgpKeyCopied(false), 2000); // Hide message after 2 seconds
    } catch (err) {
      console.error('Failed to copy PGP key: ', err);
      // Optionally, provide user feedback about the copy failure
    }
  };

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

          <div>
            <h4 className="text-2xl text-green-300 mb-2">{'>'}{'>'} PGP_Public_Key:</h4>
            <div className="relative bg-gray-800/60 border border-green-600/50 p-3 rounded text-sm text-gray-400/90 overflow-x-auto">
              <pre className="whitespace-pre-wrap break-all select-all">
                {pgpPublicKey}
              </pre>
              <button
                onClick={handleCopyPgpKey}
                className="absolute top-2 right-2 px-3 py-1 bg-green-700 hover:bg-green-600 text-green-100 border border-green-500/80 transition-colors text-xs rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="Copy PGP Public Key to clipboard"
              >
                Copy Key
              </button>
            </div>
            {isPgpKeyCopied && (
              <p className="text-xs text-green-300 mt-2 text-right transition-opacity duration-300 ease-in-out opacity-100">
                Key copied to clipboard!
              </p>
            )}
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
