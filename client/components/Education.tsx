import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const education = [
  {
    id: 1,
    school: "Government College of Engineering, Jalgaon",
    degree: "Bachelor of Technology in Computer Engineering",
    course: "B.Tech",
    date: "Aug 2024 - May 2027",
    grade: "CGPA 8.64",
    description:
      "Currently pursuing a degree in Computer Science with focus on web development, machine learning, and software architecture.",
    icon: "🎓",
    logo: "/gceoj-logo.png",
  },
  {
    id: 2,
    school: "VPM'S Polytechnic, Thane",
    degree: "Diploma in Information Technology",
    course: "Diploma",
    date: "Jun 2021 - May 2024",
    grade: "92.63%",
    description:
      "Completed diploma with specialization in web development and database management.",
    icon: "📚",
    logo: "/vpm-logo.png",
  },
  {
    id: 3,
    school: "Matheran Valley English Medium School, Neral",
    degree: "High School Diploma",
    course: "Class X",
    date: "March 2021",
    grade: "86.80%",
    description:
      "Completed high school with Science and Mathematics specialization.",
    icon: "🏫",
  },
];

export default function EducationSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -60,
    },
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
    <section id="education" className="pt-0 pb-16 md:pb-20 lg:pb-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-poppins">
            Education
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My educational journey and academic achievements.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

          <motion.div
            className="relative space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block" />
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative md:pl-20"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background z-10" />
                {/* Education Card */}
                <motion.div
                  className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group overflow-hidden relative"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3 flex-col sm:flex-row gap-4 md:gap-0">
                      <div className="flex items-start gap-4 flex-1">
                        {/* Logo or Icon */}
                        {edu.logo ? (
                          <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-primary/30 flex-shrink-0">
                            <img 
                              src={edu.logo} 
                              alt={edu.school}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <span className="text-3xl">{edu.icon}</span>
                        )}
                        <div>
                          <h3 className="text-2xl font-bold text-primary font-poppins group-hover:translate-x-1 transition-transform duration-300">
                            {edu.school}
                          </h3>
                          <p className="text-lg text-foreground/80 font-semibold mt-2">
                            {edu.degree}
                          </p>
                        </div>
                      </div>
                      <motion.span
                        className="text-sm font-bold text-primary bg-primary/10 border border-primary/30 px-4 py-2 rounded-full whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                      >
                        {edu.grade}
                      </motion.span>
                    </div>

                    <p className="text-sm text-foreground/60 mb-4 font-medium">
                      {edu.date}
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, origin: "left" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
