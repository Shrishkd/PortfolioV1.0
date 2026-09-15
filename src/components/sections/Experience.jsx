import { motion } from 'framer-motion';
import { Briefcase, Building2, Cpu, Car } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Freelance Developer',
    company: 'Independent · Remote',
    period: '2023 – Present',
    type: 'Freelance',
    typeColor: 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/25',
    icon: Briefcase,
    description:
      'Design and deliver end-to-end custom solutions for clients across the globe, spanning intelligent AI-powered tools and robust full-stack web applications. Each engagement is handled with a product-first mindset — from architecture decisions and API design through to deployment and post-launch support.',
    highlights: [
      'Built AI-integrated pipelines and automation tools for international clients',
      'Developed full-stack web apps covering front-end, back-end, and database layers',
      'Managed client communication, requirement scoping, and iterative delivery',
    ],
    tech: ['Next.js', 'Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Docker'],
    gradient: 'from-cyan-500/10 to-blue-500/5',
    borderColor: 'border-neon-cyan/25',
    glow: 'shadow-[0_0_40px_-12px_hsl(187_100%_50%/0.2)]',
    dotColor: 'bg-neon-cyan',
    techStyle: {
      'Next.js': 'bg-white/10 text-white/80 border-white/20',
      'Python': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
      'FastAPI': 'bg-teal-500/15 text-teal-400 border-teal-500/25',
      'OpenAI API': 'bg-purple-500/15 text-purple-400 border-purple-500/25',
      'PostgreSQL': 'bg-blue-600/15 text-blue-300 border-blue-600/25',
      'Docker': 'bg-sky-600/15 text-sky-300 border-sky-600/25',
    },
  },
  {
    id: 2,
    role: 'AI Web Developer',
    company: 'Adwiti Pvt. Ltd.',
    period: '2024',
    type: 'Intern',
    typeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/25',
    icon: Cpu,
    description:
      'Contributed to a computer-vision project focused on automated material detection in images. Built and integrated intelligent pipelines capable of identifying and spatially marking scrapable materials within image datasets, significantly reducing manual inspection overhead.',
    highlights: [
      'Developed ML inference pipelines for real-time image analysis and annotation',
      'Integrated computer vision models into a production-ready web interface',
      'Optimised processing speed and accuracy across large-scale image batches',
    ],
    tech: ['Python', 'OpenCV', 'TensorFlow', 'React', 'Flask', 'REST API'],
    gradient: 'from-purple-500/10 to-pink-500/5',
    borderColor: 'border-purple-500/25',
    glow: 'shadow-[0_0_40px_-12px_hsl(271_91%_65%/0.2)]',
    dotColor: 'bg-purple-400',
    techStyle: {
      'Python': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
      'OpenCV': 'bg-blue-500/15 text-blue-400 border-blue-500/25',
      'TensorFlow': 'bg-orange-500/15 text-orange-400 border-orange-500/25',
      'React': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
      'Flask': 'bg-slate-500/15 text-slate-300 border-slate-500/25',
      'REST API': 'bg-sky-500/15 text-sky-400 border-sky-500/25',
    },
  },
  {
    id: 3,
    role: 'Co-Founder & Lead Engineer',
    company: 'Tuned Society',
    period: '2023 – 2024',
    type: 'Startup',
    typeColor: 'text-green-400 bg-green-500/10 border-green-500/25',
    icon: Car,
    description:
      'Co-founded and led the technical development of Tuned Society — a dedicated marketplace connecting car enthusiasts with verified, trusted modification garages. Spearheaded the full product lifecycle, from ideation and system architecture through to launch.',
    highlights: [
      'Designed a location-based search engine to match users with nearby verified garages',
      'Engineered scalable booking workflows with real-time availability and status tracking',
      'Architected a modular backend to support multi-vendor operations and future feature expansion',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'System Design'],
    gradient: 'from-green-500/10 to-emerald-500/5',
    borderColor: 'border-green-400/25',
    glow: 'shadow-[0_0_40px_-12px_hsl(142_71%_45%/0.2)]',
    dotColor: 'bg-green-400',
    techStyle: {
      'Node.js': 'bg-green-500/15 text-green-400 border-green-500/25',
      'Express.js': 'bg-green-500/10 text-green-300 border-green-400/20',
      'MongoDB': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
      'REST API': 'bg-sky-500/15 text-sky-400 border-sky-500/25',
      'System Design': 'bg-amber-500/15 text-amber-400 border-amber-500/25',
    },
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-neon-cyan/4 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full bg-neon-purple/4 blur-3xl" />
      <div className="pointer-events-none absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-green-500/3 blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl section-heading text-gradient mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-8 shadow-neon-sm" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional milestones, startups, and real-world impact
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-neon-cyan/40 via-purple-400/30 to-green-400/30 hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6 md:gap-8 group"
                >
                  {/* Timeline icon node */}
                  <div className="relative flex-shrink-0 hidden md:flex items-start">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [-3, 3, 0] }}
                      transition={{ duration: 0.4 }}
                      className={`w-16 h-16 rounded-2xl border ${exp.borderColor} bg-gradient-to-br ${exp.gradient} flex items-center justify-center ${exp.glow} z-10`}
                    >
                      <Icon className="w-7 h-7 text-foreground/80" />
                    </motion.div>
                  </div>

                  {/* Experience card */}
                  <div
                    className={`flex-1 relative rounded-2xl border ${exp.borderColor} bg-gradient-to-br ${exp.gradient} backdrop-blur-sm p-6 md:p-7 overflow-hidden ${exp.glow} hover:brightness-110 transition-all duration-500`}
                  >
                    {/* Top accent stripe */}
                    <div className={`absolute top-0 left-0 right-0 h-px ${exp.dotColor} opacity-30 group-hover:opacity-70 transition-opacity duration-300`} />

                    {/* Decorative dots */}
                    <div className="pointer-events-none absolute bottom-3 right-3 grid grid-cols-4 gap-1 opacity-10">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className={`w-1 h-1 rounded-full ${exp.dotColor}`} />
                      ))}
                    </div>

                    {/* Card header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          {/* Mobile icon */}
                          <div className={`md:hidden w-8 h-8 rounded-lg border ${exp.borderColor} bg-gradient-to-br ${exp.gradient} flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-foreground/70" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground leading-tight">
                            {exp.role}
                          </h3>
                          <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full border ${exp.typeColor}`}>
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="font-medium text-foreground/70">{exp.company}</span>
                          <span className="opacity-40">·</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/75">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.dotColor}`} />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold border tracking-wide ${exp.techStyle[tag] || 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}