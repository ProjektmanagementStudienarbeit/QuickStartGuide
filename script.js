document.addEventListener('DOMContentLoaded', () => {

    const languageSelector = document.getElementById('languageSelector');
    let translations = {}; // This will hold our language data

    // --- 1. Fetch translation data ---
    async function loadTranslations() {
        try {
            const response = await fetch('languages.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            translations = await response.json();
        } catch (error) {
            console.error("Could not load translations:", error);
        }
    }

    // --- 2. Set Language Function ---
    function setLanguage(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[key] && translations[key][lang]) {
                element.innerHTML = translations[key][lang];
            }
        });

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem('selectedLanguage', lang);
        languageSelector.value = lang;
    }

    // --- 3. Initialize the page ---
    async function initializePage() {
        await loadTranslations();

        const savedLang = localStorage.getItem('selectedLanguage');
        const browserLang = navigator.language.split('-')[0];

        if (savedLang && translations.language_label[savedLang]) {
            setLanguage(savedLang);
        } else if (translations.language_label[browserLang]) {
            setLanguage(browserLang);
        } else {
            setLanguage('en');
        }
    }

    // --- 4. Event Listener ---
    languageSelector.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    // --- Start the process ---
    initializePage();
});
