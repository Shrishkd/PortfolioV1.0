import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, Send, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shrishdas444@gmail.com",
    href: "mailto:shrishdas444@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9162271138",
    href: "tel:+919162271138"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "VIT Bhopal, India",
    href: null
  }
];

const socialLinks = [
  {
    icon: Mail,
    label: "Gmail",
    href: "mailto:shrishdas444@gmail.com",
    color: "#EA4335"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shrish-das-44ba5a27b/",
    color: "#0077B5"
  },
  {
    icon: Instagram,
    label: "Instagram", 
    href: "https://www.instagram.com/falanaa_dhimkaana/",
    color: "#E4405F"
  }
];

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_aqk8jt4',
        'template_8k8vuku',
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message
        },
        '5zkZuY9iECsq_6FFg'
      );

      

      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 4000);

      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl section-heading text-gradient mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-8 shadow-neon-sm" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center shadow-[0_0_20px_-6px_hsl(187_100%_50%/0.3)]">
                      <Icon className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-foreground hover:text-neon-cyan transition-colors duration-300 font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-12 h-12 bg-card/60 backdrop-blur-sm border border-cyan-500/25 rounded-full flex items-center justify-center hover:shadow-neon-sm hover:border-cyan-400/50 hover:scale-110 transition-all duration-300 group"
                      style={{ 
                        '--hover-color': social.color 
                      }}
                    >
                      <Icon className="w-6 h-6 text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 md:p-8 bg-card border-border shadow-lg hover:shadow-purple transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <Input type="text" name="name" value={form.name} onChange={handleInputChange} required placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input type="email" name="email" value={form.email} onChange={handleInputChange} required placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                  <Input type="text" name="subject" value={form.subject} onChange={handleInputChange} required placeholder="What's this about?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <Textarea name="message" value={form.message} onChange={handleInputChange} required rows={5} placeholder="Tell me more about your project or inquiry..." />
                </div>
                <div>
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Animated Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed top-6 right-6 z-50 rounded-xl border border-cyan-500/25 bg-card/95 backdrop-blur-xl shadow-neon-md px-8 py-6 text-base text-center min-w-64"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-neon-cyan font-semibold drop-shadow-[0_0_8px_hsl(187_100%_50%/0.35)]">Thanks for reaching out! 🙌</p>
              <p className="text-muted-foreground">I'll get back to you soon.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            © 2003 Shrish. Tell your dog I said Hii..! 🐶👋🏻
          </p>
        </motion.div>
      </div>
    </section>
  );
}