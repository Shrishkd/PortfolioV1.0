'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building,  Calendar, Award, Brain, LaptopMinimalCheck, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    role: "Event Management Head",
    organization: "Robotics Club, VIT Bhopal",
    period: "2023 - Present",
    type: "Leadership Role",
    icon: Building,
    responsibilities: [
      "Managed technical and non-technical events for the robotics club",
      "Coordinated workshops and competitions to enhance student engagement",
      "Led a team of volunteers to organize successful events"
    ],
    achievements: [
      "Improved club membership by 40% through engaging activities",
      "Established partnerships with other technical clubs"
    ]
  }
];

const achievements = [
  {
    title: "Hackathons",
    description: "Participated in 12+ Hackathons",
    icon: LaptopMinimalCheck,
    details: "Secured Top 3 positions in multiple hackathons, demonstrating strong problem-solving skills and innovative thinking."
  },
  {
    title: "Problem Solving",
    description: "Solved over 250+ questions",
    icon: Brain,
    details: "Solved over 250 DSA questions on platforms like LeetCode, Codeforces, and GeeksforGeeks, enhancing my problem-solving skills."
  },
  {
    title: "Gold Medalist",
    description: "Science Olympiad Achievement",
    icon: Award,
    details: "Awarded gold medal for exceptional performance in science competition"
  }
];

const certifications = [ 
  {
    href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CCAAC2D52EB35996243874976C21CCB0188F8E46C84E3774AEB4006B55A69569",
    title: "Oracle Cloud Infrastructure: Data Science Professional",
    org: "Oracle University",
    desc: "Completed with verified certificate and badge"
  },
  {
    href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C50BFC8A56E7A303507E36FD6BBCCCCC84CDDF9B7A3E3E60CB8D048972CF261C",
    title: "Oracle Cloud Infrastructure: Generative AI Professional",
    org: "Oracle University",
    desc: "Completed with verified certificate and badge"
  },
  {
    href: "https://coursera.org/verify/V76UOZ2JWO8E",
    title: "Unsupervised Learning, Recommenders & Reinforcement Learning",
    org: "Stanford Online (Coursera)",
    desc: "Completed with verified certificate and badge"
  },
  {
    href: "https://coursera.org/verify/MNFOQ5GZB6KX",
    title: "Generative AI: Prompt Engineering Basics",
    org: "IBM (Coursera)",
    desc: "Completed with verified certificate and badge"
  },
  {
    href: "https://learn.nvidia.com/certificates?id=DAyxMRjvT4OautJM6WWv2w",
    title: "Getting Started with AI on Jetson Nano",
    org: "NVIDIA",
    desc: "Completed with verified certificate and badge"
  }
];

export  function Experience() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const visibleCerts = showAllCerts ? certifications : certifications.slice(0, 3);
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-6">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and recognition in national competitions
          </p>
        </motion.div>

      {/*Campus Engagement Section*/}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8"
          >
            Campus Engagement
          </motion.h3>

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 md:p-8 bg-card border-border shadow-lg hover:shadow-purple transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">{exp.role}</h4>
                          <p className="text-lg text-primary font-medium mb-2">{exp.organization}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {exp.type}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h5 className="text-md font-semibold text-foreground mb-3">Key Responsibilities:</h5>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-md font-semibold text-foreground mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8"
          >
            Notable Academic Achievements
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 bg-card border-border shadow-lg hover:shadow-purple transition-all duration-300 text-center h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <h4 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-primary font-medium mb-3">{achievement.description}</p>
                    <p className="text-sm text-muted-foreground">{achievement.details}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Certifications</h3>

            <AnimatePresence initial={false}>
              {visibleCerts.map((cert) => {
                const fullIndex = certifications.findIndex((c) => c.title === cert.title);
                const fromX = fullIndex % 2 === 0 ? -50 : 50;
                return (
                  <motion.div
                    key={cert.title}
                    layout
                    initial={{ opacity: 0, x: fromX, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: 'auto' }}
                    exit={{ opacity: 0, x: fromX, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="block"
                  >
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className={`p-6 bg-card border-border shadow-lg hover:shadow-purple transition-all duration-300 hover:cursor-pointer hover:scale-[1.02] ${fullIndex > 0 ? 'mt-6' : ''}`}>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Award className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-foreground">{cert.title}</h4>
                            <p className="text-primary font-medium">{cert.org}</p>
                            <p className="text-sm text-muted-foreground">{cert.desc}</p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <motion.button
              type="button"
              onClick={() => setShowAllCerts((v) => !v)}
              className="mt-6 mx-auto flex items-center gap-2 text-primary font-medium hover:text-primary/90 focus:outline-none"
              initial={false}
              animate={{}}
            >
              <span>{showAllCerts ? 'View less' : 'View all'}</span>
              <motion.span
                animate={{ rotate: showAllCerts ? 180 : 0, y: [0, -3, 0] }}
                transition={{ rotate: { duration: 0.25 }, y: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' } }}
                className="inline-flex"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </div>
</div>
    </section>
  );
}
