document.addEventListener('DOMContentLoaded', function() {

    // --- AOS Initialization ---
    AOS.init({
        duration: 800, // Animation duration
        easing: 'ease-in-out', // Animation timing function
        once: true, // Whether animation should happen only once - while scrolling down
        offset: 100 // Offset (in px) from the original trigger point
    });

    // --- Sticky Header ---
    const header = document.getElementById('header');
    if (header) {
        const sticky = header.offsetTop; // Not really needed if fixed, but good practice
        const scrollCallBack = window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) { // Add scrolled class after scrolling 50px
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- i18next Initialization ---
    const i18nextInstance = i18next
        .use(i18nextHttpBackend)
        .use(i18nextBrowserLanguageDetector);

    i18nextInstance.init({
        fallbackLng: 'en', // Default language
        debug: true, // Set to false for production
        ns: ['translation'], // Namespace for translation files
        defaultNS: 'translation',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'], // Cache detected language
        }
    }, (err, t) => {
        if (err) return console.error('i18next initialization failed', err);
        console.log('i18next initialized');
        updateContent(); // Initial content update
        setupLanguageSwitcher(); // Setup switcher after init
    });

    // --- Language Switcher Logic ---
    function setupLanguageSwitcher() {
        const langSelect = document.getElementById('lang-select');
        if (langSelect) {
            // Set initial value of dropdown based on detected language
            langSelect.value = i18nextInstance.language.split('-')[0]; // Use base language (e.g., 'en' from 'en-US')

            langSelect.addEventListener('change', (event) => {
                const selectedLang = event.target.value;
                i18nextInstance.changeLanguage(selectedLang, (err, t) => {
                    if (err) return console.error('Error changing language:', err);
                    updateContent(); // Update content after language change
                });
            });
        }
    }

    // --- Function to Update Content ---
    function updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) {
                // Check if it's a placeholder attribute
                if (el.hasAttribute('data-i18n-placeholder')) {
                    el.setAttribute('placeholder', i18nextInstance.t(key));
                } else {
                    el.innerHTML = i18nextInstance.t(key); // Use innerHTML to allow basic tags if needed
                }
            }
        });

        // Update elements that only have placeholder translation keys
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]:not([data-i18n])');
         placeholderElements.forEach(el => {
             const key = el.getAttribute('data-i18n-placeholder');
              if (key) {
                   el.setAttribute('placeholder', i18nextInstance.t(key));
              }
         });


        // Update page title
        const titleKey = document.title.getAttribute('data-i18n');
         if(titleKey) {
             document.title = i18nextInstance.t(titleKey);
         }


        // Update html lang attribute
        document.documentElement.lang = i18nextInstance.language;
    }

    // --- Smooth Scroll for Nav Links (Optional but nice) ---
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate position considering fixed header height
                const headerOffset = document.getElementById('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

}); // End DOMContentLoaded
