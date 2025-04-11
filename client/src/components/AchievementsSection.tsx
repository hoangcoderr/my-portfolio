import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Skeleton } from "@/components/ui/skeleton";

export default function AchievementsSection() {
  const { t } = useTranslation();
  const { achievements, isLoading, error } = usePortfolioData();

  if (error) {
    return (
      <section id="achievements" className="py-20 bg-white dark:bg-gray-800">
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
      id="achievements" 
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h6 className="text-primary-600 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">
            {t("achievements.title")}
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("achievements.subtitle")}
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-20 w-full mb-4" />
                <div className="flex items-center gap-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            ))
          ) : (
            // Actual achievement cards
            achievements?.map((achievement: any) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${achievement.bg_color} rounded-lg shadow-lg p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <i className={`${achievement.icon} ${achievement.icon_color} text-2xl`}></i>
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {achievement.description}
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.organization}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
