import React from 'react';
import { Github, Linkedin, Mail, } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/PrajinKhatiwada', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:prajinkhatiwada@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-secondary-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand & Description */}
        <address className="not-italic space-y-3 text-center md:text-left">
          <img
                src="/images/logo.png"
                alt="PrajinKhatiwada Logo"
                className="relative z-10 h-12 w-auto object-contain mx-auto md:mx-0"
             />
          <p className="text-sm text-secondary-400 leading-relaxed">
            Crafting scalable and elegant web solutions with a focus on performance and user experience.
          </p>
        </address>

        {/* Quick Navigation */}
        <nav className="text-center">
          <h3 className="text-lg font-semibold text-primary-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-secondary-400">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative inline-block transition hover:text-primary-500 after:block after:h-0.5 after:bg-primary-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social & Credit */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative p-3 rounded-full bg-secondary-800 hover:bg-primary-500 transition-all duration-300 hover:scale-110 shadow-md focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                <Icon className="w-5 h-5 text-white" />
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
              </a>
            ))}
          </div>
          <p className="text-sm text-secondary-400 flex items-center gap-1">
            <span>© {currentYear} Made </span>
           
            <span>by Prajin Khatiwada</span>
          </p>
        </div>
      </div>

      {/* Bottom Statement */}
      <div className="mt-12 pt-6 border-t border-secondary-800 text-center text-xs text-secondary-500">
        Built with <span className="text-primary-400">React</span>, <span className="text-primary-400">Tailwind CSS</span>, and <span className="text-primary-400">Lucide Icons</span>. 
        <br />
        <span className="text-primary-400">Striving for clean, modern, and maintainable code.</span>
      </div>
    </footer>
  );
};

export default Footer;
