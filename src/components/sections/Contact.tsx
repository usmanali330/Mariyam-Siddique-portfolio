import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiBriefcase, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  { icon: FiMapPin, label: 'Location', value: 'Lahore, Pakistan', href: 'https://maps.google.com/?q=Lahore+Pakistan' },
  { icon: FiMail, label: 'Email', value: 'marriyamsiddique19@gmail.com', href: 'mailto:marriyamsiddique19@gmail.com' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: '03713242976', href: 'https://wa.me/923713242976' },
  { icon: FiBriefcase, label: 'Availability', value: 'Full-time, remote, internship', href: 'mailto:marriyamsiddique19@gmail.com' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'SEO',
    message: '',
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`New inquiry from ${formData.name || 'Website visitor'}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name || 'Not provided'}`,
        `Email: ${formData.email || 'Not provided'}`,
        `Company: ${formData.company || 'Not provided'}`,
        `Service / Project Type: ${formData.service}`,
        '',
        'Message:',
        formData.message || 'No message provided',
      ].join('\n')
    );

    window.location.href = `mailto:marriyamsiddique19@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Get in Touch"
          subtitle="Available for full-time positions, remote opportunities, internships, freelance projects, SEO projects, social media management, and e-commerce support."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 lg:gap-6 max-w-6xl mx-auto mb-10">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.value}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="surface-card p-5 sm:p-6 gradient-border flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="icon-chip group-hover:bg-primary/20 group-hover:glow-effect mb-4 h-14 w-14">
                <info.icon className="w-7 h-7" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
              <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm break-all">{info.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="name">Name</label>
              <input id="name" type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-0 focus:border-primary" placeholder="Your name" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="email">Email</label>
              <input id="email" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-0 focus:border-primary" placeholder="Your email" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="company">Company</label>
              <input id="company" type="text" value={formData.company} onChange={(e) => handleChange('company', e.target.value)} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-0 focus:border-primary" placeholder="Your company" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="service">Service / Project Type</label>
              <select id="service" value={formData.service} onChange={(e) => handleChange('service', e.target.value)} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary">
                <option>SEO</option>
                <option>Digital Marketing</option>
                <option>SEO Project</option>
                <option>Social Media Management</option>
                <option>Website Development</option>
                <option>E-Commerce Support</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="message">Message</label>
              <textarea id="message" rows={6} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Tell me about the opportunity or project..." required />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button type="submit" className="btn-primary">
                <FiSend className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
