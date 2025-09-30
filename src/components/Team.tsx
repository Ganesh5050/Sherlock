import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import teamMember1 from '@/assets/team-member-1.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';
import teamMember4 from '@/assets/team-member-4.jpg';

const teamMembers = [
  {
    name: 'Ganesh Panigrahi',
    role: 'Full Stack Lead',
    bio: 'Full-stack engineer passionate about developer tools',
    image: teamMember1,
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Archi Patel',
    role: 'UI/UX Engineer',
    bio: 'Creating beautiful interfaces for complex tools',
    image: teamMember2,
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Ashish Mishra',
    role: 'Cyber Expert',
    bio: 'Expert in cybersecurity and digital forensics',
    image: teamMember3,
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Abhishek Pal',
    role: 'DevOps Engineer',
    bio: 'Infrastructure and cross-platform deployment expert',
    image: teamMember4,
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

export const Team = () => {
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
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The brilliant minds behind Sherlock CLI 2, dedicated to making search 
            faster and more accessible for developers worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="neumorphic rounded-3xl p-6 h-full transition-all duration-500 hover:shadow-elevation hover:glow-primary">
                {/* Profile Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-secondary font-semibold mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};