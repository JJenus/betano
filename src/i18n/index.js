import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";
import de from "./locales/de.json";
import pt from "./locales/pt.json";
import { util } from "../stores/utility";

const i18n = createI18n({
	// default locale
	locale: util.getLang(),
	fallbackLocale: "en",
	legacy: false,

	// translations

	messages: {
		en,
		es,
		de,
		pt,
	},
});

export default i18n;
