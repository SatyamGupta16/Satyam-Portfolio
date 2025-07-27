'use client';

import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { icon: 'ri-github-line', href: 'https://github.com/SatyamGupta16', label: 'GitHub' },
    { icon: 'ri-linkedin-line', href: 'https://www.linkedin.com/in/satyam-gupta-94765725b/', label: 'LinkedIn' },
    { icon: 'ri-instagram-line', href: 'https://www.instagram.com/satyamgupta.16/', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Creating beautiful, functional, and user-centered digital experiences with modern technologies and innovative design solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-violet-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-violet-300 transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-violet-300 transition-colors cursor-pointer">About Me</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-violet-300 transition-colors cursor-pointer">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-violet-300 transition-colors cursor-pointer">Contact Me</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-violet-300">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-violet-500 transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Portfolio. Made with <span className="text-red-400">♥</span> by Satyam Gupta
          </p>
        </div>
      </div>
    </footer>
  );
}
