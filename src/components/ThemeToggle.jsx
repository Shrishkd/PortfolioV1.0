import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle({ variant = 'navbar' }) {
  const { theme, toggleTheme } = useTheme();
  const isNavbar = variant === 'navbar';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={
        isNavbar
          ? 'p-2.5 rounded-full text-foreground/90 bg-card/30 border border-cyan-500/20 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-neon-cyan hover:bg-cyan-500/10 hover:border-cyan-400/40 hover:shadow-[0_0_18px_hsl(187_100%_50%/0.35)]'
          : 'fixed bottom-6 right-6 z-50 p-3 rounded-full bg-card/70 backdrop-blur-xl border border-cyan-500/30 shadow-neon-sm hover:shadow-neon-md hover:border-cyan-400/50 transition-all duration-300 ease-out'
      }
      whileHover={{ scale: isNavbar ? 1.12 : 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={isNavbar ? false : { opacity: 0, scale: 0 }}
      animate={isNavbar ? undefined : { opacity: 1, scale: 1 }}
      transition={isNavbar ? undefined : { delay: 1 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Sun
            className={`${isNavbar ? 'w-5 h-5' : 'w-6 h-6'} text-neon-cyan drop-shadow-[0_0_10px_hsl(187_100%_50%/0.45)]`}
            strokeWidth={2}
            aria-hidden
          />
        ) : (
          <Moon
            className={`${isNavbar ? 'w-5 h-5' : 'w-6 h-6'} text-neon-cyan drop-shadow-[0_0_10px_hsl(187_100%_50%/0.45)]`}
            strokeWidth={2}
            aria-hidden
          />
        )}
      </motion.div>
    </motion.button>
  );
}
