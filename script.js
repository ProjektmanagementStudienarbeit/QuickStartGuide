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
            footer_text: "© 2024 OTH Amberg-Weiden. All rights reserved.",

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
            footer_text: "© 2024 OTH Amberg-Weiden. Alle Rechte vorbehalten.",

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
            footer_text: "© 2024 OTH Amberg-Weiden। सर्वाधिकार सुरक्षित।",
            // --- General Subpage ---
            back_to_main_link: "« अवलोकन पर वापस",
            // Welcome Page
            page_title_welcome: "स्वागत - क्विकस्टार्ट गाइड",
            welcome_page_main_title: "विश्वविद्यालय में आपका स्वागत है",
            welcome_page_sub1_title: "पहला कदम",
            welcome_page_sub1_text: "विश्वविद्यालय में आने के बाद पहले कदमों के लिए प्लेसहोल्डर टेक्स्ट। यह अनुभाग आपको प्रारंभिक पंजीकरण और अभिविन्यास के माध्यम से मार्गदर्शन करेगा।",
            welcome_page_sub2_title: "कैंपस अवलोकन",
            welcome_page_sub2_text: "मुख्य कैंपस क्षेत्रों, महत्वपूर्ण इमारतों और पुस्तकालय या कैफेटेरिया जैसी प्रमुख सेवाओं को खोजने के स्थान का वर्णन करने वाला प्लेसहोल्डर टेक्स्ट।",
            welcome_page_sub3_title: "महत्वपूर्ण संपर्क",
            welcome_page_sub3_text: "प्रारंभिक महत्वपूर्ण संपर्क बिंदुओं, जैसे अंतर्राष्ट्रीय कार्यालय या छात्र सलाहकार सेवाओं को सूचीबद्ध करने वाला प्लेसहोल्डर टेक्स्ट।",
            // Studies Page
            page_title_studies: "अध्ययन - क्विकस्टार्ट गाइड",
            studies_page_main_title: "अध्ययन और संगठन",
            studies_page_sub1_title: "पाठ्यक्रम पंजीकरण",
            studies_page_sub1_text: "पाठ्यक्रमों के लिए कब और कैसे पंजीकरण करें, समय सीमा, और संबंधित प्लेटफार्म (जैसे मूडल या PRIMUSS) के बारे में प्लेसहोल्डर टेक्स्ट। मॉड्यूल चयन के बारे में महत्वपूर्ण जानकारी।",
            studies_page_sub2_title: "अकादमिक कैलेंडर",
            studies_page_sub2_text: "सेमेस्टर संरचना, व्याख्यान अवधि, परीक्षा चरण, छुट्टियों और शैक्षणिक वर्ष भर की अन्य महत्वपूर्ण तिथियों की व्याख्या करने वाला प्लेसहोल्डर टेक्स्ट।",
            studies_page_sub3_title: "अध्ययन विनियम",
            studies_page_sub3_text: "महत्वपूर्ण अध्ययन और परीक्षा विनियमों (Studien- und Prüfungsordnung - SPO) को जोड़ने या सारांशित करने वाला प्लेसहोल्डर टेक्स्ट। क्रेडिट (ECTS) और मॉड्यूल आवश्यकताओं को समझना।",
            // City Life Page
            page_title_city: "शहर का जीवन - क्विकस्टार्ट गाइड",
            city_page_main_title: "शहर में जीवन (एम्बरग/वीडेन)",
            city_page_sub1_title: "आवास",
            city_page_sub1_text: "आवास खोजने, विभिन्न प्रकार के आवास (छात्रावास, साझा फ्लैट, निजी अपार्टमेंट), खोज के लिए युक्तियाँ, और शहर पंजीकरण (Anmeldung) के महत्व के बारे में प्लेसहोल्डर टेक्स्ट।",
            city_page_sub2_title: "परिवहन",
            city_page_sub2_text: "शहर और क्षेत्र के भीतर सार्वजनिक परिवहन विकल्पों, सेमेस्टर टिकट (यदि लागू हो) के बारे में जानकारी, साइकिलिंग मार्गों और सामान्य गतिशीलता सलाह के संबंध में प्लेसहोल्डर टेक्स्ट।",
            city_page_sub3_title: "खरीदारी और दैनिक जीवन",
            city_page_sub3_text: "दैनिक जीवन के आवश्यक पहलुओं को कवर करने वाला प्लेसहोल्डर टेक्स्ट: किराने का सामान कहाँ से खरीदें, खुलने का समय, बैंक खाता खोलना, डॉक्टर और फार्मेसी ढूंढना, और अन्य व्यावहारिक सुझाव।",
            // Links Page
            page_title_links: "लिंक - क्विकस्टार्ट गाइड",
            links_page_main_title: "उपयोगी लिंक",
            links_page_sub1_title: "विश्वविद्यालय प्लेटफार्म",
            links_page_sub1_text: "आवश्यक विश्वविद्यालय प्रणालियों जैसे मूडल लर्निंग प्लेटफॉर्म, छात्र वेबमेल सेवा, प्रशासन के लिए PRIMUSS पोर्टल और पुस्तकालय कैटलॉग (OPAC) के सीधे लिंक प्रदान करने वाला प्लेसहोल्डर टेक्स्ट।",
            links_page_sub2_title: "प्रशासनिक और सहायता लिंक",
            links_page_sub2_text: "अंतर्राष्ट्रीय कार्यालय, छात्र सेवाओं (Studentenwerk - StW) BAföG और आवास के लिए, परीक्षा कार्यालय (Prüfungsamt), और छात्र सलाहकार सेवाओं की वेबसाइटों के लिंक वाला प्लेसहोल्डर टेक्स्ट।",
            links_page_sub3_title: "शहर और क्षेत्रीय लिंक",
            links_page_sub3_text: "एम्बरग और वीडेन शहरों की आधिकारिक वेबसाइटों, स्थानीय सार्वजनिक परिवहन कंपनियों के बारे में जानकारी और क्षेत्रीय पर्यटन पोर्टलों के लिंक वाला प्लेसहोल्डर टेक्स्ट।",
            // Contacts Page
            page_title_contacts: "संपर्क - क्विकस्टार्ट गाइड",
            contacts_page_main_title: "महत्वपूर्ण संपर्क",
            contacts_page_sub1_title: "अंतर्राष्ट्रीय कार्यालय",
            contacts_page_sub1_text: "अंतर्राष्ट्रीय कार्यालय के लिए मुख्य संपर्क जानकारी प्रदान करने वाला प्लेसहोल्डर टेक्स्ट, जिसमें ईमेल पता, फोन नंबर, कार्यालय स्थान और अंतर्राष्ट्रीय छात्रों के लिए विशिष्ट परामर्श घंटे शामिल हैं।",
            contacts_page_sub2_title: "संकाय / अध्ययन कार्यक्रम समन्वयक",
            contacts_page_sub2_text: "यह समझाने वाला प्लेसहोल्डर टेक्स्ट कि अकादमिक प्रश्नों के लिए आपके विशिष्ट संकाय के प्रशासन या आपके विशेष अध्ययन कार्यक्रम के लिए जिम्मेदार समन्वयक का संपर्क विवरण कैसे प्राप्त करें।",
            contacts_page_sub3_title: "छात्र प्रतिनिधि (फचशाफ्ट / StuV)",
            contacts_page_sub3_text: "सहकर्मी सहायता और सलाह के लिए छात्र परिषद (Studierendenvertretung - StuV) या आपके विशिष्ट विभाग के छात्र प्रतिनिधियों (Fachschaft) तक कैसे पहुंचें, इस बारे में जानकारी वाला प्लेसहोल्डर टेक्स्ट।",
            // Leisure Page
            page_title_leisure: "अवकाश - क्विकस्टार्ट गाइड",
            leisure_page_main_title: "अवकाश और खेल",
            leisure_page_sub1_title: "विश्वविद्यालय खेल (होचशुलस्पोर्ट)",
            leisure_page_sub1_text: "विश्वविद्यालय खेल कार्यक्रम का विवरण देने वाला प्लेसहोल्डर टेक्स्ट: प्रत्येक सेमेस्टर में प्रस्तावित गतिविधियों की श्रृंखला, शेड्यूल कैसे देखें, पंजीकरण प्रक्रिया, लागत (यदि कोई हो), और खेल सुविधाओं के स्थान।",
            leisure_page_sub2_title: "संस्कृति और कार्यक्रम",
            leisure_page_sub2_text: "एम्बरग और वीडेन में सांस्कृतिक अवसरों को उजागर करने वाला प्लेसहोल्डर टेक्स्ट, जैसे थिएटर, सिनेमा, संग्रहालय, संगीत कार्यक्रम, छात्र-संगठित कार्यक्रम, पार्टियां और वर्ष भर के स्थानीय त्यौहार।",
            leisure_page_sub3_title: "भ्रमण और आसपास का क्षेत्र",
            leisure_page_sub3_text: "ओबरपफल्ज़ क्षेत्र और उससे आगे की खोज के लिए सुझाव देने वाला प्लेसहोल्डर टेक्स्ट। दिन की यात्राओं, लंबी पैदल यात्रा स्थलों, आस-पास की झीलों, दिलचस्प कस्बों और भ्रमण के लिए क्षेत्रीय परिवहन का उपयोग करने के लिए विचार।",
            // Arrival Page
            page_title_arrival: "आगमन - क्विकस्टार्ट गाइड",
            arrival_page_main_title: "आगमन सूचना",
            arrival_page_sub1_title: "एम्बरग/वीडेन कैसे पहुंचें",
            arrival_page_sub1_text: "एम्बरग या वीडेन की यात्रा के बारे में जानकारी वाला प्लेसहोल्डर टेक्स्ट। निकटतम हवाई अड्डों (नूर्नबर्ग, म्यूनिख), ट्रेन कनेक्शन (Deutsche Bahn - DB), लंबी दूरी की बसों और ड्राइविंग दिशाओं पर विवरण।",
            arrival_page_sub2_title: "पहली आगमन चेकलिस्ट",
            arrival_page_sub2_text: "आगमन के तुरंत बाद महत्वपूर्ण कार्यों को सूचीबद्ध करने वाला प्लेसहोल्डर टेक्स्ट: अपने आवास में चेक-इन करना, विश्वविद्यालय से प्रारंभिक संपर्क करना (जैसे, अंतर्राष्ट्रीय कार्यालय), स्थानीय सिम कार्ड प्राप्त करना, और प्रारंभिक अभिविन्यास।",
            arrival_page_sub3_title: "शहर पंजीकरण (Anmeldung)",
            arrival_page_sub3_text: "स्थानीय पंजीकरण कार्यालय (Einwohnermeldeamt/Bürgerbüro) में अनिवार्य शहर पंजीकरण प्रक्रिया ('Anmeldung') की व्याख्या करने वाला प्लेसहोल्डर टेक्स्ट। समय सीमा, आवश्यक दस्तावेज (पासपोर्ट, किराया समझौता), और इस कदम के महत्व के बारे में जानकारी।",
            // Language Page
            page_title_language: "भाषा - क्विकस्टार्ट गाइड",
            language_page_main_title: "भाषा सहायता",
            language_page_sub1_title: "जर्मन भाषा पाठ्यक्रम",
            language_page_sub1_text: "जर्मन सीखने के अवसरों के बारे में प्लेसहोल्डर टेक्स्ट। OTH AW भाषा केंद्र या साझेदार संस्थानों (जैसे VHS) द्वारा प्रस्तावित पाठ्यक्रमों, उपलब्ध स्तरों (A1-C1), पंजीकरण और संभावित लागतों के बारे में जानकारी।",
            language_page_sub2_title: "भाषा टेंडेम और अभ्यास",
            language_page_sub2_text: "भाषा टेंडेम की अवधारणा को समझाने वाला प्लेसहोल्डर टेक्स्ट (अभ्यास करने के लिए एक देशी वक्ता ढूंढना)। टेंडेम पार्टनर और अनौपचारिक भाषा विनिमय मीटअप (Stammtisch) खोजने के लिए विश्वविद्यालय कार्यक्रमों या प्लेटफार्मों के बारे में जानकारी।",
            language_page_sub3_title: "ऑनलाइन संसाधन और स्व-अध्ययन",
            language_page_sub3_text: "स्व-अध्ययन जर्मन के लिए उपयोगी ऑनलाइन संसाधनों को सूचीबद्ध करने वाला प्लेसहोल्डर टेक्स्ट, जैसे वेबसाइट (जैसे, ड्यूश वेले लर्न जर्मन), भाषा सीखने वाले ऐप (डुओलिंगो, बबेल, आदि), शब्दकोश (LEO, Dict.cc), और ऑनलाइन अभ्यास।",
            // Finance Page
            page_title_finance: "वित्त - क्विकस्टार्ट गाइड",
            finance_page_main_title: "वित्तीय मामले",
            finance_page_sub1_title: "सेमेस्टर शुल्क और योगदान",
            finance_page_sub1_text: "वर्तमान सेमेस्टर योगदान (Semesterbeitrag) की व्याख्या करने वाला प्लेसहोल्डर टेक्स्ट, जिसमें यह शामिल है (छात्र सेवाएं, सेमेस्टर टिकट आदि), भुगतान राशि, समय सीमा, और देर से भुगतान के परिणाम।",
            finance_page_sub2_title: "अनुमानित जीवन यापन लागत",
            finance_page_sub2_text: "एम्बरग या वीडेन में मासिक जीवन यापन व्यय का यथार्थवादी अनुमान प्रदान करने वाला प्लेसहोल्डर टेक्स्ट, किराया, भोजन, स्वास्थ्य बीमा, परिवहन, अध्ययन सामग्री और अवकाश गतिविधियों के लिए औसत लागतों को तोड़ना।",
            finance_page_sub3_title: "वित्त पोषण, छात्रवृत्ति और नौकरियां",
            finance_page_sub3_text: "वित्त पोषण के संभावित स्रोतों को रेखांकित करने वाला प्लेसहोल्डर टेक्स्ट: छात्रवृत्ति (जैसे DAAD, Deutschlandstipendium) के बारे में जानकारी, छात्र नौकरियों (HiWi पद, अंशकालिक कार्य) की संभावनाएं, BAföG पात्रता (मुख्य रूप से जर्मन/यूरोपीय संघ के लिए), और नौकरी पोस्टिंग कहाँ खोजें।",
        },
        ar: {
            // --- Index Page ---
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
            footer_text: "© 2024 OTH Amberg-Weiden. كل الحقوق محفوظة.",
            // --- General Subpage ---
            back_to_main_link: "« العودة إلى النظرة العامة",
            // Welcome Page
            page_title_welcome: "مرحبًا - دليل البدء السريع",
            welcome_page_main_title: "مرحبا بكم في الجامعة",
            welcome_page_sub1_title: "الخطوات الأولى",
            welcome_page_sub1_text: "نص نائب للخطوات الأولى بعد الوصول إلى الجامعة. سيرشدك هذا القسم خلال التسجيل الأولي والتوجيه.",
            welcome_page_sub2_title: "نظرة عامة على الحرم الجامعي",
            welcome_page_sub2_text: "نص نائب يصف مناطق الحرم الجامعي الرئيسية والمباني الهامة وأماكن العثور على الخدمات الرئيسية مثل المكتبة أو الكافتيريا.",
            welcome_page_sub3_title: "جهات الاتصال الهامة",
            welcome_page_sub3_text: "نص نائب يسرد نقاط الاتصال الأولية الهامة ، مثل مكتب الطلاب الدوليين أو خدمات استشارات الطلاب.",
            // Studies Page
            page_title_studies: "الدراسات - دليل البدء السريع",
            studies_page_main_title: "الدراسة والتنظيم",
            studies_page_sub1_title: "تسجيل المساق",
            studies_page_sub1_text: "نص نائب حول كيفية وموعد التسجيل في الدورات والمواعيد النهائية والمنصات ذات الصلة (مثل Moodle أو PRIMUSS). معلومات هامة حول اختيار الوحدة.",
            studies_page_sub2_title: "التقويم الأكاديمي",
            studies_page_sub2_text: "نص نائب يشرح هيكل الفصل الدراسي وفترات المحاضرات ومراحل الامتحانات والعطلات والمواعيد الهامة الأخرى على مدار العام الدراسي.",
            studies_page_sub3_title: "لوائح الدراسة",
            studies_page_sub3_text: "نص نائب يربط أو يلخص لوائح الدراسة والامتحانات الرئيسية (Studien- und Prüfungsordnung - SPO). فهم الاعتمادات (ECTS) ومتطلبات الوحدة.",
            // City Life Page
            page_title_city: "الحياة في المدينة - دليل البدء السريع",
            city_page_main_title: "الحياة في المدينة (آمبرغ/فايدن)",
            city_page_sub1_title: "السكن",
            city_page_sub1_text: "نص نائب حول العثور على سكن وأنواع مختلفة من الإقامة (مساكن الطلاب والشقق المشتركة والشقق الخاصة) ونصائح للبحث وأهمية تسجيل المدينة (Anmeldung).",
            city_page_sub2_title: "المواصلات",
            city_page_sub2_text: "نص نائب بخصوص خيارات النقل العام داخل المدينة والمنطقة ، ومعلومات حول تذكرة الفصل الدراسي (إن وجدت) ، وطرق الدراجات ، ونصائح التنقل العامة.",
            city_page_sub3_title: "التسوق والحياة اليومية",
            city_page_sub3_text: "نص نائب يغطي الجوانب الأساسية للحياة اليومية: مكان شراء البقالة وساعات العمل وفتح حساب مصرفي والعثور على الأطباء والصيدليات ونصائح عملية أخرى.",
            // Links Page
            page_title_links: "روابط - دليل البدء السريع",
            links_page_main_title: "روابط مفيدة",
            links_page_sub1_title: "منصات الجامعة",
            links_page_sub1_text: "نص نائب يوفر روابط مباشرة لأنظمة الجامعة الأساسية مثل منصة التعلم Moodle وخدمة البريد الإلكتروني للطلاب وبوابة PRIMUSS للإدارة وكتالوج المكتبة (OPAC).",
            links_page_sub2_title: "الروابط الإدارية والدعم",
            links_page_sub2_text: "نص نائب يحتوي على روابط لمواقع مكتب الطلاب الدوليين وخدمات الطلاب (Studentenwerk - StW) لـ BAföG والإسكان ومكتب الامتحانات (Prüfungsamt) وخدمات استشارات الطلاب.",
            links_page_sub3_title: "روابط المدينة والمنطقة",
            links_page_sub3_text: "نص نائب يحتوي على روابط للمواقع الرسمية لمدينتي آمبرغ وفايدن ومعلومات عن شركات النقل العام المحلية وبوابات السياحة الإقليمية.",
            // Contacts Page
            page_title_contacts: "جهات الاتصال - دليل البدء السريع",
            contacts_page_main_title: "جهات الاتصال الهامة",
            contacts_page_sub1_title: "مكتب الطلاب الدوليين",
            contacts_page_sub1_text: "نص نائب يوفر معلومات الاتصال الرئيسية لمكتب الطلاب الدوليين ، بما في ذلك عنوان البريد الإلكتروني ورقم الهاتف وموقع المكتب وساعات الاستشارة المعتادة للطلاب الدوليين.",
            contacts_page_sub2_title: "منسق الكلية / برنامج الدراسة",
            contacts_page_sub2_text: "نص نائب يشرح كيفية العثور على تفاصيل الاتصال بإدارة الكلية الخاصة بك أو المنسق المسؤول عن برنامج دراستك المحدد للأسئلة الأكاديمية.",
            contacts_page_sub3_title: "ممثلو الطلاب (Fachschaft / StuV)",
            contacts_page_sub3_text: "نص نائب يحتوي على معلومات حول كيفية الوصول إلى مجلس الطلاب (Studierendenvertretung - StuV) أو ممثلي الطلاب في قسمك المحدد (Fachschaft) للحصول على دعم الأقران والمشورة.",
            // Leisure Page
            page_title_leisure: "الترفيه - دليل البدء السريع",
            leisure_page_main_title: "الترفيه والرياضة",
            leisure_page_sub1_title: "رياضات الجامعة (Hochschulsport)",
            leisure_page_sub1_text: "نص نائب يشرح بالتفصيل برنامج الرياضات الجامعية: مجموعة الأنشطة المقدمة كل فصل دراسي ، وكيفية عرض الجدول الزمني ، وعملية التسجيل ، والتكاليف (إن وجدت) ، ومواقع المرافق الرياضية.",
            leisure_page_sub2_title: "الثقافة والفعاليات",
            leisure_page_sub2_text: "نص نائب يسلط الضوء على الفرص الثقافية في آمبرغ وفايدن ، مثل المسارح ودور السينما والمتاحف والحفلات الموسيقية والفعاليات التي ينظمها الطلاب والحفلات والمهرجانات المحلية على مدار العام.",
            leisure_page_sub3_title: "الرحلات والمناطق المحيطة",
            leisure_page_sub3_text: "نص نائب يقدم اقتراحات لاستكشاف منطقة أوبربفالز وخارجها. أفكار لرحلات يومية ومواقع للمشي لمسافات طويلة وبحيرات قريبة ومدن مثيرة للاهتمام واستخدام وسائل النقل الإقليمية للرحلات.",
            // Arrival Page
            page_title_arrival: "الوصول - دليل البدء السريع",
            arrival_page_main_title: "معلومات الوصول",
            arrival_page_sub1_title: "الوصول إلى آمبرغ/فايدن",
            arrival_page_sub1_text: "نص نائب يحتوي على معلومات حول السفر إلى آمبرغ أو فايدن. تفاصيل حول أقرب المطارات (نورمبرغ ، ميونخ) ، ووصلات القطارات (Deutsche Bahn - DB) ، والحافلات لمسافات طويلة ، واتجاهات القيادة.",
            arrival_page_sub2_title: "قائمة مراجعة الوصول الأول",
            arrival_page_sub2_text: "نص نائب يسرد المهام الحاسمة فور الوصول: تسجيل الدخول في مكان إقامتك ، وإجراء اتصال أولي مع الجامعة (مثل مكتب الطلاب الدوليين) ، والحصول على بطاقة SIM محلية ، والتوجيه الأولي.",
            arrival_page_sub3_title: "تسجيل المدينة (Anmeldung)",
            arrival_page_sub3_text: "نص نائب يشرح عملية تسجيل المدينة الإلزامية ('Anmeldung') في مكتب التسجيل المحلي (Einwohnermeldeamt / Bürgerbüro). معلومات حول المواعيد النهائية والمستندات المطلوبة (جواز السفر ، عقد الإيجار) وأهمية هذه الخطوة.",
            // Language Page
            page_title_language: "اللغة - دليل البدء السريع",
            language_page_main_title: "دعم اللغة",
            language_page_sub1_title: "دورات اللغة الألمانية",
            language_page_sub1_text: "نص نائب حول فرص تعلم اللغة الألمانية. معلومات عن الدورات التي يقدمها مركز اللغات OTH AW أو المؤسسات الشريكة (مثل VHS) والمستويات المتاحة (A1-C1) والتسجيل والتكاليف المحتملة.",
            language_page_sub2_title: "ترادف اللغة والممارسة",
            language_page_sub2_text: "نص نائب يشرح مفهوم ترادف اللغة (العثور على متحدث أصلي للممارسة معه). معلومات حول برامج الجامعة أو المنصات للعثور على شركاء ترادف ولقاءات تبادل لغة غير رسمية (Stammtisch).",
            language_page_sub3_title: "الموارد عبر الإنترنت والدراسة الذاتية",
            language_page_sub3_text: "نص نائب يسرد موارد مفيدة عبر الإنترنت للدراسة الذاتية للغة الألمانية ، مثل مواقع الويب (مثل Deutsche Welle Learn German) وتطبيقات تعلم اللغة (Duolingo ، Babbel ، إلخ) والقواميس (LEO ، Dict.cc) والتمارين عبر الإنترنت.",
            // Finance Page
            page_title_finance: "الشؤون المالية - دليل البدء السريع",
            finance_page_main_title: "الأمور المالية",
            finance_page_sub1_title: "رسوم ومساهمات الفصل الدراسي",
            finance_page_sub1_text: "نص نائب يشرح مساهمة الفصل الدراسي الحالية (Semesterbeitrag) ، ويوضح بالتفصيل ما تغطيه (خدمات الطلاب ، تذكرة الفصل الدراسي ، إلخ) ، ومبلغ الدفع ، والمواعيد النهائية ، وعواقب الدفع المتأخر.",
            finance_page_sub2_title: "تقدير تكلفة المعيشة",
            finance_page_sub2_text: "نص نائب يقدم تقديرًا واقعيًا لنفقات المعيشة الشهرية في آمبرغ أو فايدن ، مع تفصيل متوسط التكاليف للإيجار والطعام والتأمين الصحي والمواصلات والمواد الدراسية والأنشطة الترفيهية.",
            finance_page_sub3_title: "التمويل والمنح الدراسية والوظائف",
            finance_page_sub3_text: "نص نائب يحدد مصادر التمويل المحتملة: معلومات عن المنح الدراسية (مثل DAAD ، Deutschlandstipendium) ، وإمكانيات وظائف الطلاب (وظائف HiWi ، والعمل بدوام جزئي) ، وأهلية BAföG (بشكل أساسي للألمان / الاتحاد الأوروبي) ، وأين تبحث عن إعلانات الوظائف.",
        },
        es: {
             // --- Index Page ---
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
            footer_text: "© 2024 OTH Amberg-Weiden. Todos los derechos reservados.",
            // --- General Subpage ---
            back_to_main_link: "« Volver al Resumen",
            // Welcome Page
            page_title_welcome: "Bienvenido - Guía de Inicio Rápido",
            welcome_page_main_title: "Bienvenido a la Universidad",
            welcome_page_sub1_title: "Primeros Pasos",
            welcome_page_sub1_text: "Texto de marcador de posición para los primeros pasos después de llegar a la universidad. Esta sección lo guiará a través del registro inicial y la orientación.",
            welcome_page_sub2_title: "Resumen del Campus",
            welcome_page_sub2_text: "Texto de marcador de posición que describe las principales áreas del campus, edificios importantes y dónde encontrar servicios clave como la biblioteca o la cafetería.",
            welcome_page_sub3_title: "Contactos Importantes",
            welcome_page_sub3_text: "Texto de marcador de posición que enumera los puntos de contacto iniciales importantes, como la Oficina Internacional o los servicios de asesoramiento estudiantil.",
            // Studies Page
            page_title_studies: "Estudios - Guía de Inicio Rápido",
            studies_page_main_title: "Estudios y Organización",
            studies_page_sub1_title: "Inscripción a Cursos",
            studies_page_sub1_text: "Texto de marcador de posición sobre cómo y cuándo inscribirse en los cursos, fechas límite y plataformas relacionadas (como Moodle o PRIMUSS). Información importante sobre la selección de módulos.",
            studies_page_sub2_title: "Calendario Académico",
            studies_page_sub2_text: "Texto de marcador de posición que explica la estructura del semestre, los períodos de clases, las fases de exámenes, las vacaciones y otras fechas importantes durante el año académico.",
            studies_page_sub3_title: "Regulaciones de Estudio",
            studies_page_sub3_text: "Texto de marcador de posición que enlaza o resume las regulaciones clave de estudio y examen (Studien- und Prüfungsordnung - SPO). Comprensión de los créditos (ECTS) y los requisitos del módulo.",
            // City Life Page
            page_title_city: "Vida en la Ciudad - Guía de Inicio Rápido",
            city_page_main_title: "Vida en la Ciudad (Amberg/Weiden)",
            city_page_sub1_title: "Alojamiento",
            city_page_sub1_text: "Texto de marcador de posición sobre cómo encontrar vivienda, diferentes tipos de alojamiento (residencias, pisos compartidos, apartamentos privados), consejos para la búsqueda y la importancia del registro de la ciudad (Anmeldung).",
            city_page_sub2_title: "Transporte",
            city_page_sub2_text: "Texto de marcador de posición sobre las opciones de transporte público dentro de la ciudad y la región, información sobre el billete semestral (si corresponde), rutas ciclistas y consejos generales de movilidad.",
            city_page_sub3_title: "Compras y Vida Diaria",
            city_page_sub3_text: "Texto de marcador de posición que cubre aspectos esenciales de la vida diaria: dónde comprar comestibles, horarios de apertura, abrir una cuenta bancaria, encontrar médicos y farmacias, y otros consejos prácticos.",
            // Links Page
            page_title_links: "Enlaces - Guía de Inicio Rápido",
            links_page_main_title: "Enlaces Útiles",
            links_page_sub1_title: "Plataformas Universitarias",
            links_page_sub1_text: "Texto de marcador de posición que proporciona enlaces directos a sistemas universitarios esenciales como la plataforma de aprendizaje Moodle, el servicio de correo web para estudiantes, el portal PRIMUSS para administración y el catálogo de la biblioteca (OPAC).",
            links_page_sub2_title: "Enlaces Administrativos y de Apoyo",
            links_page_sub2_text: "Texto de marcador de posición con enlaces a los sitios web de la Oficina Internacional, los Servicios Estudiantiles (Studentenwerk - StW) para BAföG y vivienda, la Oficina de Exámenes (Prüfungsamt) y los servicios de asesoramiento estudiantil.",
            links_page_sub3_title: "Enlaces de la Ciudad y Regionales",
            links_page_sub3_text: "Texto de marcador de posición con enlaces a los sitios web oficiales de las ciudades de Amberg y Weiden, información sobre las compañías locales de transporte público y portales de turismo regional.",
            // Contacts Page
            page_title_contacts: "Contactos - Guía de Inicio Rápido",
            contacts_page_main_title: "Contactos Importantes",
            contacts_page_sub1_title: "Oficina Internacional",
            contacts_page_sub1_text: "Texto de marcador de posición que proporciona información de contacto clave para la Oficina Internacional, incluida la dirección de correo electrónico, el número de teléfono, la ubicación de la oficina y los horarios típicos de consulta para estudiantes internacionales.",
            contacts_page_sub2_title: "Coordinador de Facultad / Programa de Estudios",
            contacts_page_sub2_text: "Texto de marcador de posición que explica cómo encontrar los datos de contacto de la administración de su facultad específica o del coordinador responsable de su programa de estudios particular para preguntas académicas.",
            contacts_page_sub3_title: "Representantes Estudiantiles (Fachschaft / StuV)",
            contacts_page_sub3_text: "Texto de marcador de posición con información sobre cómo comunicarse con el consejo estudiantil (Studierendenvertretung - StuV) o los representantes estudiantiles de su departamento específico (Fachschaft) para obtener apoyo y asesoramiento de pares.",
            // Leisure Page
            page_title_leisure: "Ocio - Guía de Inicio Rápido",
            leisure_page_main_title: "Ocio y Deporte",
            leisure_page_sub1_title: "Deportes Universitarios (Hochschulsport)",
            leisure_page_sub1_text: "Texto de marcador de posición que detalla el programa deportivo universitario: gama de actividades ofrecidas cada semestre, cómo ver el horario, proceso de inscripción, costos (si los hay) y ubicaciones de las instalaciones deportivas.",
            leisure_page_sub2_title: "Cultura y Eventos",
            leisure_page_sub2_text: "Texto de marcador de posición que destaca las oportunidades culturales en Amberg y Weiden, como teatros, cines, museos, conciertos, eventos organizados por estudiantes, fiestas y festivales locales durante todo el año.",
            leisure_page_sub3_title: "Excursiones y Alrededores",
            leisure_page_sub3_text: "Texto de marcador de posición que ofrece sugerencias para explorar la región de Oberpfalz y más allá. Ideas para excursiones de un día, lugares para practicar senderismo, lagos cercanos, pueblos interesantes y uso del transporte regional para excursiones.",
            // Arrival Page
            page_title_arrival: "Llegada - Guía de Inicio Rápido",
            arrival_page_main_title: "Información de Llegada",
            arrival_page_sub1_title: "Cómo llegar a Amberg/Weiden",
            arrival_page_sub1_text: "Texto de marcador de posición con información sobre cómo viajar a Amberg o Weiden. Detalles sobre los aeropuertos más cercanos (Nuremberg, Múnich), conexiones de tren (Deutsche Bahn - DB), autobuses de larga distancia y direcciones de conducción.",
            arrival_page_sub2_title: "Lista de Verificación de la Primera Llegada",
            arrival_page_sub2_text: "Texto de marcador de posición que enumera las tareas cruciales inmediatamente después de llegar: registrarse en su alojamiento, hacer contacto inicial con la universidad (por ejemplo, Oficina Internacional), obtener una tarjeta SIM local y orientación inicial.",
            arrival_page_sub3_title: "Registro de la Ciudad (Anmeldung)",
            arrival_page_sub3_text: "Texto de marcador de posición que explica el proceso obligatorio de registro de la ciudad ('Anmeldung') en la oficina de registro local (Einwohnermeldeamt/Bürgerbüro). Información sobre plazos, documentos requeridos (pasaporte, contrato de alquiler) y la importancia de este paso.",
            // Language Page
            page_title_language: "Idioma - Guía de Inicio Rápido",
            language_page_main_title: "Apoyo Lingüístico",
            language_page_sub1_title: "Cursos de Alemán",
            language_page_sub1_text: "Texto de marcador de posición sobre oportunidades para aprender alemán. Información sobre cursos ofrecidos por el Centro de Idiomas OTH AW o instituciones asociadas (como VHS), niveles disponibles (A1-C1), inscripción y costos potenciales.",
            language_page_sub2_title: "Tándems Lingüísticos y Práctica",
            language_page_sub2_text: "Texto de marcador de posición que explica el concepto de un tándem lingüístico (encontrar un hablante nativo para practicar). Información sobre programas universitarios o plataformas para encontrar compañeros de tándem y encuentros informales de intercambio de idiomas (Stammtisch).",
            language_page_sub3_title: "Recursos en Línea y Autoestudio",
            language_page_sub3_text: "Texto de marcador de posición que enumera recursos en línea útiles para el autoestudio de alemán, como sitios web (por ejemplo, Deutsche Welle Learn German), aplicaciones de aprendizaje de idiomas (Duolingo, Babbel, etc.), diccionarios (LEO, Dict.cc) y ejercicios en línea.",
            // Finance Page
            page_title_finance: "Finanzas - Guía de Inicio Rápido",
            finance_page_main_title: "Asuntos Financieros",
            finance_page_sub1_title: "Tasas y Contribuciones Semestrales",
            finance_page_sub1_text: "Texto de marcador de posición que explica la contribución semestral actual (Semesterbeitrag), detallando lo que cubre (servicios estudiantiles, billete semestral, etc.), monto del pago, plazos y consecuencias del pago tardío.",
            finance_page_sub2_title: "Costo de Vida Estimado",
            finance_page_sub2_text: "Texto de marcador de posición que proporciona una estimación realista de los gastos de manutención mensuales en Amberg o Weiden, desglosando los costos promedio de alquiler, comida, seguro médico, transporte, materiales de estudio y actividades de ocio.",
            finance_page_sub3_title: "Financiamiento, Becas y Empleos",
            finance_page_sub3_text: "Texto de marcador de posición que describe posibles fuentes de financiamiento: información sobre becas (como DAAD, Deutschlandstipendium), posibilidades de empleos para estudiantes (puestos HiWi, trabajo a tiempo parcial), elegibilidad para BAföG (principalmente para alemanes/UE) y dónde buscar ofertas de empleo.",
        },
        zh: {
            // --- Index Page ---
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
            footer_text: "© 2024 OTH Amberg-Weiden。版权所有。",
            // --- General Subpage ---
            back_to_main_link: "« 返回概览",
            // Welcome Page
            page_title_welcome: "欢迎 - 快速入门指南",
            welcome_page_main_title: "欢迎来到大学",
            welcome_page_sub1_title: "第一步",
            welcome_page_sub1_text: "抵达大学后第一步的占位符文本。本节将指导您完成初始注册和迎新。",
            welcome_page_sub2_title: "校园概览",
            welcome_page_sub2_text: "描述主要校园区域、重要建筑以及图书馆或自助餐厅等关键服务位置的占位符文本。",
            welcome_page_sub3_title: "重要联系方式",
            welcome_page_sub3_text: "列出初始重要联系点（例如国际办公室或学生咨询服务）的占位符文本。",
            // Studies Page
            page_title_studies: "学习 - 快速入门指南",
            studies_page_main_title: "学习与组织",
            studies_page_sub1_title: "课程注册",
            studies_page_sub1_text: "关于如何以及何时注册课程、截止日期和相关平台（如 Moodle 或 PRIMUSS）的占位符文本。关于模块选择的重要信息。",
            studies_page_sub2_title: "校历",
            studies_page_sub2_text: "解释学期结构、授课期、考试期、假期和整个学年其他重要日期的占位符文本。",
            studies_page_sub3_title: "学习规定",
            studies_page_sub3_text: "链接或总结关键学习和考试规定（Studien- und Prüfungsordnung - SPO）的占位符文本。了解学分（ECTS）和模块要求。",
            // City Life Page
            page_title_city: "城市生活 - 快速入门指南",
            city_page_main_title: "城市生活 (安贝格/魏登)",
            city_page_sub1_title: "住宿",
            city_page_sub1_text: "关于寻找住房、不同类型的住宿（宿舍、合租公寓、私人公寓）、搜索技巧以及城市登记（Anmeldung）重要性的占位符文本。",
            city_page_sub2_title: "交通",
            city_page_sub2_text: "关于市内和区域内公共交通选择、学期票信息（如果适用）、自行车路线和一般出行建议的占位符文本。",
            city_page_sub3_title: "购物与日常生活",
            city_page_sub3_text: "涵盖日常生活基本方面的占位符文本：在哪里购买杂货、营业时间、开设银行账户、寻找医生和药店以及其他实用技巧。",
            // Links Page
            page_title_links: "链接 - 快速入门指南",
            links_page_main_title: "有用链接",
            links_page_sub1_title: "大学平台",
            links_page_sub1_text: "提供基本大学系统（如 Moodle 学习平台、学生 Webmail 服务、用于管理的 PRIMUSS 门户和图书馆目录 (OPAC)）直接链接的占位符文本。",
            links_page_sub2_title: "行政与支持链接",
            links_page_sub2_text: "包含国际办公室、学生服务中心（Studentenwerk - StW）（用于 BAföG 和住房）、考试办公室（Prüfungsamt）和学生咨询服务网站链接的占位符文本。",
            links_page_sub3_title: "城市与区域链接",
            links_page_sub3_text: "包含安贝格市和魏登市官方网站、当地公共交通公司信息和区域旅游门户网站链接的占位符文本。",
            // Contacts Page
            page_title_contacts: "联系方式 - 快速入门指南",
            contacts_page_main_title: "重要联系方式",
            contacts_page_sub1_title: "国际办公室",
            contacts_page_sub1_text: "提供国际办公室关键联系信息的占位符文本，包括电子邮件地址、电话号码、办公室位置和国际学生的典型咨询时间。",
            contacts_page_sub2_title: "学院/学习项目协调员",
            contacts_page_sub2_text: "解释如何查找您特定学院管理部门或负责您特定学习项目的协调员的联系方式以获取学术问题的占位符文本。",
            contacts_page_sub3_title: "学生代表 (Fachschaft / StuV)",
            contacts_page_sub3_text: "包含如何联系学生会 (Studierendenvertretung - StuV) 或您特定部门的学生代表 (Fachschaft) 以获得同伴支持和建议的信息的占位符文本。",
            // Leisure Page
            page_title_leisure: "休闲 - 快速入门指南",
            leisure_page_main_title: "休闲与运动",
            leisure_page_sub1_title: "大学体育 (Hochschulsport)",
            leisure_page_sub1_text: "详细说明大学体育项目的占位符文本：每学期提供的活动范围、如何查看时间表、注册过程、费用（如有）以及体育设施的位置。",
            leisure_page_sub2_title: "文化与活动",
            leisure_page_sub2_text: "突出安贝格和魏登文化机会的占位符文本，例如剧院、电影院、博物馆、音乐会、学生组织的活动、派对和全年的当地节日。",
            leisure_page_sub3_title: "短途旅行与周边地区",
            leisure_page_sub3_text: "提供探索上普法尔茨地区及更远地区的建议的占位符文本。一日游、远足地点、附近湖泊、有趣城镇以及利用区域交通进行短途旅行的想法。",
            // Arrival Page
            page_title_arrival: "抵达 - 快速入门指南",
            arrival_page_main_title: "抵达信息",
            arrival_page_sub1_title: "前往安贝格/魏登",
            arrival_page_sub1_text: "包含前往安贝格或魏登旅行信息的占位符文本。关于最近机场（纽伦堡、慕尼黑）、火车连接（德国铁路 - DB）、长途巴士和驾车路线的详细信息。",
            arrival_page_sub2_title: "首次抵达清单",
            arrival_page_sub2_text: "列出抵达后立即执行的关键任务的占位符文本：入住您的住所、与大学进行初次联系（例如国际办公室）、获取当地 SIM 卡和初步迎新。",
            arrival_page_sub3_title: "城市登记 (Anmeldung)",
            arrival_page_sub3_text: "解释在当地登记处 (Einwohnermeldeamt/Bürgerbüro) 进行强制性城市登记 ('Anmeldung') 过程的占位符文本。关于截止日期、所需文件（护照、租赁协议）以及此步骤重要性的信息。",
            // Language Page
            page_title_language: "语言 - 快速入门指南",
            language_page_main_title: "语言支持",
            language_page_sub1_title: "德语课程",
            language_page_sub1_text: "关于学习德语机会的占位符文本。关于 OTH AW 语言中心或合作机构（如 VHS）提供的课程、可用级别（A1-C1）、注册和潜在费用的信息。",
            language_page_sub2_title: "语伴与练习",
            language_page_sub2_text: "解释语伴概念（寻找母语者一起练习）的占位符文本。关于寻找语伴的大学项目或平台以及非正式语言交流聚会 (Stammtisch) 的信息。",
            language_page_sub3_title: "在线资源与自学",
            language_page_sub3_text: "列出用于自学德语的有用在线资源的占位符文本，例如网站（例如德国之声学习德语）、语言学习应用程序（Duolingo、Babbel 等）、词典（LEO、Dict.cc）和在线练习。",
            // Finance Page
            page_title_finance: "财务 - 快速入门指南",
            finance_page_main_title: "财务事项",
            finance_page_sub1_title: "学期费与捐款",
            finance_page_sub1_text: "解释当前学期捐款 (Semesterbeitrag) 的占位符文本，详细说明其涵盖内容（学生服务、学期票等）、付款金额、截止日期和逾期付款的后果。",
            finance_page_sub2_title: "预计生活成本",
            finance_page_sub2_text: "提供安贝格或魏登每月生活费用现实估计的占位符文本，细分租金、食品、健康保险、交通、学习材料和休闲活动的平均成本。",
            finance_page_sub3_title: "资金、奖学金与工作",
            finance_page_sub3_text: "概述潜在资金来源的占位符文本：关于奖学金（如 DAAD、Deutschlandstipendium）的信息、学生工作（HiWi 职位、兼职工作）的可能性、BAföG 资格（主要适用于德国人/欧盟）以及在哪里寻找招聘信息。",
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
        if (!translations[lang] && lang !== 'en') {
            console.warn(`Language '${lang}' not found, falling back to English.`);
        }

        // Update HTML attributes
        htmlElement.lang = lang;
        htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update text content
        const elementsToTranslate = document.querySelectorAll('[data-key]');
        elementsToTranslate.forEach(element => {
            const key = element.dataset.key;
            let text = currentTranslations[key];

            if (text === undefined && lang !== 'en' && englishTranslations) {
                text = englishTranslations[key];
                if (text !== undefined && !element.dataset.key.startsWith('box_')) { // Reduce noise for box titles already present
                     console.warn(`Key '${key}' missing in language '${lang}', using English fallback.`);
                }
            }

            if (text === undefined) {
                text = `[MISSING KEY: ${key}]`;
                console.error(`Key '${key}' missing in both '${lang}' and English.`);
            }

            // Apply text
            if (key === 'footer_text' || element.tagName === 'A') { // Includes back-link and box links
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
                return savedLang;
            }
            const browserLang = navigator.language.split('-')[0];
            if (translations[browserLang]) {
                return browserLang;
            }
        } catch (e) {
            console.warn("Could not access localStorage/navigator.language:", e);
        }
        return 'de'; // Default to German
    }

    // --- Event Listener ---
    languageSelector.addEventListener('change', (event) => {
        updateLanguage(event.target.value);
    });

    // --- Initialization ---
    const initialLang = getInitialLanguage();
    updateLanguage(initialLang);

});
