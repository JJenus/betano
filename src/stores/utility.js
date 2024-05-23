import { inject, ref } from "vue";
import currency from "currency.js";
import AWN from "awesome-notifications";
import "awesome-notifications/dist/style.css";

const options = {
	position: "bottom-right",
};

const bKey = "Currency7sd56d76f";
const lKey = "lang7sd56d76f";


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
		return {
			currency: "USD",
			currencySymbol: "$",
			language: "en",
			verificationFee: 5,
		};
	},

	setCurrency: (currency) => {
		localStorage.setItem(bKey, currency);
	},

	getCurrency: () => {
		
		let data = localStorage.getItem(bKey);
		if (data == undefined || data == null) return "$";
		return data;
	},

	setLang: (lang) => {
		localStorage.setItem(lKey, lang);
	},

	getLang: () => {
		let data = localStorage.getItem(lKey);
		if (data == undefined || data == null) return "en";
		return data;
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

		if (util.getLang() !== "en") {
			decimalSep = ",";
			thousandSep = ".";
		}

		const cash = currency(money, {
			symbol: util.getCurrency(),
			decimal: decimalSep,
			separator: thousandSep,
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
