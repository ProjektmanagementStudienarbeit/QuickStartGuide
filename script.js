document.addEventListener('DOMContentLoaded', () => {

    // Select essential elements
    const languageSelector = document.getElementById('languageSelector');
    const htmlElement = document.documentElement;
    // Note: Getting elements here is fine, but they are re-queried in updateLanguage for safety.
    let translatableElements = document.querySelectorAll('[data-key]');

    // --- Basic Check ---
    if (!languageSelector) {
        console.error("Error: Language selector element with ID 'languageSelector' not found.");
        return; // Stop execution if selector is missing
    }
    if (!htmlElement) {
        console.error("Error: HTML document element not found.");
        return;
    }
    if (translatableElements.length === 0) {
        // This might happen briefly before initial language sets if script runs very early
        console.warn("Warning: No elements with 'data-key' attribute initially found.");
    }


    // --- Translations Object (Keep this updated) ---
    const translations = {
         en: {
            page_title: "Simple Elegant Website",
            language_label: "Select Language:",
            welcome_title: "Welcome to Our Elegant Site",
            welcome_text: "This is a simple demonstration of a website featuring clean design, animations, and multi-language support.",
            learn_more_button: "Learn More",
            features_title: "Features",
            features_text: "Discover the subtle animations and the ease of switching languages using the selector above.",
            quickstart_title: "Quick Start Guide",
            box_welcome_title: "Welcome to the University",
            box_studies_title: "Studies & Organization",
            box_city_life_title: "Life in the City",
            box_links_title: "Useful Links",
            box_contacts_title: "Contacts",
            box_leisure_title: "Leisure and Sports",
            box_arrival_title: "Arrival",
            box_language_title: "Language",
            box_finance_title: "Finances",
            footer_text: "© 2023 Your Company Name. All rights reserved."
        },
        de: {
            page_title: "Einfache Elegante Webseite",
            language_label: "Sprache auswählen:",
            welcome_title: "Willkommen auf unserer eleganten Seite",
            welcome_text: "Dies ist eine einfache Demonstration einer Website mit sauberem Design, Animationen und Mehrsprachenunterstützung.",
            learn_more_button: "Mehr erfahren",
            features_title: "Funktionen",
            features_text: "Entdecken Sie die subtilen Animationen und die Leichtigkeit des Sprachwechsels mit der obigen Auswahl.",
            quickstart_title: "Quick Start Guide",
            box_welcome_title: "Willkommen an der Hochschule",
            box_studies_title: "Studium & Organisation",
            box_city_life_title: "Leben in der Stadt",
            box_links_title: "Nützliche Links",
            box_contacts_title: "Kontakte",
            box_leisure_title: "Freizeit und Sport",
            box_arrival_title: "Anreise",
            box_language_title: "Sprache",
            box_finance_title: "Finanzielles",
            footer_text: "© 2023 Ihr Firmenname. Alle Rechte vorbehalten."
        },
        hi: {
            page_title: "सरल सुरुचिपूर्ण वेबसाइट",
            language_label: "भाषा चुनें:",
            welcome_title: "हमारी सुरुचिपूर्ण साइट पर आपका स्वागत है",
            welcome_text: "यह स्वच्छ डिजाइन, एनिमेशन और बहु-भाषा समर्थन वाली वेबसाइट का एक सरल प्रदर्शन है।",
            learn_more_button: "और अधिक जानें",
            features_title: "विशेषताएँ",
            features_text: "ऊपर दिए गए चयनकर्ता का उपयोग करके सूक्ष्म एनिमेशन और भाषाओं को बदलने में आसानी का पता लगाएं।",
            quickstart_title: "त्वरित आरंभ गाइड",
            box_welcome_title: "विश्वविद्यालय में आपका स्वागत है",
            box_studies_title: "अध्ययन और संगठन",
            box_city_life_title: "शहर में जीवन",
            box_links_title: "उपयोगी लिंक",
            box_contacts_title: "संपर्क",
            box_leisure_title: "अवकाश और खेल",
            box_arrival_title: "आगमन",
            box_language_title: "भाषा",
            box_finance_title: "वित्त",
            footer_text: "© 2023 आपकी कंपनी का नाम। सर्वाधिकार सुरक्षित।"
        },
        ar: {
            page_title: "موقع ويب بسيط وأنيق",
            language_label: "اختار اللغة:",
            welcome_title: "مرحبًا بك في موقعنا الأنيق",
            welcome_text: "هذا عرض توضيحي بسيط لموقع ويب يتميز بتصميم نظيف ورسوم متحركة ودعم متعدد اللغات.",
            learn_more_button: "اعرف المزيد",
            features_title: "الميزات",
            features_text: "اكتشف الرسوم المتحركة الدقيقة وسهولة تبديل اللغات باستخدام المحدد أعلاه.",
            quickstart_title: "دليل البدء السريع",
            box_welcome_title: "مرحبا بكم في الجامعة",
            box_studies_title: "الدراسة والتنظيم",
            box_city_life_title: "الحياة في المدينة",
            box_links_title: "روابط مفيدة",
            box_contacts_title: "جهات الاتصال",
            box_leisure_title: "الترفيه والرياضة",
            box_arrival_title: "الوصول",
            box_language_title: "اللغة",
            box_finance_title: "الأمور المالية",
            footer_text: "© 2023 اسم شركتك. كل الحقوق محفوظة."
        },
        es: {
            page_title: "Sitio Web Simple y Elegante",
            language_label: "Selecciona el idioma:",
            welcome_title: "Bienvenido a Nuestro Sitio Elegante",
            welcome_text: "Esta es una demostración simple de un sitio web con diseño limpio, animaciones y soporte multilingüe.",
            learn_more_button: "Aprende más",
            features_title: "Características",
            features_text: "Descubre las sutiles animaciones y la facilidad de cambiar de idioma usando el selector de arriba.",
            quickstart_title: "Guía de Inicio Rápido",
            box_welcome_title: "Bienvenido a la Universidad",
            box_studies_title: "Estudios y Organización",
            box_city_life_title: "Vida en la Ciudad",
            box_links_title: "Enlaces Útiles",
            box_contacts_title: "Contactos",
            box_leisure_title: "Ocio y Deporte",
            box_arrival_title: "Llegada",
            box_language_title: "Idioma",
            box_finance_title: "Finanzas",
            footer_text: "© 2023 Nombre de tu Compañía. Todos los derechos reservados."
        },
        zh: {
            page_title: "简单优雅的网站",
            language_label: "选择语言:",
            welcome_title: "欢迎来到我们优雅的网站",
            welcome_text: "这是一个具有简洁设计、动画和多语言支持的网站的简单演示。",
            learn_more_button: "了解更多",
            features_title: "特点",
            features_text: "发现微妙的动画以及使用上面的选择器轻松切换语言。",
            quickstart_title: "快速入门指南",
            box_welcome_title: "欢迎来到大学",
            box_studies_title: "学习与组织",
            box_city_life_title: "城市生活",
            box_links_title: "有用链接",
            box_contacts_title: "联系方式",
            box_leisure_title: "休闲与运动",
            box_arrival_title: "抵达",
            box_language_title: "语言",
            box_finance_title: "财务",
            footer_text: "© 2023 您的公司名称。版权所有。"
        }
    };

    // --- Function to Update Text Content ---
    function updateLanguage(lang) {
        let selectedTranslations = translations[lang];

        // Fallback logic if selected language or English is missing
        if (!selectedTranslations) {
            console.warn(`Translations for language "${lang}" not found. Defaulting to English.`);
            lang = 'en';
            selectedTranslations = translations[lang];
             if (!selectedTranslations) {
                console.error("CRITICAL Error: English translations are missing. Cannot update language.");
                return; // Stop if even English is missing
             }
        }

        // Set language attribute and direction on <html> element
        htmlElement.setAttribute('lang', lang);
        htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Re-query elements inside the function to get the latest list
        const currentTranslatableElements = document.querySelectorAll('[data-key]');
        if (currentTranslatableElements.length === 0) {
             console.warn("Warning: No elements with [data-key] found during updateLanguage call!");
        }

        // Update all elements with data-key attribute
        currentTranslatableElements.forEach(element => {
            const key = element.getAttribute('data-key');
            // Use selected language translation or fallback to English
            let translation = selectedTranslations[key];
            let usedFallback = false;

            if (translation === undefined) {
                const fallbackTranslation = translations['en'] ? translations['en'][key] : undefined;
                if (fallbackTranslation !== undefined) {
                    translation = fallbackTranslation;
                    usedFallback = true;
                    // Only warn if the intended language wasn't English already
                    if (lang !== 'en') {
                        console.warn(`Translation missing for key "${key}" in language "${lang}". Using English fallback.`);
                    }
                } else {
                    console.error(`Error: Translation missing for key "${key}" in both "${lang}" and English fallback.`);
                    translation = `[MISSING KEY: ${key}]`; // Show placeholder clearly
                }
            }

            // Apply the translation (either original or fallback)
            // Use innerHTML mainly for elements known to contain HTML (like footer) or are links (A tags)
            if (key === 'footer_text' || element.tagName === 'A') {
                 element.innerHTML = translation;
            } else {
                 element.textContent = translation;
            }
        });

         // Persist selected language in localStorage
         try {
            localStorage.setItem('preferredLanguage', lang);
         } catch (e) {
            console.warn("Could not save preferred language to localStorage:", e);
         }

         // Ensure the dropdown reflects the currently active language
         if (languageSelector.value !== lang) {
             languageSelector.value = lang;
         }
         // console.log(`Language updated to: ${lang}`); // Optional success log
    }

    // --- Event Listener for Language Change ---
    languageSelector.addEventListener('change', (event) => {
        updateLanguage(event.target.value);
    });

    // --- Initial Language Setup ---
    function getInitialLanguage() {
        let preferredLang = 'en'; // Default fallback
        try {
            // 1. Check Local Storage
            const savedLang = localStorage.getItem('preferredLanguage');
            if (savedLang && translations[savedLang]) {
                return savedLang;
            }
            // 2. Check Browser Language Preference (primary language)
            const browserLang = navigator.language.split('-')[0];
            if (translations[browserLang]) {
                return browserLang;
            }
        } catch (e) {
            // Handle potential SecurityError in sandboxed environments or if localStorage is disabled
            console.warn("Could not access localStorage or navigator.language:", e);
        }
        return preferredLang; // Default to English if others fail
    }

    // --- Initialize ---
    const initialLang = getInitialLanguage();
    updateLanguage(initialLang); // Set language on initial page load

});
