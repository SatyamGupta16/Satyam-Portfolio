'use client';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              &ldquo;Driven by design and performance, I bring ideas to life with modern frontend tools and cutting-edge frameworks.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="glass-effect p-8 rounded-2xl">
              <Image 
                src="/images/self.jpg"
                alt="Profile"
                width={800}
                height={600}
                className="w-full h-96 object-cover object-top rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">Satyam Gupta</h3>
              <p className="text-violet-300 text-lg mb-4">Full-Stack Developer & Designer</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-violet-500/20 rounded-full text-violet-300">
                  <i className="ri-map-pin-line"></i>
                </div>
                <div>
                  <p className="text-white font-medium"> Bareilly, Uttar Pradesh , India</p>
                  <p className="text-gray-400">Available for remote work</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Hi, I’m Satyam Gupta — a creative and detail-oriented Frontend Developer passionate about crafting seamless, responsive, and user-focused web interfaces. I thrive on transforming ideas into engaging digital products that combine clean aesthetics with smart functionality.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My core stack includes React, Next.js, Tailwind CSS, and JavaScript, allowing me to build fast, scalable, and SEO-friendly web applications. I focus on writing clean, modular code and creating component-driven architectures that prioritize performance, accessibility, and user experience across devices.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Whether it’s building interactive UIs, optimizing page load times, or experimenting with the latest in frontend innovation, I’m driven by the goal of creating experiences that don’t just work — they connect. Outside the code, I enjoy exploring new technologies, contributing to open-source, and mentoring fellow developers in the community.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">30+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="glass-effect p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">🔥</div>
                  <div className="text-gray-300">Open to Opportunities</div>
                </div>
                <div className="glass-effect p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">🚀</div>
                  <div className="text-gray-300">Quick Learner</div>
                </div>
                <div className="glass-effect p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-300">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
