import { motion } from 'framer-motion';
import { OSINTSearch } from './OSINTSearch';
import heroBackground from '@/assets/hero-background.jpg';
import { useState, useEffect } from 'react';

interface HeroProps {
  onSearch?: (query: string) => void;
}

export const Hero = ({ onSearch }: HeroProps) => {
  const particles = Array.from({ length: 50 }, (_, i) => i);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const [subtitleText, setSubtitleText] = useState('');
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isSubtitleTyping, setIsSubtitleTyping] = useState(false);
  
  const [descText, setDescText] = useState('');
  const [descIndex, setDescIndex] = useState(0);
  const [isDescTyping, setIsDescTyping] = useState(false);

  const fullText = "Sherlock Nexus.";
  const subtitlePart1 = "OSINT Username ";
  const subtitlePart2 = "Search Engine.";
  const descFullText = "Search for usernames across 50+ platforms instantly.";
  const descFullText2 = "Fast, accurate, and built for OSINT professionals.";

  // Main title typewriter
  useEffect(() => {
    if (currentIndex < fullText.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Smoother speed

      return () => clearTimeout(timeout);
    } else if (currentIndex >= fullText.length) {
      setIsTyping(false);
      setIsSubtitleTyping(true); // Start subtitle after main title
    }
  }, [currentIndex, isTyping, fullText]);

  // Subtitle typewriter
  useEffect(() => {
    const fullSubtitleText = subtitlePart1 + subtitlePart2;
    if (subtitleIndex < fullSubtitleText.length && isSubtitleTyping) {
      const timeout = setTimeout(() => {
        setSubtitleText(prev => prev + fullSubtitleText[subtitleIndex]);
        setSubtitleIndex(prev => prev + 1);
      }, 80); // Smoother speed

      return () => clearTimeout(timeout);
    } else if (subtitleIndex >= fullSubtitleText.length) {
      setIsSubtitleTyping(false);
      setIsDescTyping(true); // Start description after subtitle
    }
  }, [subtitleIndex, isSubtitleTyping, subtitlePart1, subtitlePart2]);

  // Description typewriter
  useEffect(() => {
    if (descIndex < descFullText.length && isDescTyping) {
      const timeout = setTimeout(() => {
        setDescText(prev => prev + descFullText[descIndex]);
        setDescIndex(prev => prev + 1);
      }, 40); // Smoother speed

      return () => clearTimeout(timeout);
    } else if (descIndex >= descFullText.length) {
      setIsDescTyping(false);
    }
  }, [descIndex, isDescTyping, descFullText]);

  // No auto-reset - typewriter runs only once after page load

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      {/* Animated particles */}
      <div className="particles">
        {particles.map((i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">
              {displayText}
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-16 bg-primary ml-1"
                />
              )}
            </span>
            <br />
            <span className="text-foreground text-3xl md:text-5xl">
              {subtitleText.substring(0, subtitlePart1.length)}
              <span className="gradient-text">
                {subtitleText.substring(subtitlePart1.length)}
              </span>
              {isSubtitleTyping && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-12 bg-primary ml-1"
                />
              )}
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
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
            <br />
            <span className="text-muted-foreground">
              Fast, accurate, and built for OSINT professionals.
            </span>
          </motion.p>
        </motion.div>

        {/* OSINT Search */}
        <OSINTSearch
          onSearch={onSearch}
        />

        {/* Stats or quick info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex justify-center items-center space-x-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span>50+ Platforms</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Real-time Search</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span>OSINT Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};