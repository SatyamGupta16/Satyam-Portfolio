'use client';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [
    {
      title: 'Pet Adoption Viewer',
      category: 'fullstack',
      description: 'A user-friendly pet adoption platform with smart filters, pet profiles, request management, and admin tools.',
      image: '/images/pet_care.jpg',
      tags: ['Next.js','React', 'Node.js', 'MongoDB', 'Postman'],
      demo: 'https://day-21-pet-adoption-viewer.vercel.app/',
      github: 'https://github.com/SatyamGupta16/Day-21-Pet-Adoption-Viewer',
      featured: true
    },
    {
      title: 'Neon-Calculator',
      category: 'frontend',
      description: 'A stylish neon calculator built with HTML, CSS, and JavaScript featuring live clock and greeting functionality.',
      image: '/images/calculator.jpg',
      tags: ['Html', 'CSS', 'JavaScript', 'Bootstrap (Framework)'],
      demo: 'https://satyamgupta16.github.io/30-Days-Project/',
      github: 'https://github.com/SatyamGupta16/30-Days-Project',
      featured: true
    },
    {
      title: 'To Do List App',
      category: 'frontend',
      description: 'Interactive task management tool with local storage, responsive design, and intuitive user interactions.',
      image: '/images/to_do_list.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/TO-Do-List-App/',
      github: 'https://github.com/SatyamGupta16/TO-Do-List-App',
      featured: true
    },
    {
      title: 'Memory Matching Game Code',
      category: 'mobile',
      description: 'Interactive memory matching game with flip animations, score tracking, and responsive card layout.',
      image: '/images/mmgc.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-3-Memory-Matching-Game-Code/',
      github: 'https://github.com/SatyamGupta16/Day-3-Memory-Matching-Game-Code',
      featured: false
    },
    {
      title: 'Frontend Development Quiz',
      category: 'frontend',
      description: 'Interactive frontend quiz application with dynamic scoring, instant feedback, and responsive user interface.',
      image: '/images/fd_quiz.png',
      tags: ['React', 'TypeScript', 'GraphQL', 'Apollo'],
      demo: 'https://satyamgupta16.github.io/Day-4-Frontend-Development-Quiz/',
      github: 'https://github.com/SatyamGupta16/Day-4-Frontend-Development-Quiz',
      featured: false
    },
    {
      title: 'Weather Forecast App',
      category: 'mobile',
      description: 'Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20weather%20forecast%20mobile%20app%20interface%20with%20dynamic%20weather%20animations%2C%20clean%20modern%20design%2C%20colorful%20weather%20icons%2C%20gradient%20sky%20backgrounds%2C%20professional%20weather%20app%20UI%2C%20contemporary%20mobile%20design%20aesthetic&width=600&height=400&seq=weather1&orientation=landscape',
      tags: ['Html', 'CSS', 'JavaScript', 'Weather API'],
      demo: 'https://satyamgupta16.github.io/Day-5-Weather-App/',
      github: 'https://github.com/SatyamGupta16/Day-5-Weather-App',
      featured: false
    },
    {
      title: 'Whac a Mole Game',
      category: 'mobile',
      description: 'An interactive arcade-style game built with HTML, CSS, and JavaScript featuring score tracking and timed gameplay.',
      image: '/images/wam.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/WHAC-A-MOLE-GAME/',
      github: 'https://github.com/SatyamGupta16/WHAC-A-MOLE-GAME',
      featured: true
    },
    {
      title: 'Digital Clock',
      category: 'frontend',
      description: 'Interactive digital clock displaying real-time hours, minutes, and seconds with sleek responsive design.',
      image: '/images/digi_clock.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-7-Digital-Clock/',
      github: 'https://github.com/SatyamGupta16/Day-7-Digital-Clock',
      featured: true
    },
    {
      title: 'Movies Search App',
      category: 'fullstack',
      description: 'Movie search application with dynamic filtering, real-time results, API integration, and responsive design',
      image:'/images/movies_searach_app.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-8-Movies-Search-App/',
      github: 'https://github.com/SatyamGupta16/Day-8-Movies-Search-App',
      featured: true
    },
    {
      title: 'Rock Paper Scissors',
      category: 'mobile',
      description: 'Interactive rock paper scissors game with random computer moves, score updates, and responsive layout.',
      image: '/images/rps.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-9-rock-paper-scissors/',
      github: 'https://github.com/SatyamGupta16/Day-9-rock-paper-scissors',
      featured: false
    },
    {
      title: 'Typing Speed Test',
      category: 'frontend',
      description: 'Typing speed tester with real-time accuracy tracking, timer, and engaging user-friendly interface design.',
      image: '/images/tst.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-10-Typing-Speed-Test/',
      github: 'https://github.com/SatyamGupta16/Day-10-Typing-Speed-Test',
      featured: false
    },
    {
      title: 'Landing Page',
      category: 'mobile',
      description: 'Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.',
      image: '/images/sfit.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-11-Landing-Page/',
      github: 'https://github.com/SatyamGupta16/Day-11-Landing-Page',
      featured: false
    },
    {
      title: 'Snake Game',
      category: 'fullstack',
      description: 'A fun and responsive snake game using HTML, CSS, and JavaScript with dynamic gameplay and score tracking.',
      image: '/images/snake.png',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-12-Snake-Game/',
      github: 'https://github.com/SatyamGupta16/Day-12-Snake-Game',
      featured: true
    },
    {
      title: 'Blog Website',
      category: 'frontend',
      description: 'A clean, responsive static blog site featuring interactive previews, smooth layout, and engaging content presentation using JavaScript.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k13jrg4yfhft559dh7b4tq7y%2F1753540853_img_0.webp?st=2025-07-26T12%3A52%3A46Z&se=2025-08-01T13%3A52%3A46Z&sks=b&skt=2025-07-26T12%3A52%3A46Z&ske=2025-08-01T13%3A52%3A46Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=A15n6hGUI%2F3fBJoCNTnlt1lC9BGik%2BW9MFz1TYjQ90w%3D&az=oaivgprodscus',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-13-Blogx/',
      github: 'https://github.com/SatyamGupta16/Day-13-Blogx',
      featured: true
    },
    {
      title: 'Random Jokes Generator',
      category: 'fullstack',
      description: 'Interactive business intelligence dashboard with real-time data visualization and comprehensive reporting.',
      image: '/images/jrd.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-14-Random-joke-generator/',
      github: 'https://github.com/SatyamGupta16/Day-14-Random-joke-generator',
      featured: true
    },
    {
      title: 'Dictionary App',
      category: 'mobile',
      description: 'A sleek, interactive dictionary app providing real-time word definitions, pronunciation, and examples using HTML, CSS, and JavaScript.',
      image: '/images/da.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-15-Dictionary-App/',
      github: 'https://github.com/SatyamGupta16/Day-15-Dictionary-App',
      featured: false
    },
    {
      title: 'Recipe App',
      category: 'frontend',
      description: 'A visually appealing recipe app displaying ingredients, cooking steps, and images with responsive design using HTML, CSS, JavaScript.',
      image: '/images/ra.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-16-Recipe-App/',
      github: 'https://github.com/SatyamGupta16/Day-16-Recipe-App',
      featured: false
    },
    {
      title: 'Random Quote Generator',
      category: 'mobile',
      description: 'Minimalistic quote generator displaying inspirational quotes with dynamic transitions, refresh functionality, and elegant design using JavaScript.',
      image: '/images/rqg.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-17-Random-Quote-Generator/',
      github: 'https://github.com/SatyamGupta16/Day-17-Random-Quote-Generator',
      featured: false
    },
    {
      title: 'Guess The Word Game',
      category: 'frontend',
      description: 'A word-guessing game with engaging UI, hint system, score tracking, and responsive keyboard interaction.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k13n3jx3emya4k8e555g2fm5%2F1753543284_img_0.webp?st=2025-07-26T13%3A30%3A14Z&se=2025-08-01T14%3A30%3A14Z&sks=b&skt=2025-07-26T13%3A30%3A14Z&ske=2025-08-01T14%3A30%3A14Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=lPWjkHOQ6wA3He5gKkmy1%2FoPJwWTMw3u5BT63xkk1Ig%3D&az=oaivgprodscus',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-18-Guess-the-Word-Game/',
      github: 'https://github.com/SatyamGupta16/Day-18-Guess-the-Word-Game',
      featured: true
    },
    {
      title: 'Currency Converter',
      category: 'frontend',
      description: 'A responsive currency converter with real-time exchange rates, intuitive UI, multiple currency support, and clean design.',
      image: '/images/cc.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-19-Currency-Converter/',
      github: 'https://github.com/SatyamGupta16/Day-19-Currency-Converter',
      featured: true
    },
    {
      title: 'QR Code Generator',
      category: 'fullstack',
      description: 'A sleek QR code generator using HTML, CSS, and JavaScript with instant preview, download option, and customization features.',
      image: '/images/qrcg.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-20-QR-Code-Generator/',
      github: 'https://github.com/SatyamGupta16/Day-20-QR-Code-Generator',
      featured: true
    },
    {
      title: 'Daily Water Intake Tracker',
      category: 'mobile',
      description: 'Daily hydration tracker with interactive UI, personalized goals, progress visualization, and smart reminders to stay healthy.',
      image: '/images/wt.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-22-Daily-Water-Intake-Tracker/',
      github: 'https://github.com/SatyamGupta16/Day-22-Daily-Water-Intake-Tracker',
      featured: false
    },
    {
      title: 'Loan EMI Calculator',
      category: 'frontend',
      description: 'Smart loan EMI calculator with interactive UI, monthly breakdown, amortization schedule, and real-time interest adjustment support.',
      image: '/images/loan.jpg',
      tags: ['Html', 'CSS', 'JavaScriptL'],
      demo: 'https://satyamgupta16.github.io/Day-23-Loan-EMI-Calculator/',
      github: 'https://github.com/SatyamGupta16/Day-23-Loan-EMI-Calculator',
      featured: false
    },
    {
      title: 'Basic Background Generator',
      category: 'mobile',
      description: 'Simple body text generator with customizable length, instant preview, and copy functionality for web development mockups.',
      image: '/images/bg.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-24-Basic-Background-Generator/',
      github: 'https://github.com/SatyamGupta16/Day-24-Basic-Background-Generator',
      featured: false
    },
    {
      title: 'Form Validator App',
      category: 'mobile',
      description: 'Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.',
      image: '/images/LVF.jpg',
      tags: ['Html', 'CSS', 'JavaScript','NEXT.JS'],
      demo: 'https://day-26-form-validator-app.vercel.app/',
      github: 'https://github.com/SatyamGupta16/Day-26-Form-Validator-App',
      featured: false
    },
    {
      title: 'Survey Poll',
      category: 'mobile',
      description: 'Interactive survey poll app with real-time voting results, dynamic question rendering, and localStorage-based response tracking.',
      image: '/images/wds.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-27-Survey-Poll/',
      github: 'https://github.com/SatyamGupta16/Day-27-Survey-Poll',
      featured: false
    },
    {
      title: 'Survey pdf',
      category: 'mobile',
      description: 'Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.',
      image: '/images/ds.jpg',
      tags: ['Html', 'CSS', 'JavaScript', 'NEXT.JS','Tailwind CSS'],
      demo: 'https://day-28-survey-pdf.vercel.app/#',
      github: 'https://github.com/SatyamGupta16/Day-28-survey-pdf',
      featured: false
    },
    {
      title: 'Comprehensive Calculator',
      category: 'mobile',
      description: 'Multi-purpose finance calculator app featuring SIP, EMI, FD, tax, mutual fund, and real estate tools.',
      image: '/images/fc.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      demo: 'https://satyamgupta16.github.io/Day-29-comprehensive-financial-calculator/',
      github: 'https://github.com/SatyamGupta16/Day-29-comprehensive-financial-calculator',
      featured: false
    },
    {
      title: 'Google Authentication App',
      category: 'mobile',
      description: 'Secure authentication app with Google Sign-In using Firebase, enabling protected routes and personalized user sessions seamlessly.',
      image: '/images/gaa.jpg',
      tags: ['Html', 'CSS', 'JavaScript'],
      github: 'https://github.com/SatyamGupta16/Day-30-GOOGLE-AUTHENTICATION-APP',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my latest work, featuring innovative solutions and cutting-edge technologies
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeFilter === filter.key
                      ? 'bg-violet-500 text-white'
                      : 'glass-effect text-gray-300 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="glass-effect rounded-2xl overflow-hidden hover-lift group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-violet-500 text-white rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={project.demo} className="flex items-center text-violet-400 hover:text-pink-400 transition-colors font-semibold cursor-pointer">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-external-link-line"></i>
                      </div>
                      Demo
                    </a>
                    <a href={project.github} className="flex items-center text-violet-400 hover:text-pink-400 transition-colors font-semibold cursor-pointer">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-github-line"></i>
                      </div>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">Want to see more of my work?</p>
            <a href="https://github.com/SatyamGupta16" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
              View GitHub Profile
              <div className="w-5 h-5 flex items-center justify-center ml-2">
                <i className="ri-github-line"></i>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
