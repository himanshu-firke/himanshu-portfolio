import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface LeetCodeStats {
  totalSubmissions: number;
  totalActiveDays: number;
  maxStreak: number;
  currentStreak: number;
}

export default function LeetCodeSection() {
  const { ref, isVisible } = useIntersectionObserver();
  
  // LeetCode username
  const username = "Himanshu-Firke01";
  const profileUrl = `https://leetcode.com/u/${username}/`;
  
  const [stats, setStats] = useState<LeetCodeStats>({
    totalSubmissions: 457,
    totalActiveDays: 120,
    maxStreak: 26,
    currentStreak: 5,
  });

  // Fetch actual LeetCode stats
  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Try to fetch from LeetCode API
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        if (response.ok) {
          const data = await response.json();
          if (data.totalSolved) {
            setStats({
              totalSubmissions: data.totalSolved || 457,
              totalActiveDays: 120,
              maxStreak: 26,
              currentStreak: 5,
            });
          }
        }
      } catch (error) {
        console.log('Using default stats');
      }
    };
    fetchLeetCodeStats();
  }, [username]);

  // Animated counter effect
  const [displayStats, setDisplayStats] = useState({
    totalSubmissions: 0,
    totalActiveDays: 0,
    maxStreak: 0,
    currentStreak: 0,
  });

  // Animate numbers when visible
  useEffect(() => {
    if (isVisible && stats.totalSubmissions > 0) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setDisplayStats({
          totalSubmissions: Math.floor(stats.totalSubmissions * progress),
          totalActiveDays: Math.floor(stats.totalActiveDays * progress),
          maxStreak: Math.floor(stats.maxStreak * progress),
          currentStreak: Math.floor(stats.currentStreak * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setDisplayStats({
            totalSubmissions: stats.totalSubmissions,
            totalActiveDays: stats.totalActiveDays,
            maxStreak: stats.maxStreak,
            currentStreak: stats.currentStreak,
          });
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible, stats]);

  // Badge data
  const badges = [
    {
      name: "50 Days Badge",
      image: "https://assets.leetcode.com/static_assets/marketing/2024-50.gif",
      alt: "50 Days Badge 2024",
    },
    {
      name: "100 Days Badge",
      image: "https://assets.leetcode.com/static_assets/marketing/2024-100.gif",
      alt: "100 Days Badge 2024",
    },
  ];

  return (
    <section
      id="leetcode"
      className="relative py-16 overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 font-poppins flex items-center justify-center gap-3">
              <img 
                src="/leetcode-icon.svg"
                alt="LeetCode"
                className="w-10 h-10 object-contain"
              />
              LeetCode Stats
            </h2>
            <p className="text-base text-foreground/70 max-w-2xl mx-auto mb-4">
              Sharpening problem-solving skills one challenge at a time
            </p>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <span>@{username}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Contribution Calendar */}
        <div
          className={`mb-6 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="relative bg-card/50 border border-border rounded-2xl p-4 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
            {/* Header with stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1.5 font-poppins">
                  <span className="text-primary">{displayStats.totalSubmissions}</span> submissions in the past year
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                  <span>Total active days: <span className="text-primary font-semibold">{displayStats.totalActiveDays}</span></span>
                  <span>Max streak: <span className="text-green-500 font-semibold">{displayStats.maxStreak}</span></span>
                  <span>Current: <span className="text-yellow-500 font-semibold">{displayStats.currentStreak}</span></span>
                </div>
              </div>
            </div>

            {/* Calendar visualization - LeetCode Screenshot */}
            <div className="bg-background/50 rounded-xl overflow-hidden border border-border/30 max-w-3xl mx-auto">
              <img 
                src="https://leetcard.jacoblin.cool/Himanshu-Firke01?theme=dark&font=Ubuntu&ext=heatmap"
                alt="LeetCode Contribution Calendar"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {badges.map((badge, index) => (
            <div
              key={badge.name}
              className={`transform transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="relative bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-500/30 rounded-2xl p-4 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group overflow-hidden h-full flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center">
                  <img
                    src={badge.image}
                    alt={badge.alt}
                    className="w-32 h-32 mx-auto mb-2 object-contain"
                  />
                  <h3 className="text-base font-bold text-foreground font-poppins">
                    {badge.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 font-poppins"
          >
            <span>View Full Profile</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
