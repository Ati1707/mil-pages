// --- Translation Data ---
const translations = {
    // German translations
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
        infoBarAddressDetails: "Zwischen den Wegen 11<br>63820 Elsenfeld", // Keep HTML if needed
        infoBarOpeningLabel: "Öffnungszeiten",
        infoBarOpeningDetails: "", // Keep HTML if needed
        infoBarEmailLabel: "E-Mail",
        infoBarEmailLink: "",
        infoBarPhoneLabel: "Telefon",
        infoBarPhoneLink: "",
        footerCopyright: "© 2025 Alevitische Gemeinde Kreis Miltenberg e.V. Alle Rechte vorbehalten."
    },
    // Turkish translations
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
        infoBarAddressDetails: "", // Keep address
        infoBarOpeningLabel: "Çalışma Saatleri",
        infoBarOpeningDetails: "", // Translate days/times if needed
        infoBarEmailLabel: "E-posta",
        infoBarEmailLink: "", // Keep link
        infoBarPhoneLabel: "Telefon",
        infoBarPhoneLink: "", // Keep number
        directionsHeadline: "Bizi Ziyaret Edin",

        footerCopyright: "© 2025 Miltenberg Alevi Toplumu e.V. Tüm hakları saklıdır."
    }
};

// --- Elements to Translate ---
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
    infoBarOpeningLabel: document.getElementById('info-bar-opening-label'),
    infoBarOpeningDetails: document.getElementById('info-bar-opening-details'),
    infoBarEmailLabel: document.getElementById('info-bar-email-label'),
    infoBarEmail: document.getElementById('info-bar-email'), // Link element
    infoBarPhoneLabel: document.getElementById('info-bar-phone-label'),
    infoBarPhone: document.getElementById('info-bar-phone'), // Link element
    directionsHeadline: document.getElementById('directions-headline'),
    directionsDbHeadline: document.getElementById('directions-db-headline'),
    directionsDbText: document.getElementById('directions-db-text'),
    directionsOvHeadline: document.getElementById('directions-ov-headline'),
    directionsOvText: document.getElementById('directions-ov-text'),
    directionsCarHeadline: document.getElementById('directions-car-headline'),
    directionsCarText: document.getElementById('directions-car-text'),
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
    if (document.getElementById('org-title')) { // Element only on index
        return 'home';
    } else if (document.getElementById('contact-main-title')) { // Element only on contact
        return 'contact';
    }
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
        if (element) { // Check if element exists on the current page
            const translationValue = currentTranslations[key];

            if (translationValue !== undefined) {
                // Handle Placeholders
                if (key.startsWith('form') && key.endsWith('Placeholder')) {
                     // Find the corresponding input/textarea element using the base key
                     const inputKey = key.replace('Placeholder', '');
                     const inputElement = elementsToTranslate[inputKey];
                     if (inputElement) {
                         inputElement.placeholder = translationValue;
                     }
                }
                // Handle Links (keep href, update text if needed - e.g., email/phone links often stay the same)
                else if (element.tagName === 'A' && (key === 'infoBarEmail' || key === 'infoBarPhone')) {
                     // Example: if you wanted different display text per language
                     // element.innerText = translationValue;
                     // Currently keeping link text same as value from translation object
                     // which contains the actual email/phone
                     if (key === 'infoBarEmail') element.href = 'mailto:' + currentTranslations.infoBarEmailLink;
                     if (key === 'infoBarPhone') element.href = 'tel:' + currentTranslations.infoBarPhoneLink.replace(/[^+\d]/g, ''); // Clean tel link
                     element.innerText = translationValue; // Set link text (e.g., the email address/phone)

                }
                // Handle elements needing HTML (like address/opening hours with <br>)
                else if (key === 'infoBarAddressDetails' || key === 'infoBarOpeningDetails') {
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
                // Default: update innerText
                else {
                    element.innerText = translationValue;
                }
            }
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

    console.log(`Language set to: ${lang} on page: ${currentPage}`);
}

// --- Event Listeners for Language Options ---
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
