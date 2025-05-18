
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Hero
    "hero.welcome": "Welcome to RANI Studio",
    "hero.title": "We Design Brands That Matter",
    "hero.subtitle": "Creating exceptional digital experiences that elevate your brand and drive meaningful connections with your audience.",
    "hero.getStarted": "Get Started",
    "hero.viewWork": "View Our Work",
    
    // Services
    "services.title": "Our Services",
    "services.subtitle": "We offer comprehensive digital solutions to help your business stand out in today's competitive landscape.",
    "services.web.title": "Web Design & Development",
    "services.web.description": "We create stunning, responsive websites that combine visual appeal with seamless functionality to deliver exceptional user experiences.",
    "services.web.feature1": "Custom Website Design",
    "services.web.feature2": "Responsive Development",
    "services.web.feature3": "CMS Integration",
    "services.web.feature4": "E-commerce Solutions",
    
    "services.seo.title": "SEO Optimization",
    "services.seo.description": "Boost your online visibility and drive organic traffic with our data-driven SEO strategies tailored to your business goals.",
    "services.seo.feature1": "Keyword Research",
    "services.seo.feature2": "On-page Optimization",
    "services.seo.feature3": "Technical SEO",
    "services.seo.feature4": "Performance Analytics",
    
    "services.visual.title": "Visual Identity Design",
    "services.visual.description": "We craft distinctive brand identities that capture your essence and create meaningful connections with your audience.",
    "services.visual.feature1": "Logo Design",
    "services.visual.feature2": "Brand Guidelines",
    "services.visual.feature3": "Marketing Collateral",
    "services.visual.feature4": "Brand Strategy",
    
    // Portfolio
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle": "Take a look at some of our recent projects and see how we've helped our clients achieve their goals.",
    "portfolio.viewProject": "View Project",
    "portfolio.webDesign": "Web Design",
    "portfolio.brandIdentity": "Brand Identity",
    
    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Ready to elevate your brand? Contact us to discuss your project.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.formName": "Your Name",
    "contact.formEmail": "Email Address",
    "contact.formSubject": "Subject",
    "contact.formMessage": "Message",
    "contact.formNamePlaceholder": "John Doe",
    "contact.formEmailPlaceholder": "john@example.com",
    "contact.formSubjectPlaceholder": "How can we help you?",
    "contact.formMessagePlaceholder": "Tell us about your project...",
    "contact.formSubmit": "Send Message",
    "contact.formSending": "Sending...",
    "contact.toast.title": "Message sent!",
    "contact.toast.description": "We'll get back to you as soon as possible."
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.work": "أعمالنا",
    "nav.about": "عن راني",
    "nav.contact": "اتصل بنا",
    
    // Hero
    "hero.welcome": "مرحباً بك في استوديو راني",
    "hero.title": "نصمم علامات تجارية مؤثرة",
    "hero.subtitle": "نقدم تجارب رقمية استثنائية ترفع من قيمة علامتك التجارية وتبني علاقات هادفة مع جمهورك",
    "hero.getStarted": "ابدأ الآن",
    "hero.viewWork": "تصفح أعمالنا",
    
    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "نقدم حلولاً رقمية شاملة لمساعدة عملك على التميز في سوق تنافسي",
    "services.web.title": "تصميم وتطوير الويب",
    "services.web.description": "نقوم بإنشاء مواقع ويب رائعة تجمع بين المظهر الجذاب والأداء السلس لتقديم تجارب استخدام استثنائية",
    "services.web.feature1": "تصميم موقع مخصص",
    "services.web.feature2": "تطوير متجاوب",
    "services.web.feature3": "تكامل نظام إدارة المحتوى",
    "services.web.feature4": "حلول التجارة الإلكترونية",
    
    "services.seo.title": "تحسين محركات البحث",
    "services.seo.description": "عزز ظهورك على الإنترنت وزيادة الزيارات العضوية من خلال استراتيجيات تحسين محركات البحث المخصصة لأهدافك",
    "services.seo.feature1": "بحث الكلمات المفتاحية",
    "services.seo.feature2": "تحسين الصفحات",
    "services.seo.feature3": "تحسين تقني",
    "services.seo.feature4": "تحليلات الأداء",
    
    "services.visual.title": "تصميم الهوية البصرية",
    "services.visual.description": "نقوم بتصميم هويات فريدة تعبر عن جوهر علامتك التجارية وتخلق روابط مؤثرة مع جمهورك",
    "services.visual.feature1": "تصميم الشعار",
    "services.visual.feature2": "إرشادات العلامة التجارية",
    "services.visual.feature3": "المواد التسويقية",
    "services.visual.feature4": "استراتيجية العلامة التجارية",
    
    // Portfolio
    "portfolio.title": "معرض أعمالنا",
    "portfolio.subtitle": "تصفح بعضاً من مشاريعنا الحديثة وتعرف على كيفية مساعدتنا لعملائنا لتحقيق أهدافهم",
    "portfolio.viewProject": "عرض المشروع",
    "portfolio.webDesign": "تصميم الويب",
    "portfolio.brandIdentity": "هوية العلامة التجارية",
    
    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "هل أنت جاهز لتطوير علامتك التجارية؟ اتصل بنا لمناقشة مشروعك",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف",
    "contact.location": "الموقع",
    "contact.formName": "الاسم",
    "contact.formEmail": "البريد الإلكتروني",
    "contact.formSubject": "الموضوع",
    "contact.formMessage": "الرسالة",
    "contact.formNamePlaceholder": "محمد أحمد",
    "contact.formEmailPlaceholder": "mohamed@example.com",
    "contact.formSubjectPlaceholder": "كيف يمكننا مساعدتك؟",
    "contact.formMessagePlaceholder": "أخبرنا عن مشروعك...",
    "contact.formSubmit": "إرسال الرسالة",
    "contact.formSending": "جاري الإرسال...",
    "contact.toast.title": "تم إرسال الرسالة!",
    "contact.toast.description": "سنرد عليك في أقرب وقت ممكن."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
