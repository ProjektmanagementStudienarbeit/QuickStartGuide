document.addEventListener('DOMContentLoaded', () => {

    // --- Essential Elements ---
    const languageSelector = document.getElementById('languageSelector');
    const htmlElement = document.documentElement;

    // --- Basic Checks ---
    if (!languageSelector) {
        console.error("CRITICAL: Language selector '#languageSelector' not found. Language switching disabled.");
        return; // Stop if selector is missing
    }
    if (!htmlElement) {
        console.error("CRITICAL: HTML element not found.");
        return; // Should not happen, but good practice
    }

    // --- Translations ---
    const translations = {
         en: {
            page_title: "OTH-AW QuickStart Guide",
            language_label: "Select Language:",
            welcome_title: "Welcome to the QuickStart Guide",
            welcome_text: "Your companion for a successful start at OTH Amberg-Weiden.",
            learn_more_button: "Get Started",
            quickstart_title: "Quick Start Guide Topics",
            box_welcome_title: "Welcome to the University",
            box_studies_title: "Studies & Organization",
            box_city_life_title: "Life in the City",
            box_links_title: "Useful Links",
            box_contacts_title: "Contacts",
            box_leisure_title: "Leisure and Sports",
            box_arrival_title: "Arrival",
            box_language_title: "Language",
            box_finance_title: "Finances",
            footer_text: "© 2024 OTH Amberg-Weiden. All rights reserved."
        },
        de: {
            page_title: "OTH-AW QuickStart Guide",
            language_label: "Sprache auswählen:",
            welcome_title: "Willkommen zum QuickStart Guide",
            welcome_text: "Ihr Begleiter für einen erfolgreichen Start an der OTH Amberg-Weiden.",
            learn_more_button: "Loslegen",
            quickstart_title: "Themen des QuickStart Guides",
            box_welcome_title: "Willkommen an der Hochschule",
            box_studies_title: "Studium & Organisation",
            box_city_life_title: "Leben in der Stadt",
            box_links_title: "Nützliche Links",
            box_contacts_title: "Kontakte",
            box_leisure_title: "Freizeit und Sport",
            box_arrival_title: "Anreise",
            box_language_title: "Sprache",
            box_finance_title: "Finanzielles",
            footer_text: "© 2024 OTH Amberg-Weiden. Alle Rechte vorbehalten."
        },
        hi: {
            page_title: "OTH-AW क्विकस्टार्ट गाइड",
            language_label: "भाषा चुनें:",
            welcome_title: "क्विकस्टार्ट गाइड में आपका स्वागत है",
            welcome_text: "OTH Amberg-Weiden में सफल शुरुआत के लिए आपका साथी।",
            learn_more_button: "शुरू हो जाओ",
            quickstart_title: "क्विक स्टार्ट गाइड विषय",
            box_welcome_title: "विश्वविद्यालय में आपका स्वागत है",
            box_studies_title: "अध्ययन और संगठन",
            box_city_life_title: "शहर में जीवन",
            box_links_title: "उपयोगी लिंक",
            box_contacts_title: "संपर्क",
            box_leisure_title: "अवकाश और खेल",
            box_arrival_title: "आगमन",
            box_language_title: "भाषा",
            box_finance_title: "वित्त",
            footer_text: "© 2024 OTH Amberg-Weiden। सर्वाधिकार सुरक्षित।"
        },
        ar: {
            page_title: "دليل البدء السريع OTH-AW",
            language_label: "اختار اللغة:",
            welcome_title: "مرحبًا بك في دليل البدء السريع",
            welcome_text: "رفيقك لبداية ناجحة في OTH Amberg-Weiden.",
            learn_more_button: "البدء",
            quickstart_title: "مواضيع دليل البدء السريع",
            box_welcome_title: "مرحبا بكم في الجامعة",
            box_studies_title: "الدراسة والتنظيم",
            box_city_life_title: "الحياة في المدينة",
            box_links_title: "روابط مفيدة",
            box_contacts_title: "جهات الاتصال",
            box_leisure_title: "الترفيه والرياضة",
            box_arrival_title: "الوصول",
            box_language_title: "اللغة",
            box_finance_title: "الأمور المالية",
            footer_text: "© 2024 OTH Amberg-Weiden. كل الحقوق محفوظة."
        },
        es: {
            page_title: "Guía de Inicio Rápido OTH-AW",
            language_label: "Selecciona el idioma:",
            welcome_title: "Bienvenido a la Guía de Inicio Rápido",
            welcome_text: "Tu compañero para un comienzo exitoso en OTH Amberg-Weiden.",
            learn_more_button: "Comenzar",
            quickstart_title: "Temas de la Guía de Inicio Rápido",
            box_welcome_title: "Bienvenido a la Universidad",
            box_studies_title: "Estudios y Organización",
            box_city_life_title: "Vida en la Ciudad",
            box_links_title: "Enlaces Útiles",
            box_contacts_title: "Contactos",
            box_leisure_title: "Ocio y Deporte",
            box_arrival_title: "Llegada",
            box_language_title: "Idioma",
            box_finance_title: "Finanzas",
            footer_text: "© 2024 OTH Amberg-Weiden. Todos los derechos reservados."
        },
        zh: {
            page_title: "OTH-AW 快速入门指南",
            language_label: "选择语言:",
            welcome_title: "欢迎使用快速入门指南",
            welcome_text: "您在 OTH Amberg-Weiden 成功起步的伴侣。",
            learn_more_button: "开始",
            quickstart_title: "快速入门指南主题",
            box_welcome_title: "欢迎来到大学",
            box_studies_title: "学习与组织",
            box_city_life_title: "城市生活",
            box_links_title: "有用链接",
            box_contacts_title: "联系方式",
            box_leisure_title: "休闲与运动",
            box_arrival_title: "抵达",
            box_language_title: "语言",
            box_finance_title: "财务",
            footer_text: "© 2024 OTH Amberg-Weiden。版权所有。"
        }
    };

    // --- Function to Update Page Language ---
    function updateLanguage(lang) {
        const currentTranslations = translations[lang] || translations['en']; // Fallback to English
        const englishTranslations = translations['en']; // Reference for missing keys

        if (!currentTranslations) {
             console.error("CRITICAL: English translations are missing. Cannot proceed.");
             return;
        }
        // Fallback notification for developers
        if (!translations[lang] && lang !== 'en') {
            console.warn(`Language '${lang}' not found, falling back to English.`);
        }

        // Update HTML attributes
        htmlElement.lang = lang;
        htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update text content
        const elementsToTranslate = document.querySelectorAll('[data-key]');
        elementsToTranslate.forEach(element => {
            const key = element.dataset.key; // Use dataset property
            let text = currentTranslations[key];

            // If key missing in current language, try English fallback
            if (text === undefined && lang !== 'en' && englishTranslations) {
                text = englishTranslations[key];
                if (text !== undefined) {
                     console.warn(`Key '${key}' missing in language '${lang}', using English fallback.`);
                }
            }

            // If still missing, show error placeholder
            if (text === undefined) {
                text = `[MISSING KEY: ${key}]`;
                console.error(`Key '${key}' missing in both '${lang}' and English.`);
            }

            // Apply text (prefer textContent, use innerHTML for specific cases)
            if (key === 'footer_text' || element.tagName === 'A') {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        });

        // Update dropdown selection
        if (languageSelector.value !== lang) {
            languageSelector.value = lang;
        }

        // Save preference
        try {
            localStorage.setItem('preferredLanguage', lang);
        } catch (e) {
            console.warn("Could not save language preference to localStorage:", e);
        }
    }

    // --- Function to Get Initial Language ---
    function getInitialLanguage() {
        try {
            const savedLang = localStorage.getItem('preferredLanguage');
            if (savedLang && translations[savedLang]) {
                return savedLang; // Use saved language if valid
            }

            const browserLang = navigator.language.split('-')[0];
            if (translations[browserLang]) {
                return browserLang; // Use browser language if available
            }
        } catch (e) {
            console.warn("Could not access localStorage/navigator.language:", e);
        }
        return 'de'; // Default to German if nothing else found
    }

    // --- Event Listener ---
    languageSelector.addEventListener('change', (event) => {
        updateLanguage(event.target.value);
    });

    // --- Initialization ---
    const initialLang = getInitialLanguage();
    updateLanguage(initialLang); // Set language on load

});
