import { motion } from 'framer-motion';
import { Building, Calendar, Award, Brain, LaptopMinimalCheck, Cpu, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import reportPdf from "@/assets/23BAI11284-Shrish.pdf";

const experiences = [
  {
    role: "Event Management Head",
    organization: "Robotics Club, VIT Bhopal",
    period: "2024 -  2025",
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
  },
  {
    role: "Experiential Learning Program",
    organization: "VIT Bhopal University, Bhopal",
    period: "2 Weeks (Oct - Nov 2025)",
    type: "Industry Program",
    icon: Cpu,
    responsibilities: [
      "Built and programmed a 4WD smart robot car using Raspberry Pi Pico and ESP8266",
      "Interfaced ultrasonic sensors, DC motors, and motor drivers for real-time control",
      "Implemented wireless control and basic automation logic",
      "Performed debugging, testing, and hardware troubleshooting"
    ],
    achievements: [
      "Successfully assembled and demonstrated a working IoT-enabled bot",
      "Gained hands-on exposure to embedded systems and hardware-software integration",
      "Received positive evaluation from industry instructors"
    ],
    reportLink: reportPdf
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
    description: "National Science Olympiad Achievement",
    icon: Award,
    details: "Awarded gold medal for exceptional performance in SOF. Zonal Rank: 1, International Rank : 4726"
  }
];

export function Experience() {
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
          <h2 className="text-4xl md:text-5xl section-heading text-gradient mb-6">
            Achievements
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-8 shadow-neon-sm" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and recognition in national competitions
          </p>
        </motion.div>

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

          <div className="relative">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isLast = index === experiences.length - 1;
              return (
                <div key={index} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center shadow-[0_0_24px_-8px_hsl(187_100%_50%/0.35)]">
                            <Icon className="w-8 h-8 text-neon-cyan" />
                          </div>
                        </div>

                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-foreground mb-2">{exp.role}</h4>
                              <p className="text-lg text-neon-cyan font-medium mb-2 drop-shadow-[0_0_12px_hsl(187_100%_50%/0.25)]">{exp.organization}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center text-muted-foreground mb-2">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="bg-cyan-500/10 border border-cyan-500/25 text-neon-cyan px-2 py-0.5 rounded-full text-xs font-medium inline-block">
                            {exp.type}
                          </div>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h5 className="text-md font-semibold text-foreground mb-3">Key Responsibilities:</h5>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-2 h-2 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_8px_hsl(187_100%_50%/0.6)]"></div>
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
                                  <div className="w-2 h-2 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_8px_hsl(187_100%_50%/0.6)]"></div>
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {exp.reportLink && (
                            <div className="mt-6">
                              <a
                                href={exp.reportLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-neon-cyan font-medium hover:underline hover:drop-shadow-[0_0_8px_hsl(187_100%_50%/0.5)]"
                              >
                                <FileText className="w-4 h-4" />
                                View Report
                              </a>
                            </div>
                          )}
                           
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                  
                  {/* Connecting line between experiences */}
                  {!isLast && (
                    <div className="flex justify-center my-6">
                      <div className="w-0.5 h-12 bg-gradient-to-b from-neon-cyan/50 to-neon-purple/20 shadow-[0_0_12px_hsl(187_100%_50%/0.3)]"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
                  <Card className="p-6 text-center h-full">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_-6px_hsl(187_100%_50%/0.35)]">
                      <Icon className="w-6 h-6 text-neon-cyan" />
                    </div>

                    <h4 className="text-lg font-bold font-orbitron tracking-wide text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-neon-cyan font-medium mb-3">{achievement.description}</p>
                    <p className="text-sm text-muted-foreground">{achievement.details}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}