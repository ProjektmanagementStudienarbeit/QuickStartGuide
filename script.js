document.addEventListener('DOMContentLoaded', () => {

    const languageSelector = document.getElementById('languageSelector');
    let translations = {}; // This will hold our language data

    // --- 1. Fetch translation data ---
    // Fetches the JSON file and stores it in the 'translations' variable.
    // This is done once when the page loads.
    async function loadTranslations() {
        try {
            const response = await fetch('languages.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            translations = await response.json();
            console.log("Translations loaded successfully.");
        } catch (error) {
            console.error("Could not load translations:", error);
        }
    }

    // --- 2. Set Language Function ---
    // This function applies the selected language to the page.
    function setLanguage(lang) {
        // Find all elements that have a 'data-key' attribute
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            // Check if the key exists in our translations and the selected language
            if (translations[key] && translations[key][lang]) {
                // Use innerHTML to allow for simple HTML tags like <br> or <a> in the JSON
                element.innerHTML = translations[key][lang];
            } else {
                console.warn(`Translation key not found: ${key} for language: ${lang}`);
            }
        });

        // Set the 'lang' and 'dir' attributes on the <html> element
        document.documentElement.lang = lang;
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }

        // Store the selected language in the browser's local storage
        localStorage.setItem('selectedLanguage', lang);
        // Update the dropdown to show the current language
        languageSelector.value = lang;
    }


    // --- 3. Initialize the page ---
    // This function runs when the page is first loaded.
    async function initializePage() {
        await loadTranslations(); // Wait for translations to be loaded

        // Check if a language was previously saved in local storage
        const savedLang = localStorage.getItem('selectedLanguage');

        if (savedLang) {
            setLanguage(savedLang);
        } else {
            // If no language is saved, try to use the browser's language
            // We only take the first two letters (e.g., 'en-US' becomes 'en')
            const browserLang = navigator.language.split('-')[0];
            // Check if the browser's language is one of our supported languages
            if (Object.keys(translations.language_label).includes(browserLang)) {
                setLanguage(browserLang);
            } else {
                // Fallback to English if the browser language is not supported
                setLanguage('en');
            }
        }
    }

    // --- 4. Event Listener ---
    // Listens for changes on the language selector dropdown.
    languageSelector.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    // --- Start the process ---
    initializePage();

});
