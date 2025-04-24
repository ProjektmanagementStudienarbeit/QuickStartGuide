document.addEventListener('DOMContentLoaded', () => {

    // --- Essential Elements ---
    const languageSelector = document.getElementById('languageSelector');
    const htmlElement = document.documentElement;

    // --- Basic Checks ---
    if (!languageSelector) {
        console.error("CRITICAL: Language selector '#languageSelector' not found. Language switching disabled.");
        return;
    }
    if (!htmlElement) {
        console.error("CRITICAL: HTML element not found.");
        return;
    }

    // --- Translations ---
    const translations = {
         en: {
            // --- Index Page ---
            page_title: "OTH-AW QuickStart Guide",
            language_label: "Select Language:",
            welcome_title: "Welcome to the QuickStart Guide",
            welcome_text: "Your companion for a successful start at OTH Amberg-Weiden.",
            learn_more_button: "Get Started",
            oth_website_button: "To OTH Website", // Added Button
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
            footer_text: "© 2025 OTH Amberg-Weiden. All rights reserved.",

            // --- General Subpage ---
            back_to_main_link: "« Back to Overview",

            // Welcome Page
            page_title_welcome: "Welcome - QuickStart Guide",
            welcome_page_main_title: "Welcome to the University",
            welcome_page_sub1_title: "First Steps",
            welcome_page_sub1_text: "Placeholder text for the first steps after arriving at the university. This section will guide you through initial registration and orientation.",
            welcome_page_sub2_title: "Campus Overview",
            welcome_page_sub2_text: "Placeholder text describing the main campus areas, important buildings, and where to find key services like the library or cafeteria.",
            welcome_page_sub3_title: "Important Contacts",
            welcome_page_sub3_text: "Placeholder text listing initial important contact points, such as the International Office or student advisory services.",

            // Studies Page
            page_title_studies: "Studies - QuickStart Guide",
            studies_page_main_title: "Studies & Organization",
            studies_page_sub1_title: "Course Registration",
            studies_page_sub1_text: "Placeholder text about how and when to register for courses, deadlines, and related platforms (like Moodle or PRIMUSS). Important information about module selection.",
            studies_page_sub2_title: "Academic Calendar",
            studies_page_sub2_text: "Placeholder text explaining the semester structure, lecture periods, examination phases, holidays, and other important dates throughout the academic year.",
            studies_page_sub3_title: "Study Regulations",
            studies_page_sub3_text: "Placeholder text linking to or summarizing key study and examination regulations (Studien- und Prüfungsordnung - SPO). Understanding credits (ECTS) and module requirements.",

            // City Life Page
            page_title_city: "City Life - QuickStart Guide",
            city_page_main_title: "Life in the City (Amberg/Weiden)",
            city_page_sub1_title: "Accommodation",
            city_page_sub1_text: "Placeholder text about finding housing, different types of accommodation (dormitories, shared flats, private apartments), tips for the search, and the importance of city registration (Anmeldung).",
            city_page_sub2_title: "Transportation",
            city_page_sub2_text: "Placeholder text regarding public transport options within the city and region, information about the semester ticket (if applicable), cycling routes, and general mobility advice.",
            city_page_sub3_title: "Shopping & Daily Life",
            city_page_sub3_text: "Placeholder text covering essential aspects of daily life: where to buy groceries, opening hours, setting up a bank account, finding doctors and pharmacies, and other practical tips.",

            // Links Page
            page_title_links: "Links - QuickStart Guide",
            links_page_main_title: "Useful Links",
            links_page_sub1_title: "University Platforms",
            links_page_sub1_text: "Placeholder text providing direct links to essential university systems like the Moodle learning platform, the student webmail service, the PRIMUSS portal for administration, and the library catalogue (OPAC).",
            links_page_sub2_title: "Administrative & Support Links",
            links_page_sub2_text: "Placeholder text with links to the websites of the International Office, the Student Services (Studentenwerk - StW) for BAföG and housing, the Examination Office (Prüfungsamt), and student advisory services.",
            links_page_sub3_title: "City & Regional Links",
            links_page_sub3_text: "Placeholder text with links to the official websites of the cities of Amberg and Weiden, information on local public transport companies, and regional tourism portals.",

            // Contacts Page
            page_title_contacts: "Contacts - QuickStart Guide",
            contacts_page_main_title: "Important Contacts",
            contacts_page_sub1_title: "International Office",
            contacts_page_sub1_text: "Placeholder text providing key contact information for the International Office, including email address, phone number, office location, and typical consultation hours for international students.",
            contacts_page_sub2_title: "Faculty / Study Program Coordinator",
            contacts_page_sub2_text: "Placeholder text explaining how to find the contact details for your specific faculty's administration or the coordinator responsible for your particular study program for academic questions.",
            contacts_page_sub3_title: "Student Representatives (Fachschaft / StuV)",
            contacts_page_sub3_text: "Placeholder text with information on how to reach the student council (Studierendenvertretung - StuV) or your specific department's student representatives (Fachschaft) for peer support and advice.",

            // Leisure Page
            page_title_leisure: "Leisure - QuickStart Guide",
            leisure_page_main_title: "Leisure and Sports",
            leisure_page_sub1_title: "University Sports (Hochschulsport)",
            leisure_page_sub1_text: "Placeholder text detailing the university sports program: range of activities offered each semester, how to view the schedule, registration process, costs (if any), and locations of sports facilities.",
            leisure_page_sub2_title: "Culture & Events",
            leisure_page_sub2_text: "Placeholder text highlighting cultural opportunities in Amberg and Weiden, such as theaters, cinemas, museums, concerts, student-organized events, parties, and local festivals throughout the year.",
            leisure_page_sub3_title: "Excursions & Surroundings",
            leisure_page_sub3_text: "Placeholder text offering suggestions for exploring the Oberpfalz region and beyond. Ideas for day trips, hiking spots, nearby lakes, interesting towns, and using regional transport for excursions.",

            // Arrival Page
            page_title_arrival: "Arrival - QuickStart Guide",
            arrival_page_main_title: "Arrival Information",
            arrival_page_sub1_title: "Getting to Amberg/Weiden",
            arrival_page_sub1_text: "Placeholder text with information on traveling to Amberg or Weiden. Details on nearest airports (Nuremberg, Munich), train connections (Deutsche Bahn - DB), long-distance buses, and driving directions.",
            arrival_page_sub2_title: "First Arrival Checklist",
            arrival_page_sub2_text: "Placeholder text listing crucial tasks immediately after arriving: checking into your accommodation, making initial contact with the university (e.g., International Office), getting a local SIM card, and initial orientation.",
            arrival_page_sub3_title: "City Registration (Anmeldung)",
            arrival_page_sub3_text: "Placeholder text explaining the mandatory city registration process ('Anmeldung') at the local registration office (Einwohnermeldeamt/Bürgerbüro). Information on deadlines, required documents (passport, rental agreement), and the importance of this step.",

            // Language Page
            page_title_language: "Language - QuickStart Guide",
            language_page_main_title: "Language Support",
            language_page_sub1_title: "German Language Courses",
            language_page_sub1_text: "Placeholder text about opportunities to learn German. Information on courses offered by the OTH AW Language Centre or partner institutions (like VHS), levels available (A1-C1), registration, and potential costs.",
            language_page_sub2_title: "Language Tandems & Practice",
            language_page_sub2_text: "Placeholder text explaining the concept of a language tandem (finding a native speaker to practice with). Information on university programs or platforms to find tandem partners and informal language exchange meetups (Stammtisch).",
            language_page_sub3_title: "Online Resources & Self-Study",
            language_page_sub3_text: "Placeholder text listing useful online resources for self-studying German, such as websites (e.g., Deutsche Welle Learn German), language learning apps (Duolingo, Babbel, etc.), dictionaries (LEO, Dict.cc), and online exercises.",

            // Finance Page
            page_title_finance: "Finances - QuickStart Guide",
            finance_page_main_title: "Financial Matters",
            finance_page_sub1_title: "Semester Fees & Contributions",
            finance_page_sub1_text: "Placeholder text explaining the current semester contribution (Semesterbeitrag), detailing what it covers (student services, semester ticket etc.), payment amount, deadlines, and consequences of late payment.",
            finance_page_sub2_title: "Estimated Cost of Living",
            finance_page_sub2_text: "Placeholder text providing a realistic estimate of monthly living expenses in Amberg or Weiden, breaking down average costs for rent, food, health insurance, transportation, study materials, and leisure activities.",
            finance_page_sub3_title: "Funding, Scholarships & Jobs",
            finance_page_sub3_text: "Placeholder text outlining potential sources of funding: information on scholarships (like DAAD, Deutschlandstipendium), possibilities for student jobs (HiWi positions, part-time work), BAföG eligibility (mainly for Germans/EU), and where to find job postings.",
        },
        de: {
             // --- Index Page ---
            page_title: "OTH-AW QuickStart Guide",
            language_label: "Sprache auswählen:",
            welcome_title: "Willkommen zum QuickStart Guide",
            welcome_text: "Ihr Begleiter für einen erfolgreichen Start an der OTH Amberg-Weiden.",
            learn_more_button: "Loslegen",
            oth_website_button: "Zur OTH Webseite", // Added Button
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
            footer_text: "© 2025 OTH Amberg-Weiden. Alle Rechte vorbehalten.",

            // --- General Subpage ---
            back_to_main_link: "« Zurück zur Übersicht",

             // Welcome Page
            page_title_welcome: "Willkommen - QuickStart Guide",
            welcome_page_main_title: "Willkommen an der Hochschule",
            welcome_page_sub1_title: "Erste Schritte",
            welcome_page_sub1_text: "Platzhaltertext für die ersten Schritte nach der Ankunft an der Hochschule. Dieser Abschnitt führt Sie durch die Erstanmeldung und Orientierung.",
            welcome_page_sub2_title: "Campus-Überblick",
            welcome_page_sub2_text: "Platzhaltertext, der die Hauptbereiche des Campus, wichtige Gebäude und wo Schlüsseldienste wie Bibliothek oder Mensa zu finden sind, beschreibt.",
            welcome_page_sub3_title: "Wichtige Kontakte",
            welcome_page_sub3_text: "Platzhaltertext mit einer Liste erster wichtiger Anlaufstellen, wie z.B. das International Office oder die Studienberatung.",

            // Studies Page
            page_title_studies: "Studium - QuickStart Guide",
            studies_page_main_title: "Studium & Organisation",
            studies_page_sub1_title: "Kursanmeldung",
            studies_page_sub1_text: "Platzhaltertext darüber, wie und wann man sich für Kurse anmeldet, Fristen und zugehörige Plattformen (wie Moodle oder PRIMUSS). Wichtige Informationen zur Modulwahl.",
            studies_page_sub2_title: "Akademischer Kalender",
            studies_page_sub2_text: "Platzhaltertext, der die Semesterstruktur, Vorlesungszeiten, Prüfungsphasen, Ferien und andere wichtige Termine im akademischen Jahr erklärt.",
            studies_page_sub3_title: "Studienordnungen",
            studies_page_sub3_text: "Platzhaltertext, der auf wichtige Studien- und Prüfungsordnungen (SPO) verlinkt oder diese zusammenfasst. Verständnis von Credits (ECTS) und Modulanforderungen.",

            // City Life Page
            page_title_city: "Stadtleben - QuickStart Guide",
            city_page_main_title: "Leben in der Stadt (Amberg/Weiden)",
            city_page_sub1_title: "Unterkunft",
            city_page_sub1_text: "Platzhaltertext zur Wohnungssuche, verschiedenen Unterkunftsarten (Wohnheime, WGs, Privatwohnungen), Tipps für die Suche und die Wichtigkeit der Anmeldung.",
            city_page_sub2_title: "Verkehrsmittel",
            city_page_sub2_text: "Platzhaltertext zu öffentlichen Verkehrsmitteln in Stadt und Region, Informationen zum Semesterticket (falls zutreffend), Fahrradrouten und allgemeine Mobilitätstipps.",
            city_page_sub3_title: "Einkaufen & Alltag",
            city_page_sub3_text: "Platzhaltertext zu essenziellen Alltagsaspekten: Wo man Lebensmittel kauft, Öffnungszeiten, Eröffnung eines Bankkontos, Finden von Ärzten und Apotheken und andere praktische Tipps.",

            // Links Page
            page_title_links: "Links - QuickStart Guide",
            links_page_main_title: "Nützliche Links",
            links_page_sub1_title: "Hochschulplattformen",
            links_page_sub1_text: "Platzhaltertext mit direkten Links zu wichtigen Hochschulsystemen wie der Lernplattform Moodle, dem studentischen Webmail-Dienst, dem PRIMUSS-Portal für die Verwaltung und dem Bibliothekskatalog (OPAC).",
            links_page_sub2_title: "Administrative & Support Links",
            links_page_sub2_text: "Platzhaltertext mit Links zu den Webseiten des International Office, des Studentenwerks (StW) für BAföG und Wohnen, des Prüfungsamts und der Studienberatung.",
            links_page_sub3_title: "Stadt & Regionale Links",
            links_page_sub3_text: "Platzhaltertext mit Links zu den offiziellen Webseiten der Städte Amberg und Weiden, Informationen zu lokalen Verkehrsbetrieben und regionalen Tourismusportalen.",

            // Contacts Page
            page_title_contacts: "Kontakte - QuickStart Guide",
            contacts_page_main_title: "Wichtige Kontakte",
            contacts_page_sub1_title: "International Office",
            contacts_page_sub1_text: "Platzhaltertext mit wichtigen Kontaktinformationen für das International Office, einschließlich E-Mail-Adresse, Telefonnummer, Bürostandort und typischen Sprechzeiten für internationale Studierende.",
            contacts_page_sub2_title: "Fakultät / Studiengangskoordinator",
            contacts_page_sub2_text: "Platzhaltertext, der erklärt, wie man die Kontaktdaten der Verwaltung Ihrer spezifischen Fakultät oder des Koordinators für Ihren speziellen Studiengang für akademische Fragen findet.",
            contacts_page_sub3_title: "Studierendenvertretung (Fachschaft / StuV)",
            contacts_page_sub3_text: "Platzhaltertext mit Informationen, wie man die Studierendenvertretung (StuV) oder die Fachschaft Ihres spezifischen Fachbereichs für Unterstützung und Rat von Kommilitonen erreichen kann.",

            // Leisure Page
            page_title_leisure: "Freizeit - QuickStart Guide",
            leisure_page_main_title: "Freizeit und Sport",
            leisure_page_sub1_title: "Hochschulsport",
            leisure_page_sub1_text: "Platzhaltertext, der das Hochschulsportprogramm beschreibt: Angebot an Aktivitäten pro Semester, wie man den Zeitplan einsehen kann, Anmeldeprozess, Kosten (falls vorhanden) und Standorte der Sportanlagen.",
            leisure_page_sub2_title: "Kultur & Veranstaltungen",
            leisure_page_sub2_text: "Platzhaltertext, der kulturelle Möglichkeiten in Amberg und Weiden hervorhebt, wie Theater, Kinos, Museen, Konzerte, von Studenten organisierte Veranstaltungen, Partys und lokale Feste im Laufe des Jahres.",
            leisure_page_sub3_title: "Ausflüge & Umgebung",
            leisure_page_sub3_text: "Platzhaltertext mit Vorschlägen zur Erkundung der Oberpfalz und darüber hinaus. Ideen für Tagesausflüge, Wandergebiete, nahegelegene Seen, interessante Städte und die Nutzung regionaler Verkehrsmittel für Ausflüge.",

            // Arrival Page
            page_title_arrival: "Anreise - QuickStart Guide",
            arrival_page_main_title: "Anreiseinformationen",
            arrival_page_sub1_title: "Anreise nach Amberg/Weiden",
            arrival_page_sub1_text: "Platzhaltertext mit Informationen zur Anreise nach Amberg oder Weiden. Details zu den nächsten Flughäfen (Nürnberg, München), Zugverbindungen (Deutsche Bahn - DB), Fernbussen und Anfahrtsbeschreibungen.",
            arrival_page_sub2_title: "Checkliste Erste Ankunft",
            arrival_page_sub2_text: "Platzhaltertext mit einer Liste wichtiger Aufgaben direkt nach der Ankunft: Einchecken in die Unterkunft, erster Kontakt mit der Hochschule (z. B. International Office), Besorgen einer lokalen SIM-Karte und erste Orientierung.",
            arrival_page_sub3_title: "Anmeldung bei der Stadt",
            arrival_page_sub3_text: "Platzhaltertext, der den obligatorischen Prozess der Anmeldung bei der Stadt im Einwohnermeldeamt/Bürgerbüro erklärt. Informationen zu Fristen, benötigten Dokumenten (Pass, Mietvertrag) und der Wichtigkeit dieses Schrittes.",

            // Language Page
            page_title_language: "Sprache - QuickStart Guide",
            language_page_main_title: "Sprachunterstützung",
            language_page_sub1_title: "Deutschkurse",
            language_page_sub1_text: "Platzhaltertext über Möglichkeiten, Deutsch zu lernen. Informationen zu Kursen, die vom OTH AW Sprachenzentrum oder Partnerinstitutionen (wie VHS) angeboten werden, verfügbare Niveaus (A1-C1), Anmeldung und mögliche Kosten.",
            language_page_sub2_title: "Sprachtandems & Übung",
            language_page_sub2_text: "Platzhaltertext, der das Konzept eines Sprachtandems erklärt (einen Muttersprachler zum Üben finden). Informationen zu Hochschulprogrammen oder Plattformen zur Suche nach Tandempartnern und informellen Sprachaustauschtreffen (Stammtisch).",
            language_page_sub3_title: "Online-Ressourcen & Selbststudium",
            language_page_sub3_text: "Platzhaltertext mit einer Liste nützlicher Online-Ressourcen zum Selbststudium von Deutsch, wie Websites (z. B. Deutsche Welle Learn German), Sprachlern-Apps (Duolingo, Babbel usw.), Wörterbücher (LEO, Dict.cc) und Online-Übungen.",

            // Finance Page
            page_title_finance: "Finanzen - QuickStart Guide",
            finance_page_main_title: "Finanzielle Angelegenheiten",
            finance_page_sub1_title: "Semesterbeitrag",
            finance_page_sub1_text: "Platzhaltertext, der den aktuellen Semesterbeitrag erklärt, was er abdeckt (Studentenwerksbeitrag, Semesterticket etc.), Zahlungshöhe, Fristen und Konsequenzen bei verspäteter Zahlung.",
            finance_page_sub2_title: "Geschätzte Lebenshaltungskosten",
            finance_page_sub2_text: "Platzhaltertext mit einer realistischen Schätzung der monatlichen Lebenshaltungskosten in Amberg oder Weiden, aufgeschlüsselt nach durchschnittlichen Kosten für Miete, Lebensmittel, Krankenversicherung, Transport, Studienmaterialien und Freizeitaktivitäten.",
            finance_page_sub3_title: "Finanzierung, Stipendien & Jobs",
            finance_page_sub3_text: "Platzhaltertext, der potenzielle Finanzierungsquellen skizziert: Informationen zu Stipendien (wie DAAD, Deutschlandstipendium), Möglichkeiten für Studentenjobs (HiWi-Stellen, Teilzeitarbeit), BAföG-Berechtigung (hauptsächlich für Deutsche/EU) und wo man nach Stellenangeboten suchen kann.",
        },
        hi: {
            // --- Index Page ---
            page_title: "OTH-AW क्विकस्टार्ट गाइड",
            language_label: "भाषा चुनें:",
            welcome_title: "क्विकस्टार्ट गाइड में आपका स्वागत है",
            welcome_text: "OTH Amberg-Weiden में सफल शुरुआत के लिए आपका साथी।",
            learn_more_button: "शुरू हो जाओ",
            oth_website_button: "OTH वेबसाइट पर", // Added Button
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
            footer_text: "© 2025 OTH Amberg-Weiden। सर्वाधिकार सुरक्षित।",
            // --- General Subpage ---
            back_to_main_link: "« अवलोकन पर वापस",
            // Welcome Page
            page_title_welcome: "स्वागत - क्विकस्टार्ट गाइड",
            welcome_page_main_title: "विश्वविद्यालय में आपका स्वागत है",
            welcome_page_sub1_title: "पहला कदम",
            welcome_page_sub1_text: "[hi] Placeholder text for the first steps after arriving at the university. This section will guide you through initial registration and orientation.",
            welcome_page_sub2_title: "कैंपस अवलोकन",
            welcome_page_sub2_text: "[hi] Placeholder text describing the main campus areas, important buildings, and where to find key services like the library or cafeteria.",
            welcome_page_sub3_title: "महत्वपूर्ण संपर्क",
            welcome_page_sub3_text: "[hi] Placeholder text listing initial important contact points, such as the International Office or student advisory services.",
            // Studies Page
            page_title_studies: "अध्ययन - क्विकस्टार्ट गाइड",
            studies_page_main_title: "अध्ययन और संगठन",
            studies_page_sub1_title: "पाठ्यक्रम पंजीकरण",
            studies_page_sub1_text: "[hi] Placeholder text about how and when to register for courses, deadlines, and related platforms (like Moodle or PRIMUSS). Important information about module selection.",
            studies_page_sub2_title: "अकादमिक कैलेंडर",
            studies_page_sub2_text: "[hi] Placeholder text explaining the semester structure, lecture periods, examination phases, holidays, and other important dates throughout the academic year.",
            studies_page_sub3_title: "अध्ययन विनियम",
            studies_page_sub3_text: "[hi] Placeholder text linking to or summarizing key study and examination regulations (Studien- und Prüfungsordnung - SPO). Understanding credits (ECTS) and module requirements.",
            // City Life Page
            page_title_city: "शहर का जीवन - क्विकस्टार्ट गाइड",
            city_page_main_title: "शहर में जीवन (एम्बरग/वीडेन)",
            city_page_sub1_title: "आवास",
            city_page_sub1_text: "[hi] Placeholder text about finding housing, different types of accommodation (dormitories, shared flats, private apartments), tips for the search, and the importance of city registration (Anmeldung).",
            city_page_sub2_title: "परिवहन",
            city_page_sub2_text: "[hi] Placeholder text regarding public transport options within the city and region, information about the semester ticket (if applicable), cycling routes, and general mobility advice.",
            city_page_sub3_title: "खरीदारी और दैनिक जीवन",
            city_page_sub3_text: "[hi] Placeholder text covering essential aspects of daily life: where to buy groceries, opening hours, setting up a bank account, finding doctors and pharmacies, and other practical tips.",
            // Links Page
            page_title_links: "लिंक - क्विकस्टार्ट गाइड",
            links_page_main_title: "उपयोगी लिंक",
            links_page_sub1_title: "विश्वविद्यालय प्लेटफार्म",
            links_page_sub1_text: "[hi] Placeholder text providing direct links to essential university systems like the Moodle learning platform, the student webmail service, the PRIMUSS portal for administration, and the library catalogue (OPAC).",
            links_page_sub2_title: "प्रशासनिक और सहायता लिंक",
            links_page_sub2_text: "[hi] Placeholder text with links to the websites of the International Office, the Student Services (Studentenwerk - StW) for BAföG and housing, the Examination Office (Prüfungsamt), and student advisory services.",
            links_page_sub3_title: "शहर और क्षेत्रीय लिंक",
            links_page_sub3_text: "[hi] Placeholder text with links to the official websites of the cities of Amberg and Weiden, information on local public transport companies, and regional tourism portals.",
            // Contacts Page
            page_title_contacts: "संपर्क - क्विकस्टार्ट गाइड",
            contacts_page_main_title: "महत्वपूर्ण संपर्क",
            contacts_page_sub1_title: "अंतर्राष्ट्रीय कार्यालय",
            contacts_page_sub1_text: "[hi] Placeholder text providing key contact information for the International Office, including email address, phone number, office location, and typical consultation hours for international students.",
            contacts_page_sub2_title: "संकाय / अध्ययन कार्यक्रम समन्वयक",
            contacts_page_sub2_text: "[hi] Placeholder text explaining how to find the contact details for your specific faculty's administration or the coordinator responsible for your particular study program for academic questions.",
            contacts_page_sub3_title: "छात्र प्रतिनिधि (फचशाफ्ट / StuV)",
            contacts_page_sub3_text: "[hi] Placeholder text with information on how to reach the student council (Studierendenvertretung - StuV) or your specific department's student representatives (Fachschaft) for peer support and advice.",
            // Leisure Page
            page_title_leisure: "अवकाश - क्विकस्टार्ट गाइड",
            leisure_page_main_title: "अवकाश और खेल",
            leisure_page_sub1_title: "विश्वविद्यालय खेल (होचशुलस्पोर्ट)",
            leisure_page_sub1_text: "[hi] Placeholder text detailing the university sports program: range of activities offered each semester, how to view the schedule, registration process, costs (if any), and locations of sports facilities.",
            leisure_page_sub2_title: "संस्कृति और कार्यक्रम",
            leisure_page_sub2_text: "[hi] Placeholder text highlighting cultural opportunities in Amberg and Weiden, such as theaters, cinemas, museums, concerts, student-organized events, parties, and local festivals throughout the year.",
            leisure_page_sub3_title: "भ्रमण और आसपास का क्षेत्र",
            leisure_page_sub3_text: "[hi] Placeholder text offering suggestions for exploring the Oberpfalz region and beyond. Ideas for day trips, hiking spots, nearby lakes, interesting towns, and using regional transport for excursions.",
            // Arrival Page
            page_title_arrival: "आगमन - क्विकस्टार्ट गाइड",
            arrival_page_main_title: "आगमन सूचना",
            arrival_page_sub1_title: "एम्बरग/वीडेन कैसे पहुंचें",
            arrival_page_sub1_text: "[hi] Placeholder text with information on traveling to Amberg or Weiden. Details on nearest airports (Nuremberg, Munich), train connections (Deutsche Bahn - DB), long-distance buses, and driving directions.",
            arrival_page_sub2_title: "पहली आगमन चेकलिस्ट",
            arrival_page_sub2_text: "[hi] Placeholder text listing crucial tasks immediately after arriving: checking into your accommodation, making initial contact with the university (e.g., International Office), getting a local SIM card, and initial orientation.",
            arrival_page_sub3_title: "शहर पंजीकरण (Anmeldung)",
            arrival_page_sub3_text: "[hi] Placeholder text explaining the mandatory city registration process ('Anmeldung') at the local registration office (Einwohnermeldeamt/Bürgerbüro). Information on deadlines, required documents (passport, rental agreement), and the importance of this step.",
            // Language Page
            page_title_language: "भाषा - क्विकस्टार्ट गाइड",
            language_page_main_title: "भाषा सहायता",
            language_page_sub1_title: "जर्मन भाषा पाठ्यक्रम",
            language_page_sub1_text: "[hi] Placeholder text about opportunities to learn German. Information on courses offered by the OTH AW Language Centre or partner institutions (like VHS), levels available (A1-C1), registration, and potential costs.",
            language_page_sub2_title: "भाषा टेंडेम और अभ्यास",
            language_page_sub2_text: "[hi] Placeholder text explaining the concept of a language tandem (finding a native speaker to practice with). Information on university programs or platforms to find tandem partners and informal language exchange meetups (Stammtisch).",
            language_page_sub3_title: "ऑनलाइन संसाधन और स्व-अध्ययन",
            language_page_sub3_text: "[hi] Placeholder text listing useful online resources for self-studying German, such as websites (e.g., Deutsche Welle Learn German), language learning apps (Duolingo, Babbel, etc.), dictionaries (LEO, Dict.cc), and online exercises.",
            // Finance Page
            page_title_finance: "वित्त - क्विकस्टार्ट गाइड",
            finance_page_main_title: "वित्तीय मामले",
            finance_page_sub1_title: "सेमेस्टर शुल्क और योगदान",
            finance_page_sub1_text: "[hi] Placeholder text explaining the current semester contribution (Semesterbeitrag), detailing what it covers (student services, semester ticket etc.), payment amount, deadlines, and consequences of late payment.",
            finance_page_sub2_title: "अनुमानित जीवन यापन लागत",
            finance_page_sub2_text: "[hi] Placeholder text providing a realistic estimate of monthly living expenses in Amberg or Weiden, breaking down average costs for rent, food, health insurance, transportation, study materials, and leisure activities.",
            finance_page_sub3_title: "वित्त पोषण, छात्रवृत्ति और नौकरियां",
            finance_page_sub3_text: "[hi] Placeholder text outlining potential sources of funding: information on scholarships (like DAAD, Deutschlandstipendium), possibilities for student jobs (HiWi positions, part-time work), BAföG eligibility (mainly for Germans/EU), and where to find job postings.",
        },
        ar: {
            // --- Index Page ---
            page_title: "دليل البدء السريع OTH-AW",
            language_label: "اختار اللغة:",
            welcome_title: "مرحبًا بك في دليل البدء السريع",
            welcome_text: "رفيقك لبداية ناجحة في OTH Amberg-Weiden.",
            learn_more_button: "البدء",
            oth_website_button: "إلى موقع OTH", // Added Button
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
            footer_text: "© 2025 OTH Amberg-Weiden. كل الحقوق محفوظة.",
            // --- General Subpage ---
            back_to_main_link: "« العودة إلى النظرة العامة",
            // Welcome Page
            page_title_welcome: "مرحبًا - دليل البدء السريع",
            welcome_page_main_title: "مرحبا بكم في الجامعة",
            welcome_page_sub1_title: "الخطوات الأولى",
            welcome_page_sub1_text: "[ar] Placeholder text for the first steps after arriving at the university. This section will guide you through initial registration and orientation.",
            welcome_page_sub2_title: "نظرة عامة على الحرم الجامعي",
            welcome_page_sub2_text: "[ar] Placeholder text describing the main campus areas, important buildings, and where to find key services like the library or cafeteria.",
            welcome_page_sub3_title: "جهات الاتصال الهامة",
            welcome_page_sub3_text: "[ar] Placeholder text listing initial important contact points, such as the International Office or student advisory services.",
            // Studies Page
            page_title_studies: "الدراسات - دليل البدء السريع",
            studies_page_main_title: "الدراسة والتنظيم",
            studies_page_sub1_title: "تسجيل المساق",
            studies_page_sub1_text: "[ar] Placeholder text about how and when to register for courses, deadlines, and related platforms (like Moodle or PRIMUSS). Important information about module selection.",
            studies_page_sub2_title: "التقويم الأكاديمي",
            studies_page_sub2_text: "[ar] Placeholder text explaining the semester structure, lecture periods, examination phases, holidays, and other important dates throughout the academic year.",
            studies_page_sub3_title: "لوائح الدراسة",
            studies_page_sub3_text: "[ar] Placeholder text linking to or summarizing key study and examination regulations (Studien- und Prüfungsordnung - SPO). Understanding credits (ECTS) and module requirements.",
            // City Life Page
            page_title_city: "الحياة في المدينة - دليل البدء السريع",
            city_page_main_title: "الحياة في المدينة (آمبرغ/فايدن)",
            city_page_sub1_title: "السكن",
            city_page_sub1_text: "[ar] Placeholder text about finding housing, different types of accommodation (dormitories, shared flats, private apartments), tips for the search, and the importance of city registration (Anmeldung).",
            city_page_sub2_title: "المواصلات",
            city_page_sub2_text: "[ar] Placeholder text regarding public transport options within the city and region, information about the semester ticket (if applicable), cycling routes, and general mobility advice.",
            city_page_sub3_title: "التسوق والحياة اليومية",
            city_page_sub3_text: "[ar] Placeholder text covering essential aspects of daily life: where to buy groceries, opening hours, setting up a bank account, finding doctors and pharmacies, and other practical tips.",
            // Links Page
            page_title_links: "روابط - دليل البدء السريع",
            links_page_main_title: "روابط مفيدة",
            links_page_sub1_title: "منصات الجامعة",
            links_page_sub1_text: "[ar] Placeholder text providing direct links to essential university systems like the Moodle learning platform, the student webmail service, the PRIMUSS portal for administration, and the library catalogue (OPAC).",
            links_page_sub2_title: "الروابط الإدارية والدعم",
            links_page_sub2_text: "[ar] Placeholder text with links to the websites of the International Office, the Student Services (Studentenwerk - StW) for BAföG and housing, the Examination Office (Prüfungsamt), and student advisory services.",
            links_page_sub3_title: "روابط المدينة والمنطقة",
            links_page_sub3_text: "[ar] Placeholder text with links to the official websites of the cities of Amberg and Weiden, information on local public transport companies, and regional tourism portals.",
            // Contacts Page
            page_title_contacts: "جهات الاتصال - دليل البدء السريع",
            contacts_page_main_title: "جهات الاتصال الهامة",
            contacts_page_sub1_title: "مكتب الطلاب الدوليين",
            contacts_page_sub1_text: "[ar] Placeholder text providing key contact information for the International Office, including email address, phone number, office location, and typical consultation hours for international students.",
            contacts_page_sub2_title: "منسق الكلية / برنامج الدراسة",
            contacts_page_sub2_text: "[ar] Placeholder text explaining how to find the contact details for your specific faculty's administration or the coordinator responsible for your particular study program for academic questions.",
            contacts_page_sub3_title: "ممثلو الطلاب (Fachschaft / StuV)",
            contacts_page_sub3_text: "[ar] Placeholder text with information on how to reach the student council (Studierendenvertretung - StuV) or your specific department's student representatives (Fachschaft) for peer support and advice.",
            // Leisure Page
            page_title_leisure: "الترفيه - دليل البدء السريع",
            leisure_page_main_title: "الترفيه والرياضة",
            leisure_page_sub1_title: "رياضات الجامعة (Hochschulsport)",
            leisure_page_sub1_text: "[ar] Placeholder text detailing the university sports program: range of activities offered each semester, how to view the schedule, registration process, costs (if any), and locations of sports facilities.",
            leisure_page_sub2_title: "الثقافة والفعاليات",
            leisure_page_sub2_text: "[ar] Placeholder text highlighting cultural opportunities in Amberg and Weiden, such as theaters, cinemas, museums, concerts, student-organized events, parties, and local festivals throughout the year.",
            leisure_page_sub3_title: "الرحلات والمناطق المحيطة",
            leisure_page_sub3_text: "[ar] Placeholder text offering suggestions for exploring the Oberpfalz region and beyond. Ideas for day trips, hiking spots, nearby lakes, interesting towns, and using regional transport for excursions.",
            // Arrival Page
            page_title_arrival: "الوصول - دليل البدء السريع",
            arrival_page_main_title: "معلومات الوصول",
            arrival_page_sub1_title: "الوصول إلى آمبرغ/فايدن",
            arrival_page_sub1_text: "[ar] Placeholder text with information on traveling to Amberg or Weiden. Details on nearest airports (Nuremberg, Munich), train connections (Deutsche Bahn - DB), long-distance buses, and driving directions.",
            arrival_page_sub2_title: "قائمة مراجعة الوصول الأول",
            arrival_page_sub2_text: "[ar] Placeholder text listing crucial tasks immediately after arriving: checking into your accommodation, making initial contact with the university (e.g., International Office), getting a local SIM card, and initial orientation.",
            arrival_page_sub3_title: "تسجيل المدينة (Anmeldung)",
            arrival_page_sub3_text: "[ar] Placeholder text explaining the mandatory city registration process ('Anmeldung') at the local registration office (Einwohnermeldeamt / Bürgerbüro). Information on deadlines, required documents (passport, rental agreement), and the importance of this step.",
            // Language Page
            page_title_language: "اللغة - دليل البدء السريع",
            language_page_main_title: "دعم اللغة",
            language_page_sub1_title: "دورات اللغة الألمانية",
            language_page_sub1_text: "[ar] Placeholder text about opportunities to learn German. Information on courses offered by the OTH AW Language Centre or partner institutions (like VHS), levels available (A1-C1), registration, and potential costs.",
            language_page_sub2_title: "ترادف اللغة والممارسة",
            language_page_sub2_text: "[ar] Placeholder text explaining the concept of a language tandem (finding a native speaker to practice with). Information on university programs or platforms to find tandem partners and informal language exchange meetups (Stammtisch).",
            language_page_sub3_title: "الموارد عبر الإنترنت والدراسة الذاتية",
            language_page_sub3_text: "[ar] Placeholder text listing useful online resources for self-studying German, such as websites (e.g., Deutsche Welle Learn German), language learning apps (Duolingo, Babbel, etc.), dictionaries (LEO, Dict.cc), and online exercises.",
            // Finance Page
            page_title_finance: "الشؤون المالية - دليل البدء السريع",
            finance_page_main_title: "الأمور المالية",
            finance_page_sub1_title: "رسوم ومساهمات الفصل الدراسي",
            finance_page_sub1_text: "[ar] Placeholder text explaining the current semester contribution (Semesterbeitrag), detailing what it covers (student services, semester ticket etc.), payment amount, deadlines, and consequences of late payment.",
            finance_page_sub2_title: "تقدير تكلفة المعيشة",
            finance_page_sub2_text: "[ar] Placeholder text providing a realistic estimate of monthly living expenses in Amberg or Weiden, breaking down average costs for rent, food, health insurance, transportation, study materials, and leisure activities.",
            finance_page_sub3_title: "التمويل والمنح الدراسية والوظائف",
            finance_page_sub3_text: "[ar] Placeholder text outlining potential sources of funding: information on scholarships (like DAAD, Deutschlandstipendium), possibilities for student jobs (HiWi positions, part-time work), BAföG eligibility (mainly for Germans / EU), and where to find job postings.",
        },
        es: {
             // --- Index Page ---
            page_title: "Guía de Inicio Rápido OTH-AW",
            language_label: "Selecciona el idioma:",
            welcome_title: "Bienvenido a la Guía de Inicio Rápido",
            welcome_text: "Tu compañero para un comienzo exitoso en OTH Amberg-Weiden.",
            learn_more_button: "Comenzar",
            oth_website_button: "Al sitio web de OTH", // Added Button
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
            footer_text: "© 2025 OTH Amberg-Weiden. Todos los derechos reservados.",
            // --- General Subpage ---
            back_to_main_link: "« Volver al Resumen",
            // Welcome Page
            page_title_welcome: "Bienvenido - Guía de Inicio Rápido",
            welcome_page_main_title: "Bienvenido a la Universidad",
            welcome_page_sub1_title: "Primeros Pasos",
            welcome_page_sub1_text: "[es] Placeholder text for the first steps after arriving at the university. This section will guide you through initial registration and orientation.",
            welcome_page_sub2_title: "Resumen del Campus",
            welcome_page_sub2_text: "[es] Placeholder text describing the main campus areas, important buildings, and where to find key services like the library or cafeteria.",
            welcome_page_sub3_title: "Contactos Importantes",
            welcome_page_sub3_text: "[es] Placeholder text listing initial important contact points, such as the International Office or student advisory services.",
            // Studies Page
            page_title_studies: "Estudios - Guía de Inicio Rápido",
            studies_page_main_title: "Estudios y Organización",
            studies_page_sub1_title: "Inscripción a Cursos",
            studies_page_sub1_text: "[es] Placeholder text about how and when to register for courses, deadlines, and related platforms (like Moodle or PRIMUSS). Important information about module selection.",
            studies_page_sub2_title: "Calendario Académico",
            studies_page_sub2_text: "[es] Placeholder text explaining the semester structure, lecture periods, examination phases, holidays, and other important dates throughout the academic year.",
            studies_page_sub3_title: "Regulaciones de Estudio",
            studies_page_sub3_text: "[es] Placeholder text linking to or summarizing key study and examination regulations (Studien- und Prüfungsordnung - SPO). Understanding credits (ECTS) and module requirements.",
            // City Life Page
            page_title_city: "Vida en la Ciudad - Guía de Inicio Rápido",
            city_page_main_title: "Vida en la Ciudad (Amberg/Weiden)",
            city_page_sub1_title: "Alojamiento",
            city_page_sub1_text: "[es] Placeholder text about finding housing, different types of accommodation (dormitories, shared flats, private apartments), tips for the search, and the importance of city registration (Anmeldung).",
            city_page_sub2_title: "Transporte",
            city_page_sub2_text: "[es] Placeholder text regarding public transport options within the city and region, information about the semester ticket (if applicable), cycling routes, and general mobility advice.",
            city_page_sub3_title: "Compras y Vida Diaria",
            city_page_sub3_text: "[es] Placeholder text covering essential aspects of daily life: where to buy groceries, opening hours, setting up a bank account, finding doctors and pharmacies, and other practical tips.",
            // Links Page
            page_title_links: "Enlaces - Guía de Inicio Rápido",
            links_page_main_title: "Enlaces Útiles",
            links_page_sub1_title: "Plataformas Universitarias",
            links_page_sub1_text: "[es] Placeholder text providing direct links to essential university systems like the Moodle learning platform, the student webmail service, the PRIMUSS portal for administration, and the library catalogue (OPAC).",
            links_page_sub2_title: "Enlaces Administrativos y de Apoyo",
            links_page_sub2_text: "[es] Placeholder text with links to the websites of the International Office, the Student Services (Studentenwerk - StW) for BAföG and housing, the Examination Office (Prüfungsamt), and student advisory services.",
            links_page_sub3_title: "Enlaces de la Ciudad y Regionales",
            links_page_sub3_text: "[es] Placeholder text with links to the official websites of the cities of Amberg and Weiden, information on local public transport companies, and regional tourism portals.",
            // Contacts Page
            page_title_contacts: "Contactos - Guía de Inicio Rápido",
            contacts_page_main_title: "Contactos Importantes",
            contacts_page_sub1_title: "Oficina Internacional",
            contacts_page_sub1_text: "[es] Placeholder text providing key contact information for the International Office, including email address, phone number, office location, and typical consultation hours for international students.",
            contacts_page_sub2_title: "Coordinador de Facultad / Programa de Estudios",
            contacts_page_sub2_text: "[es] Placeholder text explaining how to find the contact details for your specific faculty's administration or the coordinator responsible for your particular study program for academic questions.",
            contacts_page_sub3_title: "Representantes Estudiantiles (Fachschaft / StuV)",
            contacts_page_sub3_text: "[es] Placeholder text with information on how to reach the student council (Studierendenvertretung - StuV) or your specific department's student representatives (Fachschaft) for peer support and advice.",
            // Leisure Page
            page_title_leisure: "Ocio - Guía de Inicio Rápido",
            leisure_page_main_title: "Ocio y Deporte",
            leisure_page_sub1_title: "Deportes Universitarios (Hochschulsport)",
            leisure_page_sub1_text: "[es] Placeholder text detailing the university sports program: range of activities offered each semester, how to view the schedule, registration process, costs (if any), and locations of sports facilities.",
            leisure_page_sub2_title: "Cultura y Eventos",
            leisure_page_sub2_text: "[es] Placeholder text highlighting cultural opportunities in Amberg and Weiden, such as theaters, cinemas, museums, concerts, student-organized events, parties, and local festivals throughout the year.",
            leisure_page_sub3_title: "Excursiones y Alrededores",
            leisure_page_sub3_text: "[es] Placeholder text offering suggestions for exploring the Oberpfalz region and beyond. Ideas for day trips, hiking spots, nearby lakes, interesting towns, and using regional transport for excursions.",
            // Arrival Page
            page_title_arrival: "Llegada - Guía de Inicio Rápido",
            arrival_page_main_title: "Información de Llegada",
            arrival_page_sub1_title: "Cómo llegar a Amberg/Weiden",
            arrival_page_sub1_text: "[es] Placeholder text with information on traveling to Amberg or Weiden. Details on nearest airports (Nuremberg, Munich), train connections (Deutsche Bahn - DB), long-distance buses, and driving directions.",
            arrival_page_sub2_title: "Lista de Verificación de la Primera Llegada",
            arrival_page_sub2_text: "[es] Placeholder text listing crucial tasks immediately after arriving: checking into your accommodation, making initial contact with the university (e.g., International Office), getting a local SIM card, and initial orientation.",
            arrival_page_sub3_title: "Registro de la Ciudad (Anmeldung)",
            arrival_page_sub3_text: "[es] Placeholder text explaining the mandatory city registration process ('Anmeldung') at the local registration office (Einwohnermeldeamt/Bürgerbüro). Information on deadlines, required documents (passport, rental agreement), and the importance of this step.",
            // Language Page
            page_title_language: "Idioma - Guía de Inicio Rápido",
            language_page_main_title: "Apoyo Lingüístico",
            language_page_sub1_title: "Cursos de Alemán",
            language_page_sub1_text: "[es] Placeholder text about opportunities to learn German. Information on courses offered by the OTH AW Language Centre or partner institutions (like VHS), levels available (A1-C1), registration, and potential costs.",
            language_page_sub2_title: "Tándems Lingüísticos y Práctica",
            language_page_sub2_text: "[es] Placeholder text explaining the concept of a language tandem (finding a native speaker to practice with). Information on university programs or platforms to find tandem partners and informal language exchange meetups (Stammtisch).",
            language_page_sub3_title: "Recursos en Línea y Autoestudio",
            language_page_sub3_text: "[es] Placeholder text listing useful online resources for self-studying German, such as websites (e.g., Deutsche Welle Learn German), language learning apps (Duolingo, Babbel, etc.), dictionaries (LEO, Dict.cc), and online exercises.",
            // Finance Page
            page_title_finance: "Finanzas - Guía de Inicio Rápido",
            finance_page_main_title: "Asuntos Financieros",
            finance_page_sub1_title: "Tasas y Contribuciones Semestrales",
            finance_page_sub1_text: "[es] Placeholder text explaining the current semester contribution (Semesterbeitrag), detailing what it covers (student services, semester ticket etc.), payment amount, deadlines, and consequences of late payment.",
            finance_page_sub2_title: "Costo de Vida Estimado",
            finance_page_sub2_text: "[es] Placeholder text providing a realistic estimate of monthly living expenses in Amberg or Weiden, breaking down average costs for rent, food, health insurance, transportation, study materials, and leisure activities.",
            finance_page_sub3_title: "Financiamiento, Becas y Empleos",
            finance_page_sub3_text: "[es] Placeholder text outlining potential sources of funding: information on scholarships (like DAAD, Deutschlandstipendium), possibilities for student jobs (HiWi positions, part-time work), BAföG eligibility (mainly for Germans/EU), and where to find job postings.",
        },
        zh: {
             // --- Index Page ---
            page_title: "OTH-AW 快速入门指南",
            language_label: "选择语言:",
            welcome_title: "欢迎使用快速入门指南",
            welcome_text: "您在 OTH Amberg-Weiden 成功起步的伴侣。",
            learn_more_button: "开始",
            oth_website_button: "访问 OTH 网站", // Added Button
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
            footer_text: "© 2025 OTH Amberg-Weiden。版权所有。",
            // --- General Subpage ---
            back_to_main_link: "« 返回概览",
            // Welcome Page
            page_title_welcome: "欢迎 - 快速入门指南",
            welcome_page_main_title: "欢迎来到大学",
            welcome_page_sub1_title: "第一步",
            welcome_page_sub1_text: "[zh] Placeholder text for the first steps after arriving at the university. This section will guide you through initial registration and orientation.",
            welcome_page_sub2_title: "校园概览",
            welcome_page_sub2_text: "[zh] Placeholder text describing the main campus areas, important buildings, and where to find key services like the library or cafeteria.",
            welcome_page_sub3_title: "重要联系方式",
            welcome_page_sub3_text: "[zh] Placeholder text listing initial important contact points, such as the International Office or student advisory services.",
            // Studies Page
            page_title_studies: "学习 - 快速入门指南",
            studies_page_main_title: "学习与组织",
            studies_page_sub1_title: "课程注册",
            studies_page_sub1_text: "[zh] Placeholder text about how and when to register for courses, deadlines, and related platforms (like Moodle or PRIMUSS). Important information about module selection.",
            studies_page_sub2_title: "校历",
            studies_page_sub2_text: "[zh] Placeholder text explaining the semester structure, lecture periods, examination phases, holidays, and other important dates throughout the academic year.",
            studies_page_sub3_title: "学习规定",
            studies_page_sub3_text: "[zh] Placeholder text linking to or summarizing key study and examination regulations (Studien- und Prüfungsordnung - SPO). Understanding credits (ECTS) and module requirements.",
            // City Life Page
            page_title_city: "城市生活 - 快速入门指南",
            city_page_main_title: "城市生活 (安贝格/魏登)",
            city_page_sub1_title: "住宿",
            city_page_sub1_text: "[zh] Placeholder text about finding housing, different types of accommodation (dormitories, shared flats, private apartments), tips for the search, and the importance of city registration (Anmeldung).",
            city_page_sub2_title: "交通",
            city_page_sub2_text: "[zh] Placeholder text regarding public transport options within the city and region, information about the semester ticket (if applicable), cycling routes, and general mobility advice.",
            city_page_sub3_title: "购物与日常生活",
            city_page_sub3_text: "[zh] Placeholder text covering essential aspects of daily life: where to buy groceries, opening hours, setting up a bank account, finding doctors and pharmacies, and other practical tips.",
            // Links Page
            page_title_links: "链接 - 快速入门指南",
            links_page_main_title: "有用链接",
            links_page_sub1_title: "大学平台",
            links_page_sub1_text: "[zh] Placeholder text providing direct links to essential university systems like the Moodle learning platform, the student webmail service, the PRIMUSS portal for administration, and the library catalogue (OPAC).",
            links_page_sub2_title: "行政与支持链接",
            links_page_sub2_text: "[zh] Placeholder text with links to the websites of the International Office, the Student Services (Studentenwerk - StW) for BAföG and housing, the Examination Office (Prüfungsamt), and student advisory services.",
            links_page_sub3_title: "城市与区域链接",
            links_page_sub3_text: "[zh] Placeholder text with links to the official websites of the cities of Amberg and Weiden, information on local public transport companies, and regional tourism portals.",
            // Contacts Page
            page_title_contacts: "联系方式 - 快速入门指南",
            contacts_page_main_title: "重要联系方式",
            contacts_page_sub1_title: "国际办公室",
            contacts_page_sub1_text: "[zh] Placeholder text providing key contact information for the International Office, including email address, phone number, office location, and typical consultation hours for international students.",
            contacts_page_sub2_title: "学院/学习项目协调员",
            contacts_page_sub2_text: "[zh] Placeholder text explaining how to find the contact details for your specific faculty's administration or the coordinator responsible for your particular study program for academic questions.",
            contacts_page_sub3_title: "学生代表 (Fachschaft / StuV)",
            contacts_page_sub3_text: "[zh] Placeholder text with information on how to reach the student council (Studierendenvertretung - StuV) or your specific department's student representatives (Fachschaft) for peer support and advice.",
            // Leisure Page
            page_title_leisure: "休闲 - 快速入门指南",
            leisure_page_main_title: "休闲与运动",
            leisure_page_sub1_title: "大学体育 (Hochschulsport)",
            leisure_page_sub1_text: "[zh] Placeholder text detailing the university sports program: range of activities offered each semester, how to view the schedule, registration process, costs (if any), and locations of sports facilities.",
            leisure_page_sub2_title: "文化与活动",
            leisure_page_sub2_text: "[zh] Placeholder text highlighting cultural opportunities in Amberg and Weiden, such as theaters, cinemas, museums, concerts, student-organized events, parties, and local festivals throughout the year.",
            leisure_page_sub3_title: "短途旅行与周边地区",
            leisure_page_sub3_text: "[zh] Placeholder text offering suggestions for exploring the Oberpfalz region and beyond. Ideas for day trips, hiking spots, nearby lakes, interesting towns, and using regional transport for excursions.",
            // Arrival Page
            page_title_arrival: "抵达 - 快速入门指南",
            arrival_page_main_title: "抵达信息",
            arrival_page_sub1_title: "前往安贝格/魏登",
            arrival_page_sub1_text: "[zh] Placeholder text with information on traveling to Amberg or Weiden. Details on nearest airports (Nuremberg, Munich), train connections (Deutsche Bahn - DB), long-distance buses, and driving directions.",
            arrival_page_sub2_title: "首次抵达清单",
            arrival_page_sub2_text: "[zh] Placeholder text listing crucial tasks immediately after arriving: checking into your accommodation, making initial contact with the university (e.g., International Office), getting a local SIM card, and initial orientation.",
            arrival_page_sub3_title: "城市登记 (Anmeldung)",
            arrival_page_sub3_text: "[zh] Placeholder text explaining the mandatory city registration process ('Anmeldung') at the local registration office (Einwohnermeldeamt/Bürgerbüro). Information on deadlines, required documents (passport, rental agreement), and the importance of this step.",
            // Language Page
            page_title_language: "语言 - 快速入门指南",
            language_page_main_title: "语言支持",
            language_page_sub1_title: "德语课程",
            language_page_sub1_text: "[zh] Placeholder text about opportunities to learn German. Information on courses offered by the OTH AW Language Centre or partner institutions (like VHS), levels available (A1-C1), registration, and potential costs.",
            language_page_sub2_title: "语伴与练习",
            language_page_sub2_text: "[zh] Placeholder text explaining the concept of a language tandem (finding a native speaker to practice with). Information on university programs or platforms to find tandem partners and informal language exchange meetups (Stammtisch).",
            language_page_sub3_title: "在线资源与自学",
            language_page_sub3_text: "[zh] Placeholder text listing useful online resources for self-studying German, such as websites (e.g., Deutsche Welle Learn German), language learning apps (Duolingo, Babbel, etc.), dictionaries (LEO, Dict.cc), and online exercises.",
            // Finance Page
            page_title_finance: "财务 - 快速入门指南",
            finance_page_main_title: "财务事项",
            finance_page_sub1_title: "学期费与捐款",
            finance_page_sub1_text: "[zh] Placeholder text explaining the current semester contribution (Semesterbeitrag), detailing what it covers (student services, semester ticket etc.), payment amount, deadlines, and consequences of late payment.",
            finance_page_sub2_title: "预计生活成本",
            finance_page_sub2_text: "[zh] Placeholder text providing a realistic estimate of monthly living expenses in Amberg or Weiden, breaking down average costs for rent, food, health insurance, transportation, study materials, and leisure activities.",
            finance_page_sub3_title: "资金、奖学金与工作",
            finance_page_sub3_text: "[zh] Placeholder text outlining potential sources of funding: information on scholarships (like DAAD, Deutschlandstipendium), possibilities for student jobs (HiWi positions, part-time work), BAföG eligibility (mainly for Germans/EU), and where to find job postings.",
        }
    };

    // --- Function to Update Page Language ---
    function updateLanguage(lang) {
        const currentTranslations = translations[lang] || translations['en']; // Fallback to English
        const englishTranslations = translations['en'];

        if (!currentTranslations) {
             console.error("CRITICAL: English translations are missing. Cannot proceed.");
             return;
        }
        // Fallback notification for developers (less noisy)
        if (!translations[lang] && lang !== 'en') {
            // console.warn(`Language '${lang}' not found, falling back to English.`);
        }

        // Update HTML attributes
        htmlElement.lang = lang;
        htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update text content
        const elementsToTranslate = document.querySelectorAll('[data-key]');
        elementsToTranslate.forEach(element => {
            const key = element.dataset.key; // Use dataset property
            let text = currentTranslations[key];
            let usedFallback = false;

            // If key missing in current language, try English fallback
            if (text === undefined && lang !== 'en' && englishTranslations) {
                text = englishTranslations[key];
                if (text !== undefined) {
                     usedFallback = true;
                    // Only warn if the key seems important (not a generic box title maybe)
                    // if (!key.startsWith('box_')) {
                    //     console.warn(`Key '${key}' missing in language '${lang}', using English fallback.`);
                    // }
                }
            }

            // If still missing, show error placeholder
            if (text === undefined) {
                text = `[MISSING KEY: ${key}]`;
                console.error(`Error: Key '${key}' missing in both '${lang}' and English fallback.`);
            }

            // Apply text (prefer textContent, use innerHTML for specific cases like links, footer)
            if (key === 'footer_text' || element.tagName === 'A' || key === 'back_to_main_link') {
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
