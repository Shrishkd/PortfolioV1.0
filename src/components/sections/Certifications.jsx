import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  SiAmazonwebservices,
  SiOracle,
  SiCoursera,
  SiGoogle,
  SiNvidia
} from 'react-icons/si';
import awsSABadge from '@/assets/AWS badge SA.png';
import awsMLBadge from '@/assets/AWS badge ML.png';
import awsAIBadge from '@/assets/AWS badge AI.png';
import ociDsBadge from '@/assets/OCI badge DS.jpg';
import ociGenAiBadge from '@/assets/OCI badge GenAI.jpg';
import ociAgenticBadge from '@/assets/OCI badge AgenAi.jpg';

const certifications = [
    {
    link: 'https://drive.google.com/file/d/1ZQDyczdKUA4pJKXvOU204JEMK4eCZg7Z/view?usp=sharing',
    title: 'AWS Certified Solutions Architect',
    provider: 'Amazon Web Services',
    description: 'AWS Certified Solutions Architect - Associate (SAA-C03). Scored 820/1000',
    year: '2026',
    icon: SiAmazonwebservices,
    color: '#FF9900',
    badge: { image: awsSABadge, link: 'https://www.credly.com/badges/588db674-8e67-4d49-965d-a9c05c77f81e/public_url' }
  },
  {
    link: 'https://drive.google.com/file/d/1_oBVVp4Zt7k2eOFkZZdBU9vYY19AuCfs/view?usp=sharing',
    title: 'AWS Certified Machine Learning Engineer',
    provider: 'Amazon Web Services',
    description: ' AWS Certified Machine Learning Engineer - Associate (MLA-C01). Scored 922/1000',
    year: '2026',
    icon: SiAmazonwebservices,
    color: '#FF9900',
    badge: { image: awsMLBadge, link: 'https://www.credly.com/badges/90b9e8ae-0d18-440a-b30f-4a6e304faa2f/public_url' }
  },
  {
    link: 'https://drive.google.com/file/d/1Ddrx8ipsoEf_S8Sz-6-JYrgLu7ikAk_z/view?usp=sharing',
    title: 'AWS Certified AI Practitioner',
    provider: 'Amazon Web Services',
    description: 'AWS Certified AI Practitioner (AIF-C01). Scored 890/1000',
    year: '2026',
    icon: SiAmazonwebservices,
    color: '#FF9900',
    badge: { image: awsAIBadge, link: 'https://www.credly.com/badges/9e96d5db-6d13-4912-a8df-02cbf06f74bd/public_url' }
  },
  {
    link: 'https://drive.google.com/file/d/1s0t5AVON8mFAKssqJV2a28On5cGSvGyz/view?usp=sharing',
    title: 'Oracle Cloud Infrastructure: Generative AI Professional',
    provider: 'Oracle University',
    description: 'Completed with verified certificate and badge',
    year: '2025',
    icon: SiOracle,
    color: '#F80000',
    badge: { image: ociGenAiBadge, link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=C50BFC8A56E7A303507E36FD6BBCCCCC84CDDF9B7A3E3E60CB8D048972CF261C' }
  },
    {
    link: 'https://drive.google.com/file/d/1w9G_MPktUNNyKyrex8RFWr1xazSR3J0s/view?usp=sharing',
    title: 'Oracle Cloud Infrastructure: Agentic AI Associate',
    provider: 'Oracle University',
    description: 'Completed with verified certificate and badge',
    year: '2026',
    icon: SiOracle,
    color: '#F80000',
    badge: { image: ociAgenticBadge, link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=56A5101BDFA28C3DC186BB435477E66DC2849C7838BB785F4D6BC30FF6E59D5C' }
  },
  {
    link: 'https://drive.google.com/file/d/186GP44w0tKs3tk3YcVKjQKVM5v4GuySp/view?usp=sharing',
    title: 'Oracle Cloud Infrastructure: Data Science Professional',
    provider: 'Oracle University',
    description: 'Completed with verified certificate and badge',
    year: '2025',
    icon: SiOracle,
    color: '#F80000',
    badge: { image: ociDsBadge, link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=CCAAC2D52EB35996243874976C21CCB0188F8E46C84E3774AEB4006B55A69569' }
  },
  {
    link: 'https://www.coursera.org/account/accomplishments/certificate/OI4VZMX0NQOM',
    title: 'Applied Machine Learning in Python',
    provider: 'Michigan University (Coursera)',
    description: 'Completed with verified certificate and badge',
    year: '2024',
    icon: SiCoursera,
    color: '#0056D2'
  },
  {
    link: 'https://coursera.org/verify/V76UOZ2JWO8E',
    title: 'Unsupervised Learning, Recommenders & Reinforcement Learning',
    provider: 'Stanford Online (Coursera)',
    description: 'Completed with verified certificate and badge',
    year: '2024',
    icon: SiCoursera,
    color: '#0056D2'
  },
  {
    link: 'https://coursera.org/verify/MNFOQ5GZB6KX',
    title: 'Generative AI: Prompt Engineering Basics',
    provider: 'IBM (Coursera)',
    description: 'Completed with verified certificate and badge',
    year: '2025',
    icon: SiCoursera,
    color: '#0056D2'
  },
  {
    link: 'https://learn.nvidia.com/certificates?id=DAyxMRjvT4OautJM6WWv2w',
    title: 'Getting Started with AI on Jetson Nano',
    provider: 'NVIDIA',
    description: 'Completed with verified certificate and badge',
    year: '2025',
    icon: SiNvidia,
    color: '#76B900'
  }
];

function CertIcon({ cert, Icon, isGoogle }) {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
      style={{
        backgroundColor: isGoogle ? 'rgba(66, 133, 244, 0.1)' : `${cert.color}20`
      }}
    >
      {isGoogle ? (
        <div
          className="relative w-6 h-6"
          style={{
            background:
              'linear-gradient(135deg, #4285F4 0%, #EA4335 25%, #FBBC05 50%, #34A853 75%, #4285F4 100%)',
            WebkitMaskImage:
              'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%23000\' d=\'M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z\'/%3E%3Cpath fill=\'%23000\' d=\'M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z\'/%3E%3Cpath fill=\'%23000\' d=\'M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z\'/%3E%3Cpath fill=\'%23000\' d=\'M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z\'/%3E%3C/svg%3E")',
            maskImage:
              'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%23000\' d=\'M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z\'/%3E%3Cpath fill=\'%23000\' d=\'M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z\'/%3E%3Cpath fill=\'%23000\' d=\'M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z\'/%3E%3Cpath fill=\'%23000\' d=\'M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z\'/%3E%3C/svg%3E")',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center'
          }}
          aria-hidden
        />
      ) : (
        <Icon className="w-6 h-6" style={{ color: cert.color }} />
      )}
    </div>
  );
}

function CertDetails({ cert }) {
  return (
    <div className="min-w-0 text-left">
      <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
        <p className="font-medium" style={{ color: cert.color }}>
          {cert.provider}
        </p>
        <span className="text-muted-foreground/60" aria-hidden>
          ·
        </span>
        <p className="text-sm text-muted-foreground">Issued {cert.year}</p>
      </div>
      <p className="text-sm text-muted-foreground">{cert.description}</p>
    </div>
  );
}

const VISIBLE_COUNT = 6;

export function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certifications : certifications.slice(0, VISIBLE_COUNT);
  const hasMore = certifications.length > VISIBLE_COUNT;

  return (
    <section id="certifications" className="py-20 relative" aria-labelledby="certifications-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="certifications-heading" className="text-4xl md:text-5xl section-heading text-gradient mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-8 shadow-neon-sm" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional credentials and verified learning paths
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <AnimatePresence initial={false}>
            {visibleCerts.map((cert, index) => {
              const Icon = cert.icon;
              const isGoogle = cert.provider.includes('Google');
              const hasBadge = Boolean(cert.badge);

              const cardClassName =
                'transition-all duration-300 hover:cursor-pointer hover:scale-[1.02] hover:border-cyan-400/40 hover:shadow-[0_0_40px_-12px_hsl(187_100%_50%/0.25)]';
              const cardHoverHandlers = {
                onMouseEnter: (e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px -8px ${cert.color}35, 0 0 0 1px ${cert.color}25`;
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.boxShadow = '';
                }
              };
              const motionProps = {
                key: cert.title,
                initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                transition: { duration: 0.5, delay: index < VISIBLE_COUNT ? index * 0.05 : 0 },
                whileHover: { y: -5 }
              };

              if (hasBadge) {
                return (
                  <motion.div
                    {...motionProps}
                    className="block focus-within:outline-none rounded-xl"
                  >
                    <Card className={`${cardClassName} p-0 overflow-hidden`} {...cardHoverHandlers}>
                      <div className="flex items-stretch">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-[90%] items-center gap-4 p-6 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset rounded-l-xl"
                          aria-label={`${cert.title} — ${cert.provider}, verify certificate (opens in new tab)`}
                        >
                          <CertIcon cert={cert} Icon={Icon} isGoogle={isGoogle} />
                          <CertDetails cert={cert} />
                        </a>

                        <div className="relative flex w-[10%] shrink-0 items-center justify-center px-2">
                          <div
                            className="absolute left-0 top-1/2 h-[72%] w-px -translate-y-1/2 bg-cyan-400/45"
                            aria-hidden
                          />
                          <a
                            href={cert.badge.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center rounded-md p-1 transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            aria-label={`${cert.title} — view badge credential (opens in new tab)`}
                          >
                            <img
                              src={cert.badge.image}
                              alt={`${cert.title} badge`}
                              className="h-12 w-12 object-contain"
                            />
                          </a>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              }

              return (
                <motion.a
                  {...motionProps}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
                  aria-label={`${cert.title} — ${cert.provider}, verify credential (opens in new tab)`}
                >
                  <Card className={`p-6 ${cardClassName}`} {...cardHoverHandlers}>
                    <div className="flex items-center gap-4">
                      <CertIcon cert={cert} Icon={Icon} isGoogle={isGoogle} />
                      <CertDetails cert={cert} />
                    </div>
                  </Card>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-cyan-400/40 text-neon-cyan bg-cyan-400/5 hover:bg-cyan-400/15 hover:border-cyan-400/70 hover:shadow-[0_0_24px_hsl(187_100%_50%/0.3)] transition-all duration-300"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
                  Show {certifications.length - VISIBLE_COUNT} More
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
