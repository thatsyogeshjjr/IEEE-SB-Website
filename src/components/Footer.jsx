import { Link } from "react-router-dom";
import {
  GitlabIcon as GitHub,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: GitHub, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "Blog", href: "/blog" },
        { name: "Team", href: "/team" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "IEEE.org", href: "https://www.ieee.org" },
        { name: "IEEE Xplore", href: "https://ieeexplore.ieee.org" },
        { name: "IEEE Standards", href: "#" },
        { name: "IEEE Spectrum", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Join IEEE", href: "#" },
        { name: "Newsletter", href: "#" },
        { name: "FAQs", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-ieee-blue dark:text-white"
              >
                IEEE SB MUJ
              </motion.span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Empowering innovation and fostering technological advancement
              through professional excellence and collaborative learning.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-ieee-blue dark:hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-ieee-blue dark:hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} IEEE Student Branch MUJ. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}