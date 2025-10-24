import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { getTechIcon } from "@/lib/techIcons";

// Map tech names to skillicons.dev icon names
const getTechIconName = (tech: string): string => {
  const iconMap: Record<string, string> = {
    "React.js": "react", "React": "react", "TypeScript": "ts", "Express.js": "express",
    "Tailwind CSS": "tailwind", "Leaflet.js": "leaflet", "JavaScript": "js",
    "PHP": "php", "MySQL": "mysql", "Google Maps API": "gcp",
    "WebSocket": "websocket", "TradingView API": "tradingview", "Laravel": "laravel",
    "HTML": "html", "CSS": "css", "Python": "py", "React Native": "react",
    "Node.js": "nodejs", "Socket.IO": "socketio", "MongoDB": "mongodb",
    "Java": "java", "Swing": "java", "JDBC": "java", "Collections": "java",
    "OOP": "java", "Exception Handling": "java",
  };
  return iconMap[tech] || tech.toLowerCase().replace(/\s+/g, '').replace('.', '');
};

// Technologies that should use emoji instead of skillicons
const useEmojiIcon = (tech: string): boolean => {
  const emojiTechs = ["Socket.IO", "Leaflet.js", "Google Maps API", "TradingView API", "Stripe", "WebSocket"];
  return emojiTechs.includes(tech);
};
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "CivicConnect",
    category: "web-app",
    date: "Sept 2024",
    description:
      "Full-stack civic issue reporting system with real-time location tracking and responsive dashboards for multiple departments.",
    technologies: ["React.js", "TypeScript", "Express.js", "Tailwind CSS", "Leaflet.js"],
    achievements: ["Smart India Hackathon 2025", "95% Cross-device Compatibility", "Real-time Maps"],
    codeUrl: "https://github.com/himanshu-firke/CivicConnect-Smart-City-",
    liveUrl: "https://civic-connect-smart-city.vercel.app",
    image: "/projects/civicconnect.png",
    contributors: [
      { name: "himanshu-firke", avatar: "https://avatars.githubusercontent.com/u/139757653?v=4", github: "https://github.com/himanshu-firke", linkedin: "https://www.linkedin.com/in/himanshufirke/" },
      { name: "kshitijhadke26", avatar: "https://avatars.githubusercontent.com/u/85186274?v=4", github: "https://github.com/kshitijhadke26", linkedin: "https://www.linkedin.com/in/kshitij-hadke/" },
      { name: "shivraj-yadav", avatar: "https://avatars.githubusercontent.com/u/114981686?v=4", github: "https://github.com/shivraj-yadav", linkedin: "https://www.linkedin.com/in/shivraj-yadav/" },
    ],
  },
  {
    id: 2,
    title: "MediLocator",
    category: "web-app",
    date: "Jan 2025",
    description:
      "Healthcare facility locator to find nearby hospitals, doctors by specialization, and book appointments with Google Maps.",
    technologies: ["PHP", "MySQL", "Google Maps API", "JavaScript"],
    achievements: ["Location-based Search", "Appointment Booking", "Doctor Specialization"],
    codeUrl: "https://github.com/himanshu-firke/MediLocator",
    image: "/projects/medilocator.png",
  },
  {
    id: 3,
    title: "Crypto Tracker",
    category: "web-app",
    date: "May 2024",
    description:
      "Real-time cryptocurrency tracker with live price updates, market data, and TradingView charts integration.",
    technologies: ["React", "WebSocket", "TradingView API", "JavaScript"],
    achievements: ["Real-time Updates", "Live Search", "Market Analysis"],
    codeUrl: "https://github.com/himanshu-firke/crypto-tracker",
    liveUrl: "https://crypto-tracker-swart-seven.vercel.app/",
    image: "/projects/crypto-tracker.png",
  },
  {
    id: 4,
    title: "ShopSphere Elite",
    category: "web-app",
    date: "Aug 2024",
    description:
      "Modern full-stack ecommerce platform with product browsing, cart management, user authentication and admin dashboard.",
    technologies: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS"],
    achievements: ["Cart Management", "Admin Dashboard", "Payment Integration"],
    codeUrl: "https://github.com/himanshu-firke/ShopSphere_Elite",
    liveUrl: "https://furniture-ecommerce-beta.vercel.app/",
    image: "/projects/shopsphere.png",
  },
  {
    id: 5,
    title: "Investment Hub",
    category: "web-app",
    date: "May 2024",
    description:
      "Investment platform with real-time TradingView charts, account management, stock trading, and portfolio tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Python", "MySQL"],
    achievements: ["Real-time Charts", "Portfolio Management", "Blog Integration"],
    codeUrl: "https://github.com/himanshu-firke/Investment_Hub",
    liveUrl: "https://investment-hub.vercel.app",
    image: "/projects/investment-hub.png",
  },
  {
    id: 6,
    title: "ChatConnect",
    category: "android-app",
    date: "Aug 2024",
    description:
      "Modern messaging application enabling instant 1:1 conversations with React Native and Socket.IO for real-time communication.",
    technologies: ["React Native", "Node.js", "Socket.IO", "MongoDB"],
    achievements: ["Real-time Messaging", "Cross-platform", "User Authentication"],
    codeUrl: "https://github.com/himanshu-firke/chatconnect-app",
    liveUrl: "https://chatconnnect.netlify.app/",
    image: "/projects/chatconnect.png",
  },
  {
    id: 7,
    title: "Hospital Management System",
    category: "java",
    date: "Sept 2024",
    description:
      "Java-based hospital management system with Swing UI and MySQL database for patient and doctor management.",
    technologies: ["Java", "Swing", "MySQL", "JDBC"],
    achievements: ["CRUD Operations", "Desktop Application", "Database Integration"],
    codeUrl: "https://github.com/himanshu-firke/hospital-management-system",
    image: "/projects/hospital-management.png",
  },
  {
    id: 8,
    title: "Banking Application",
    category: "java",
    date: "Sept 2024",
    description:
      "Banking application built with Java Collections Framework demonstrating OOP concepts and user authentication.",
    technologies: ["Java", "Collections", "OOP", "Exception Handling"],
    achievements: ["User Authentication", "Transaction Management", "Account Operations"],
    codeUrl: "https://github.com/himanshu-firke/banking-application-java-",
    image: "/projects/banking-app.png",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "web-app", label: "Web Apps" },
  { id: "android-app", label: "Android Apps" },
  { id: "java", label: "Java" },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, isVisible } = useIntersectionObserver();

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="pt-0 pb-16 md:pb-20 lg:pb-24 bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-poppins">
            Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work across web development, mobile apps, and machine learning.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform ${
                activeCategory === cat.id
                  ? "bg-primary text-background border border-primary scale-105"
                  : "border border-border text-foreground hover:border-primary/50 hover:text-primary hover:scale-105"
              } ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 transform flex flex-col ${
                isVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Project Image Container with Padding */}
              <div className="p-4 pt-5 pb-3">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative flex-shrink-0 rounded-lg border border-border/50">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain bg-card/50 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to gradient with letter if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <span class="text-4xl font-bold text-primary/50">${project.title.charAt(0)}</span>
                          </div>
                        `;
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary/50 group-hover:scale-110 group-hover:text-primary transition-all duration-300">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              {/* Project Content */}
              <div className="px-5 pb-5 relative z-10 flex flex-col flex-grow">
                {/* Title and Date */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-foreground font-poppins mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-foreground/60">{project.date}</p>
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Achievements - Fixed height */}
                <div className="flex flex-wrap gap-1.5 mb-3 min-h-[56px]">
                  {project.achievements.slice(0, 3).map((achievement, idx) => (
                    <span
                      key={achievement}
                      className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded border border-primary/30 hover:bg-primary/30 transition-colors duration-200 cursor-pointer h-fit"
                      style={{
                        transitionDelay: `${idx * 50}ms`,
                      }}
                    >
                      ✨ {achievement}
                    </span>
                  ))}
                </div>

                {/* Contributors - if available */}
                {project.contributors && project.contributors.length > 0 && (
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex -space-x-2">
                      {project.contributors.map((contributor, idx) => (
                        <a
                          key={idx}
                          href={contributor.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group"
                          title={contributor.name}
                        >
                          <img
                            src={contributor.avatar}
                            alt={contributor.name}
                            className="w-8 h-8 rounded-full border-2 border-background hover:border-primary transition-all duration-200 hover:scale-110 hover:z-10"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies - Fixed height */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50 min-h-[72px]">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-secondary/50 text-foreground/80 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 h-fit"
                      style={{
                        transitionDelay: `${idx * 30}ms`,
                      }}
                    >
                      {useEmojiIcon(tech) ? (
                        <span className="text-[10px]">{getTechIcon(tech)}</span>
                      ) : (
                        <img 
                          src={`https://skillicons.dev/icons?i=${getTechIconName(tech)}&theme=dark`}
                          alt={tech}
                          className="w-3.5 h-3.5 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              const fallback = document.createElement('span');
                              fallback.className = 'text-[10px]';
                              fallback.textContent = getTechIcon(tech);
                              parent.insertBefore(fallback, parent.firstChild);
                            }
                          }}
                        />
                      )}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Dialog Trigger - Always at bottom */}
                <div className="pt-4 mt-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full px-4 py-2 rounded-full bg-primary text-background text-sm font-medium hover:brightness-110 transition-all duration-200 hover:scale-[1.02]">
                        View Details
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl w-full max-h-[85vh] overflow-y-auto bg-card p-6">
                      <DialogHeader className="space-y-3">
                        <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
                        <DialogDescription className="text-base">{project.date}</DialogDescription>
                        
                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="px-3 py-1 bg-primary/20 text-primary rounded-md text-sm font-medium border border-primary/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </DialogHeader>

                      {/* Two Column Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                        {/* Left Column - Description */}
                        <div className="space-y-4">
                          {/* Achievements */}
                          <div className="space-y-2">
                            <p className="text-foreground/90 leading-relaxed text-sm">{project.description}</p>
                            
                            {project.achievements && project.achievements.length > 0 && (
                              <div className="space-y-2">
                                {project.achievements.map((achievement, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">🏆</span>
                                    <p className="text-foreground/80 text-sm">{achievement}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Members Section */}
                          {project.contributors && project.contributors.length > 0 && (
                            <div>
                              <h3 className="text-lg font-bold mb-3">Members</h3>
                              <div className="space-y-2">
                                {project.contributors.map((contributor, idx) => (
                                  <div key={idx} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <img 
                                        src={contributor.avatar} 
                                        alt={contributor.name}
                                        className="w-10 h-10 rounded-full"
                                      />
                                      <span className="font-medium text-foreground text-sm">{contributor.name}</span>
                                    </div>
                                    <div className="flex gap-2">
                                      <a
                                        href={contributor.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground hover:text-primary transition-colors"
                                        title="GitHub"
                                      >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                      </a>
                                      <a
                                        href={contributor.linkedin || "#"}
                                        target={contributor.linkedin ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className={`transition-colors ${
                                          contributor.linkedin ? "text-foreground hover:text-primary cursor-pointer" : "text-foreground/30 cursor-not-allowed"
                                        }`}
                                        title={contributor.linkedin ? "LinkedIn" : "LinkedIn (Not available)"}
                                        onClick={(e) => !contributor.linkedin && e.preventDefault()}
                                      >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right Column - Image */}
                        {project.image && (
                          <div className="flex items-start">
                            <div className="w-full rounded-lg overflow-hidden border border-border">
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <DialogFooter className="flex flex-row gap-2 mt-3">
                        <a
                          href={project.codeUrl || "#"}
                          target={project.codeUrl ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className={`flex-1 px-6 py-2.5 rounded-lg font-medium transition-colors text-center ${
                            project.codeUrl 
                              ? "bg-secondary text-foreground hover:bg-secondary/80 cursor-pointer" 
                              : "bg-secondary/30 text-foreground/50 cursor-not-allowed"
                          }`}
                          onClick={(e) => !project.codeUrl && e.preventDefault()}
                        >
                          View Code
                        </a>
                        <a
                          href={project.liveUrl || "#"}
                          target={project.liveUrl ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className={`flex-1 px-6 py-2.5 rounded-lg font-medium transition-all text-center ${
                            project.liveUrl 
                              ? "bg-primary text-background hover:brightness-110 cursor-pointer" 
                              : "bg-primary/30 text-background/50 cursor-not-allowed"
                          }`}
                          onClick={(e) => !project.liveUrl && e.preventDefault()}
                        >
                          View Live App
                        </a>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
