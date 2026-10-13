import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiArrowUpRight, FiBarChart2, FiMail, FiTrendingUp } from 'react-icons/fi';

const results = [
  { value: 'Full-time', label: 'Positions' },
  { value: 'Remote', label: 'Opportunities' },
  { value: 'Internship', label: 'Opportunities' },
  { value: 'Freelance', label: 'Projects' },
];

const MobileApps = () => {
  return (
    <section id="results" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Availability"
          subtitle="Open to full-time positions, remote opportunities, internship opportunities, and freelance projects."
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {results.map((result, index) => (
            <motion.article
              key={result.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="surface-card p-5 sm:p-6 text-center gradient-border"
            >
              <div className="mb-4 flex justify-center text-primary">
                {index % 2 === 0 ? <FiTrendingUp className="h-7 w-7" /> : <FiBarChart2 className="h-7 w-7" />}
              </div>
              <p className="font-display text-4xl font-bold text-foreground mb-2">{result.value}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{result.label}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl border border-border bg-background/50 p-5 sm:p-7"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Career Objective</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">Learning. Practice. Growth.</h3>
            </div>
            <a href="#contact" className="btn-primary">
              <FiMail className="h-4 w-4" />
              Let’s Work Together
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileApps;
