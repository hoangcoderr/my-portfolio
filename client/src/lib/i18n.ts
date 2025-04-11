import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English translations
const enTranslations = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    achievements: "Achievements",
    experience: "Experience",
    contact: "Contact"
  },
  hero: {
    contactMe: "Contact Me",
    viewProjects: "View Projects"
  },
  about: {
    title: "About Me",
    subtitle: "Who I Am",
    personalInfo: "Personal Information",
    fullName: "Full Name",
    dob: "Date of Birth",
    location: "Location",
    email: "Email",
    yearsExperience: "Years Experience",
    projectsCompleted: "Projects Completed",
    happyClients: "Happy Clients",
    myStory: "My Story",
    letWorkTogether: "Let's Work Together"
  },
  skills: {
    title: "My Skills",
    subtitle: "Technical Expertise",
    otherSkills: "Other Skills & Technologies"
  },
  projects: {
    title: "My Work",
    subtitle: "Featured Projects",
    viewAll: "View All Projects"
  },
  achievements: {
    title: "Recognition",
    subtitle: "Key Achievements"
  },
  experience: {
    title: "My Journey",
    subtitle: "Experience Timeline",
    downloadResume: "Download Full Resume"
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Contact Me",
    letsTalk: "Let's Talk",
    intro: "Have a project in mind or want to discuss a potential collaboration? I'm always open to new opportunities and interesting challenges.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    connectWithMe: "Connect With Me",
    sendMessage: "Send A Message",
    name: "Name",
    subject: "Subject",
    message: "Message",
    send: "Send Message"
  },
  footer: {
    rights: "© 2023 All Rights Reserved",
    madeWith: "Made with ❤️ by"
  }
};

// Vietnamese translations
const viTranslations = {
  nav: {
    about: "Giới thiệu",
    skills: "Kỹ năng",
    projects: "Dự án",
    achievements: "Thành tựu",
    experience: "Kinh nghiệm",
    contact: "Liên hệ"
  },
  hero: {
    contactMe: "Liên hệ",
    viewProjects: "Xem dự án"
  },
  about: {
    title: "Giới thiệu",
    subtitle: "Tôi là ai",
    personalInfo: "Thông tin cá nhân",
    fullName: "Họ tên",
    dob: "Ngày sinh",
    location: "Địa điểm",
    email: "Email",
    yearsExperience: "Năm kinh nghiệm",
    projectsCompleted: "Dự án hoàn thành",
    happyClients: "Khách hàng hài lòng",
    myStory: "Câu chuyện của tôi",
    letWorkTogether: "Hãy làm việc cùng nhau"
  },
  skills: {
    title: "Kỹ năng",
    subtitle: "Chuyên môn kỹ thuật",
    otherSkills: "Các kỹ năng & công nghệ khác"
  },
  projects: {
    title: "Dự án",
    subtitle: "Dự án nổi bật",
    viewAll: "Xem tất cả dự án"
  },
  achievements: {
    title: "Thành tựu",
    subtitle: "Thành tựu nổi bật"
  },
  experience: {
    title: "Hành trình",
    subtitle: "Lịch sử kinh nghiệm",
    downloadResume: "Tải CV đầy đủ"
  },
  contact: {
    title: "Liên hệ",
    subtitle: "Kết nối",
    letsTalk: "Hãy trò chuyện",
    intro: "Bạn có dự án trong đầu hoặc muốn thảo luận về hợp tác tiềm năng? Tôi luôn sẵn sàng cho những cơ hội mới và những thách thức thú vị.",
    email: "Email",
    phone: "Điện thoại",
    location: "Địa điểm",
    connectWithMe: "Kết nối với tôi",
    sendMessage: "Gửi tin nhắn",
    name: "Tên",
    subject: "Tiêu đề",
    message: "Nội dung",
    send: "Gửi tin nhắn"
  },
  footer: {
    rights: "© 2023 Đã đăng ký bản quyền",
    madeWith: "Được tạo với ❤️ bởi"
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      vi: { translation: viTranslations }
    },
    lng: typeof window !== "undefined" ? localStorage.getItem("language") || "en" : "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
