import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiCheck, FiBriefcase, FiTrendingUp } from 'react-icons/fi';

const experience = {
  role: 'Digital Marketing & SEO Training',
  company: 'PNY Training Institute',
  location: 'Internship at This and That Consultant',
  period: 'Six-month combined experience',
  overview: 'Combined six-month training and internship experience. The internship at This and That Consultant is included in this total.',
  responsibilities: [
    'Learned digital marketing and SEO fundamentals.',
    'Gained exposure to social media management.',
    'Developed foundational website development and management skills.',
    'Learned digital marketing workflows and online business activities.',
  ],
  results: [
    'Professional training through PNY Training Institute.',
    'Practical exposure through an internship at This and That Consultant.',
    'The internship is included in the combined six-month experience.',
    'Training covered digital marketing and SEO fundamentals.',
  ],
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Professional Experience"
          subtitle="Six months of combined digital marketing and SEO training and internship experience."
        />

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="glass-card rounded-2xl p-5 lg:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="icon-chip mt-1">
                <FiBriefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{experience.company}</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{experience.role}</h3>
                <p className="mt-1 text-muted-foreground">{experience.location}</p>
              </div>
            </div>
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
              {experience.period}
            </span>
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">{experience.overview}</p>

          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-display text-xl font-bold text-foreground mb-4">Key Responsibilities</h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <FiCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl font-bold text-foreground mb-4">Experience Details</h4>
              <div className="space-y-3">
                {experience.results.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground">
                    <FiTrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Experience;
