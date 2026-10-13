import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiBriefcase, FiMail, FiMapPin, FiTrendingUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import profilePortrait from '../../assets/profile-mariyam.jpg';

const socialLinks = [
  { icon: FiMail, href: 'mailto:marriyamsiddique19@gmail.com', label: 'Email' },
  { icon: FaWhatsapp, href: 'https://wa.me/923713242976', label: 'WhatsApp' },
  { icon: FiMapPin, href: 'https://maps.google.com/?q=Lahore+Pakistan', label: 'Lahore, Pakistan' },
];

const trustStats = ['Digital Marketing', 'SEO Fundamentals', 'Social Media', 'E-Commerce'];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto lg:mx-0 mb-5 inline-flex rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs sm:text-sm font-semibold text-primary"
            >
              Digital Marketing & SEO Specialist
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-primary mb-4"
            >
              <span className="gradient-text text-shadow-glow">Building a Career in Digital Marketing & SEO</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-5 min-h-16 md:min-h-12"
            >
              <TypeAnimation
                sequence={[
                  'Digital Marketing',
                  1800,
                  'Search Engine Optimization',
                  1800,
                  'Social Media Management',
                  1800,
                  'E-Commerce',
                  1800,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-display font-semibold text-foreground"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-balance"
            >
              Digital marketing and SEO professional with six months of combined training and internship experience. Received professional training through PNY Training Institute and gained practical exposure at This and That Consultant. Interested in digital marketing, SEO, social media management, website development, e-commerce, and online business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {trustStats.map((stat) => (
                <div key={stat} className="glass-card rounded-lg px-3 py-3 text-center hover:-translate-y-1">
                  <p className="text-xs md:text-sm font-semibold text-foreground">{stat}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-center lg:justify-start mb-8"
            >
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
                <FiBriefcase className="w-5 h-5" />
                Let’s Work Together
              </motion.a>
              <motion.a href="#case-studies" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary gradient-border text-foreground">
                View Training
                <FiArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 justify-center lg:justify-start flex-wrap"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-card rounded-lg hover:glow-effect transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[440px]">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.04, 1] }}
                transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
                className="absolute -inset-8 rounded-full bg-gradient-primary opacity-25 blur-3xl"
              />

              <div className="relative overflow-hidden rounded-full border border-white/20 bg-slate-950/90 p-3 shadow-card ring-8 ring-white/5">
                <img
                  src={profilePortrait}
                  alt="Mariyam Siddique"
                  className="h-[420px] w-[420px] rounded-full object-cover object-center"
                />
              </div>

              <div className="absolute -bottom-4 left-6 right-6 rounded-2xl border border-border bg-background/80 p-4 shadow-soft backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Experience</p>
                    <p className="mt-1 font-display text-xl font-bold text-foreground">Training & Internship</p>
                  </div>
                  <div className="rounded-full bg-primary/15 p-3 text-primary">
                    <FiTrendingUp className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-3 h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1.2 }} className="h-full rounded-full bg-gradient-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
