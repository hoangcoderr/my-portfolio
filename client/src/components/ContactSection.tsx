import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContactSection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { userInfo, isLoading, error } = usePortfolioData();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
        variant: "default"
      });
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{t("common.error")}</p>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h6 className="text-primary-600 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">
            {t("contact.title")}
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("contact.subtitle")}
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-semibold mb-4">{t("contact.letsTalk")}</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t("contact.intro")}
            </p>
            
            <div className="space-y-4">
              {isLoading ? (
                <>
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-20 w-full" />
                </>
              ) : (
                <>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                      <i className="ri-mail-line text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{t("contact.email")}</h4>
                      <a 
                        href={`mailto:${userInfo.email}`} 
                        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {userInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                      <i className="ri-phone-line text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{t("contact.phone")}</h4>
                      <a 
                        href={`tel:${userInfo.phone}`} 
                        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {userInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                      <i className="ri-map-pin-line text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{t("contact.location")}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{userInfo.location}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-semibold mb-4">{t("contact.sendMessage")}</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t("contact.name")}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t("contact.email")}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your email" 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t("contact.subject")}
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Message subject" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t("contact.message")}
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your message" 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="ri-loader-4-line animate-spin"></i>
                    {t("contact.sending")}
                  </span>
                ) : (
                  t("contact.sendMessage")
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
