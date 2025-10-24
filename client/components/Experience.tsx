import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getTechIcon } from "@/lib/techIcons";

// Map skill names to skillicons.dev icon names (same as Skills component)
const getSkillIconName = (skill: string): string => {
  const iconMap: Record<string, string> = {
    "React.js": "react", "React": "react", "TypeScript": "ts", "Express.js": "express",
    "Tailwind CSS": "tailwind", "Leaflet.js": "leaflet", "JavaScript": "js",
    "UI/UX": "figma", "Responsive Design": "css", "Node.js": "nodejs",
    "PHP": "php", "MySQL": "mysql", "Google Maps": "gcp", "Stripe": "stripe",
  };
  return iconMap[skill] || skill.toLowerCase().replace(/\s+/g, '').replace('.', '');
};

// Skills that should use emoji instead of skillicons
const useEmojiIcon = (skill: string): boolean => {
  const emojiSkills = ["Socket.IO", "Leaflet.js", "Google Maps", "Stripe", "WebSocket"];
  return emojiSkills.includes(skill);
};

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "CivicConnect — Smart India Hackathon 2025",
    date: "August 2025 - October 2025",
    description:
      "Built full-stack civic issue reporting system with real-time location tracking. Created responsive dashboards for multiple departments with automated task assignment, achieving 95% cross-device compatibility.",
    skills: ["React.js", "TypeScript", "Express.js", "Tailwind CSS", "Leaflet.js"],
    icon: "🏆",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Solutions Inc",
    date: "January 2024 - May 2024",
    description:
      "Developed responsive web interfaces using React and Tailwind CSS. Implemented complex UI components and improved website performance by 40%.",
    skills: ["React", "JavaScript", "Tailwind CSS", "UI/UX", "Responsive Design"],
    icon: "🎨",
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "Kaltro Enterprises",
    date: "June 2023 - July 2023",
    description:
      "Engineered 3 full-featured web apps using React.js, Node.js, PHP, and MySQL with Google Maps & Stripe integration. Accelerated debugging efficiency by 25% through unit testing, ensuring 99% uptime reliability.",
    skills: ["React.js", "Node.js", "PHP", "MySQL", "Google Maps", "Stripe"],
    icon: "💼",
  },
];

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      x: custom % 2 === 0 ? -60 : 60,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="pt-0 pb-16 md:pb-20 lg:pb-24 bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-poppins">
            Experience
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My professional journey and work experience across various organizations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex flex-col md:flex-row gap-8 items-stretch ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                variants={itemVariants}
                custom={index}
              >
                <div className={`flex-1`}>
                  <motion.div
                    className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 h-full group overflow-hidden relative"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4 gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl">{exp.icon}</span>
                            <h3 className="text-2xl font-bold text-primary font-poppins group-hover:translate-x-1 transition-transform duration-300">
                              {exp.title}
                            </h3>
                          </div>
                          <p className="text-lg text-foreground/80 font-semibold ml-12">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-foreground/60 mb-4 ml-12">
                        {exp.date}
                      </p>
                      <p className="text-foreground/70 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-foreground rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/20 transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ delay: skillIndex * 0.05 }}
                          >
                            {useEmojiIcon(skill) ? (
                              <span className="text-sm">{getTechIcon(skill)}</span>
                            ) : (
                              <img 
                                src={`https://skillicons.dev/icons?i=${getSkillIconName(skill)}&theme=dark`}
                                alt={skill}
                                className="w-4 h-4 object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  const parent = e.currentTarget.parentElement;
                                  if (parent) {
                                    const fallback = document.createElement('span');
                                    fallback.className = 'text-sm';
                                    fallback.textContent = getTechIcon(skill);
                                    parent.insertBefore(fallback, parent.firstChild);
                                  }
                                }}
                              />
                            )}
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:flex flex-col items-center">
                  <motion.div
                    className="w-5 h-5 bg-primary rounded-full border-4 border-background relative z-20"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: index * 0.2 + 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      style={{ opacity: 0.5 }}
                    />
                  </motion.div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
