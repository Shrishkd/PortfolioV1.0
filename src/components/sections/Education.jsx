import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const educationData = [
  {
    institution: "VIT Bhopal University",
    degree: "B.Tech Computer Science Engineering (AI & ML)",
    period: "2023 - Present",
    remark: "CGPA: 8.4",
    description: "Specializing in Artificial Intelligence and Machine Learning with focus on full-stack development, machine learning, and software systems. Actively involved in technical clubs and hackathons.",
    image: "https://res.cloudinary.com/dks0vhj0j/image/upload/v1778050174/VIT_logo_eswe7d.png"
  },
  {
    institution: "Resonance International School",
    degree: "Senior Secondary Education (PCM)",
    period: "2020 - 2022",
    remark: "Passed",
    description: "Built strong foundations in Physics, Chemistry, and Mathematics with focus on analytical thinking and logical problem-solving.",
    image: "https://res.cloudinary.com/dks0vhj0j/image/upload/v1778049495/Resonance_logo_nfkaeq.png"
  },
  {
    institution: "D.A.V. Public School",
    degree: "Secondary Education",
    period: "2019 - 2020",
    remark: "Passed",
    description: "Completed foundational education in Science and core subjects with excellent academic performance.",
    image: "https://res.cloudinary.com/dks0vhj0j/image/upload/v1778049473/DAV_logo_bxlhxc.png"
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl section-heading text-gradient mb-6">
            EDUCATION
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-8 shadow-neon-sm" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My education has been a journey of learning and development. Here are the details of my academic background
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-cyan to-transparent shadow-[0_0_24px_-8px_hsl(187_100%_50%/0.8)]" />

          {/* Education Items */}
          <div className="space-y-16">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.3,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 md:gap-12`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-[calc(50%-40px)]">
                    <motion.div
                      className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-neon-cyan/30 rounded-lg p-6 md:p-8 hover:border-neon-cyan/50 transition-all duration-300 shadow-[0_0_24px_-8px_hsl(187_100%_50%/0.2)] hover:shadow-[0_0_32px_-8px_hsl(187_100%_50%/0.4)]"
                      whileHover={{ y: -5 }}
                    >
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                          {edu.institution}
                        </h3>
                        <p className="text-base md:text-lg text-neon-cyan font-semibold">
                          {edu.degree}
                        </p>
                      </div>

                      <div className="flex items-center text-muted-foreground text-sm md:text-base mb-3">
                        <Calendar className="w-4 h-4 mr-2 text-neon-cyan/70" />
                        <span>{edu.period}</span>
                      </div>

                      {edu.remark && (
                        <div className="inline-block bg-cyan-500/15 border border-cyan-500/30 text-neon-cyan px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-4">
                          {edu.remark}
                        </div>
                      )}

                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {edu.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Node with Image */}
                  <div className="w-40 md:w-28 flex justify-center flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.3 + 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="relative"
                    >
                      {/* Glowing background circle */}
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-cyan rounded-full blur-xl opacity-60 w-28 h-28 -m-2 md:w-24 md:h-24 animate-pulse" />
                      
                      {/* Border circle */}
                      <div className="absolute inset-0 border-2 border-neon-cyan rounded-full w-28 h-28 md:w-24 md:h-24" />
                      
                      {/* Image */}
                      <div className="relative w-28 h-28 md:w-24 md:h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center overflow-hidden border border-neon-cyan/30">
                        <img 
                          src={edu.image} 
                          alt={edu.institution}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = e.target.nextElementSibling;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                        {/* Fallback text if image fails */}
                        <span className="text-xs text-neon-cyan font-semibold text-center px-2 absolute hidden">
                          {edu.institution.split(' ').slice(0, 2).join(' ')}
                        </span>
                      </div>
                    </motion.div>
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
