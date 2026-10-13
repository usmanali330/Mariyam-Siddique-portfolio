import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiBarChart2, FiBookOpen, FiBriefcase, FiMail, FiSearch, FiUsers } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Digital Marketing',
    icon: FiBarChart2,
    skills: ['Digital Marketing', 'Digital Media Marketing'],
  },
  {
    title: 'SEO',
    icon: FiSearch,
    skills: ['Search Engine Optimization (SEO)', 'Keyword Research Fundamentals', 'On-Page SEO Fundamentals'],
  },
  {
    title: 'Social Media',
    icon: FiBookOpen,
    skills: ['Social Media Management'],
  },
  {
    title: 'Website Development',
    icon: FiMail,
    skills: ['Website Development', 'Basic Website Management'],
  },
  {
    title: 'E-Commerce & Online Business',
    icon: FiUsers,
    skills: ['E-Commerce Fundamentals', 'Online Business Basics'],
  },
  {
    title: 'Tools & Research',
    icon: FiBriefcase,
    skills: ['Canva', 'Microsoft Office', 'Internet Research'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Skills developed through professional training and internship experience."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {skillCategories.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-5 h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-chip">
                  <group.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3 py-2 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
