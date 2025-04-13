// --- Translation Data ---
const translations = {
    // German translations
    de: {
        // --- General ---
        pageTitleHome: "Alevitische Gemeinde Kreis Miltenberg e.V.",
        pageTitleContact: "Kontakt - Alevitische Gemeinde Kreis Miltenberg e.V.",
        pageTitleEvents: "Veranstaltungen - Alevitische Gemeinde Kreis Miltenberg e.V.", // New
        navStart: "Start",
        navAbout: "Über Uns",
        navEducation: "Bildung",
        navEvents: "Veranstaltungen", // New
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
        infoBarAddressDetails: "Zwischen den Wegen 11<br>63820 Elsenfeld",
        infoBarEmailLabel: "E-Mail",
        infoBarEmailLink: "",
        infoBarPhoneLabel: "Telefon",
        infoBarPhoneLink: "",
        infoBarBereavementLabel: "Bei Sterbefall",
        bereavementContact1Text: "Placeholder Name 1: +49 123 4567890",
        bereavementContact1Tel: "+491234567890",
        bereavementContact2Text: "Placeholder Name 2: +49 987 6543210",
        bereavementContact2Tel: "+499876543210",
        // --- Events Page Specific ---
        eventsMainTitle: "Veranstaltungen", // New
        eventsSubheadline: "Halbjährliche Veranstaltungen", // New
        // Note: Individual event descriptions aren't translated here, add keys if needed
        // --- Footer ---
        footerCopyright: "© 2025 Alevitische Gemeinde Kreis Miltenberg e.V. Alle Rechte vorbehalten."
    },
    // Turkish translations
    tr: {
         // --- General ---
        pageTitleHome: "Miltenberg Alevi Toplumu e.V.",
        pageTitleContact: "İletişim - Miltenberg Alevi Toplumu e.V.",
        pageTitleEvents: "Etkinlikler - Miltenberg Alevi Toplumu e.V.", // New
        navStart: "Anasayfa",
        navAbout: "Hakkımızda",
        navEducation: "Eğitim",
        navEvents: "Etkinlikler", // New
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
        infoBarAddressDetails: "Zwischen den Wegen 11<br>63820 Elsenfeld", // Keep German address or translate
        infoBarEmailLabel: "E-posta",
        infoBarEmailLink: "",
        infoBarPhoneLabel: "Telefon",
        infoBarPhoneLink: "",
        infoBarBereavementLabel: "Vefat Durumunda",
        bereavementContact1Text: "Placeholder Name 1: +49 123 4567890",
        bereavementContact1Tel: "+491234567890",
        bereavementContact2Text: "Placeholder Name 2: +49 987 6543210",
        bereavementContact2Tel: "+499876543210",
         // --- Events Page Specific ---
        eventsMainTitle: "Etkinlikler", // New
        eventsSubheadline: "Yarı Yıllık Etkinlikler", // New
        // --- Footer ---
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
    navEvents: document.getElementById('nav-events'), // New
    navContact: document.getElementById('nav-contact'),
    footerCopyright: document.getElementById('footer-copyright'),
    // Index Page Specific
    orgTitle: document.getElementById('org-title'),
    // Contact Page Specific
    contactMainTitle: document.getElementById('contact-main-title'),
    contactFormHeadline: document.getElementById('contact-form-headline'),
    formVorname: document.getElementById('form-vorname'),
    formNachname: document.getElementById('form-nachname'),
    formEmail: document.getElementById('form-email'),
    formTelefon: document.getElementById('form-telefon'),
    formNachricht: document.getElementById('form-nachricht'),
    contactFormSubmitButton: document.getElementById('contact-form-submit-button'),
    infoBarAddressLabel: document.getElementById('info-bar-address-label'),
    infoBarAddressDetails: document.getElementById('info-bar-address-details'),
    infoBarEmailLabel: document.getElementById('info-bar-email-label'),
    infoBarEmail: document.getElementById('info-bar-email'),
    infoBarPhoneLabel: document.getElementById('info-bar-phone-label'),
    infoBarPhone: document.getElementById('info-bar-phone'),
    infoBarBereavementLabel: document.getElementById('info-bar-bereavement-label'),
    bereavementContact1Link: document.getElementById('bereavement-contact1-link'),
    bereavementContact2Link: document.getElementById('bereavement-contact2-link'),
    // Events Page Specific
    eventsMainTitle: document.getElementById('events-main-title'), // New
    eventsSubheadline: document.getElementById('events-subheadline'), // New
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

// --- Function to determine current page ---
function getCurrentPage() {
    if (document.getElementById('org-title')) { return 'home'; }
    if (document.getElementById('contact-main-title')) { return 'contact'; }
    if (document.getElementById('events-main-title')) { return 'events'; } // New
    return 'unknown';
}

// --- Function to set the language ---
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language '${lang}' not found in translations object.`);
        lang = 'de'; // Fallback
    }

    const currentPage = getCurrentPage();
    const currentTranslations = translations[lang];

    console.log(`Setting language to: ${lang} on page: ${currentPage}`);

    // --- Special Handling for Page Title ---
    const pageTitleElement = elementsToTranslate.pageTitle;
    if (pageTitleElement) {
        if (currentPage === 'home' && currentTranslations.pageTitleHome) {
            pageTitleElement.innerText = currentTranslations.pageTitleHome;
        } else if (currentPage === 'contact' && currentTranslations.pageTitleContact) {
            pageTitleElement.innerText = currentTranslations.pageTitleContact;
        } else if (currentPage === 'events' && currentTranslations.pageTitleEvents) { // New
             pageTitleElement.innerText = currentTranslations.pageTitleEvents;
        } else {
             pageTitleElement.innerText = currentTranslations.pageTitleHome || "Alevitische Gemeinde";
        }
    } else { console.warn("Page title element ('#page-title') not found."); }

    // --- Update text content for other elements ---
    for (const key in elementsToTranslate) {
        if (key === 'pageTitle') continue;

        const element = elementsToTranslate[key];
        if (element) { // Check if element exists
            const translationValue = currentTranslations[key];

            if (translationValue !== undefined) {
                // Handle Placeholders
                 if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && key.startsWith('form')) {
                     const placeholderKey = key + 'Placeholder';
                     if (currentTranslations[placeholderKey]) {
                         element.placeholder = currentTranslations[placeholderKey];
                     }
                 }
                // Handle specific Links
                else if (key === 'infoBarEmail') {
                     const linkValue = currentTranslations.infoBarEmailLink;
                     element.href = linkValue ? 'mailto:' + linkValue : '#';
                     element.innerText = linkValue || '';
                } else if (key === 'infoBarPhone') {
                     const linkValue = currentTranslations.infoBarPhoneLink;
                     const phoneLink = (linkValue || '').replace(/[^+\d]/g, '');
                     element.href = phoneLink ? 'tel:' + phoneLink : '#';
                     element.innerText = linkValue || '';
                } else if (key === 'bereavementContact1Link') {
                    const telKey = 'bereavementContact1Tel';
                    const textKey = 'bereavementContact1Text';
                    const telNum = (currentTranslations[telKey] || '').replace(/[^+\d]/g, '');
                    element.href = telNum ? 'tel:' + telNum : '#';
                    element.innerText = currentTranslations[textKey] || '';
                } else if (key === 'bereavementContact2Link') {
                    const telKey = 'bereavementContact2Tel';
                    const textKey = 'bereavementContact2Text';
                    const telNum = (currentTranslations[telKey] || '').replace(/[^+\d]/g, '');
                    element.href = telNum ? 'tel:' + telNum : '#';
                    element.innerText = currentTranslations[textKey] || '';
                }
                // Handle elements needing HTML
                else if (key === 'infoBarAddressDetails') {
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
                else if (element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA' && !key.endsWith('Link') && !key.endsWith('Tel') && !key.endsWith('Text')) {
                    element.innerText = translationValue;
                }
            }
        } // End if (element)
    } // End for loop

    // Update main flag image and alt text
    if (currentLangFlag) {
        currentLangFlag.src = flagUrls[lang];
        currentLangFlag.alt = lang === 'de' ? translations.de.flagAltDe : translations.tr.flagAltTr;
    } else { console.warn("Current language flag element ('#current-lang-flag') not found."); }

     // Update ARIA labels
    if (currentLangLink) {
        currentLangLink.setAttribute('aria-label', currentTranslations.currentLangLabelActive);
    } else { console.warn("Current language link element ('.current-lang') not found."); }
    languageOptions.forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        if(optionLang === 'de') { option.setAttribute('aria-label', currentTranslations.switchLangDeLabel); }
        else if (optionLang === 'tr') { option.setAttribute('aria-label', currentTranslations.switchLangTrLabel); }
    });

    // Update HTML lang attribute
    htmlTag.lang = lang;

    // Store preference
    localStorage.setItem('preferredLanguage', lang);
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
    try {
        const savedLang = localStorage.getItem('preferredLanguage');
        const initialLang = savedLang && translations[savedLang] ? savedLang : 'de';
        setLanguage(initialLang);
    } catch (error) {
        console.error("Error during initial language setting:", error);
        try { setLanguage('de'); }
        catch (fallbackError) { console.error("Error during fallback language setting:", fallbackError); }
    }
});
