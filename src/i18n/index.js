import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";
import de from "./locales/de.json";

const i18n = createI18n({
	// default locale
	locale: "de",
	fallbackLocale: "en",
	legacy: false,

	// translations

	messages: {
		en,
		es,
		de,
	},
});

export default i18n;
