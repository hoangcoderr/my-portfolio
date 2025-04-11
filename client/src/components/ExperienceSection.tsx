import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Skeleton } from "@/components/ui/skeleton";

export default function ExperienceSection() {
  const { t } = useTranslation();
  const { experiences, isLoading, error } = usePortfolioData();

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{t("common.error")}</p>
      </div>
    );
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("experience.description")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/4">
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                    <div className="w-full md:w-3/4">
                      <Skeleton className="h-6 w-48 mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.period}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.company}
                      </p>
                    </div>
                    <div className="w-full md:w-3/4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {experience.role}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {experience.description}
                      </p>
                      {experience.responsibilities && (
                        <ul className="list-disc pl-4 space-y-2">
                          {JSON.parse(experience.responsibilities).map((item: string, i: number) => (
                            <li key={i} className="text-gray-600 dark:text-gray-400">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
