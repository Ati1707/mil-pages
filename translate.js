// --- Translation Data ---
const translations = {
    // German translations
    de: {
        pageTitle: "Alevitische Gemeinde Miltenberg", // Updated title
        orgTitle: "Alevitische Gemeinde Miltenberg", // New org title
        navStart: "Start",
        navAbout: "Über Uns",
        navEducation: "Bildung",
        navContact: "Kontakt",
        currentLangLabelBase: "Sprache wechseln", // Base label
        currentLangLabelActive: "Sprache wechseln, aktuell Deutsch", // Dynamic label
        switchLangDeLabel: "Sprache auf Deutsch wechseln",
        switchLangTrLabel: "Sprache auf Türkisch wechseln",
        flagAltDe: "Deutsch"
    },
    // Turkish translations
    tr: {
        pageTitle: "Miltenberg Alevi Toplumu", // Translated title
        orgTitle: "Miltenberg Alevi Toplumu", // Translated org title
        navStart: "Anasayfa", // Start
        navAbout: "Hakkımızda", // About Us
        navEducation: "Eğitim", // Education
        navContact: "İletişim", // Contact
        currentLangLabelBase: "Dili değiştir", // Base label
        currentLangLabelActive: "Dili değiştir, mevcut Türkçe", // Dynamic label
        switchLangDeLabel: "Dili Almanca'ya çevir",
        switchLangTrLabel: "Dili Türkçe'ye çevir",
        flagAltTr: "Türkçe" // Alt text for Turkish flag when active
    }
};

// --- Elements to Translate ---
// Updated to match new IDs and remove obsolete ones
const elementsToTranslate = {
    pageTitle: document.getElementById('page-title'),
    orgTitle: document.getElementById('org-title'),
    navStart: document.getElementById('nav-start'),
    navAbout: document.getElementById('nav-about'),
    navEducation: document.getElementById('nav-education'),
    navContact: document.getElementById('nav-contact')
};

// --- Language Switcher Elements ---
const languageOptions = document.querySelectorAll('.lang-option');
const currentLangFlag = document.getElementById('current-lang-flag');
const currentLangLink = document.querySelector('.current-lang'); // The main link containing the flag
const htmlTag = document.documentElement; // The <html> tag

// --- Flag URLs ---
const flagUrls = {
    de: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/de.svg',
    tr: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/tr.svg'
};

// --- Function to set the language ---
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not found in translations.`);
        return;
    }

    const currentTranslations = translations[lang];

    // Update text content
    for (const key in elementsToTranslate) {
        const element = elementsToTranslate[key];
        if (element && currentTranslations[key] !== undefined) {
            // Special handling for nav items with icons
            if (key === 'navAbout' || key === 'navEducation') {
                const iconHTML = ' <i class="fas fa-chevron-down"></i>';
                // Check if the translation exists before appending the icon
                element.innerHTML = (currentTranslations[key] || '') + iconHTML;
            } else {
                element.innerText = currentTranslations[key] || ''; // Fallback to empty string
            }
        } else if (element) {
             // Clear content if translation missing (optional)
             // element.innerText = '';
        }
    }

    // Update main flag image and alt text
    if (currentLangFlag) {
        currentLangFlag.src = flagUrls[lang];
        currentLangFlag.alt = lang === 'de' ? translations.de.flagAltDe : translations.tr.flagAltTr;
    }

     // Update ARIA labels for accessibility
    if (currentLangLink) {
        currentLangLink.setAttribute('aria-label', currentTranslations.currentLangLabelActive);
    }
    languageOptions.forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        if(optionLang === 'de') {
            option.setAttribute('aria-label', currentTranslations.switchLangDeLabel);
        } else if (optionLang === 'tr') {
            option.setAttribute('aria-label', currentTranslations.switchLangTrLabel);
        }
    });


    // Update HTML lang attribute
    htmlTag.lang = lang;

    // Store preference in localStorage
    localStorage.setItem('preferredLanguage', lang);

    console.log(`Language set to: ${lang}`);
}

// --- Event Listeners for Language Options ---
languageOptions.forEach(option => {
    option.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const selectedLang = option.getAttribute('data-lang');
        setLanguage(selectedLang);
    });
});

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    // Check localStorage for saved language, otherwise default to 'de'
    const savedLang = localStorage.getItem('preferredLanguage');
    // Make sure the saved language exists in our translations
    const initialLang = savedLang && translations[savedLang] ? savedLang : 'de';
    setLanguage(initialLang);
});
