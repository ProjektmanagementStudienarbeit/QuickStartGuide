document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            const isExpanded = mainMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            menuToggle.classList.toggle('active', isExpanded); // Für Hamburger-Animation
        });

        // Menü schließen, wenn ein Link geklickt wird (optional, gut für Single-Page)
        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainMenu.classList.contains('active')) {
                    mainMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                     menuToggle.classList.remove('active');
                }
            });
        });
    }


    // --- Language Switcher ---
    const langSelect = document.getElementById('lang-select');
    const body = document.body;
    const allLangElements = document.querySelectorAll('.lang'); // Alle Elemente mit Sprachkennung

    function updateLanguage(selectedLang) {
        if (!selectedLang) return;

        console.log("Switching language to:", selectedLang); // Debugging

        // Setze data-lang Attribut am Body
        body.setAttribute('data-lang', selectedLang);

        // Aktualisiere die Sichtbarkeit basierend auf der CSS-Regel
        // Die CSS kümmert sich jetzt um das Anzeigen/Verstecken basierend auf body[data-lang]
        // Kein manuelles Loopen und Anzeigen/Verstecken hier mehr nötig, wenn CSS richtig aufgesetzt ist.

        // Update document language attribute
        document.documentElement.lang = selectedLang;

         // Spezielle Anpassungen, falls nötig (z.B. für Formular-Labels, falls nicht via Span gelöst)
         const langLabel = document.querySelector('label[for="lang-select"]');
         if (langLabel) {
            // Hier könntest du den Text des Labels ändern, aber es ist als sr-only definiert
            // Beispiel: langLabel.textContent = getLabelText(selectedLang);
         }

         console.log("Body data-lang set to:", body.getAttribute('data-lang')); // Verify
    }

     // Initial language setup on page load
    const initialLang = langSelect.value || 'de'; // Fallback auf Deutsch
    updateLanguage(initialLang);


    if (langSelect) {
        langSelect.addEventListener('change', (event) => {
            updateLanguage(event.target.value);
        });
    }

    // --- Footer: Current Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});

// Optional: Funktion zum Holen von Label-Texten (falls nötig)
// function getLabelText(langCode) {
//     const labels = {
//         de: 'Sprache wählen',
//         en: 'Select language',
//         hi: 'भाषा चुनें',
//         ar: 'اختار اللغة',
//         es: 'Seleccionar idioma',
//         zh: '选择语言'
//     };
//     return labels[langCode] || labels.en;
// }
