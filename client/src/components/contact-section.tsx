import { motion } from "framer-motion";
import { Mail, Phone, Globe, Briefcase, MapPin, Github, Linkedin, Download } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    { icon: Mail, label: "bilalk0804@gmail.com", href: "mailto:bilalk0804@gmail.com" },
    { icon: Phone, label: "+91 8192035071", href: "tel:+918192035071" },
    { icon: Github, label: "github.com/Bilalk0804", href: "https://github.com/Bilalk0804" },
    { icon: Linkedin, label: "linkedin.com/in/bilal-khan", href: "https://linkedin.com/in/bilal-khan" }
  ];

  const quickActions = [
    { icon: Mail, label: "EMAIL", href: "mailto:bilalk0804@gmail.com", color: "purple" },
    { icon: Linkedin, label: "LINKEDIN", href: "https://linkedin.com/in/bilal-khan", color: "cyan" },
    { icon: Github, label: "GITHUB", href: "https://github.com/Bilalk0804", color: "green" },
    { icon: Download, label: "RESUME", href: "/api/resume", color: "yellow" }
  ];

  return (
    <section id="contact" className="py-20 bg-github-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-16"
        >
          <span className="text-purple-400">#</span> GET IN TOUCH
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Terminal Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-github-card p-8 rounded-lg border border-github-border"
          >
            <div className="bg-github-dark p-6 rounded border border-github-border font-mono text-sm">
              <div className="flex items-center mb-4 text-cyan-400">
                <span className="mr-2">➜</span>
                <span>bilal@portfolio:~$</span>
                <span className="ml-2 animate-pulse">contact --info</span>
              </div>
              
              <div className="space-y-3 text-text-secondary">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const colors = ["purple", "cyan", "green", "blue"];
                  const color = colors[index % colors.length];
                  
                  return (
                    <div key={item.label} className="flex items-center">
                      <Icon className={`text-${color}-400 w-4 h-4 mr-3`} />
                      <a 
                        href={item.href}
                        className="hover:text-purple-400 transition-colors"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.label}
                      </a>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 pt-4 border-t border-github-border">
                <div className="text-text-secondary">
                  <span className="text-purple-400">Status:</span>{" "}
                  <span className="text-green-400">Available for opportunities</span>
                </div>
                <div className="text-text-secondary">
                  <span className="text-purple-400">Location:</span>{" "}
                  <span>Pune, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold font-mono mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-text-secondary mb-8">
                I'm always interested in discussing new opportunities, innovative projects, and collaborations in AI/ML research and development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`${
                      action.color === 'purple' 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : 'bg-github-card border border-github-border hover:border-' + action.color + '-400'
                    } p-4 rounded-lg text-center transition-all duration-300 group`}
                  >
                    <Icon className={`text-${action.color}-400 w-6 h-6 mx-auto mb-2 group-hover:animate-bounce`} />
                    <div className="font-mono font-bold">{action.label}</div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
