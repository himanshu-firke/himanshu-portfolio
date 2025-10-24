export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-poppins">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/" },
                { label: "Skills", href: "/skills" },
                { label: "Experience", href: "/experience" },
                { label: "Projects", href: "/projects" },
                { label: "Education", href: "/education" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-poppins">
              Social
            </h3>
            <ul className="space-y-2">
              {[
                { label: "GitHub", href: "https://github.com/himanshu-firke/" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/himanshufirke/" },
                { label: "LeetCode", href: "https://leetcode.com/u/Himanshu-Firke01/" },
                { label: "Email", href: "mailto:himanshufirke04@gmail.com" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (link.label === "Email") {
                        window.location.href = link.href;
                      }
                    }}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-foreground font-bold mb-4 font-poppins">
              Contact
            </h3>
            <p className="text-foreground/70 text-sm">
              Feel free to reach out for opportunities or collaborations.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-foreground/70 text-sm">
            © {currentYear} Himanshu Firke. All rights reserved.
          </p>
          <p className="text-foreground/70 text-sm mt-4 sm:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
