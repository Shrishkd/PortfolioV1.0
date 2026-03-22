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
            About Me
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
                Hey, I am Shrish, Computer Science student currently pursuing my B.Tech in AI/ML at VIT Bhopal. 
                My journey in technology started with a curiosity about how things work, leading me to explore artificial intelligence & machine learning.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                When I'm not coding or studying, you'll find me exploring the financial markets as a trader, 
                combining my technical knowledge with market analysis.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm always eager to learn new technologies, collaborate on exciting projects, and contribute 
                to meaningful solutions that can make a positive impact. Let's build something amazing together!
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
