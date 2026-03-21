import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import profileImage from '@/assets/profile-image.png';

const GITHUB_URL = 'https://github.com/Shrishkd';
const LINKEDIN_URL = 'https://www.linkedin.com/in/shrish-das-44ba5a27b/';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' }
];

/** Section IDs in page order for scroll-spy (includes #contact for Say Hello) */
const SCROLL_SPY_IDS = [
  'about',
  'skills',
  'certifications',
  'projects',
  'education',
  'experience',
  'contact'
];

function SocialIconLink({ href, label, children }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 rounded-full text-foreground/90 hover:text-primary hover:bg-primary/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const scrollPosition = window.scrollY + 100;
      let current = '';

      for (const sectionId of SCROLL_SPY_IDS) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 300);
      } else {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const isSayHelloActive = activeSection === 'contact';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0">
            <motion.button
              type="button"
              className="flex-shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('#home')}
              aria-label="Go to top of page"
            >
              <motion.img
                src={profileImage}
                alt=""
                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                aria-hidden
              />
            </motion.button>

            <motion.button
              type="button"
              className="text-lg sm:text-xl font-bold font-montserrat text-gradient truncate min-w-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#home')}
            >
              Shrish
            </motion.button>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center gap-5 lg:gap-8 min-w-0 px-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`px-1 py-2 text-sm font-semibold transition-colors relative whitespace-nowrap ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary'
                    : 'text-foreground/90 hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeSection"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-1 sm:gap-2 shrink-0">
            <SocialIconLink href={GITHUB_URL} label="Shrish on GitHub (opens in new tab)">
              <Github className="w-5 h-5" strokeWidth={2} aria-hidden />
            </SocialIconLink>
            <SocialIconLink href={LINKEDIN_URL} label="Shrish on LinkedIn (opens in new tab)">
              <Linkedin className="w-5 h-5" strokeWidth={2} aria-hidden />
            </SocialIconLink>
            <motion.button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className={`ml-1 rounded-full px-5 py-2 text-sm font-semibold transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                isSayHelloActive
                  ? 'bg-primary text-primary-foreground border-primary-foreground/30 shadow-md'
                  : 'bg-primary/85 text-primary-foreground border-primary-foreground/25 hover:bg-primary'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Say Hello
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <SocialIconLink href={GITHUB_URL} label="Shrish on GitHub (opens in new tab)">
                <Github className="w-5 h-5" strokeWidth={2} aria-hidden />
              </SocialIconLink>
              <SocialIconLink href={LINKEDIN_URL} label="Shrish on LinkedIn (opens in new tab)">
                <Linkedin className="w-5 h-5" strokeWidth={2} aria-hidden />
              </SocialIconLink>
            </div>
            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              whileTap={{ scale: 0.95 }}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 text-base font-semibold transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/90 hover:text-foreground hover:bg-muted/50'
                  } rounded-lg`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className={`w-full rounded-full px-5 py-3 text-base font-semibold border transition-colors ${
                  isSayHelloActive
                    ? 'bg-primary text-primary-foreground border-primary-foreground/30'
                    : 'bg-primary/85 text-primary-foreground border-primary-foreground/25 hover:bg-primary'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                Say Hello
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
