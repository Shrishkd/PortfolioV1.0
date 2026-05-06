import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiCplusplus, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiFlask, 
  SiMongodb, 
  SiMysql,
  SiScikitlearn,
  SiAmazonwebservices,
  SiPandas,
  SiNumpy,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGithub,
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiOpencv,
  SiFastapi
} from 'react-icons/si';
import { Coffee, BarChart3, TrendingUp, PieChart, Brain, Network, MessageSquare, Bot, Eye, Target, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: Coffee, color: "#ED8B00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#E5E7EB" },
      { name: "Flask", icon: SiFlask, color: "#E5E7EB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    ]
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Deep Learning", icon: Brain, color: "#5DADE2" },
      { name: "Transformers", icon: Network, color: "#98D8C8" },
      { name: "LLMs", icon: Bot, color: "#BB8FCE" },
      { name: "Computer Vision", icon: Eye, color: "#85C1E9" },
      { name: "YOLOv8", icon: Target, color: "#F8C471" },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices, color: "#F05032" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Power BI", icon: PieChart, color: "#F2C811" },
      { name: "GitHub", icon: SiGithub, color: "#F5F5F5" },
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl section-heading text-gradient mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-8 shadow-neon-sm" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card border-border shadow-lg hover:shadow-purple transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group"
                      >
                        <div className="flex flex-col items-center p-4 rounded-lg bg-muted/20 border border-cyan-500/10 hover:border-cyan-400/30 hover:bg-cyan-500/5 hover:shadow-[0_0_20px_-4px_hsl(187_100%_50%/0.25)] transition-all duration-300 cursor-pointer">
                          <Icon 
                            className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110" 
                            style={{ color: skill.color }}
                          />
                          <span className="text-sm font-medium text-center text-foreground">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
