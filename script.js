document.addEventListener('DOMContentLoaded', () => {
    const languageModal = document.getElementById('language-modal');
    const langButtons = document.querySelectorAll('.lang-button');
    const pageContent = document.getElementById('page-content');
    const changeLangBtn = document.getElementById('change-lang-btn');
    const yearSpan = document.getElementById('current-year');

    // Übersetzungen definieren
    const translations = {
        de: {
            page_title: "OTH Amberg-Weiden",
            lang_select_title: "Sprache auswählen",
            nav_studies: "Studium",
            nav_research: "Forschung",
            nav_university: "Hochschule",
            nav_international: "International",
            nav_contact: "Kontakt",
            hero_title: "Willkommen an der OTH Amberg-Weiden",
            hero_subtitle: "Innovativ. Interdisziplinär. International.",
            hero_cta: "Jetzt informieren!",
            about_title: "Über uns",
            about_text: "Die Ostbayerische Technische Hochschule Amberg-Weiden bietet zukunftsorientierte Studiengänge in Technik, Wirtschaft und Informatik. Praxisnähe und moderne Ausstattung zeichnen uns aus.",
            news_title: "Aktuelles",
            news1_title: "Neuer Masterstudiengang KI",
            news1_text: "Ab dem Wintersemester startet unser neuer Master im Bereich Künstliche Intelligenz...",
            news2_title: "Tag der offenen Tür",
            news2_text: "Besuchen Sie uns am Campus und lernen Sie die Hochschule kennen...",
            news3_title: "Forschungsprojekt erfolgreich",
            news3_text: "Ein weiteres innovatives Projekt im Bereich Erneuerbare Energien abgeschlossen...",
            footer_imprint: "Impressum",
            footer_privacy: "Datenschutz"
        },
        en: {
            page_title: "OTH Amberg-Weiden University",
            lang_select_title: "Select Language",
            nav_studies: "Studies",
            nav_research: "Research",
            nav_university: "University",
            nav_international: "International",
            nav_contact: "Contact",
            hero_title: "Welcome to OTH Amberg-Weiden",
            hero_subtitle: "Innovative. Interdisciplinary. International.",
            hero_cta: "Learn more now!",
            about_title: "About Us",
            about_text: "The East Bavarian Technical University Amberg-Weiden offers future-oriented study programs in technology, business, and computer science. Practical relevance and modern facilities distinguish us.",
            news_title: "Latest News",
            news1_title: "New Master's Program AI",
            news1_text: "Starting next winter semester, our new Master's program in Artificial Intelligence...",
            news2_title: "Open House Day",
            news2_text: "Visit us on campus and get to know the university...",
            news3_title: "Research Project Successful",
            news3_text: "Another innovative project in the field of renewable energies has been completed...",
            footer_imprint: "Imprint",
            footer_privacy: "Privacy Policy"
        }
    };

    // Funktion zum Setzen der Sprache
    const setLanguage = (lang) => {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found in translations.`);
            return;
        }

        document.documentElement.lang = lang; // Setzt das lang-Attribut im <html>-Tag

        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                // Unterscheiden, ob es sich um ein <title>-Tag oder andere handelt
                if (element.tagName === 'TITLE') {
                     document.title = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}".`);
            }
        });

        // Modal ausblenden nach Auswahl
        languageModal.classList.remove('show');

         // Optional: Sprache im Local Storage speichern für zukünftige Besuche
        localStorage.setItem('preferredLanguage', lang);
    };

    // Event Listener für Sprachauswahl-Buttons im Modal
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

     // Event Listener für den "Sprache ändern"-Button im Header
    changeLangBtn.addEventListener('click', () => {
        languageModal.classList.add('show'); // Modal wieder anzeigen
    });


    // Prüfen, ob eine Sprache im Local Storage gespeichert ist
    const preferredLanguage = localStorage.getItem('preferredLanguage');

    if (preferredLanguage && translations[preferredLanguage]) {
        // Gespeicherte Sprache direkt anwenden
        setLanguage(preferredLanguage);
    } else {
        // Ansonsten Modal anzeigen, um Sprache auszuwählen
        // Kurze Verzögerung für den Übergangseffekt
        setTimeout(() => {
             languageModal.classList.add('show');
        }, 100); // 100ms Verzögerung
    }

    // Aktuelles Jahr im Footer setzen
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
