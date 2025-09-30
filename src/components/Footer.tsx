import { motion } from 'framer-motion';
import { Github, Twitter, MessageCircle, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      href: 'https://discord.com',
      color: 'hover:text-indigo-400'
    }
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Installation', href: '#' },
        { name: 'CLI Guide', href: '#' },
        { name: 'API Reference', href: '#' }
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'GitHub Discussions', href: '#' },
        { name: 'Discord Server', href: '#' },
        { name: 'Contributing', href: '#' },
        { name: 'Code of Conduct', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Changelog', href: '#' },
        { name: 'Roadmap', href: '#' },
        { name: 'Status', href: '#' }
      ]
    }
  ];

  return (
    <footer className="relative mt-32 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-black mb-4">
                <span className="gradient-text">Sherlock CLI 2</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
                Open-source meta-search engine that helps developers find 
                what they need across multiple platforms instantly.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    className={`p-3 rounded-xl bg-muted/50 text-muted-foreground transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <div key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.3 }}
              >
                <h4 className="font-bold text-foreground mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: sectionIndex * 0.1 + linkIndex * 0.05 + 0.4 
                      }}
                    >
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4 sm:mb-0">
            <span>© {currentYear} Sherlock CLI 2</span>
            <span>•</span>
            <a 
              href="https://opensource.org/licenses/MIT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              MIT License
            </a>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
            <span>by the community</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};