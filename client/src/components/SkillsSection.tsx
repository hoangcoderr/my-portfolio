import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkillsSection() {
  const { t } = useTranslation();
  const { skills, isLoading, error } = usePortfolioData();

  if (error) {
    return (
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-red-500">
            {t("error.loading")}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="skills" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h6 className="text-primary-600 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">
            {t("skills.title")}
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("skills.subtitle")}
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <Skeleton className="h-6 w-1/2 mb-4" />
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Actual skill categories
            skills?.map((category: any) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <i className={category.icon + " text-2xl text-primary-600 dark:text-primary-400"}></i>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill: any) => (
                    <div key={skill.id} className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
