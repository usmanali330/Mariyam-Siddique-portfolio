import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiArrowRight, FiBarChart2, FiMapPin, FiSearch, FiTarget } from 'react-icons/fi';
import profilePortrait from '../../assets/profile-mariyam.jpg';

const values = ['Digital Marketing', 'SEO', 'Social Media Management', 'Website Development', 'E-Commerce', 'Online Business'];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="About Mariyam"
          subtitle="Digital marketing and SEO professional with six months of combined training and internship experience. Received professional training through PNY Training Institute and gained practical exposure at This and That Consultant. Interested in digital marketing, SEO, social media management, website development, e-commerce, and online business."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 xl:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background/80 p-3 shadow-card">
              <img
                src={profilePortrait}
                alt="Mariyam Siddique"
                className="h-[380px] w-full max-w-[420px] rounded-[1.5rem] object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-7 sm:p-8 gradient-border"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-4">About Mariyam</p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              She completed six months of combined training and internship experience, including professional training through PNY Training Institute and practical exposure at This and That Consultant.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Her career objective is to build a career in digital marketing, SEO, social media management, and e-commerce by applying existing skills, gaining practical experience, supporting business objectives, and continuing to learn.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground">
                <FiMapPin className="h-4 w-4 text-primary" />
                Based in Lahore, Pakistan
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground">
                <FiTarget className="h-4 w-4 text-primary" />
                Open to remote opportunities
              </div>
            </div>

            <div className="mt-6 surface-card p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="icon-chip"><FiSearch className="h-5 w-5" /></div>
                <h3 className="font-display text-xl font-bold text-foreground">Marketing Focus</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span key={value} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-2 text-xs font-medium text-muted-foreground">{value}</span>
                ))}
              </div>
            </div>

            <div className="mt-5 surface-card p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="icon-chip"><FiBarChart2 className="h-5 w-5" /></div>
                <h3 className="font-display text-xl font-bold text-foreground">Professional Interests</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Digital marketing and search engine optimization</li>
                <li>• Social media management and website development</li>
                <li>• E-commerce and online business</li>
              </ul>
            </div>

            <a href="#contact" className="btn-primary mt-8">
              Learn More About Me
              <FiArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
