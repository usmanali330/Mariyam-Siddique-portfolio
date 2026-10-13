import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiAward, FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

const education = [
  {
    degree: 'Bachelor of Arts (BA)',
    institution: 'Institution not specified',
    period: 'Completed 2022–2024',
  },
  {
    degree: 'Intermediate',
    institution: 'Institution not specified',
    period: 'Completed 2020–2022',
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="Education completed as provided."
        />

        <div className="grid gap-5 md:grid-cols-1">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.08 }}
              className="surface-card p-6 md:p-8 gradient-border"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="icon-chip">
                    <FiBookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{item.degree}</h3>
                    <div className="mt-2 flex items-center gap-2 text-primary">
                      <FiAward className="w-4 h-4" />
                      <span className="font-medium">{item.institution}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <FiCalendar className="w-4 h-4" />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <FiMapPin className="w-4 h-4" />
                <span>Location not specified</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
