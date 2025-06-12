import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, Linkedin, Facebook, Github } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.facebook.com/prajin.khatiwada.5', icon: Facebook, label: 'Facebook' },
    { href: 'https://github.com/PrajinKhatiwada', icon: Github, label: 'GitHub' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setScrolled(window.scrollY > headerRef.current.offsetHeight);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-xl shadow-sm border-b border-secondary-100 dark:border-secondary-800 py-2'
          : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center ${scrolled ? 'h-16' : 'h-20'} transition-all duration-500`}>
            {/* Enhanced Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setIsHoveringLogo(true)}
              onMouseLeave={() => setIsHoveringLogo(false)}
              onClick={() => scrollToSection('#home')}
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-lg transition-all duration-300 ${isHoveringLogo ? 'opacity-50 scale-110' : 'opacity-30 scale-100'
                    }`}
                />
                <img 
                  src="/images/logo.png" 
                  alt="PrajinKhatiwada Logo" 
                  className="relative z-10 h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center flex-1 justify-center">
              <div className="flex items-center space-x-1 bg-secondary-100/80 dark:bg-secondary-800/80 backdrop-blur-md rounded-full p-1 border border-secondary-200/50 dark:border-secondary-700/50">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-5 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${activeSection === item.href.substring(1)
                      ? 'text-white bg-gradient-to-r from-primary-600 to-accent-600'
                      : 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Social Links */}
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary-100/80 dark:bg-secondary-800/80 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-700 dark:text-secondary-300 hover:bg-white dark:hover:bg-secondary-700 transition-all duration-300 hover:scale-105"
                  title={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggle}
                className="relative p-3 rounded-full bg-secondary-100/80 dark:bg-secondary-800/80 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-700 dark:text-secondary-300 hover:bg-white dark:hover:bg-secondary-700 transition-all duration-300 hover:scale-105 group"
                aria-label="Toggle theme"
              >
                <div className="relative w-5 h-5">
                  <Sun className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                    }`} />
                  <Moon className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                    }`} />
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative p-3 rounded-full bg-secondary-100/80 dark:bg-secondary-800/80 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-700 dark:text-secondary-300 hover:bg-white dark:hover:bg-secondary-700 transition-all duration-300 hover:scale-105 group"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`} />
                <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                  }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 opacity-100 translate-y-0 transition-all duration-300">
            <div className="mx-4 mt-2 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-secondary-200/50 dark:border-secondary-700/50 overflow-hidden">
              <nav className="p-6">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${activeSection === item.href.substring(1)
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                        : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 hover:text-primary-600 dark:hover:text-primary-400'
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Mobile Social Links and Theme Toggle */}
                <div className="mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-700">
                  <div className="flex items-center justify-center space-x-4">
                    {/* Social Links */}
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-all duration-300 hover:scale-105"
                        title={label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}

                    {/* Theme Toggle */}
                    <button
                      onClick={toggle}
                      className="p-3 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-all duration-300 hover:scale-105"
                      aria-label="Toggle theme"
                    >
                      <div className="relative w-5 h-5">
                        <Sun className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                          }`} />
                        <Moon className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                          }`} />
                      </div>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 opacity-100 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;