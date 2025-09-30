import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Real-time username search across 50+ platforms with instant results',
    gradient: 'from-primary/20 to-primary/5',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary'
  },
  {
    icon: Shield,
    title: 'OSINT Ready',
    description: 'Built for cybersecurity professionals and digital investigators',
    gradient: 'from-success/20 to-success/5',
    iconBg: 'bg-success/10',
    iconColor: 'text-success'
  },
  {
    icon: Globe,
    title: '50+ Platforms',
    description: 'Comprehensive coverage including GitHub, Twitter, Reddit, Instagram, and more',
    gradient: 'from-secondary/20 to-secondary/5',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary'
  },
  {
    icon: Target,
    title: 'Accurate Results',
    description: 'Advanced detection algorithms to minimize false positives and negatives',
    gradient: 'from-accent/20 to-accent/5',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent'
  }
];

export const Features = () => {
  const [titleText, setTitleText] = useState('');
  const [descText, setDescText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [descIndex, setDescIndex] = useState(0);
  const [isTitleTyping, setIsTitleTyping] = useState(false);
  const [isDescTyping, setIsDescTyping] = useState(false);

  const titleFullText = "Built for OSINT Professionals";
  const descFullText = "Advanced username reconnaissance tool designed for cybersecurity experts, digital investigators, and OSINT practitioners.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTitleTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Title typewriter
  useEffect(() => {
    if (titleIndex < titleFullText.length && isTitleTyping) {
      const timeout = setTimeout(() => {
        setTitleText(prev => prev + titleFullText[titleIndex]);
        setTitleIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else if (titleIndex >= titleFullText.length) {
      setIsTitleTyping(false);
      setIsDescTyping(true);
    }
  }, [titleIndex, isTitleTyping, titleFullText]);

  // Description typewriter
  useEffect(() => {
    if (descIndex < descFullText.length && isDescTyping) {
      const timeout = setTimeout(() => {
        setDescText(prev => prev + descFullText[descIndex]);
        setDescIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else if (descIndex >= descFullText.length) {
      setIsDescTyping(false);
    }
  }, [descIndex, isDescTyping, descFullText]);

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text">
              {titleText}
              {isTitleTyping && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-16 bg-primary ml-1"
                />
              )}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span>
              {descText}
              {isDescTyping && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-6 bg-primary ml-1"
                />
              )}
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className={`neumorphic rounded-3xl p-8 h-full transition-all duration-500 hover:shadow-elevation group-hover:bg-card-hover bg-gradient-to-br ${feature.gradient}`}>
                <div className="flex items-start space-x-6">
                  <div className={`${feature.iconBg} rounded-2xl p-4 transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};