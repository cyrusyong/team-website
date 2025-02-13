
import { motion } from "framer-motion";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex items-center justify-center space-x-8">
          <li>
            <button
              onClick={() => scrollToSection("overview")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Overview
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("team")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Team
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
