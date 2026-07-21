import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy, Medal, Code2, Crown, Users,
  Star, BookOpen, Swords, ExternalLink, RefreshCw, FileText
} from 'lucide-react';

/* ─────────────────────────────────────────
   STATIC FALLBACK DATA  (from profile screenshot)
───────────────────────────────────────── */
const FALLBACK_LC = {
  total: 69,
  rank: '#2096959',
  easy: { solved: 38, total: 956 },
  medium: { solved: 29, total: 2088 },
  hard: { solved: 2, total: 955 },
};

const FALLBACK_GFG = {
  problemsSolved: 208,
  codingScore: 733,
  streakCurrent: 119,
  streakTotal: 1813,
  easy: 63,
  medium: 118,
  hard: 21,
};

const PROFILE_URLS = {
  leetcode: 'https://leetcode.com/u/Shrishd/',
  gfg: 'https://www.geeksforgeeks.org/user/shrishdh212/',
};

/* ─────────────────────────────────────────
   ACHIEVEMENT CARD DATA
───────────────────────────────────────── */
const academicAchievements = [
  {
    icon: Trophy,
    title: 'Semi-Finalist',
    subtitle: 'Economic Times Gen AI Hackathon 2025',
    color: 'from-amber-400 to-orange-500',
    glow: 'hsl(38 92% 50% / 0.4)',
    badge: 'National Level',
    certLink: 'https://drive.google.com/file/d/1wpeLIR_LEyl3X5yfIhtqr76LOx1vfkbr/view?usp=sharing',
  },
  {
    icon: Medal,
    title: 'National Semi-Finalist',
    subtitle: 'Deloitte Hacksplosion 2025',
    color: 'from-cyan-400 to-blue-500',
    glow: 'hsl(187 100% 50% / 0.4)',
    badge: 'Industry Hackathon',
    certLink: null,
  },
  {
    icon: Crown,
    title: 'Gold Medalist',
    subtitle: '19th SOF National Science Olympiad',
    color: 'from-yellow-400 to-amber-500',
    glow: 'hsl(48 96% 53% / 0.4)',
    badge: 'Intl. Rank 4726 · Zonal Rank 1',
    certLink: 'https://drive.google.com/file/d/1O0EG6KNuJnyG_KFQTi0OtLdFWImchZ-Z/view?usp=sharing',
  },
];

const extracurricular = [
  {
    icon: Users,
    title: 'Event Management Head',
    org: 'Robotics Club, VIT Bhopal',
    color: 'from-purple-400 to-violet-500',
    glow: 'hsl(270 75% 60% / 0.4)',
    highlights: [
      'Led 150+ participant workshop end-to-end',
      '95% positive participant feedback',
      'Managed technical & non-technical club events',
      'Boosted club membership by 40%',
    ],
  },
  {
    icon: Swords,
    title: 'Cricket Team Captain',
    org: 'Intra-College Sports Fest',
    color: 'from-green-400 to-emerald-500',
    glow: 'hsl(150 60% 50% / 0.4)',
    highlights: [
      'Led the team to the semi-finals through strategic match planning',
      "Tournament's Best Batsman award",
      '286 total runs across the tournament',
      '6 wickets as a key all-rounder',
    ],
  },
];

/* ─────────────────────────────────────────
   LIVE FETCH HOOK
───────────────────────────────────────── */
function useDSAStats() {
  const [lc, setLc] = useState(FALLBACK_LC);
  const [gfg, setGfg] = useState(FALLBACK_GFG);
  const [lcLoading, setLcLoading] = useState(true);
  const [gfgLoading, setGfgLoading] = useState(true);
  const [lcLive, setLcLive] = useState(false);
  const [gfgLive, setGfgLive] = useState(false);

  const fetchLC = async () => {
    setLcLoading(true);
    try {
      const res = await fetch('https://leetcode-stats-api.herokuapp.com/Shrishd', {
        signal: AbortSignal.timeout(7000),
      });
      if (!res.ok) throw new Error('bad status');
      const data = await res.json();
      if (data.status === 'success') {
        setLc({
          total: data.totalSolved,
          rank: `#${data.ranking ?? '—'}`,
          easy: { solved: data.easySolved, total: data.totalEasy },
          medium: { solved: data.mediumSolved, total: data.totalMedium },
          hard: { solved: data.hardSolved, total: data.totalHard },
        });
        setLcLive(true);
      }
    } catch {
      // silent fallback — static data already set
    } finally {
      setLcLoading(false);
    }
  };

  const fetchGFG = async () => {
    setGfgLoading(true);
    try {
      const res = await fetch('https://geeks-for-geeks-stats-api.vercel.app/?raw=y&user=shrishdh212', {
        signal: AbortSignal.timeout(7000),
      });
      if (!res.ok) throw new Error('bad status');
      const data = await res.json();
      if (data && data.info) {
        setGfg({
          problemsSolved: data.info.totalProblemsSolved ?? FALLBACK_GFG.problemsSolved,
          codingScore: data.info.codingScore ?? FALLBACK_GFG.codingScore,
          streakCurrent: data.info.currentStreak ?? FALLBACK_GFG.streakCurrent,
          streakTotal: data.info.maxStreak ?? FALLBACK_GFG.streakTotal,
          easy: data.info.easySolved ?? FALLBACK_GFG.easy,
          medium: data.info.mediumSolved ?? FALLBACK_GFG.medium,
          hard: data.info.hardSolved ?? FALLBACK_GFG.hard,
        });
        setGfgLive(true);
      }
    } catch {
      // silent fallback
    } finally {
      setGfgLoading(false);
    }
  };

  useEffect(() => {
    fetchLC();
    fetchGFG();
  }, []);

  return { lc, gfg, lcLoading, gfgLoading, lcLive, gfgLive, refetchLC: fetchLC, refetchGFG: fetchGFG };
}

/* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 outline-none ${
        active ? 'text-background' : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {active && (
        <motion.span
          layoutId="tab-pill"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple shadow-[0_0_18px_hsl(187_100%_50%/0.5)]"
          transition={{ type: 'spring', stiffness: 350, damping: 32 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

function BarSegment({ label, solved, total, colorClass }) {
  const pct = Math.min((solved / Math.max(total, 1)) * 100, 100);
  return (
    <div className="flex items-center gap-3">
      <span className={`text-xs font-semibold w-14 ${colorClass}`}>{label}</span>
      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${
            label === 'Easy'
              ? 'bg-gradient-to-r from-green-400 to-emerald-500'
              : label === 'Medium'
              ? 'bg-gradient-to-r from-amber-400 to-orange-500'
              : 'bg-gradient-to-r from-red-400 to-rose-600'
          }`}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
      <span className="text-xs text-muted-foreground w-16 text-right">
        {solved} / {total}
      </span>
    </div>
  );
}

function LiveBadge({ live }) {
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
      live
        ? 'bg-green-500/15 text-green-400 border border-green-500/25'
        : 'bg-amber-500/15 text-amber-400 border border-amber-500/25'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${live ? 'bg-green-400 animate-pulse' : 'bg-amber-400'}`} />
      {live ? 'Live' : 'Cached'}
    </span>
  );
}

function DSACard() {
  const { lc, gfg, lcLoading, gfgLoading, lcLive, gfgLive, refetchLC, refetchGFG } = useDSAStats();
  const totalSolved = lc.total + gfg.problemsSolved;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="col-span-1 md:col-span-2"
    >
      <div className="relative rounded-2xl border border-neon-cyan/25 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-6 md:p-8 shadow-[0_0_40px_-12px_hsl(187_100%_50%/0.25)] overflow-hidden group hover:border-neon-cyan/50 transition-all duration-500">
        <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_16px_hsl(187_100%_50%/0.3)]">
            <Code2 className="w-5 h-5 text-neon-cyan" />
          </div>
          <div>
            <h4 className="font-bold text-foreground text-lg">DSA Problem Solving</h4>
            <p className="text-xs text-muted-foreground">LeetCode · GeeksforGeeks · Codeforces</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/30 text-neon-cyan text-xs font-bold px-3 py-1 rounded-full">
              {totalSolved}+ Solved
            </div>
            <button
              onClick={() => { refetchLC(); refetchGFG(); }}
              title="Refresh stats"
              className="p-1.5 rounded-lg text-muted-foreground hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-200"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* ── LeetCode ── */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <a
                href={PROFILE_URLS.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group/lc"
              >
                ⬡ LeetCode
                <ExternalLink className="w-3 h-3 opacity-0 group-hover/lc:opacity-100 transition-opacity" />
              </a>
              <span className="text-xs text-muted-foreground">· Shrishd · {lc.rank}</span>
              <LiveBadge live={lcLive} />
            </div>

            {lcLoading ? (
              <div className="flex items-center justify-center h-24">
                <div className="w-6 h-6 border-2 border-amber-400/30 border-t-amber-400 rounded-full animate-spin" />
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <div className="relative flex-shrink-0">
                  <svg viewBox="0 0 72 72" className="w-20 h-20 -rotate-90">
                    <circle cx="36" cy="36" r="28" fill="none" stroke="hsl(187 100% 50% / 0.1)" strokeWidth="6" />
                    <motion.circle
                      cx="36" cy="36" r="28"
                      fill="none" stroke="url(#dsaGrad)" strokeWidth="6" strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                      whileInView={{ strokeDashoffset: 2 * Math.PI * 28 * (1 - lc.total / 300) }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                    <defs>
                      <linearGradient id="dsaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(187 100% 50%)" />
                        <stop offset="100%" stopColor="hsl(240 80% 70%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold text-foreground">{lc.total}</span>
                    <span className="text-[9px] text-muted-foreground">solved</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <BarSegment label="Easy" solved={lc.easy.solved} total={lc.easy.total} colorClass="text-green-400" />
                  <BarSegment label="Medium" solved={lc.medium.solved} total={lc.medium.total} colorClass="text-amber-400" />
                  <BarSegment label="Hard" solved={lc.hard.solved} total={lc.hard.total} colorClass="text-red-400" />
                </div>
              </div>
            )}
          </div>

          {/* ── GFG ── */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <a
                href={PROFILE_URLS.gfg}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-bold text-green-400 hover:text-green-300 transition-colors group/gfg"
              >
                ◈ GeeksforGeeks
                <ExternalLink className="w-3 h-3 opacity-0 group-hover/gfg:opacity-100 transition-opacity" />
              </a>
              <span className="text-xs text-muted-foreground">· shrishdh212</span>
              <LiveBadge live={gfgLive} />
            </div>

            {gfgLoading ? (
              <div className="flex items-center justify-center h-24">
                <div className="w-6 h-6 border-2 border-green-400/30 border-t-green-400 rounded-full animate-spin" />
              </div>
            ) : (
              <>
                <div className="flex items-center gap-5">
                  <div className="relative flex-shrink-0">
                    <svg viewBox="0 0 72 72" className="w-20 h-20 -rotate-90">
                      <circle cx="36" cy="36" r="28" fill="none" stroke="hsl(150 60% 50% / 0.1)" strokeWidth="6" />
                      <motion.circle
                        cx="36" cy="36" r="28"
                        fill="none" stroke="url(#gfgGrad)" strokeWidth="6" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 28}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 28 * (1 - gfg.problemsSolved / 500) }}
                        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                      <defs>
                        <linearGradient id="gfgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(150 60% 50%)" />
                          <stop offset="100%" stopColor="hsl(120 50% 60%)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-foreground">{gfg.problemsSolved}</span>
                      <span className="text-[9px] text-muted-foreground">solved</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <BarSegment label="Easy" solved={gfg.easy} total={200} colorClass="text-green-400" />
                    <BarSegment label="Medium" solved={gfg.medium} total={400} colorClass="text-amber-400" />
                    <BarSegment label="Hard" solved={gfg.hard} total={100} colorClass="text-red-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-center">
                    <p className="text-base font-bold text-green-400">{gfg.codingScore}</p>
                    <p className="text-[10px] text-muted-foreground">Coding Score</p>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-center">
                    <p className="text-base font-bold text-neon-cyan">
                      {gfg.streakCurrent}
                      <span className="text-xs text-muted-foreground">/{gfg.streakTotal}d</span>
                    </p>
                    <p className="text-[10px] text-muted-foreground">Streak</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AcademicCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group cursor-default"
    >
      <div
        className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-6 h-full flex flex-col overflow-hidden transition-all duration-500 hover:border-white/25"
        onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 30px -8px ${item.glow}`)}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
      >
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="mb-3">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${item.color} text-white/90`}>
            {item.badge}
          </span>
        </div>

        <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.subtitle}</p>

        {item.certLink && (
          <a
            href={item.certLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-neon-cyan hover:underline hover:drop-shadow-[0_0_6px_hsl(187_100%_50%/0.5)] transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            View Certificate
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ExtracurricularCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-white/25"
        onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 35px -8px ${item.glow}`)}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
      >
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
        <div className="pointer-events-none absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-10 blur-2xl bg-gradient-to-br from-white to-transparent" />

        <div className="flex items-start gap-5">
          <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
            <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
              {item.org}
            </p>
            <ul className="space-y-2">
              {item.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.color}`} />
                  <span className="text-sm text-muted-foreground">{h}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────── */
export function Achievements() {
  const [activeTab, setActiveTab] = useState('academic');

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl section-heading text-gradient mb-6">
            Achievements
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-8 shadow-neon-sm" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition earned through dedication, competition, and leadership
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex gap-1 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <TabButton active={activeTab === 'academic'} onClick={() => setActiveTab('academic')}>
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Academic
              </span>
            </TabButton>
            <TabButton active={activeTab === 'extra'} onClick={() => setActiveTab('extra')}>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Extracurricular
              </span>
            </TabButton>
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === 'academic' && (
            <motion.div
              key="academic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <DSACard />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {academicAchievements.map((item, i) => (
                  <AcademicCard key={i} item={item} index={i} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'extra' && (
            <motion.div
              key="extra"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {extracurricular.map((item, i) => (
                <ExtracurricularCard key={i} item={item} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
