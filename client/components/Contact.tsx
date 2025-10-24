import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { ref, isVisible } = useIntersectionObserver();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ email: "", name: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 bg-gradient-to-br from-card/40 via-primary/5 to-card/40" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Social Links & Info */}
          <div className={`space-y-8 transform transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-poppins">
                Let's Connect
              </h2>
              <p className="text-lg text-foreground/70">
                I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-6 font-poppins">
                Follow Me
              </h3>
              {[
                { label: "GitHub", href: "https://github.com/himanshu-firke/", icon: "github", isCustom: false },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/himanshufirke/", icon: "linkedin", isCustom: false },
                { label: "LeetCode", href: "https://leetcode.com/u/Himanshu-Firke01/", icon: "/leetcode-icon.svg", isCustom: true },
                { label: "Email", href: "mailto:himanshufirke04@gmail.com", icon: "gmail", isCustom: false },
              ].map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.label !== "Email" && { target: "_blank", rel: "noopener noreferrer" })}
                  className={`flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group transform ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${100 + index * 100}ms` : "0ms",
                  }}
                >
                  <img 
                    src={link.isCustom ? link.icon : `https://skillicons.dev/icons?i=${link.icon}&theme=dark`}
                    alt={link.label}
                    className="w-10 h-10 object-contain group-hover:scale-125 transition-transform duration-300"
                  />
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-foreground/50">
                      {link.label === "Email" ? "Send me an email" : `Visit my ${link.label}`}
                    </p>
                  </div>
                  <span className="ml-auto text-primary/50 group-hover:text-primary group-hover:translate-x-2 transition-all">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`transform transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
          }`}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground font-poppins mb-6">
                Send Me a Message
              </h3>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground/70">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-foreground/40 hover:border-border/80"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground/70">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-foreground/40 hover:border-border/80"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground/70">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-foreground/40 hover:border-border/80"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground/70">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder-foreground/40 resize-none hover:border-border/80"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-background font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Message"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse opacity-0 group-hover:opacity-100" />
              </button>

              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center font-medium animate-fadeInUp">
                  ✗ {error}
                </div>
              )}

              {submitted && (
                <div className="p-4 bg-primary/20 border border-primary/50 rounded-lg text-primary text-center font-medium animate-fadeInUp">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
