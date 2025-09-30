import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const GitHubCTA = () => {
  const [stars, setStars] = useState(1247);
  const [forks, setForks] = useState(89);
  const [contributors, setContributors] = useState(12);

  // Simulate animated counter
  useEffect(() => {
    const interval = setInterval(() => {
      setStars(prev => prev + Math.floor(Math.random() * 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Star, label: 'Stars', value: stars, color: 'text-yellow-400' },
    { icon: GitFork, label: 'Forks', value: forks, color: 'text-primary' },
    { icon: Users, label: 'Contributors', value: contributors, color: 'text-secondary' }
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Star</span> us on GitHub
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join our open-source community! Contribute to the project, 
            report issues, or help improve Sherlock CLI 2 for everyone.
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center space-x-8 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              className="flex flex-col items-center"
            >
              <div className={`flex items-center space-x-2 mb-2`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-2xl font-bold text-foreground">
                  {stat.value.toLocaleString()}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <Button
            size="lg"
            variant="premium"
            className="text-lg px-12 py-6 rounded-2xl"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Github className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Star on GitHub
              <Star className="w-5 h-5 ml-3 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </Button>

          {/* Background glow effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-24 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          </div>
        </motion.div>

        {/* Additional CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Button variant="glass" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View Documentation
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              Report Issues
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              Contribute
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};