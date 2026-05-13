import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, ChevronDown, ChevronUp, FileText, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Career Mentor",
    description: "Career Mentor is an AI-driven platform that optimizes interview preparation by generating role-specific questions from resumes. It features interactive voice interviews, live monitoring, and coding challenges. Candidates receive personalized reports with advanced performance scoring and providing the comprehensive feedback to build confidence for real-world career success.",
    technologies: ["Flask (Python)", "YOLOv8", "OpenAI Whisper", "Mediapipe", "OpenCV","Computer Vision", "FPDF", "PyMuPDF", "SpeechRecognition", "Google Gemini API",  "Matplotlib", "Supabase", "React", "TypeScript", "TailwindCSS", "Vite", "Render"],
    githubUrl: "https://github.com/Shrishkd/CareerMentor",
    liveUrl: "https://careermentor-ajvl.onrender.com",
    reportUrl: "https://drive.google.com/file/d/1qblouoT4DEyeC9dxIrewovRgYtlJ2xw2/view?usp=sharing",
    featured: true,
    image: "https://res.cloudinary.com/dks0vhj0j/image/upload/v1774171058/copy_of_career-mentor_m6fcsy_3408b2.png"
  },
  {
    title: "Bullseye",
    description:
      "An AI-powered investment and trading assistant that provides real-time market data, price prediction using ML models, technical analysis, and intelligent AI-driven explanations. The platform streams live prices via WebSockets, computes indicators like RSI, SMA, and EMA, and uses a Gemini-powered AI assistant to explain market sentiment in a clear, educational manner. ",
    technologies: [
      "React","TypeScript","TailwindCSS","FastAPI","XGBoost","LSTM","Async SQLAlchemy","Pydantic v2","JWT Authentication","WebSockets","Technical Indicators","Vector Embeddings","Upstox API","Google Gemini API","Vite","Render"],
    githubUrl: "https://github.com/Shrishkd/BullseyeOriginal.git",
    liveUrl: "https://bullseye-deployed.onrender.com",
    reportUrl: "https://drive.google.com/file/d/1IpEw_pgU07MYiihpBf6fBwEfL4e0HSMn/view?usp=sharing",
    featured: true,
    image: "https://res.cloudinary.com/dks0vhj0j/image/upload/v1774254644/bullseye_hisubj.png"
  },
  {
    title: "Crowd Density Estimation",
    description:
      "Real-time crowd density estimation system using YOLOv8, generating spatial heatmaps from video data. Achieved MAE ≈ 3.05 people with stable predictions using temporal smoothing, all on CPU-only infrastructure. Designed an end-to-end pipeline for practical deployment on existing CCTV systems, enabling smarter crowd management.",
    technologies: [
      "Python", "OpenCV", "YOLOv8n", "NumPy", "Matplotlib", "Google Colab", "COLORMAP_JET","Grid + Gaussian Blur"],
    githubUrl: "https://github.com/Shrishkd/crowd_density_estimator.git",
    colabUrl: "https://colab.research.google.com/drive/18yAbue9z-s7yKqloglEhJMVIMZ9mf7-u?usp=drive_link",
    reportUrl: "https://drive.google.com/file/d/1gpgz726n0ShlUsZC6E_18t_lA6ynEynG/view?usp=sharing",
    featured: false,
    image: "https://res.cloudinary.com/dks0vhj0j/image/upload/v1774728899/annotated_frame_bcvid1.png"
  },
  {
    title: "Growstocks",
    description: "An ML-based decision support application that analyzes historical stock data and market indicators to recommend BUY or DO NOT BUY signals with a confidence score. Implements walk-forward validation, offline backtesting, and a FastAPI backend. Features a modern React frontend with real-time stock analysis powered by stock-specific machine learning models.",
    technologies: ["Python" ,  "Pandas" , "NumPy" ,  "Machine Learning" , "Random Forest (Scikit-learn)",  "FastAPI" ,"React" , "JavaScript"],
    githubUrl: "https://github.com/Shrishkd/GrowStocks-ML.git",
    liveUrl: "https://growstocks-ml-2.onrender.com",
    reportUrl: "https://drive.google.com/file/d/14jxnlUxe79rFqzcbsqAn6P_EmO6l5-Vd/view?usp=sharing",
    featured: false,
    image: "https://res.cloudinary.com/dks0vhj0j/image/upload/v1774254969/copy_of_grwstk_vc2nyg_5ef998.png"
  },
  {
    title: "Sentiment Analysis ML App",
    description: "An intelligent sentiment analysis application that classifies user reviews into 5 different sentiment categories. Built with Flask backend and BERT model for accurate sentiment classification, with support for bulk CSV uploads." ,
    technologies: ["Python", "NLP", "BERT","Hugging Face", "PyTorch", "Flask", "Pandas", "JavaScript"],
    githubUrl: "https://github.com/Shrishkd/Moodify2.o.git",
    liveUrl: "https://moodify2-o.vercel.app",
    reportUrl: "https://drive.google.com/file/d/1_JIVPEnAP_hLF6GLaFioCy8bBRCJa31s/view?usp=sharing",
    featured: false,
    image: "https://res.cloudinary.com/dks0vhj0j/image/upload/v1774254648/senti_q1pfld.png"
  },
  {
    title: "Car & Gold Price Prediction Web App",
    description: "A comprehensive full-stack web application that predicts car and gold prices based on user input. Features include user authentication, responsive design with loading animations, and a modern UI built with React and Tailwind CSS.",
    technologies: ["Scikit-learn","Pandas","NumPy", " Flask","React.js", "Supabase", "Tailwind CSS", "Authentication"],
    githubUrl: "https://github.com/Shrishkd/Prise",
    liveUrl: "https://prise-1.onrender.com",
    reportUrl: "REPLACE_WITH_PRISE_REPORT_URL",
    featured: false,
    image: "https://res.cloudinary.com/dks0vhj0j/image/upload/v1774254647/carpred_dxhapm.png"
  }
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const initialProjectsCount = 4;
  const displayedProjects = showAll ? projects : projects.slice(0, initialProjectsCount);
  const hasMoreProjects = projects.length > initialProjectsCount;

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl section-heading text-gradient mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-8 shadow-neon-sm" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in web development and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden h-full p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-transparent">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="border border-cyan-400/30 bg-gradient-to-r from-neon-blue/90 to-neon-purple/90 text-primary-foreground p-1 shadow-neon-sm">
                        <Star className="w-4 h-4 mr-1 text-amber-400 fill-amber-400" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold font-orbitron tracking-wide text-foreground mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="h-7 px-3 py-1.5 text-sm border border-cyan-500/20 bg-cyan-500/10 text-neon-cyan hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>


                  {/* Action Buttons */}
                  <div className="flex gap-3">
                  {/* GitHub Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-11 px-5 py-2.5"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>

                  {project.colabUrl ? (
                    /* Colab Notebook Button */
                    <Button
                      size="sm"
                      className="flex-1 h-11 px-5 py-2.5"
                      asChild
                    >
                      <a href={project.colabUrl} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Colab Notebook
                      </a>
                    </Button>
                  ) : (
                    /* Live Demo Button */
                    <Button
                      size="sm"
                      className="flex-1 h-11 px-5 py-2.5"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}

                  {/* Report Button */}
                  {project.reportUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 h-11 px-5 py-2.5"
                      asChild
                    >
                      <a href={project.reportUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 mr-2" />
                        Report
                      </a>
                    </Button>
                  )}
</div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  See Less{' '}
                  <motion.div
                    key="chevron-up"
                    initial={{ y: 0, rotate: 0 }}
                    animate={{ y: [0, -4, 0], rotate: 0 }}
                    transition={{ 
                      y: { duration: 0.6, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" },
                      rotate: { duration: 0.3 }
                    }}
                  >
                    <ChevronUp className="w-5 h-5 ml-2" />
                  </motion.div>
                </>
              ) : (
                <>
                  See More{' '}
                  <motion.div
                    key="chevron-down"
                    initial={{ y: 0, rotate: 0 }}
                    animate={{ y: [0, 4, 0], rotate: 0 }}
                    transition={{ 
                      y: { duration: 0.6, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" },
                      rotate: { duration: 0.3 }
                    }}
                  >
                    <ChevronDown className="w-5 h-5 ml-2" />
                  </motion.div>
                </>
              )}
            </Button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a href="https://github.com/Shrishkd" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
