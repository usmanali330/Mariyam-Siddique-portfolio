import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';

const opportunities = [
  {
    name: 'Full-Time Positions',
    period: 'Available',
    description: 'Open to full-time positions in digital marketing and related areas.',
  },
  {
    name: 'Remote Opportunities',
    period: 'Available',
    description: 'Open to remote opportunities.',
  },
  {
    name: 'Internship Opportunities',
    period: 'Available',
    description: 'Open to internship opportunities to gain practical experience.',
  },
  {
    name: 'Freelance Projects',
    period: 'Available',
    description: 'Available for SEO projects, social media management, and e-commerce support.',
  },
];

const Freelance = () => {
  return (
    <section id="brands" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Opportunities"
          subtitle="Available for full-time positions, remote work, internships, and freelance projects."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {opportunities.map((opportunity, index) => (
            <motion.article
              key={opportunity.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="surface-card p-5 sm:p-6 h-full"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{opportunity.period}</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{opportunity.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{opportunity.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelance;
