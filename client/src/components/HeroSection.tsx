import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Skeleton } from "@/components/ui/skeleton";

export default function HeroSection() {
  const { t } = useTranslation();
  const { userInfo, isLoading, error } = usePortfolioData();

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{t("common.error")}</p>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 lg:py-24 relative overflow-hidden bg-white dark:bg-gray-800 z-10 border-b-2 border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-64 mb-4" />
                <Skeleton className="h-8 w-48 mb-6" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-3/4 mb-8" />
                <div className="flex flex-wrap gap-3 mb-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-12 w-12 rounded-full" />
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Skeleton className="h-12 w-32" />
                  <Skeleton className="h-12 w-32" />
                </div>
              </div>
            ) : (
              <>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
                  variants={item}
                >
                  <span className="text-blue-600 dark:text-blue-400">{userInfo.name}</span>
                </motion.h1>
                
                <motion.div 
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
                  variants={item}
                >
                  {userInfo.title}
                </motion.div>
                
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
                  variants={item}
                >
                  {userInfo.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-3 mb-10"
                  variants={item}
                >
                  {/* Social Media Links */}
                  <a 
                    href={`mailto:${userInfo.email}`} 
                    className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400" 
                    aria-label="Email"
                  >
                    <i className="ri-mail-fill text-2xl"></i>
                  </a>
                  <a 
                    href={`tel:${userInfo.phone}`} 
                    className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400" 
                    aria-label="Phone"
                  >
                    <i className="ri-phone-fill text-2xl"></i>
                  </a>
                  <a 
                    href={userInfo.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400" 
                    aria-label="Facebook"
                  >
                    <i className="ri-facebook-fill text-2xl"></i>
                  </a>
                  <a 
                    href={userInfo.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400" 
                    aria-label="Twitter"
                  >
                    <i className="ri-twitter-x-fill text-2xl"></i>
                  </a>
                  <a 
                    href={userInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400" 
                    aria-label="GitHub"
                  >
                    <i className="ri-github-fill text-2xl"></i>
                  </a>
                  <a 
                    href={userInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400" 
                    aria-label="LinkedIn"
                  >
                    <i className="ri-linkedin-fill text-2xl"></i>
                  </a>
                  <a 
                    href={userInfo.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400" 
                    aria-label="YouTube"
                  >
                    <i className="ri-youtube-fill text-2xl"></i>
                  </a>
                  <a 
                    href={userInfo.zalo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400" 
                    aria-label="Zalo"
                  >
                    <i className="ri-messenger-fill text-2xl"></i>
                  </a>
                  <a 
                    href={userInfo.discord} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400" 
                    aria-label="Discord"
                  >
                    <i className="ri-discord-fill text-2xl"></i>
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={item}
                >
                  <a 
                    href="#contact" 
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                  >
                    {t("hero.contactMe")}
                  </a>
                  <a 
                    href="#projects" 
                    className="px-8 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-medium rounded-lg transition-colors"
                  >
                    {t("hero.viewProjects")}
                  </a>
                </motion.div>
              </>
            )}
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {isLoading ? (
              <Skeleton className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full" />
            ) : (
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 dark:from-blue-500/20 dark:to-purple-600/20"></div>
                <svg className="absolute inset-0 w-full h-full text-gray-200 dark:text-gray-700" fill="currentColor" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50" />
                </svg>
                <motion.svg 
                  className="absolute inset-0 w-full h-full text-blue-600 dark:text-blue-400" 
                  fill="currentColor" 
                  viewBox="0 0 100 100"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <path d="M50 0A50 50 0 0050 100A50 50 0 0050 0z" />
                  <text x="50" y="50" textAnchor="middle" dy=".3em" className="text-white fill-current" style={{font: 'bold 30px sans-serif'}}>
                    {userInfo.name.split(' ').map((n: string) => n[0]).join('')}
                  </text>
                </motion.svg>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-500/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                ></motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
