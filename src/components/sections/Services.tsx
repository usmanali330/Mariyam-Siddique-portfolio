import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiArrowRight, FiBarChart2, FiFileText, FiMail, FiSearch, FiTarget, FiTrendingUp, FiEdit3 } from 'react-icons/fi';

const services = [
  {
    icon: FiTarget,
    title: 'Digital Marketing',
    description: 'Interested in digital marketing and digital media marketing.',
    number: '01',
  },
  {
    icon: FiSearch,
    title: 'SEO Fundamentals',
    description: 'Foundational knowledge of search engine optimization, keyword research, and on-page SEO.',
    number: '02',
  },
  {
    icon: FiFileText,
    title: 'Social Media Management',
    description: 'Interested in social media management and continuing to develop practical experience.',
    number: '03',
  },
  {
    icon: FiMail,
    title: 'Website Development',
    description: 'Foundational website development and basic website management skills.',
    number: '04',
  },
  {
    icon: FiBarChart2,
    title: 'E-Commerce',
    description: 'Interested in e-commerce and online business fundamentals.',
    number: '05',
  },
  {
    icon: FiEdit3,
    title: 'Tools & Internet Research',
    description: 'Skills include Canva, Microsoft Office, and internet research.',
    number: '06',
  },
];

const process = [
  { step: '01', title: 'Learn', description: 'Build knowledge of digital marketing and SEO fundamentals.' },
  { step: '02', title: 'Research', description: 'Practice internet research and foundational keyword research.' },
  { step: '03', title: 'Plan', description: 'Understand basic digital marketing workflows and online business activities.' },
  { step: '04', title: 'Create', description: 'Explore website development and digital media marketing.' },
  { step: '05', title: 'Manage', description: 'Gain exposure to social media management and website management.' },
  { step: '06', title: 'Continue Learning', description: 'Build practical experience and continue developing skills.' },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Areas of Interest"
          subtitle="Digital marketing, SEO, social media management, website development, e-commerce, and online business."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-10 lg:mb-12">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="surface-card p-5 sm:p-6 gradient-border h-full hover:-translate-y-1"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-soft">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-primary">{service.number}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 surface-card p-5 md:p-6"
        >
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Learning Process</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-foreground">Building Practical Experience</h3>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-background/50 p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-primary">{item.step}</span>
                  <FiTrendingUp className="h-4 w-4 text-primary" />
                </div>
                <h4 className="mb-2 font-display text-lg font-bold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-card p-5 md:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-2xl font-bold gradient-text mb-2">Career Objective</h3>
            <p className="text-muted-foreground max-w-3xl">
              To build a career in digital marketing, SEO, social media management, and e-commerce by applying existing skills, gaining practical experience, supporting business objectives, and continuing to learn.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary whitespace-nowrap">Let’s Work Together</a>
            <a href="#case-studies" className="btn-secondary whitespace-nowrap">View Training</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
