import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-card/70 backdrop-blur-xl border border-cyan-500/30 shadow-neon-sm hover:shadow-neon-md hover:border-cyan-400/50 transition-all duration-300 ease-out"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-neon-cyan drop-shadow-[0_0_10px_hsl(187_100%_50%/0.45)]" />
        ) : (
          <Moon className="w-6 h-6 text-neon-cyan drop-shadow-[0_0_10px_hsl(187_100%_50%/0.45)]" />
        )}
      </motion.div>
    </motion.button>
  );
}
