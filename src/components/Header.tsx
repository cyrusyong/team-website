
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex items-center justify-center space-x-8">
          <li>
            <a href="#overview" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Overview
            </a>
          </li>
          <li>
            <a href="#team" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Team
            </a>
          </li>
          <li>
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#process" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Process
            </a>
          </li>
          <li>
            <a href="#demo" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Demo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
