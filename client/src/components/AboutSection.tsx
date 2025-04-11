import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Skeleton } from "@/components/ui/skeleton";

export default function AboutSection() {
  const { t } = useTranslation();
  const { userInfo, isLoading, error } = usePortfolioData();

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{t("common.error")}</p>
      </div>
    );
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h6 className="text-primary-600 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">
            {t("about.title")}
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("about.subtitle")}
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-48 mb-4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <i className="ri-user-3-line mr-2 text-primary-600 dark:text-primary-400"></i>
                  <span>{t("about.personalInfo")}</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex">
                    <div className="w-28 font-medium text-gray-600 dark:text-gray-300">
                      {t("about.fullName")}:
                    </div>
                    <div>{userInfo.name}</div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-28 font-medium text-gray-600 dark:text-gray-300">
                      {t("about.title")}:
                    </div>
                    <div>{userInfo.title}</div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-28 font-medium text-gray-600 dark:text-gray-300">
                      {t("about.location")}:
                    </div>
                    <div>{userInfo.location}</div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-28 font-medium text-gray-600 dark:text-gray-300">
                      {t("about.email")}:
                    </div>
                    <div>{userInfo.email}</div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl flex-1 min-w-[140px] text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t("about.yearsExperience")}</div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl flex-1 min-w-[140px] text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t("about.projectsCompleted")}</div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl flex-1 min-w-[140px] text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t("about.happyClients")}</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-semibold mb-4">{t("about.myStory")}</h3>
            
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ) : (
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>{userInfo.description}</p>
              </div>
            )}
            
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium">
                <span>{t("about.letWorkTogether")}</span>
                <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
