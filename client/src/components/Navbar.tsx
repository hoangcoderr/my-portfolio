import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Skeleton } from "@/components/ui/skeleton";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { t } = useTranslation();
  const { userInfo, isLoading, error } = usePortfolioData();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t("nav.about"), icon: "ri-user-line" },
    { href: "#skills", label: t("nav.skills"), icon: "ri-code-s-slash-line" },
    { href: "#projects", label: t("nav.projects"), icon: "ri-projector-line" },
    { href: "#achievements", label: t("nav.achievements"), icon: "ri-award-line" },
    { href: "#experience", label: t("nav.experience"), icon: "ri-briefcase-line" },
    { href: "#contact", label: t("nav.contact"), icon: "ri-mail-line" }
  ];

  if (error) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-center text-red-500">
            {t("error.loading")}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-gray-800 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {isLoading ? (
              <Skeleton className="h-8 w-32" />
            ) : (
              <a href="#" className="text-xl font-bold flex items-center gap-2">
                <i className="ri-code-s-slash-line text-primary-600 dark:text-primary-400"></i>
                <span>{userInfo?.name || "Portfolio"}</span>
              </a>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2 group"
              >
                <i className={link.icon}></i>
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all group-hover:w-full"></span>
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Language"
            >
              {language === "en" ? "EN" : "VI"}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-md"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <i className={link.icon}></i>
                    <span>{link.label}</span>
                  </a>
                ))}

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={toggleLanguage}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {language === "en" ? "EN" : "VI"}
                  </button>

                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
