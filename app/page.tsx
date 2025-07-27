'use client';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Frontend Developer',
    'UI/UX Designer',
    'Web Developer'
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', level: 90, color: 'from-gray-700 to-gray-900' },
    { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-800' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
    { name: 'C', level: 82, color: 'from-yellow-500 to-yellow-600' },
    { name: 'UI/UX Design', level: 80, color: 'from-purple-500 to-pink-500' }
  ];

  const projects = [
    {
      title: 'Pet Adoption Viewer Platform',
      description: 'A user-friendly pet adoption platform with smart filters, pet profiles, request management, and admin tools.',
      image: '/images/pet_care.jpg',
      tags: ['Next.js','React', 'Node.js', '+2'],
      link: 'https://day-21-pet-adoption-viewer.vercel.app/'
    },
    {
      title: 'Snake Game',
      category: 'fullstack',
      description: 'A fun and responsive snake game using HTML, CSS, and JavaScript with dynamic gameplay and score tracking.',
      image: '/images/snake.png',
      tags: ['Html', 'CSS', 'JavaScript'],
      link: 'https://satyamgupta16.github.io/Day-12-Snake-Game/',
      featured: true
    },
    {
      title: 'Memory Matching Game Code',
      category: 'mobile',
      description: 'Interactive memory matching game with flip animations, score tracking, and responsive card layout.',
      image: '/images/mmgc.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      link: 'https://satyamgupta16.github.io/Day-3-Memory-Matching-Game-Code/',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
        }}
      />

      <Navbar />

      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-pink-600/20 animate-gradient">
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          {/* Photo Frame Section */}
          <div className="relative flex justify-center lg:order-2">
            <div className="relative group">
              {/* Animated Border Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-full opacity-75 group-hover:opacity-100 blur-sm animate-gradient"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-full opacity-50 animate-spin-slow"></div>

              {/* Photo Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-violet-900 to-pink-900 p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="images/self.jpg"
                    alt="Satyam Gupta"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full animate-float opacity-80"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-float-delayed opacity-60"></div>
                <div className="absolute top-1/4 -left-6 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse opacity-70"></div>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-center lg:text-left lg:order-1">
            <div className="animate-float">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Hi, I am{` `}
                <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient block">
                  Satyam Gupta
                </span>
              </h1>
            </div>

            {/* Animated Role Text */}
            <div className="relative h-16 mb-8 overflow-hidden">
              <div className="text-2xl md:text-3xl font-semibold text-gray-300">
                I am a{` `}
                <span className="inline-block relative">
                  <span
                    key={currentRole}
                    className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent animate-slide-up font-bold"
                  >
                    {roles[currentRole]}
                  </span>
                </span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Crafting digital experiences that blend creativity with cutting-edge technology.
              Passionate about creating real world solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 animate-glow cursor-pointer whitespace-nowrap"><a href="/projects" className="text-gray-300 hover:text-violet-300 transition-colors cursor-pointer">
                View My Work</a>
              </button>
              <button className="px-8 py-4 border-2 border-violet-400 text-violet-400 font-semibold rounded-full hover:bg-violet-400 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"><a href="/images/satyam_resume.docx">
                Download CV</a>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-6 flex items-center justify-center text-white">
            <i className="ri-arrow-down-line text-2xl"></i>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl hover-lift">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-violet-300 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass-effect rounded-2xl overflow-hidden hover-lift group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} className="inline-flex items-center text-violet-400 hover:text-pink-400 transition-colors font-semibold cursor-pointer">
                    View Project
                    <div className="w-4 h-4 flex items-center justify-center ml-2">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let&apos;s <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Work Together</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s create something amazing together.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 animate-pulse-slow cursor-pointer whitespace-nowrap"><a href='/contact'>
            Get In Touch</a>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
