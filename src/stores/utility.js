import { inject, ref } from "vue";
import currency from "currency.js";
import AWN from "awesome-notifications";
import "awesome-notifications/dist/style.css";

const options = {
	position: "bottom-right",
};

const bKey = "Currency7sd56d76f";
const lKey = "lang7sd56d76f";
const settingsKey = "settingsTano";

export const alert = {
	success(title = false, message = "") {
		// notify("success", title, message);
		if (title) new AWN().success(title);
		else new AWN(options).success("Successful");
	},
	error(title, message = "") {
		// notify("error", title, message);
		new AWN(options).alert(title);
	},
	info(title, message = "") {
		// notify("info", title, message);
		new AWN(options).info(title);
	},
};

export const util = {
	settings: () => {
		let data = localStorage.getItem(settingsKey);
		if (data == undefined || data == null) {
			return {
				accountBalance: 0,
				currency: "$",
				lang: "en",
			};
		}
		return JSON.parse(data);
	},

	saveSettings: (data) => {
		localStorage.setItem(settingsKey, JSON.stringify(data));
	},

	setCurrency: (currency) => {
		localStorage.setItem(bKey, currency);
	},

	getCurrency: () => {
		return util.settings().currency;
	},

	setLang: (lang) => {
		localStorage.setItem(lKey, lang);
	},

	getLang: () => {
		return util.settings().lang;
	},

	search(area, input) {
		const rjx = new RegExp(input, "i");
		document.querySelectorAll(area).forEach((e) => {
			if (rjx.test(e.innerText)) {
				e.style.display = "block";
			} else {
				e.style.display = "none";
			}
		});
	},

	money(money) {
		let decimalSep = "."; 
		let thousandSep = ",";
		let pattern = `!#`;

		const actual = currency(money).value;

		if (util.getLang() !== "en") {
			decimalSep = ",";
			thousandSep = ".";
			pattern = `#!`;
			console.log("Hello")
		}

		const cash = currency(actual, {
			symbol: util.getCurrency(),
			decimal: decimalSep,
			separator: thousandSep,
			pattern: pattern,
		}).format();

		return cash;
	},

	customRound(number, isBetano = true) {
		const decimalPlaces = (number.toString().split(".")[1] || "").length;

		if (
			!isBetano &&
			decimalPlaces <= 2 &&
			parseFloat(number.toFixed(2)) % 1 < 0.01
		) {
			return parseInt(number.toFixed(0));
		} else {
			return parseFloat(number.toFixed(2));
		}
	},
};
