import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl section-heading text-gradient mb-6">
            A bit about me
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-8 shadow-neon-sm" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12">
            <div className="text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                I am a passionate <span className="text-neon-cyan">Software Developer</span> driven by the mission to build intelligent, scalable, and user-focused applications. With a strong foundation in <span className="text-neon-cyan">Artificial Intelligence and Machine Learning</span>.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                My experience in <span className="text-neon-cyan">full-stack development</span> and modern technologies allows me to design and deploy end-to-end applications with seamless user experiences. I combine strong problem-solving skills, innovative design thinking, and attention to detail in my work.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              My strong interest in <span className="text-neon-cyan">financial markets</span> has sharpened my analytical thinking and decision-making capabilities, allowing me to apply a data-driven approach to my technical work.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm always eager to learn new technologies, collaborate on exciting projects, and contribute 
                to meaningful solutions that can make a positive impact. <span className="text-neon-cyan">Let's build something amazing together!</span>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
