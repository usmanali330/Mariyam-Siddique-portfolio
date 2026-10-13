import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FiMail, href: 'mailto:marriyamsiddique19@gmail.com', label: 'Email' },
  { icon: FaWhatsapp, href: 'https://wa.me/923713242976', label: 'WhatsApp' },
  { icon: FiMapPin, href: 'https://maps.google.com/?q=Lahore+Pakistan', label: 'Lahore, Pakistan' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-12 border-t border-border/70 relative">
      <div className="section-container">
        <div className="surface-card p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#home" className="font-display text-2xl font-bold gradient-text mb-2 block">
              Mariyam Siddique
            </a>
            <p className="text-sm text-muted-foreground">Digital Marketing & SEO Specialist</p>
            <p className="mt-2 text-sm font-semibold text-primary">Learning. Practice. Growth.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-sm text-muted-foreground"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 glass-card rounded-lg hover:glow-effect transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          © {currentYear} Mariyam Siddique. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
