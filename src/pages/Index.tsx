import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Providers } from '@/components/Providers';
import { Team } from '@/components/Team';
import { GitHubCTA } from '@/components/GitHubCTA';
import { Footer } from '@/components/Footer';
import { toast } from 'sonner';

const Index = () => {
  const handleSearch = (query: string) => {
    // OSINT search is handled by the OSINTSearch component
    console.log(`OSINT search initiated for: ${query}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section id="hero">
          <Hero onSearch={handleSearch} />
        </section>

        {/* Features Section */}
        <section id="features">
          <Features />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* Providers Section */}
        <section id="providers">
          <Providers />
        </section>

        {/* Team Section */}
        <section id="team">
          <Team />
        </section>

        {/* GitHub CTA Section */}
        <section id="github">
          <GitHubCTA />
        </section>
      </main>

      <Footer />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
