import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'Express.js', level: 90 },
        { name: 'NestJS', level: 75 },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Prisma', level: 85 },
        { name: 'Redis', level: 70 },
        { name: 'Docker', level: 75 },
      ],
    },
  ];

  return (
    <>
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
        
        .animate-slide {
          animation: slide 1s ease-in-out;
        }
      `}</style>

      <section id="skills" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-950 dark:to-secondary-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group bg-secondary-100/80 dark:bg-secondary-800/80 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white dark:hover:bg-secondary-700 hover:border-primary-300/50 dark:hover:border-primary-600/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header with Gradient */}
                <div className="relative mb-6 text-center">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-accent-700 transition-all duration-300">
                    {category.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mt-2 rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="group/skill"
                      style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-secondary-700 dark:text-secondary-300 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm px-2 py-1 rounded-full bg-primary-100/80 dark:bg-primary-900/80 text-primary-700 dark:text-primary-300 font-semibold group-hover:bg-primary-200/80 dark:group-hover:bg-primary-800/80 transition-all duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="relative w-full bg-secondary-200/80 dark:bg-secondary-700/80 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/skill:opacity-100 group-hover/skill:animate-shimmer transition-opacity duration-300"></div>
                        <div
                          className="bg-gradient-to-r from-primary-500 to-accent-600 h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover/skill:from-primary-600 group-hover/skill:to-accent-700"
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Shine effect */}
                          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/skill:opacity-100 group-hover/skill:animate-slide transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;