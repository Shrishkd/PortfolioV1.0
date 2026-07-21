import { motion } from 'framer-motion';
import { Briefcase, Sparkles } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-neon-cyan/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Professional milestones and industry exposure
          </p>
        </motion.div>

        {/* Coming Soon card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative max-w-xl w-full rounded-2xl border border-neon-cyan/20 bg-gradient-to-br from-slate-900/60 to-slate-800/30 p-10 text-center overflow-hidden group hover:border-neon-cyan/40 transition-all duration-500 shadow-[0_0_40px_-12px_hsl(187_100%_50%/0.2)]">
            {/* Top gradient stripe */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Pulse ring */}
            <div className="relative mx-auto w-20 h-20 mb-6">
              <motion.div
                className="absolute inset-0 rounded-full bg-neon-cyan/10 border border-neon-cyan/30"
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shadow-[0_0_24px_-6px_hsl(187_100%_50%/0.4)]">
                <Briefcase className="w-9 h-9 text-neon-cyan" />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/25 px-3 py-1 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Coming Soon
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">
              Building My Professional Journey
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Currently focused on academics, projects, and hackathons.
              Industry experience entries will appear here as opportunities unfold.
            </p>

            {/* Decorative dots grid */}
            <div className="pointer-events-none absolute bottom-4 right-4 grid grid-cols-3 gap-1 opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-neon-cyan" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}