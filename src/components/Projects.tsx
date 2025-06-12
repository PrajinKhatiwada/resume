import React from 'react';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'User Management System',
      description: 'Full-stack UMS with React, Node.js, and PostgreSQL. Features include user authentication, OTP verification and comprehensive user management with role-based access control.',
      image: '/images/usermanagement.png',
      technologies: ['React', 'Node.js', 'MongoDB','Express.js'],
      githubUrl: 'https://github.com/PrajinKhatiwada/usermanagement',
    },
    {
      title: 'Hostel Management System',
      description: 'Comprehensive hostel management solution that manages available rooms according to gender, allows administrators to add and delete rooms, and handles room allocation efficiently.',
      image: '/images/hostelmanagement.png',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Express.js'],
      githubUrl: '#https://github.com/PrajinKhatiwada/Educational-Institute-Management-System',
    },
    {
      title: 'Course Management System',
      description: 'Advanced course management platform that handles course creation, assigns courses to teachers, enlists students and teachers for particular courses with complete academic workflow.',
      image: '/images/coursemanagement.png',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Express.js'],
      githubUrl: 'https://github.com/PrajinKhatiwada/Educational-Institute-Management-System',
    },
    {
      title: 'Attendance Management System',
      description: 'Streamlined attendance tracking system where teachers can mark attendance for their respective course students across different shifts with comprehensive reporting features.',
      image: '/images/attendancemanagement.png',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Express.js'],
      githubUrl: 'https://github.com/PrajinKhatiwada/Educational-Institute-Management-System',
    },
  ];

  return (
    <>
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>

      <section id="projects" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]">
          <div className="absolute top-20 left-10 w-32 h-32 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">
              Featured Projects
            </h2>
            <div className="w-16 h-px bg-slate-300 dark:bg-slate-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A curated selection of my recent work showcasing modern web development practices and innovative management solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex items-center justify-center pt-4 border-t border-slate-100 dark:border-slate-700">
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <a
              href="https://github.com/PrajinKhatiwada?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              <Github className="h-5 w-5" />
              <span>View More Projects</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
