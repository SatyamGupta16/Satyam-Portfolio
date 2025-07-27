'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const phoneNumber = "918791992543";
    const fullMessage = `*New Contact Message from Portfolio*%0A👤 *Name:* ${name}%0A📧 *Email:* ${email}%0A📌 *Subject:* ${subject}%0A💬 *Message:* ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

    setFormData({ name: '', email: '', subject: '', message: '' });
    window.open(whatsappURL, "_blank");
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      details: 'satyamgupta18633@gmail.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      details: '+91 879 199 2543',
      description: 'Available Mon-Sat, 9AM-6PM '
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      details: 'Noida, Uttar Pradesh, India',
      description: 'Open to remote opportunities'
    },
    {
      icon: 'ri-time-line',
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'I&apos;ll get back to you quickly'
    }
  ];

  const socialLinks = [
    { icon: 'ri-linkedin-line', name: 'LinkedIn', href: 'https://www.linkedin.com/in/satyam-gupta-94765725b/', color: 'hover:text-blue-400' },
    { icon: 'ri-github-line', name: 'GitHub', href: 'https://github.com/SatyamGupta16', color: 'hover:text-gray-400' },
    { icon: 'ri-instagram-line', name: 'Instagram', href: 'https://www.instagram.com/satyamgupta.16/', color: 'hover:text-pink-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let&apos;s work together to bring your ideas to life. I&apos;d love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s Start a Conversation</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I&apos;m always excited to discuss new opportunities, creative projects, or potential collaborations. 
                  Whether you have a specific project in mind or just want to connect, I&apos;d love to hear from you.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-xl">
                      <div className="w-10 h-10 flex items-center justify-center bg-violet-500/20 rounded-full mb-3">
                        <i className={`${info.icon} text-lg text-violet-400`}></i>
                      </div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-violet-300 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Connect on Social Media</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:scale-110 transition-all duration-300 text-gray-300 ${social.color} cursor-pointer`}
                        aria-label={social.name}
                      >
                        <i className={`${social.icon} text-xl`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Send Me a Message</h2>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 transition-colors text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 transition-colors text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 transition-colors text-sm"
                    placeholder="What&apos;s this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 transition-colors resize-none text-sm"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                  ></textarea>
                  <div className="text-right text-gray-400 text-sm mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-send-plane-line"></i>
                    </div>
                    Send on WhatsApp
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
