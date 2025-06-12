import React from 'react';
import { User, Award, Coffee, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '2+' },
    { icon: Coffee, label: 'Projects Completed', value: '7+' },
    { icon: Clock, label: 'Hours Coded', value: '3000+' },
    { icon: User, label: 'Happy Clients', value: '6+' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-secondary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
              Building Digital Excellence
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
              I'm a passionate full-stack web developer with over 2 years of experience creating robust, 
              scalable applications. My journey began with HTML and CSS, and has evolved to encompass 
              modern frameworks and technologies that power today's web.
            </p>
            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
              I specialize in React, TypeScript, Node.js, Python, and Django, with extensive experience 
              in database design using PostgreSQL and MongoDB. I believe in writing clean, maintainable 
              code and creating exceptional user experiences.
            </p>
            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-secondary-100/80 dark:bg-secondary-800/80 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white dark:hover:bg-secondary-700"
              >
                <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-3 transition-all duration-300" />
                <div className="text-2xl font-bold text-secondary-900 dark:text-white mb-1">
                  {value}
                </div>
                <div className="text-sm text-secondary-600 dark:text-secondary-300">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;