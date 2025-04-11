import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const { projects, isLoading, error } = usePortfolioData();

  if (error) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
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
      id="projects" 
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h6 className="text-primary-600 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">
            {t("projects.title")}
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("projects.subtitle")}
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton key={i} className="h-6 w-20" />
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Actual project cards
            projects?.map((project: any) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.thumbnail_url}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.type}</p>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {JSON.parse(project.technologies).map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
