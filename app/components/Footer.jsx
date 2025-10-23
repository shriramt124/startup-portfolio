"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "AI Development", href: "#services" },
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Automation", href: "#services" },
      { name: "Consulting", href: "#services" }
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" }
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Case Studies", href: "#cases" },
      { name: "Support", href: "#support" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: '#492efcff' }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              EFICSY
            </h2>
            <p className="text-gray-200 mb-6 max-w-md leading-relaxed">
              Building innovative AI solutions and digital experiences that transform businesses and drive growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@eficsy.com" className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@eficsy.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Bangalore, India</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 border-t border-white/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-200 mb-6">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-[#492efcff] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-200 text-sm"
            >
              © {currentYear} EFICSY. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-200 group-hover:text-white transition-colors" />
                </a>
              ))}
            </motion.div>

            {/* Extra Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-sm"
            >
              <a href="#privacy" className="text-gray-200 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-gray-200 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#cookies" className="text-gray-200 hover:text-white transition-colors">
                Cookies
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
