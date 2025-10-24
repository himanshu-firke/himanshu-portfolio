import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ViewsSection() {
  const [views, setViews] = useState(0);
  const [displayedViews, setDisplayedViews] = useState(0);
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    // Calculate base views: starts at 50, increments based on days since Jan 1, 2025
    const startDate = new Date('2025-01-01');
    const today = new Date();
    const daysSinceLaunch = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Base of 50 + (1-3 views per day based on date)
    const baseViews = 50 + (daysSinceLaunch * 2);
    
    // Add some randomness based on time of day (0-5 additional views)
    const hourOfDay = today.getHours();
    const additionalViews = Math.floor((hourOfDay / 24) * 5);
    
    const totalViews = baseViews + additionalViews;
    setViews(totalViews);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationId: NodeJS.Timeout;
    const increment = Math.ceil(views / 50);

    const animate = () => {
      setDisplayedViews((prev) => {
        if (prev >= views) return views;
        return prev + increment;
      });
    };

    animationId = setInterval(animate, 20);

    return () => clearInterval(animationId);
  }, [isVisible, views]);

  return (
    <section className="py-20 bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-background border border-border rounded-lg p-12 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
            {/* Animated counter */}
            <div className={`transform transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}>
              <p className="text-foreground/70 text-lg mb-4 font-poppins">
                Website Views
              </p>
              <div className="relative">
                <p className="text-7xl sm:text-8xl font-black text-primary font-poppins group-hover:scale-110 transition-transform duration-300">
                  {displayedViews.toLocaleString()}
                </p>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <p className="text-foreground/60 mt-8 text-base leading-relaxed max-w-xl mx-auto">
              Thank you for visiting my portfolio! Every view motivates me to keep creating and learning. Your interest means a lot to me.
            </p>

            {/* Animated divider */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/30" />
              <span className="text-primary/50 text-sm">✨</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
