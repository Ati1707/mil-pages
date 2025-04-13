// --- Translation Data ---
const translations = {
    // German translations (Copied from user's snippet)
    de: {
        // --- General ---
        pageTitleHome: "Alevitische Gemeinde Kreis Miltenberg e.V.",
        pageTitleContact: "Kontakt - Alevitische Gemeinde Kreis Miltenberg e.V.",
        navStart: "Start",
        navAbout: "Über Uns",
        navEducation: "Bildung",
        navContact: "Kontakt",
        currentLangLabelBase: "Sprache wechseln",
        currentLangLabelActive: "Sprache wechseln, aktuell Deutsch",
        switchLangDeLabel: "Sprache auf Deutsch wechseln",
        switchLangTrLabel: "Sprache auf Türkisch wechseln",
        flagAltDe: "Deutsch",
        // --- Index Page Specific ---
        orgTitle: "Alevitische Gemeinde Kreis Miltenberg e.V.",
        // --- Contact Page Specific ---
        contactMainTitle: "Kontakt",
        contactFormHeadline: "Schreiben Sie uns.",
        formVornamePlaceholder: "Vorname",
        formNachnamePlaceholder: "Nachname",
        formEmailPlaceholder: "E-Mail",
        formTelefonPlaceholder: "Telefon",
        formNachrichtPlaceholder: "Nachricht",
        contactFormSubmitButton: "Senden",
        infoBarAddressLabel: "Adresse",
        infoBarAddressDetails: "Zwischen den Wegen 11<br>63820 Elsenfeld", // HTML kept
        // infoBarOpeningLabel: "Öffnungszeiten", // Commented out as removed from HTML
        // infoBarOpeningDetails: "", // Commented out
        infoBarEmailLabel: "E-Mail",
        infoBarEmailLink: "", // Empty as per snippet
        infoBarPhoneLabel: "Telefon",
        infoBarPhoneLink: "", // Empty as per snippet
        // Removed Directions Keys
        footerCopyright: "© 2025 Alevitische Gemeinde Kreis Miltenberg e.V. Alle Rechte vorbehalten."
    },
    // Turkish translations (Derived from the German snippet)
    tr: {
         // --- General ---
        pageTitleHome: "Miltenberg Alevi Toplumu e.V.",
        pageTitleContact: "İletişim - Miltenberg Alevi Toplumu e.V.",
        navStart: "Anasayfa",
        navAbout: "Hakkımızda",
        navEducation: "Eğitim",
        navContact: "İletişim",
        currentLangLabelBase: "Dili değiştir",
        currentLangLabelActive: "Dili değiştir, mevcut Türkçe",
        switchLangDeLabel: "Dili Almanca'ya çevir",
        switchLangTrLabel: "Dili Türkçe'ye çevir",
        flagAltTr: "Türkçe",
         // --- Index Page Specific ---
        orgTitle: "Miltenberg Alevi Toplumu e.V.",
        // --- Contact Page Specific ---
        contactMainTitle: "İletişim",
        contactFormHeadline: "Bize Yazın.",
        formVornamePlaceholder: "Ad",
        formNachnamePlaceholder: "Soyad",
        formEmailPlaceholder: "E-posta",
        formTelefonPlaceholder: "Telefon",
        formNachrichtPlaceholder: "Mesaj",
        contactFormSubmitButton: "Gönder",
        infoBarAddressLabel: "Adres",
        infoBarAddressDetails: "Zwischen den Wegen 11<br>63820 Elsenfeld", // Keep German address? Or translate if needed
        // infoBarOpeningLabel: "Çalışma Saatleri", // Commented out
        // infoBarOpeningDetails: "", // Commented out
        infoBarEmailLabel: "E-posta",
        infoBarEmailLink: "", // Empty
        infoBarPhoneLabel: "Telefon",
        infoBarPhoneLink: "", // Empty
        // Removed Directions Keys
        footerCopyright: "© 2025 Miltenberg Alevi Toplumu e.V. Tüm hakları saklıdır."
    }
};

// --- Elements to Translate ---
// Updated to match current HTML structure (removed directions, opening hours)
const elementsToTranslate = {
    // General / Shared
    pageTitle: document.getElementById('page-title'),
    navStart: document.getElementById('nav-start'),
    navAbout: document.getElementById('nav-about'),
    navEducation: document.getElementById('nav-education'),
    navContact: document.getElementById('nav-contact'),
    // Index Page Specific
    orgTitle: document.getElementById('org-title'),
    // Contact Page Specific
    contactMainTitle: document.getElementById('contact-main-title'),
    contactFormHeadline: document.getElementById('contact-form-headline'),
    formVorname: document.getElementById('form-vorname'), // Input element for placeholder
    formNachname: document.getElementById('form-nachname'), // Input element for placeholder
    formEmail: document.getElementById('form-email'), // Input element for placeholder
    formTelefon: document.getElementById('form-telefon'), // Input element for placeholder
    formNachricht: document.getElementById('form-nachricht'), // Textarea element for placeholder
    contactFormSubmitButton: document.getElementById('contact-form-submit-button'),
    infoBarAddressLabel: document.getElementById('info-bar-address-label'),
    infoBarAddressDetails: document.getElementById('info-bar-address-details'),
    // infoBarOpeningLabel: document.getElementById('info-bar-opening-label'), // Commented out
    // infoBarOpeningDetails: document.getElementById('info-bar-opening-details'), // Commented out
    infoBarEmailLabel: document.getElementById('info-bar-email-label'),
    infoBarEmail: document.getElementById('info-bar-email'), // Link element
    infoBarPhoneLabel: document.getElementById('info-bar-phone-label'),
    infoBarPhone: document.getElementById('info-bar-phone'), // Link element
    // Optional Footer
    footerCopyright: document.getElementById('footer-copyright')
};

