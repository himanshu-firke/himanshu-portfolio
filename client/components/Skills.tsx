import { getTechIcon } from "@/lib/techIcons";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Skills that should use emoji instead of skillicons (because they show black or aren't available)
const useEmojiIcon = (skill: string): boolean => {
  const emojiSkills = ["Framer Motion", "GSAP", "XML", "Canva", "Jupyter Notebook"];
  return emojiSkills.includes(skill);
};

// Map skill names to skillicons.dev icon names
const getSkillIconName = (skill: string): string => {
  const iconMap: Record<string, string> = {
    // Frontend
    "React Js": "react",
    "React": "react",
    "HTML": "html",
    "CSS": "css",
    "JavaScript": "js",
    "Bootstrap": "bootstrap",
    "Tailwind CSS": "tailwind",
    "TypeScript": "ts",
    "Next.js": "nextjs",
    "Three.js": "threejs",
    "Material UI": "materialui",
    "Vue.js": "vue",
    
    // Backend
    "Python": "py",
    "MySQL": "mysql",
    "Firebase": "firebase",
    "PHP": "php",
    "Flask": "flask",
    "Express.js": "express",
    "Node.js": "nodejs",
    "MongoDB": "mongodb",
    "Django": "django",
    "PostgreSQL": "postgres",
    
    // Android
    "Java": "java",
    "Android Studio": "androidstudio",
    "Dart": "dart",
    
    // Others/Tools
    "GitHub": "github",
    "Netlify": "netlify",
    "VS Code": "vscode",
    "Figma": "figma",
    "Vercel": "vercel",
    "Git": "git",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "AWS": "aws",
    "Azure": "azure",
    "Linux": "linux",
    "Postman": "postman",
    "Redux": "redux",
    "Webpack": "webpack",
    "Vite": "vite",
    "Sass": "sass",
    "Less": "less",
    "GraphQL": "graphql",
    "Apollo": "apollo",
    "Jest": "jest",
    "Cypress": "cypress",
    "Selenium": "selenium",
    "Jenkins": "jenkins",
    "Nginx": "nginx",
    "Redis": "redis",
    "RabbitMQ": "rabbitmq",
    "Kafka": "kafka",
  };
  return iconMap[skill] || skill.toLowerCase().replace(/\s+/g, '').replace('.', '');
};

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      "React Js",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "TypeScript",
      "Next.js",
      "Three.js",
      "Framer Motion",
      "GSAP",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      "Python",
      "MySQL",
      "Firebase",
      "PHP",
      "Flask",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Django",
    ],
  },
  {
    title: "Android",
    icon: "📱",
    skills: ["Java", "XML", "Android Studio"],
  },
  {
    title: "Others",
    icon: "🛠️",
    skills: [
      "Canva",
      "GitHub",
      "Netlify",
      "VS Code",
      "Figma",
      "Vercel",
    ],
  },
];

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="skills"
      className="relative pt-0 pb-16 md:pb-20 lg:pb-24"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-poppins">
            Skills
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Technologies and tools I've worked with for the past 3+ years, constantly expanding my toolkit.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transform transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${categoryIndex * 100}ms` : "0ms",
              }}
            >
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-primary font-poppins">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="transform transition-all duration-300"
                      style={{
                        transitionDelay: isVisible
                          ? `${categoryIndex * 100 + skillIndex * 30}ms`
                          : "0ms",
                      }}
                    >
                      <div className="px-4 py-2 bg-secondary rounded-full text-foreground text-sm font-medium hover:bg-primary hover:text-background hover:scale-110 transition-all duration-300 cursor-pointer border border-border/50 hover:border-primary flex items-center gap-2">
                        {useEmojiIcon(skill) ? (
                          <span className="text-lg">{getTechIcon(skill)}</span>
                        ) : (
                          <img 
                            src={`https://skillicons.dev/icons?i=${getSkillIconName(skill)}&theme=dark`}
                            alt={skill}
                            className="w-5 h-5 object-contain"
                            onError={(e) => {
                              // Fallback to emoji if image fails to load
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                const fallback = document.createElement('span');
                                fallback.className = 'text-lg';
                                fallback.textContent = getTechIcon(skill);
                                parent.insertBefore(fallback, parent.firstChild);
                              }
                            }}
                          />
                        )}
                        <span className="font-semibold">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
