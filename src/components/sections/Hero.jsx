import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import { TypingAnimation } from '@/components/TypingAnimation';
import { Button } from '@/components/ui/button';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import profileImage from '@/assets/profile-image.png';

const typingTexts = [
  'Machine Learning Engineer',
  'Full-Stack Developer',
  'Problem Solver',
];

/** Inline hero avatar — absolutely positioned inside the hero section only */
function HeroAvatar({ src, side }) {
  const sideStyle = side === 'left'
    ? { left: 0 }
    : { right: 0 };

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        bottom: '60px',
        ...sideStyle,
        width: '300px',
        height: '500px',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      {/* Foot glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90px',
          height: '14px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.35) 0%, transparent 70%)',
          filter: 'blur(4px)',
        }}
      />
      {/* @ts-ignore */}
      <model-viewer
        src={src}
        alt="3D avatar"
        autoplay
        interaction-prompt="none"
        camera-orbit="0deg 85deg 3.4m"
        min-camera-orbit="auto 60deg auto"
        max-camera-orbit="auto 100deg auto"
        shadow-intensity="0"
        exposure="1.3"
        environment-image="neutral"
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
          '--poster-color': 'transparent',
          '--progress-bar-color': 'rgba(99,102,241,0.5)',
          '--progress-bar-height': '2px',
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a1628]/50 via-transparent to-background" aria-hidden />
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Left avatar — model6, hero-scoped */}
      <HeroAvatar src="/avatars/model5.glb" side="left" />
      {/* Right avatar — model7, hero-scoped */}
      <HeroAvatar src="/avatars/model7.glb" side="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        {/* Profile Image — multi-layer neon ring + float */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <motion.div className="relative" whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 280, damping: 18 }}>
            <div
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-neon-cyan/30 via-neon-purple/40 to-neon-blue/30 blur-2xl opacity-90 animate-pulse-glow"
              aria-hidden
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="rounded-full p-[3px] bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-blue">
                <div className="rounded-full p-[3px] bg-[#05060A]">
                  <div className="relative rounded-full overflow-hidden">
                    <motion.div
                      className="pointer-events-none absolute inset-0 rounded-full border-2 border-cyan-400/40 z-10"
                      animate={{
                        boxShadow: [
                          '0 0 24px hsl(187 100% 50% / 0.45), 0 0 48px hsl(271 91% 65% / 0.3)',
                          '0 0 40px hsl(187 100% 50% / 0.7), 0 0 72px hsl(271 91% 65% / 0.45)',
                          '0 0 24px hsl(187 100% 50% / 0.45), 0 0 48px hsl(271 91% 65% / 0.3)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <img
                      src={profileImage}
                      alt="Shrish"
                      className="relative z-[1] w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron tracking-[0.15em] text-gradient-animated mb-4">
            Shrish
          </h1>
          <h2 className="text-xl md:text-2xl text-[#E6F1FF] subtitle-glow mb-6 font-medium">
            AI/ML Enthusiast | Full Stack Developer
          </h2>

          <div className="text-lg md:text-xl font-medium h-8 text-neon-cyan drop-shadow-[0_0_12px_hsl(187_100%_50%/0.4)]">
            <TypingAnimation texts={typingTexts} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Hi, I'm Shrish, Software Developer building intelligent, scalable systems powered by AI & real-world data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button size="lg" className="px-8 py-3 text-lg" asChild>
            <a
              href="https://drive.google.com/file/d/1Rkf3OjS1JrvqQg3w_OQzeoWwGo6hXqVs/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>

          <div className="flex gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Shrishkd" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/shrish-das-44ba5a27b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400/70 rounded-full flex justify-center shadow-[0_0_16px_hsl(187_100%_50%/0.35)]"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
