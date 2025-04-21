document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle (bleibt gleich) ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    if (menuToggle && mainMenu) {
        // ... (Code von vorher) ...
    }

    // --- Language Switcher (bleibt gleich) ---
    const langSelect = document.getElementById('lang-select');
    const body = document.body;
    if (langSelect) {
        function updateLanguage(selectedLang) {
             // ... (Code von vorher) ...
            body.setAttribute('data-lang', selectedLang);
            document.documentElement.lang = selectedLang;
        }
        const initialLang = langSelect.value || 'de';
        updateLanguage(initialLang);
        langSelect.addEventListener('change', (event) => {
            updateLanguage(event.target.value);
        });
    }

    // --- Footer: Current Year (bleibt gleich) ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }


    // --- NEU: Scroll Animation Observer ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Animation nur einmal auslösen
                    observer.unobserve(entry.target);
                }
                // Optional: Zum Re-Animieren wenn Element wieder aus dem Viewport geht
                // else {
                //     entry.target.classList.remove('active');
                // }
            });
        }, {
            // Optionen für den Observer
            threshold: 0.1 // Element muss zu 10% sichtbar sein
            // rootMargin: '0px 0px -50px 0px' // Trigger etwas früher/später auslösen
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // --- Optional: Smooth Scroll für interne Links (falls nicht schon per CSS html {scroll-behavior}) ---
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if(targetElement) {
    //              targetElement.scrollIntoView({
    //                  behavior: 'smooth'
    //              });
    //         }
    //     });
    // });

}); // Ende DOMContentLoaded
