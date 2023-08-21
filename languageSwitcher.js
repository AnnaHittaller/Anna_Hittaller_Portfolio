// The locale our app first shows
const defaultLocale = "en";

// The active locale
let locale;
const activeLang = localStorage.getItem("selectedLanguage");
// const switcher = document.getElementById("lang-toggle");
// console.log("test", switcher);
const switcher = document.getElementById("lang-toggle");
if (activeLang === "de") {
	switcher.checked = true;
}
// switcher.checked = true;
// Gets filled with active locale translations
let translations = {};

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
	// Translate the page to the default locale
	setLocale(activeLang || defaultLocale);
	//console.log(activeLang);

	bindLocaleSwitcher(defaultLocale);
});

// Whenever the user selects a new locale, we
// load the locale's translations and update
// the page
function bindLocaleSwitcher(initialValue) {
	const switcher = document.querySelector("[data-i18n-switcher]");
	//this has to be corrected ................//

	// switcher.value = initialValue;
	switcher.onchange = () => {
		// Set the locale to the selected option[value]
		localStorage.setItem("selectedLanguage", locale === "en" ? "de" : "en");
		setLocale(locale === "en" ? "de" : "en");
	};
}

// Load translations for the given locale and translate
// the page to this locale
async function setLocale(newLocale) {
	if (newLocale === locale) return;
	const newTranslations = await fetchTranslationsFor(newLocale);
	locale = newLocale;
	translations = newTranslations;
	translatePage();
	setPlaceholders(newLocale);
}
// Retrieve translations JSON object for the given
// locale over the network
async function fetchTranslationsFor(newLocale) {
	const response = await fetch(`/lang/${newLocale}.json`);
	return await response.json();
}

// Replace the inner text of each element that has a
// data-i18n-key attribute with the translation corresponding
// to its data-i18n-key
function translatePage() {
	document.querySelectorAll("[data-i18n-key]").forEach(translateElement);
}

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
	const key = element.getAttribute("data-i18n-key");
	const translation = translations[key];
	if (element.innerHTML) {
		element.innerHTML = translation;
	}

	//element.querySelectorAll("[data-i18n-key]").forEach(translateElement);
}

// Set the placeholders based on the active locale
function setPlaceholders(locale) {
	const placeholders = {
		en: {
			email: "E-mail",
			subject: "Subject",
			message: "Message",
		},
		de: {
			email: "E-Mail",
			subject: "Betreff",
			message: "Nachricht",
		},
		// Add more translations as needed
	};

	document.querySelectorAll("[data-i18n-key]").forEach((element) => {
		const key = element.getAttribute("data-i18n-key");
		const translation = placeholders[locale][key];
		if (element.placeholder !== undefined) {
			element.placeholder = translation;
		}
	});
}
