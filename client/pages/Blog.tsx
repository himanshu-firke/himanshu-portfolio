import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "react-hooks-guide",
    title: "Mastering React Hooks: A Deep Dive",
    excerpt: "Learn how to use React Hooks effectively in your applications. Discover best practices, common pitfalls, and advanced patterns.",
    date: "2025-01-20",
    category: "React",
    readTime: "8 min",
    image: "⚛️",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: "full-stack-development",
    title: "Building Scalable Full Stack Applications",
    excerpt: "Explore the best practices for building full stack applications with Node.js, Express, and MongoDB. Learn about architecture, security, and performance.",
    date: "2025-01-15",
    category: "Full Stack",
    readTime: "12 min",
    image: "🌐",
    tags: ["Node.js", "Express", "MongoDB", "Full Stack"],
  },
  {
    id: "web-performance-optimization",
    title: "Web Performance Optimization Techniques",
    excerpt: "Discover proven techniques to optimize your website's performance. From image optimization to code splitting, improve your Core Web Vitals.",
    date: "2025-01-10",
    category: "Performance",
    readTime: "10 min",
    image: "⚡",
    tags: ["Performance", "Web", "Optimization"],
  },
  {
    id: "typescript-tips",
    title: "TypeScript Tips and Tricks for Better Code",
    excerpt: "Master TypeScript with advanced tips and tricks. Improve type safety, reduce bugs, and write more maintainable code.",
    date: "2025-01-05",
    category: "TypeScript",
    readTime: "7 min",
    image: "🔷",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
  },
  {
    id: "css-modern-layouts",
    title: "Modern CSS Layouts: Grid and Flexbox",
    excerpt: "Create flexible and responsive layouts with modern CSS. Learn when to use Grid vs Flexbox and master complex layout patterns.",
    date: "2024-12-28",
    category: "CSS",
    readTime: "9 min",
    image: "🎨",
    tags: ["CSS", "Layout", "Responsive"],
  },
  {
    id: "api-design-best-practices",
    title: "RESTful API Design Best Practices",
    excerpt: "Design robust and user-friendly APIs. Learn about versioning, error handling, authentication, and documentation best practices.",
    date: "2024-12-20",
    category: "Backend",
    readTime: "11 min",
    image: "🔌",
    tags: ["API", "REST", "Backend", "Design"],
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchCategory = !selectedCategory || post.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4" style={{fontFamily: "Playfair Display, serif"}}>
            Blog
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, programming, and technology trends.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50">🔍</span>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedCategory
                  ? "bg-primary text-background"
                  : "bg-secondary/50 text-foreground hover:bg-secondary"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-background"
                    : "bg-secondary/50 text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 mb-16">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group block p-6 rounded-lg border border-border bg-gradient-to-br from-secondary/30 to-secondary/10 hover:from-secondary/50 hover:to-secondary/20 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-pink-500/10"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Image/Icon */}
                  <div className="text-4xl sm:text-5xl flex-shrink-0">
                    {post.image}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Tags and Meta */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-foreground/50">
                        {post.readTime}
                      </span>
                      <span className="text-xs text-foreground/50">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors" style={{fontFamily: "Playfair Display, serif"}}>
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-foreground/70 line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-foreground/5 text-foreground/60 border border-foreground/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="text-primary text-2xl flex-shrink-0 group-hover:translate-x-2 transition-transform">
                    →
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/50">No articles found matching your search.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-foreground/60 mb-4">Subscribe to get notified about new posts</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
