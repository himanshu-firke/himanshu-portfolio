import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  content: string;
  relatedPosts: string[];
}

const blogPostsData: Record<string, BlogPostData> = {
  "react-hooks-guide": {
    id: "react-hooks-guide",
    title: "Mastering React Hooks: A Deep Dive",
    excerpt: "Learn how to use React Hooks effectively in your applications. Discover best practices, common pitfalls, and advanced patterns.",
    date: "2025-01-20",
    category: "React",
    readTime: "8 min",
    image: "⚛��",
    tags: ["React", "Hooks", "JavaScript"],
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks revolutionized the way we write React components. They allow you to use state and other React features without writing a class component. In this comprehensive guide, we'll explore the most important hooks and how to use them effectively.</p>

      <h2>useState: Managing Component State</h2>
      <p>The useState hook is one of the most fundamental hooks in React. It allows you to add state to functional components.</p>
      <p>When you call useState, you're telling React that you want this component to "remember" something. The hook returns an array with two elements: the current state value and a function to update it.</p>

      <h2>useEffect: Side Effects and Lifecycle</h2>
      <p>useEffect is another essential hook that lets you perform side effects in functional components. Side effects are operations that affect things outside the scope of your component, like fetching data, setting up subscriptions, or manually changing the DOM.</p>

      <h2>useContext: Avoiding Prop Drilling</h2>
      <p>When you need to pass data through multiple levels of components, prop drilling can become tedious. useContext allows you to access context values without wrapping your component in a Consumer component.</p>

      <h2>Custom Hooks: Extracting Reusable Logic</h2>
      <p>One of the most powerful features of hooks is the ability to create your own custom hooks. Custom hooks are JavaScript functions whose names start with "use" and may call other hooks.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Only call hooks at the top level of your function component</li>
        <li>Only call hooks from React functional components or custom hooks</li>
        <li>Use the ESLint plugin to enforce these rules</li>
      </ul>

      <h2>Conclusion</h2>
      <p>React Hooks provide a more direct API to the React concepts you've already been using. With hooks, you can extract component logic into reusable functions and share them among multiple components, leading to more maintainable and scalable applications.</p>
    `,
    relatedPosts: ["full-stack-development", "typescript-tips"],
  },
  "full-stack-development": {
    id: "full-stack-development",
    title: "Building Scalable Full Stack Applications",
    excerpt: "Explore the best practices for building full stack applications with Node.js, Express, and MongoDB. Learn about architecture, security, and performance.",
    date: "2025-01-15",
    category: "Full Stack",
    readTime: "12 min",
    image: "🌐",
    tags: ["Node.js", "Express", "MongoDB", "Full Stack"],
    content: `
      <h2>Introduction to Full Stack Development</h2>
      <p>Full stack development involves working on both the frontend and backend of a web application. This article covers the best practices for building scalable, maintainable full stack applications.</p>

      <h2>Backend Architecture with Node.js and Express</h2>
      <p>Node.js provides a JavaScript runtime for building server-side applications. Express is a popular framework that simplifies building web servers and APIs.</p>

      <h2>Database Design with MongoDB</h2>
      <p>MongoDB is a NoSQL database that stores data in JSON-like documents. It's flexible, scalable, and great for rapid development.</p>

      <h2>API Design Best Practices</h2>
      <p>A well-designed API is crucial for any full stack application. Your API should be intuitive, consistent, and well-documented.</p>

      <h2>Security Considerations</h2>
      <p>Security should be a primary concern in any application. From authentication to data encryption, there are many aspects to consider.</p>

      <h2>Performance Optimization</h2>
      <p>As your application grows, performance becomes increasingly important. Caching, indexing, and efficient queries can significantly improve your application's performance.</p>

      <h2>Deployment and Scaling</h2>
      <p>Once your application is ready, deploying it properly is crucial. Consider using Docker for containerization and cloud platforms for hosting.</p>
    `,
    relatedPosts: ["api-design-best-practices", "web-performance-optimization"],
  },
  "web-performance-optimization": {
    id: "web-performance-optimization",
    title: "Web Performance Optimization Techniques",
    excerpt: "Discover proven techniques to optimize your website's performance. From image optimization to code splitting, improve your Core Web Vitals.",
    date: "2025-01-10",
    category: "Performance",
    readTime: "10 min",
    image: "⚡",
    tags: ["Performance", "Web", "Optimization"],
    content: `
      <h2>Why Web Performance Matters</h2>
      <p>Web performance directly impacts user experience and engagement. Slow websites lead to higher bounce rates and lower conversion rates.</p>

      <h2>Core Web Vitals</h2>
      <p>Google's Core Web Vitals measure three key aspects of web performance: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>

      <h2>Image Optimization</h2>
      <p>Images are often the largest assets on a web page. Optimizing images through compression, lazy loading, and responsive images can significantly improve performance.</p>

      <h2>Code Splitting and Lazy Loading</h2>
      <p>Instead of loading all JavaScript at once, code splitting allows you to load only the code needed for the current page, improving initial load time.</p>

      <h2>Caching Strategies</h2>
      <p>Proper caching strategies can dramatically improve subsequent page loads. Browser caching, server caching, and CDN caching all play important roles.</p>

      <h2>Minification and Compression</h2>
      <p>Minifying CSS and JavaScript removes unnecessary characters, reducing file size. Gzip compression further reduces file size during transfer.</p>

      <h2>Monitoring and Analysis</h2>
      <p>Use tools like Google PageSpeed Insights, Lighthouse, and WebPageTest to analyze your website's performance and identify optimization opportunities.</p>
    `,
    relatedPosts: ["full-stack-development", "css-modern-layouts"],
  },
  "typescript-tips": {
    id: "typescript-tips",
    title: "TypeScript Tips and Tricks for Better Code",
    excerpt: "Master TypeScript with advanced tips and tricks. Improve type safety, reduce bugs, and write more maintainable code.",
    date: "2025-01-05",
    category: "TypeScript",
    readTime: "7 min",
    image: "🔷",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static type checking to JavaScript, helping you catch errors at compile time rather than runtime. This leads to more reliable and maintainable code.</p>

      <h2>Type Inference</h2>
      <p>TypeScript can often infer types without explicit type annotations. This reduces boilerplate while still providing type safety.</p>

      <h2>Union and Intersection Types</h2>
      <p>Union types allow a value to be one of several types. Intersection types combine multiple types into one, allowing you to mix properties from different types.</p>

      <h2>Generics: Reusable Type-Safe Code</h2>
      <p>Generics allow you to create reusable components and functions that work with different types while maintaining type safety.</p>

      <h2>Advanced Type Patterns</h2>
      <p>Conditional types, mapped types, and utility types provide powerful ways to create complex type definitions and transformations.</p>

      <h2>Common TypeScript Pitfalls</h2>
      <p>Even experienced developers can fall into traps with TypeScript. Understanding common pitfalls helps you write better code.</p>
    `,
    relatedPosts: ["react-hooks-guide", "full-stack-development"],
  },
  "css-modern-layouts": {
    id: "css-modern-layouts",
    title: "Modern CSS Layouts: Grid and Flexbox",
    excerpt: "Create flexible and responsive layouts with modern CSS. Learn when to use Grid vs Flexbox and master complex layout patterns.",
    date: "2024-12-28",
    category: "CSS",
    readTime: "9 min",
    image: "🎨",
    tags: ["CSS", "Layout", "Responsive"],
    content: `
      <h2>CSS Flexbox: One-Dimensional Layouts</h2>
      <p>Flexbox is perfect for creating one-dimensional layouts. It's ideal for navigation bars, button groups, and other linear layouts.</p>

      <h2>CSS Grid: Two-Dimensional Layouts</h2>
      <p>CSS Grid provides two-dimensional layout capabilities, allowing you to create complex layouts with rows and columns. It's perfect for page layouts and content grids.</p>

      <h2>Combining Flexbox and Grid</h2>
      <p>Often, the best approach is to use both Flexbox and Grid together. Use Grid for the overall page layout and Flexbox for component layouts.</p>

      <h2>Responsive Design with Flexbox and Grid</h2>
      <p>Both Flexbox and Grid work well with media queries to create responsive layouts that adapt to different screen sizes.</p>

      <h2>Common Layout Patterns</h2>
      <p>Learn how to implement common layout patterns like sidebar layouts, card grids, and sticky headers using modern CSS.</p>

      <h2>Browser Support</h2>
      <p>Modern browsers have excellent support for both Flexbox and Grid. However, understanding how to handle older browsers is still important for production applications.</p>
    `,
    relatedPosts: ["web-performance-optimization", "typescript-tips"],
  },
  "api-design-best-practices": {
    id: "api-design-best-practices",
    title: "RESTful API Design Best Practices",
    excerpt: "Design robust and user-friendly APIs. Learn about versioning, error handling, authentication, and documentation best practices.",
    date: "2024-12-20",
    category: "Backend",
    readTime: "11 min",
    image: "🔌",
    tags: ["API", "REST", "Backend", "Design"],
    content: `
      <h2>RESTful API Principles</h2>
      <p>REST (Representational State Transfer) is an architectural style for building web APIs. Understanding its core principles leads to better API design.</p>

      <h2>Resource-Oriented Design</h2>
      <p>Good API design focuses on resources, not actions. Resources should be nouns, not verbs, and HTTP methods should represent actions on those resources.</p>

      <h2>Versioning Strategy</h2>
      <p>API versioning is crucial for maintaining backward compatibility while adding new features. There are several approaches to versioning, each with pros and cons.</p>

      <h2>Error Handling and Status Codes</h2>
      <p>Proper use of HTTP status codes and consistent error responses make your API easier to use and debug.</p>

      <h2>Authentication and Authorization</h2>
      <p>Security is paramount in API design. Implementing proper authentication and authorization ensures that only authorized users can access protected resources.</p>

      <h2>Documentation</h2>
      <p>Great API documentation is just as important as the API itself. Tools like OpenAPI (Swagger) can help you create comprehensive and maintainable documentation.</p>

      <h2>Rate Limiting and Throttling</h2>
      <p>Protect your API from abuse and ensure fair usage with rate limiting and throttling mechanisms.</p>
    `,
    relatedPosts: ["full-stack-development", "web-performance-optimization"],
  },
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = id ? blogPostsData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <main className="min-h-screen pt-32 pb-20 bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post not found</h1>
          <p className="text-foreground/70 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="px-6 py-2 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = post.relatedPosts
    .map((id) => blogPostsData[id])
    .filter(Boolean);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
          <span>←</span> Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="text-5xl sm:text-6xl mb-6">{post.image}</div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4" style={{fontFamily: "Playfair Display, serif"}}>
            {post.title}
          </h1>
          <p className="text-lg text-foreground/70 mb-6">{post.excerpt}</p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="text-base">{post.image}</span>
              <span>{post.category}</span>
            </div>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none mb-16">
          <div
            className="text-foreground/90 space-y-6 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("<h2>")) {
                    return `<h2 class="text-3xl font-bold text-foreground mt-8 mb-4" style="font-family: Playfair Display, serif">${line.slice(4, -5)}</h2>`;
                  }
                  if (line.startsWith("<h3>")) {
                    return `<h3 class="text-xl font-semibold text-foreground mt-6 mb-3">${line.slice(4, -5)}</h3>`;
                  }
                  if (line.startsWith("<p>")) {
                    return `<p class="text-foreground/80 mb-4">${line}</p>`;
                  }
                  if (line.startsWith("<ul>")) {
                    return `<ul class="list-disc list-inside space-y-2 ml-4 text-foreground/80 mb-4">`;
                  }
                  if (line.startsWith("<li>")) {
                    return `<li class="ml-4">${line.slice(4, -5)}</li>`;
                  }
                  return line;
                })
                .join("\n"),
            }}
          />
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{fontFamily: "Playfair Display, serif"}}>
              Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group p-6 rounded-lg border border-border bg-gradient-to-br from-secondary/30 to-secondary/10 hover:from-secondary/50 hover:to-secondary/20 transition-all duration-300 hover:border-primary"
                >
                  <div className="text-3xl mb-3">{relatedPost.image}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors" style={{fontFamily: "Playfair Display, serif"}}>
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3">{relatedPost.readTime}</p>
                  <span className="text-primary group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Share Section */}
        <section className="mt-20 pt-12 border-t border-border text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Share this article</h2>
          <div className="flex justify-center gap-4">
            <a href="#" className="px-6 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground transition-colors">
              Share on Twitter
            </a>
            <a href="#" className="px-6 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground transition-colors">
              Share on LinkedIn
            </a>
            <a href="#" className="px-6 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground transition-colors">
              Copy Link
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
