import { motion } from 'framer-motion';
import { Code, Github, Package, Box, Search } from 'lucide-react';

const providers = [
  {
    name: 'FastAPI',
    description: 'High-performance API documentation and testing',
    icon: Code,
    color: 'text-emerald-400',
    bg: 'from-emerald-400/20 to-emerald-400/5',
    border: 'border-emerald-400/20'
  },
  {
    name: 'GitHub',
    description: 'Repository search and code discovery',
    icon: Github,
    color: 'text-gray-300',
    bg: 'from-gray-300/20 to-gray-300/5',
    border: 'border-gray-300/20'
  },
  {
    name: 'NPM',
    description: 'Node.js package registry and ecosystem',
    icon: Package,
    color: 'text-red-500',
    bg: 'from-red-500/20 to-red-500/5',
    border: 'border-red-500/20'
  },
  {
    name: 'PyPI',
    description: 'Python package index and distribution',
    icon: Box,
    color: 'text-blue-400',
    bg: 'from-blue-400/20 to-blue-400/5',
    border: 'border-blue-400/20'
  },
  {
    name: 'DuckDuckGo',
    description: 'Privacy-focused web search results',
    icon: Search,
    color: 'text-orange-400',
    bg: 'from-orange-400/20 to-orange-400/5',
    border: 'border-orange-400/20'
  }
];

export const Providers = () => {
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
            Supported <span className="gradient-text">Providers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Search across multiple platforms and services with a single command. 
            More providers added regularly based on community feedback.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <div className={`glass rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-elevation bg-gradient-to-br ${provider.bg} border ${provider.border}`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`rounded-xl p-4 mb-4 transition-all duration-300 group-hover:scale-110 bg-card/50`}>
                    <provider.icon className={`w-8 h-8 ${provider.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {provider.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {provider.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r ${provider.bg.replace('/20', '/5').replace('/5', '/2')}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action for more providers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Want to see support for another provider?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-glow transition-colors duration-300 font-semibold"
          >
            Request on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};