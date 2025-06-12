import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-950 dark:to-secondary-900 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            {/* Floating Status Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-100/80 dark:bg-green-900/80 backdrop-blur-md border border-green-200/50 dark:border-green-800/50 text-green-700 dark:text-green-300 font-medium mb-6 transition-all duration-300 hover:scale-105">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Available for work</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-secondary-900 dark:text-white mb-4 tracking-tight">
              Full-Stack
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent block">
                Web Developer
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto">
  Turning your ideas into powerful web solutions. I build reliable websites that work perfectly and help you reach more customers.
</p>
          </div>

          {/* What I Do Section */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl bg-white/80 dark:bg-secondary-800/80 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Frontend Development</h3>
                <p className="text-secondary-600 dark:text-secondary-300 text-sm">Create beautiful and responsive websites that work on all devices</p>
              </div>
              <div className="p-6 rounded-xl bg-white/80 dark:bg-secondary-800/80 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Backend Development</h3>
                <p className="text-secondary-600 dark:text-secondary-300 text-sm">Build powerful servers and databases to handle your business needs</p>
              </div>
              <div className="p-6 rounded-xl bg-white/80 dark:bg-secondary-800/80 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Full-Stack Solutions</h3>
                <p className="text-secondary-600 dark:text-secondary-300 text-sm">Complete web applications from start to finish, all in one place</p>
              </div>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-secondary-100/80 dark:bg-secondary-800/80 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-700 dark:text-secondary-300 font-medium text-sm transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-secondary-700 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-secondary-100/80 dark:bg-secondary-800/80 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 text-secondary-700 dark:text-secondary-300 hover:bg-white dark:hover:bg-secondary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;