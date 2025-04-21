document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('languageSelector');
    const htmlElement = document.documentElement;

    // --- Translations Object ---
    // Keys match 'data-key' attributes in HTML
    const translations = {
        en: {
            page_title: "Simple Elegant Website",
            language_label: "Select Language:",
            welcome_title: "Welcome to Our Elegant Site",
            welcome_text: "This is a simple demonstration of a website featuring clean design, animations, and multi-language support.",
            learn_more_button: "Learn More",
            features_title: "Features",
            features_text: "Discover the subtle animations and the ease of switching languages using the selector above.",
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
            footer_text: "© 2023 您的公司名称。版权所有。"
        }
        // Add other languages here following the same pattern
    };

    // --- Function to Update Text Content ---
    function updateLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Translations for language "${lang}" not found. Defaulting to English.`);
            lang = 'en'; // Fallback to English
        }

        // Set language attribute and direction on <html> element
        htmlElement.setAttribute('lang', lang);
        htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update all elements with data-key attribute
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            // Use innerHTML for keys that might contain HTML entities like ©
            if (key === 'footer_text') {
                 element.innerHTML = translations[lang][key] || translations['en'][key];
            } else {
                 element.textContent = translations[lang][key] || translations['en'][key]; // Fallback to English key if specific translation missing
            }

        });

         // Persist selected language
         localStorage.setItem('preferredLanguage', lang);
         // Ensure the dropdown shows the currently selected language (useful on initial load)
         languageSelector.value = lang;
    }

    // --- Event Listener for Language Change ---
    languageSelector.addEventListener('change', (event) => {
        updateLanguage(event.target.value);
    });

    // --- Initial Language Setup ---
    // Check local storage first, then browser default, then fallback to 'en'
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0]; // Get primary language code (e.g., 'en' from 'en-US')

    let initialLang = 'en'; // Default

    if (savedLang && translations[savedLang]) {
        initialLang = savedLang;
    } else if (translations[browserLang]) {
        // Use browser's preferred language if translations exist
        initialLang = browserLang;
    }

    // Set initial language on page load
    updateLanguage(initialLang);

});
