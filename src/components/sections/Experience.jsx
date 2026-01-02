import { motion } from 'framer-motion';
import { Building, Calendar, Award, Brain, LaptopMinimalCheck, Cpu, ExternalLink, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import reportPdf from "@/assets/23BAI11284-Shrish.pdf";
import {
  SiAmazonwebservices,
  SiOracle,
  SiCoursera,
  SiGoogle,
  SiNvidia
} from "react-icons/si";

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

export  function Experience() {
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
                              <div className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium inline-block">
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

                          {exp.reportLink && (
                            <div className="mt-6">
                              <a
                                href={exp.reportLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
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
                      <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-primary/20"></div>
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

            <div className="flex flex-col gap-6">
              {[
                {
                  link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CCAAC2D52EB35996243874976C21CCB0188F8E46C84E3774AEB4006B55A69569",
                  title: "Oracle Cloud Infrastructure: Data Science Professional",
                  provider: "Oracle University",
                  description: "Completed with verified certificate and badge",
                  year: "2024",
                  icon: SiOracle,
                  color: "#F80000"
                },
                {
                  link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C50BFC8A56E7A303507E36FD6BBCCCCC84CDDF9B7A3E3E60CB8D048972CF261C",
                  title: "Oracle Cloud Infrastructure: Generative AI Professional",
                  provider: "Oracle University",
                  description: "Completed with verified certificate and badge",
                  year: "2024",
                  icon: SiOracle,
                  color: "#F80000"
                },
                {
                  link: "https://www.coursera.org/account/accomplishments/certificate/OI4VZMX0NQOM",
                  title: "Applied Machine Learning in Python",
                  provider: "Michigan University (Coursera)",
                  description: "Completed with verified certificate and badge",
                  year: "2024",
                  icon: SiCoursera,
                  color: "#0056D2"
                },
                {
                  link: "https://coursera.org/verify/V76UOZ2JWO8E",
                  title: "Unsupervised Learning, Recommenders & Reinforcement Learning",
                  provider: "Stanford Online (Coursera)",
                  description: "Completed with verified certificate and badge",
                  year: "2024",
                  icon: SiCoursera,
                  color: "#0056D2"
                },
                {
                  link: "https://coursera.org/verify/NT1R1HGKKWMF",
                  title: "Google Advanced Data Analytics Capstone",
                  provider: "Google (Coursera)",
                  description: "Completed with verified certificate and badge",
                  year: "2024",
                  icon: SiGoogle,
                  color: "#4285F4"
                },
                {
                  link: "https://drive.google.com/file/d/1T1aPBe9CW2i_QMkmljlmxbFKvr0ipgSP/view?usp=sharing",
                  title: "AWS Cloud Practitioner",
                  provider: "Amazon Web Services",
                  description: "AWS Technical Essentials: Completed with verified certificate",
                  year: "2026",
                  icon: SiAmazonwebservices,
                  color: "#FF9900"
                },
                {
                  link: "https://coursera.org/verify/MNFOQ5GZB6KX",
                  title: "Generative AI: Prompt Engineering Basics",
                  provider: "IBM (Coursera)",
                  description: "Completed with verified certificate and badge",
                  year: "2024",
                  icon: SiCoursera,
                  color: "#0056D2"
                },
                {
                  link: "https://learn.nvidia.com/certificates?id=DAyxMRjvT4OautJM6WWv2w",
                  title: "Getting Started with AI on Jetson Nano",
                  provider: "NVIDIA",
                  description: "Completed with verified certificate and badge",
                  year: "2024",
                  icon: SiNvidia,
                  color: "#76B900"
                }
              ].map((cert, index) => {
                const Icon = cert.icon;
                const isGoogle = cert.provider.includes("Google");

                return (
                  <motion.a
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      className={`p-6 bg-card border-border shadow-lg transition-all duration-300 hover:cursor-pointer hover:scale-[1.02] ${
                        index > 0 ? "mt-6" : ""
                      }`}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 10px 30px -5px ${cert.color}40, 0 0 0 1px ${cert.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ 
                            backgroundColor: isGoogle 
                              ? 'rgba(66, 133, 244, 0.1)' 
                              : `${cert.color}20` 
                          }}
                        >
                          {isGoogle ? (
                            <div 
                              className="relative w-6 h-6"
                              style={{
                                background: 'linear-gradient(135deg, #4285F4 0%, #EA4335 25%, #FBBC05 50%, #34A853 75%, #4285F4 100%)',
                                WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%23000\' d=\'M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z\'/%3E%3Cpath fill=\'%23000\' d=\'M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z\'/%3E%3Cpath fill=\'%23000\' d=\'M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z\'/%3E%3Cpath fill=\'%23000\' d=\'M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z\'/%3E%3C/svg%3E")',
                                maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%23000\' d=\'M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z\'/%3E%3Cpath fill=\'%23000\' d=\'M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z\'/%3E%3Cpath fill=\'%23000\' d=\'M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z\'/%3E%3Cpath fill=\'%23000\' d=\'M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z\'/%3E%3C/svg%3E")',
                                WebkitMaskSize: 'contain',
                                maskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskPosition: 'center'
                              }}
                            />
                          ) : (
                            <Icon className="w-6 h-6" style={{ color: cert.color }} />
                          )}
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-foreground">{cert.title}</h4>
                          <p className="font-medium" style={{ color: cert.color }}>
                            {cert.provider}
                          </p>
                          <p className="text-sm text-muted-foreground">{cert.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.a>
                );
              })}
            </div>
            </div>
          </div>

            </section>
          );
        }