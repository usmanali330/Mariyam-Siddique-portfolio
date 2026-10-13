import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

const caseStudy = {
  client: 'PNY Training Institute',
  industry: 'Digital marketing and SEO training',
  location: 'Internship at This and That Consultant',
  timeline: 'Six-month combined training and internship',
  challenge: 'Professional training and practical internship exposure in digital marketing and SEO.',
  strategy: [
    'Digital marketing fundamentals',
    'SEO fundamentals',
    'Social media management exposure',
    'Website development',
    'Basic website management',
    'Digital marketing workflows',
    'Online business activities',
  ],
  results: [
    'Combined six-month training and internship experience',
    'Internship at This and That Consultant included in the six-month total',
    'Foundational website development and management skills',
    'Exposure to social media management',
  ],
};

const Projects = () => {
  return (
    <section id="case-studies" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Training & Internship"
          subtitle="Combined six-month training and internship experience in digital marketing and SEO."
        />

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="surface-card overflow-hidden gradient-border"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-gradient-primary p-6 sm:p-8 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">Professional Training</p>
              <h3 className="mt-4 font-display text-3xl font-bold">Digital Marketing & SEO Training</h3>
              <div className="mt-8 grid gap-3 text-sm text-white/90">
                <div><span className="font-semibold">Training:</span> {caseStudy.client}</div>
                <div><span className="font-semibold">Focus:</span> {caseStudy.industry}</div>
                <div><span className="font-semibold">Internship:</span> {caseStudy.location}</div>
                <div><span className="font-semibold">Duration:</span> {caseStudy.timeline}</div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-display text-xl font-bold mb-3">Experience Summary</h4>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                </div>

                <div>
                  <h4 className="font-display text-xl font-bold mb-3">Training Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.strategy.map((item) => (
                      <span key={item} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-2 text-xs font-medium text-muted-foreground">{item}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-display text-xl font-bold mb-4">Experience Details</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {caseStudy.results.map((result) => (
                    <div key={result} className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm font-medium text-foreground">
                      <FiCheck className="h-4 w-4 text-primary shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a href="#contact" className="btn-primary">
                  Contact Me
                  <FiArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Projects;
