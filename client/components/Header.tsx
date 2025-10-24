import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
          <div className="header-logo animate-spin-slow inline-flex items-center justify-center" style={{ width: "1.6em", height: "1.6em" }}>
            <img src="https://cdn.builder.io/api/v1/image/assets%2F1545954023e849dbaa09268f617fe103%2F25164743442849179c193146cda92cb2?format=webp&width=800" alt="React Logo" className="w-full h-full object-contain" />
          </div>
          <span className="hidden sm:inline text-white">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-sm font-medium transition-colors text-foreground/70 hover:text-primary"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* GitHub Button - Desktop Only */}
        <a
          href="https://github.com/himanshu-firke/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-6 py-2 rounded-full border-2 border-primary text-primary text-sm font-medium hover:bg-primary hover:text-background transition-colors"
        >
          Github Profile
        </a>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-left py-2 text-sm font-medium transition-colors text-foreground/70 hover:text-primary hover:bg-primary/10 rounded px-3"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/himanshu-firke/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2 px-4 rounded-full border-2 border-primary text-primary text-sm font-medium hover:bg-primary hover:text-background transition-colors"
            >
              Github Profile
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
