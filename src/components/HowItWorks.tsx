import { motion } from 'framer-motion';
import { Search, Database, Zap, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const steps = [
  {
    icon: Search,
    title: 'User Input',
    description: 'Enter your search query via CLI or GUI interface',
    color: 'text-primary',
    bg: 'bg-primary/10',
    glow: 'glow-primary'
  },
  {
    icon: Database,
    title: 'Search Engine',
    description: 'Query multiple providers simultaneously for comprehensive results',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    glow: 'glow-violet'
  },
  {
    icon: Zap,
    title: 'Results Display',
    description: 'Get fast, formatted results with intelligent ranking and filtering',
    color: 'text-success',
    bg: 'bg-success/10',
    glow: 'shadow-[0_0_40px_hsl(142_71%_45%/0.3)]'
  }
];

export const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSteps([0]);
    }, 500);

    const timer2 = setTimeout(() => {
      setVisibleSteps([0, 1]);
    }, 1500);

    const timer3 = setTimeout(() => {
      setVisibleSteps([0, 1, 2]);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, efficient, and powerful. Three steps to search everything across the web.
          </p>
        </motion.div>

        <div className="relative">
          {/* Flowchart container */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center relative">
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ 
                    opacity: visibleSteps.includes(index) ? 1 : 0, 
                    scale: visibleSteps.includes(index) ? 1 : 0.8,
                    y: visibleSteps.includes(index) ? 0 : 50
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <div className={`glass rounded-3xl p-8 w-72 h-64 flex flex-col items-center justify-center text-center transition-all duration-500 hover:${step.glow}`}>
                    <div className={`${step.bg} rounded-2xl p-6 mb-6 transition-all duration-300 group-hover:scale-110`}>
                      <step.icon className={`w-12 h-12 ${step.color}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: visibleSteps.includes(index) && visibleSteps.includes(index + 1) ? 1 : 0, 
                      scale: visibleSteps.includes(index) && visibleSteps.includes(index + 1) ? 1 : 0
                    }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2"
                  >
                    <div className="flex items-center justify-center w-8 h-8">
                      <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                  </motion.div>
                )}

                {/* Mobile arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: visibleSteps.includes(index) && visibleSteps.includes(index + 1) ? 1 : 0, 
                      scale: visibleSteps.includes(index) && visibleSteps.includes(index + 1) ? 1 : 0
                    }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="md:hidden mt-6"
                  >
                    <ArrowRight className="w-8 h-8 text-primary animate-pulse rotate-90" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Background glow effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-primary opacity-5 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};