// --- Language Switcher Elements ---
const languageOptions = document.querySelectorAll('.lang-option');
const currentLangFlag = document.getElementById('current-lang-flag');
const currentLangLink = document.querySelector('.current-lang');
const htmlTag = document.documentElement;

// --- Flag URLs ---
const flagUrls = {
    de: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/de.svg',
    tr: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/tr.svg'
};

// --- Function to determine current page (simple check) ---
function getCurrentPage() {
    if (document.getElementById('org-title')) { return 'home'; }
    if (document.getElementById('contact-main-title')) { return 'contact'; }
    return 'unknown';
}

// --- Function to set the language ---
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not found in translations.`);
        return;
    }

    const currentPage = getCurrentPage();
    const currentTranslations = translations[lang];

    // --- Special Handling for Page Title ---
    const pageTitleElement = elementsToTranslate.pageTitle;
    if (pageTitleElement) {
        if (currentPage === 'home' && currentTranslations.pageTitleHome) {
            pageTitleElement.innerText = currentTranslations.pageTitleHome;
        } else if (currentPage === 'contact' && currentTranslations.pageTitleContact) {
            pageTitleElement.innerText = currentTranslations.pageTitleContact;
        }
    }

    // --- Update text content for other elements ---
    for (const key in elementsToTranslate) {
        if (key === 'pageTitle') continue; // Skip pageTitle

        const element = elementsToTranslate[key];
        // *** CRUCIAL CHECK: Only proceed if element exists on the current page ***
        if (element) {
            const translationValue = currentTranslations[key];

            if (translationValue !== undefined) {
                // Handle Placeholders (using specific keys from translations)
                if (key === 'formVorname' && currentTranslations.formVornamePlaceholder) {
                    element.placeholder = currentTranslations.formVornamePlaceholder;
                } else if (key === 'formNachname' && currentTranslations.formNachnamePlaceholder) {
                    element.placeholder = currentTranslations.formNachnamePlaceholder;
                } else if (key === 'formEmail' && currentTranslations.formEmailPlaceholder) {
                    element.placeholder = currentTranslations.formEmailPlaceholder;
                } else if (key === 'formTelefon' && currentTranslations.formTelefonPlaceholder) {
                    element.placeholder = currentTranslations.formTelefonPlaceholder;
                } else if (key === 'formNachricht' && currentTranslations.formNachrichtPlaceholder) {
                    element.placeholder = currentTranslations.formNachrichtPlaceholder;
                }
                // Handle Links (Set text and href if available)
                else if (key === 'infoBarEmail') {
                     element.href = currentTranslations.infoBarEmailLink ? 'mailto:' + currentTranslations.infoBarEmailLink : '';
                     element.innerText = currentTranslations.infoBarEmailLink || ''; // Display the link or empty
                } else if (key === 'infoBarPhone') {
                     const phoneLink = (currentTranslations.infoBarPhoneLink || '').replace(/[^+\d]/g, ''); // Clean tel link
                     element.href = phoneLink ? 'tel:' + phoneLink : '';
                     element.innerText = currentTranslations.infoBarPhoneLink || ''; // Display the link or empty
                }
                // Handle elements needing HTML (like address with <br>)
                else if (key === 'infoBarAddressDetails' /* || key === 'infoBarOpeningDetails' */) { // Keep opening hours commented
                    element.innerHTML = translationValue;
                }
                 // Handle nav items with icons
                else if (key === 'navAbout' || key === 'navEducation') {
                    const iconHTML = ' <i class="fas fa-chevron-down"></i>';
                    element.innerHTML = (translationValue || '') + iconHTML;
                }
                 // Handle submit button with icon
                 else if (key === 'contactFormSubmitButton') {
                    const iconHTML = ' <i class="fas fa-arrow-right"></i>';
                     element.innerHTML = (translationValue || '') + iconHTML;
                 }
                // Default: update innerText for regular elements
                else if (!key.endsWith('Link') && !key.endsWith('Placeholder')) { // Avoid overwriting placeholders/links again
                    element.innerText = translationValue;
                }
            }
        } // End if (element) check
    } // End for loop

    // Update main flag image and alt text
    if (currentLangFlag) {
        currentLangFlag.src = flagUrls[lang];
        currentLangFlag.alt = lang === 'de' ? translations.de.flagAltDe : translations.tr.flagAltTr;
    }

     // Update ARIA labels
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

    // Store preference
    localStorage.setItem('preferredLanguage', lang);

    console.log(`Language set to: ${lang} on page: ${currentPage}`);
}

// --- Event Listeners ---
languageOptions.forEach(option => {
    option.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedLang = option.getAttribute('data-lang');
        setLanguage(selectedLang);
    });
});

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    const initialLang = savedLang && translations[savedLang] ? savedLang : 'de';
    setLanguage(initialLang);
});
