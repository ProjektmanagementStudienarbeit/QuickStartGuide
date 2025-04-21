// Wait for the DOM to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed.'); // Checkpoint 1

    // Select essential elements
    const languageSelector = document.getElementById('languageSelector');
    const htmlElement = document.documentElement;
    const translatableElements = document.querySelectorAll('[data-key]');

    // --- Basic Check ---
    if (!languageSelector) {
        console.error("CRITICAL Error: Language selector element with ID 'languageSelector' not found.");
        return; // Stop execution if selector is missing
    } else {
        console.log('Language selector found:', languageSelector); // Checkpoint 2
    }

    if (!htmlElement) {
        console.error("CRITICAL Error: HTML element not found.");
        return;
    } else {
         console.log('HTML element found:', htmlElement); // Checkpoint 3
    }


    if (translatableElements.length === 0) {
        console.warn("Warning: No elements with 'data-key' attribute found for translation.");
    } else {
        console.log(`Found ${translatableElements.length} elements with [data-key].`); // Checkpoint 4
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
        console.log(`--- Attempting to update language to: ${lang} ---`); // Checkpoint 5

        let selectedTranslations = translations[lang]; // Use let to allow reassignment

        if (!selectedTranslations) {
            console.warn(`Translations for language "${lang}" not found. Defaulting to English.`);
            lang = 'en'; // Fallback language
             selectedTranslations = translations[lang];
             if (!selectedTranslations) { // Check if English is missing too
                console.error("CRITICAL Error: English translations are missing. Cannot update language.");
                return; // Stop if even English is missing
             }
        }

        // Set language attribute and direction on <html> element
        try {
            htmlElement.setAttribute('lang', lang);
            htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
             console.log(`Set HTML lang to "${lang}" and dir to "${htmlElement.getAttribute('dir')}".`); // Checkpoint 6
        } catch (e) {
            console.error("Error setting lang/dir attributes:", e);
        }


        // Update all elements with data-key attribute
        // **Re-query the elements INSIDE the function to ensure they exist**
        const currentTranslatableElements = document.querySelectorAll('[data-key]');
        console.log(`Updating ${currentTranslatableElements.length} elements...`); // Checkpoint 7 (using current query)
        let updateCount = 0;
        let missingKeyCount = 0;

        if (currentTranslatableElements.length === 0) {
             console.warn("No elements with data-key found during update attempt!");
        }

        currentTranslatableElements.forEach((element, index) => {
            const key = element.getAttribute('data-key');
            const translation = selectedTranslations ? selectedTranslations[key] : undefined;

            if (translation !== undefined) {
                // Use innerHTML for footer, anchor tags, or specifically needed keys
                 if (key === 'footer_text' || element.tagName === 'A') {
                     element.innerHTML = translation;
                 } else {
                     element.textContent = translation;
                 }
                 // console.log(`  [${index}] Updated element with key "${key}"`); // Optional: very verbose log
                updateCount++;
            } else {
                 const fallbackTranslation = translations['en'][key];
                 if(fallbackTranslation !== undefined) {
                     console.warn(`  [${index}] Translation missing for key "${key}" in "${lang}". Using English fallback.`);
                     if (key === 'footer_text' || element.tagName === 'A') {
                         element.innerHTML = fallbackTranslation;
                     } else {
                        element.textContent = fallbackTranslation;
                     }
                    updateCount++; // Still counts as an update (using fallback)
                 } else {
                      console.error(`  [${index}] CRITICAL Error: Translation missing for key "${key}" in both "${lang}" and English fallback.`);
                      element.textContent = `[MISSING: ${key}]`; // Show placeholder clearly
                      missingKeyCount++;
                 }
            }
        });
        console.log(`Finished updating elements. Successful updates (incl. fallbacks): ${updateCount}. Missing keys: ${missingKeyCount}.`); // Checkpoint 8

         // Persist selected language
         try {
            localStorage.setItem('preferredLanguage', lang);
            console.log(`Saved preferred language "${lang}" to localStorage.`); // Checkpoint 9
         } catch (e) {
            console.warn("Could not save preferred language to localStorage:", e);
         }

         // Ensure the dropdown shows the currently selected language
         if (languageSelector.value !== lang) {
            console.log(`Updating selector value from "${languageSelector.value}" to "${lang}".`);
            languageSelector.value = lang;
         }
         console.log(`--- Language update process finished for: ${lang} ---`); // Checkpoint 10
    }

    // --- Event Listener for Language Change ---
    console.log('Adding event listener for language change...'); // Checkpoint 11
    languageSelector.addEventListener('change', (event) => {
        console.log(`>>> Language selector CHANGED to: ${event.target.value}`); // Checkpoint 12
        updateLanguage(event.target.value);
    });
    console.log('Event listener added.'); // Checkpoint 13

    // --- Initial Language Setup ---
    function getInitialLanguage() {
        console.log('Determining initial language...'); // Checkpoint 14
        let preferredLang = 'en'; // Default fallback
        try {
            // 1. Check Local Storage
            const savedLang = localStorage.getItem('preferredLanguage');
            if (savedLang && translations[savedLang]) {
                console.log(`Found saved language in localStorage: ${savedLang}`);
                return savedLang;
            }

            // 2. Check Browser Language
            const browserLang = navigator.language.split('-')[0]; // Get 'en' from 'en-US'
            if (translations[browserLang]) {
                 console.log(`Using browser language: ${browserLang}`);
                return browserLang;
            }
        } catch (e) {
            console.warn("Could not access localStorage or navigator.language:", e);
        }

         console.log(`No saved or browser language found/valid. Using default: ${preferredLang}`);
        return preferredLang; // Default to English if others fail
    }

    // Set initial language on page load
    const initialLang = getInitialLanguage();
    console.log(`Initial language determined as: ${initialLang}`); // Checkpoint 15
    updateLanguage(initialLang); // Call initial update

});
console.log('script.js loaded and executing.'); // Checkpoint 0 (Very beginning)
