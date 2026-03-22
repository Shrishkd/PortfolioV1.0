import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05060A] text-[#E6F1FF] px-4 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 cyber-grid-bg opacity-40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 to-[#05060A]" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative z-10 max-w-md"
      >
        <h1 className="text-6xl md:text-8xl font-orbitron font-bold text-gradient-animated mb-4 tracking-wider">
          404
        </h1>
        <p className="text-xl text-[#94A3B8] mb-8">
          Oops! Page not found
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-[#00F0FF] via-[#00FFFF] to-[#A855F7] text-[#05060A] border border-cyan-400/40 shadow-[0_0_24px_hsl(187_100%_50%/0.35)]"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
