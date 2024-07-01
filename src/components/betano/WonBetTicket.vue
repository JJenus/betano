<script setup>
	import moment from "moment";
	import { computed, onMounted, ref } from "vue";
	import { util } from "../../stores/utility";
	import { useI18n } from "vue-i18n";

	const { t } = useI18n();

	const props = defineProps({
		ticket: {
			required: true,
		},
	});

	const hidden = ref(true);

	const money = util.money;

	const gameType = computed(() => {
		const len = props.ticket.games.length;
		if (len == 1) return t("bet.single");
		else if (len == 2) return t("bet.double");
		return len + " " + t("bet.fold");
	});

	const winnings = computed(() => {
		return money(props.ticket.totalOdds * props.ticket.bet);
	});

	function ftScore(ht, ft, del = "-") {
		let _ht = ht.split(":");
		let _ft = ft.split(":");
		const home = Number(_ht[0]) + Number(_ft[0]);
		const away = Number(_ht[1]) + Number(_ft[1]);

		return home + del + away;
	}

	const toggleMain = () => {
		hidden.value = !hidden.value;
	};

	function getDateTime(cDate) {
		var now = moment(cDate);

		// Get the hour and minute parts
		var hour = now.hour();
		var minute = now.minute();
		const realTime = now.format("HH:mm");

		// Define thresholds for "Today" and "Tonight"
		var todayThreshold = moment().endOf("day");
		// var tonightThreshold = moment().endOf("day").hour(19).minute(58); // Assuming tonight starts at 20:00

		console.log(
			"End of Day:",
			todayThreshold.format("dd/mm/yy HH:mm A"),
			"C Date:",
			now.format("dd/mm/yy HH:mm A")
		);
		let formattedDate;
		// Check if the current time is before the "Today" threshold
		if (now.isSame(moment(), "day")) {
			if (hour < 20) {
				// Display "Today" and the time
				formattedDate = `${t("day.today")} ${realTime}`;
			} else {
				// Display "Tonight" and the time
				formattedDate = `${t("day.tonight")} ${realTime}`;
			}
		} else {
			// Handle cases for tomorrow or later
			formattedDate = `${t("day.tomorrow")} ${realTime}`;
		}
		return formattedDate;
	}

	const gameEvent = (game) => {
		let thePick;
		if (game.event === "Correct Score") {
			thePick = t("bet.cs");
		} else if (game.event === "Match Result") {
			thePick = t("bet.mr");
		} else if (game.event === "Over/Under Total Goals") {
			thePick = t("bet.to");
		}
		return thePick;
	};

	const pick = (game) => {
		const h = game.scores.ht.home + game.scores.sh.home;
		const a = game.scores.ht.away + game.scores.sh.away;
		let thePick;
		if (game.event === "Correct Score") {
			thePick = `${h} - ${a}`;
		} else if (game.event === "Match Result") {
			thePick =
				h > a ? game.homeTeam : h === a ? t("bet.draw") : game.awayTeam;
		} else if (game.event === "Over/Under Total Goals") {
			thePick = `${t("bet.over")} ${a + h - 1}.5`;
		}
		return thePick;
	};

	const allPicks = () => {
		let p = "";
		props.ticket.games.map((e) => {
			p += pick(e) + ", ";
		});

		return p.slice(0, p.length - 2);
	};

	const score = (game) => {
		const h = game.scores.ht.home + game.scores.sh.home;
		const a = game.scores.ht.away + game.scores.sh.away;
		return `${h} - ${a}`;
	};
</script>

<template>
	<div
		data-v-cec6d0d2=""
		class="bet-activity-card-wrapper tw-mx-n tw-my-s"
		bis_skin_checked="1"
	>
		<div
			data-v-cec6d0d2=""
			class="bet-activity-card bet-activity-card--with-header bet-activity-card--no-padding bet-activity-card--hasBorder bet-activity-card-wrapper__card"
			data-qa="bet-activity-card"
			style="--computed-bet-activity-card-bg: transparent"
			bis_skin_checked="1"
		>
			<div bis_skin_checked="1">
				<div
					data-v-0a524667=""
					data-v-cec6d0d2=""
					class="card-header card-header--has-no-background card-header--has-divider tw-h-[50px]"
					bis_skin_checked="1"
				>
					<div
						data-v-0a524667=""
						class="card-header__left"
						bis_skin_checked="1"
					>
						<button
							v-if="ticket.betStatus !== 'won'"
							data-v-cec6d0d2=""
							class="markets__market__header__icons__icon"
							data-qa="bet-list-item-activity-card-pin"
						>
							<svg
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-label=""
								class="kz-icon kz-icon-xs"
							>
								<path
									xmlns="http://www.w3.org/2000/svg"
									fill="#000"
									d="M9.83584536,14.8701282 L4.853482,19.8524916 C4.65823619,20.0477374 4.34168018,20.0477374 4.14643436,19.8524916 C3.95118855,19.6572458 3.95118855,19.3406898 4.14643436,19.145444 L9.12879777,14.1630805 L6.7460788,11.7803612 C6.41689334,11.4521578 6.25848717,10.989872 6.31720381,10.5287506 C6.37592045,10.0676293 6.64512319,9.65979276 7.04605371,9.42455828 C8.17026535,8.77109609 9.48330777,8.53754338 10.7552269,8.75675166 L13.3401194,4.69433333 C13.5844306,4.31062003 13.9896796,4.05851524 14.4418593,4.00894267 C14.8940389,3.9593701 15.3442825,4.117687 15.6659109,4.43934073 L19.5610341,8.33446395 C19.8826054,8.6562458 20.0407557,9.10658505 19.9909877,9.55877399 C19.9412197,10.0109629 19.6889126,10.4161271 19.3051659,10.6601992 L15.2435024,13.2450073 C15.4627116,14.5169462 15.2290801,15.8301359 14.5757009,16.9542055 C14.3404664,17.355136 13.9326299,17.6243387 13.4715086,17.6830554 C13.0103872,17.741772 12.5481013,17.5833658 12.2204257,17.2547089 L9.83584536,14.8701282 Z M7.30911108,10.6550546 C7.28953887,10.8087617 7.34234092,10.962857 7.45259793,11.0727859 L12.928001,16.5481898 C13.0374022,16.6579182 13.1914975,16.7107203 13.3452046,16.6911481 C13.4989117,16.6715759 13.6348572,16.5818416 13.7122416,16.4499568 C14.2960725,15.4455311 14.4701852,14.2546856 14.1983589,13.1251547 C14.1483884,12.9175104 14.2358353,12.7010527 14.416016,12.5863872 L18.768429,9.81654868 C18.8963813,9.73516793 18.9804837,9.60011319 18.997073,9.44938354 C19.0136624,9.2986539 18.9609456,9.14854082 18.8538708,9.0413959 L14.9588493,5.14637443 C14.8516352,5.03915187 14.701554,4.98637957 14.5508275,5.00290376 C14.4001009,5.01942795 14.2650179,5.10346288 14.1836589,5.23124472 L11.4138906,9.58421395 C11.2992308,9.76441331 11.0827612,9.85187375 10.8751044,9.80190028 C9.7459036,9.53015334 8.55542395,9.70408501 7.5511828,10.2875059 C7.41802463,10.3659978 7.32864041,10.5016843 7.30911108,10.6550546 Z"
								></path>
							</svg>
						</button>
						<div
							v-if="ticket.betStatus !== 'won'"
							data-v-cec6d0d2=""
							class="bets-notifications"
							bis_skin_checked="1"
						>
							<div
								class="tw-p-s tw-cursor-pointer"
								bis_skin_checked="1"
							>
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-label=""
									class="kz-icon kz-icon-s tw-fill-[none] icon--stroke--cloud-burst-500"
								>
									<path
										xmlns="http://www.w3.org/2000/svg"
										d="M12,18.6666667 C12.7366667,18.6666667 13.3333333,18.07 13.3333333,17.3333333 L10.6666667,17.3333333 C10.6666667,18.07 11.2633333,18.6666667 12,18.6666667 Z M16,14.6666667 L16,11.3333333 C16,9.28333333 14.91,7.57333333 13,7.12 L13,6.66666667 C13,6.11333333 12.5533333,5.66666667 12,5.66666667 C11.4466667,5.66666667 11,6.11333333 11,6.66666667 L11,7.12 C9.09,7.57333333 8,9.28333333 8,11.3333333 L8,14.6666667 L6.66666667,16 L6.66666667,16.6666667 L17.3333333,16.6666667 L17.3333333,16 L16,14.6666667 Z"
									></path>
								</svg>
							</div>
						</div>
						<div
							:class="
								ticket.betStatus === 'won'
									? ''
									: 'tw-border-l-n tw-border-solid tw-border-[color:var(--bet-activity-card-header-divider-color)]'
							"
							data-v-cec6d0d2=""
							class="tw-flex tw-flex-col tw-items-start tw-h-[34px] tw-pl-n tw-overflow-hidden tw-cursor-pointer"
							bis_skin_checked="1"
						>
							<div
								:class="!hidden ? '' : 'bet-label--is-expanded'"
								data-v-62118c81=""
								data-v-cec6d0d2=""
								class="bet-label bet-label--Win bet-label--is-expandedi"
								bis_skin_checked="1"
							>
								<span
									data-v-62118c81=""
									data-qa="bet-label-title"
									class="bet-label__title tw-truncate"
									>{{ gameType }}</span
								><span
									data-v-62118c81=""
									data-qa="bet-label-amount"
									class="bet-label__amount"
									>{{ money(ticket.bet) }}</span
								>
							</div>
							<span
								v-if="!hidden"
								data-v-cec6d0d2=""
								class="tw-text-xs tw-leading-s tw-text-n-48-slate tw-mt-xs tw-truncate tw-max-w-full"
								>{{ allPicks() }}</span
							>
						</div>
					</div>
					<div
						data-v-0a524667=""
						class="card-header__right"
						bis_skin_checked="1"
					>
						<div
							v-if="ticket.betStatus === 'won'"
							data-v-cec6d0d2=""
							class="tw-flex tw-flex-col tw-items-end tw-mr-n tw-h-[34px] tw-overflow-hidden tw-cursor-pointer"
							bis_skin_checked="1"
						>
							<div
								v-if="ticket.betStatus === 'won'"
								:class="hidden ? 'tw-translate-y-[7px]' : ''"
								class="tw-flex tw-items-center tw-transition-transform tw-duration-base tw-ease-in tw-translate-y-[7px]i"
								bis_skin_checked="1"
							>
								<div
									data-v-62118c81=""
									data-v-cec6d0d2=""
									class="bet-label bet-label--hasBackground bet-label--Win"
									bis_skin_checked="1"
								>
									<span
										data-v-62118c81=""
										data-qa="bet-label-title"
										class="bet-label__title tw-truncate"
										>{{ $t("btn.won") }}</span
									>
								</div>
							</div>
							<span
								v-if="!hidden"
								data-v-13231c12=""
								class="tw-text-xs tw-leading-s"
								>{{ winnings }}</span
							>
						</div>
						<div
							v-else
							data-v-cec6d0d2=""
							class="tw-flex tw-flex-col tw-items-end tw-mr-n tw-h-[34px] tw-overflow-hidden tw-cursor-pointer"
							bis_skin_checked="1"
						>
							<div
								class="tw-flex tw-items-center tw-transition-transform tw-duration-base tw-ease-in tw-translate-y-[7px]"
								bis_skin_checked="1"
							>
								<section
									data-v-65f57563=""
									data-v-cec6d0d2=""
									class="bet-odds bet-odds--zero-margin-left"
									data-qa-bet-odds=""
									data-qa="bet-odds"
									is-bold="true"
								>
									<div
										data-v-65f57563=""
										data-qa="bet-odds-value"
										class="bet-odds__value"
										bis_skin_checked="1"
									>
										{{ ticket.totalOdds }}
									</div>
								</section>
							</div>
						</div>
						<button
							@click="toggleMain()"
							type="button"
							data-v-67537718=""
							data-v-cec6d0d2=""
							class="toggle-button !tw-border-[color:var(--toggle-button-divider-color-large)] tw-min-h-[34px] !tw-ml-0"
						>
							<svg
								v-if="!hidden"
								data-v-27bf5722=""
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-label=""
								class="toggle-button__icon tw-icon-xs"
							>
								<path
									xmlns="http://www.w3.org/2000/svg"
									d="M6.12588664,9.72284438 L11.6172842,15.8239745 C11.7177983,15.9364221 11.8567492,16 12.001992,16 C12.1472348,16 12.2861857,15.9364221 12.3866998,15.8239745 L17.8755976,9.72284438 C17.9642942,9.6156676 18.0086741,9.47449456 17.998592,9.33159812 C17.9885099,9.18870169 17.9248277,9.05629891 17.8221035,8.96465773 L16.8972049,8.12979449 C16.6826147,7.93576009 16.3625675,7.96225622 16.1782838,8.18931268 L12.0962316,12.8598978 C12.072488,12.8894918 12.072488,12.9065131 12.001492,12.9065131 C11.9304961,12.9065131 11.9304961,12.8894918 11.9067524,12.8598978 L7.82320043,8.18877648 C7.73455535,8.08015097 7.60949565,8.01347204 7.47523861,8.00325132 C7.34075106,7.99039159 7.2071318,8.03642066 7.10477925,8.13086689 L6.17938077,8.96465773 C6.07606563,9.05613631 6.01182877,9.18870142 6.0014003,9.33195465 C5.99128699,9.47502997 6.03627738,9.61630074 6.12588664,9.72284438 Z"
								></path>
							</svg>
							<svg
								v-else
								data-v-27bf5722=""
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-label=""
								class="toggle-button__icon toggle-button__icon--expanded tw-icon-xs"
							>
								<path
									xmlns="http://www.w3.org/2000/svg"
									d="M6.12588664,9.72284438 L11.6172842,15.8239745 C11.7177983,15.9364221 11.8567492,16 12.001992,16 C12.1472348,16 12.2861857,15.9364221 12.3866998,15.8239745 L17.8755976,9.72284438 C17.9642942,9.6156676 18.0086741,9.47449456 17.998592,9.33159812 C17.9885099,9.18870169 17.9248277,9.05629891 17.8221035,8.96465773 L16.8972049,8.12979449 C16.6826147,7.93576009 16.3625675,7.96225622 16.1782838,8.18931268 L12.0962316,12.8598978 C12.072488,12.8894918 12.072488,12.9065131 12.001492,12.9065131 C11.9304961,12.9065131 11.9304961,12.8894918 11.9067524,12.8598978 L7.82320043,8.18877648 C7.73455535,8.08015097 7.60949565,8.01347204 7.47523861,8.00325132 C7.34075106,7.99039159 7.2071318,8.03642066 7.10477925,8.13086689 L6.17938077,8.96465773 C6.07606563,9.05613631 6.01182877,9.18870142 6.0014003,9.33195465 C5.99128699,9.47502997 6.03627738,9.61630074 6.12588664,9.72284438 Z"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div
				:class="hidden ? '' : '!tw-py-0'"
				class="main-content"
				bis_skin_checked="1"
			>
				<div
					v-if="hidden"
					v-for="game in ticket.games"
					data-v-cec6d0d2=""
					data-v-7e671be2=""
					class=""
					style="height: auto"
					bis_skin_checked="1"
				>
					<div data-v-cec6d0d2="" bis_skin_checked="1">
						<section data-v-fb75d824="" data-v-cec6d0d2="" class="">
							<div
								data-v-35bb295d=""
								data-v-fb75d824=""
								class="leg-info leg-info--divider-visible"
								data-qa="leg-info"
								bis_skin_checked="1"
							>
								<div
									data-v-35bb295d=""
									class="leg-info__header"
									bis_skin_checked="1"
								>
									<div
										data-v-35bb295d=""
										class="section-left"
										bis_skin_checked="1"
									>
										<svg
											viewBox="0 0 24 24"
											fill="none"
											height="24"
											width="24"
											id="icon"
											xmlns="http://www.w3.org/2000/svg"
											aria-label=""
											class="tw-min-w-[16px] tw-w-icon-xxs tw-h-icon-xxs"
											data-qa="sport-icon"
										>
											<path
												xmlns="http://www.w3.org/2000/svg"
												fill="#fff"
												d="M12 2.81598C10.1835 2.81598 8.40788 3.35461 6.89758 4.36377C5.38727 5.37292 4.21013 6.80727 3.51501 8.48543C2.8199 10.1636 2.63802 12.0102 2.99239 13.7917C3.34676 15.5732 4.22145 17.2097 5.50586 18.4941C6.79027 19.7785 8.42671 20.6532 10.2082 21.0076C11.9898 21.3619 13.8364 21.1801 15.5145 20.4849C17.1927 19.7898 18.627 18.6127 19.6362 17.1024C20.6453 15.5921 21.184 13.8164 21.184 12C21.184 10.7939 20.9464 9.59969 20.4849 8.48543C20.0233 7.37117 19.3469 6.35873 18.494 5.50592C17.6412 4.6531 16.6288 3.97661 15.5145 3.51507C14.4003 3.05353 13.206 2.81598 12 2.81598Z"
											></path>
											<path
												xmlns="http://www.w3.org/2000/svg"
												fill="#EDF6FE"
												d="M17.1844 4.41959C18.3933 6.18747 18.9462 8.32223 18.7477 10.4547C18.5492 12.5871 17.6117 14.5831 16.0973 16.0975C14.5829 17.6119 12.5869 18.5494 10.4545 18.7479C8.32208 18.9464 6.18732 18.3934 4.41943 17.1846C5.18125 18.2987 6.17927 19.2313 7.34248 19.9158C8.50568 20.6004 9.80547 21.0202 11.1494 21.1453C12.4932 21.2704 13.8482 21.0977 15.1178 20.6396C16.3873 20.1815 17.5403 19.4493 18.4947 18.4949C19.4491 17.5405 20.1814 16.3875 20.6395 15.1179C21.0976 13.8483 21.2702 12.4934 21.1451 11.1495C21.02 9.80563 20.6002 8.50583 19.9157 7.34263C19.2311 6.17943 18.2986 5.1814 17.1844 4.41959Z"
											></path>
											<path
												xmlns="http://www.w3.org/2000/svg"
												fill="#06C"
												d="M5.06402 5.98007C3.61166 7.64903 2.81303 9.78759 2.81593 12 2.81593 12.2603 2.82684 12.518 2.84867 12.7731L5.40422 9.83097 5.06402 5.98007zM15.5209 3.51635C13.2712 2.58508 10.7441 2.58336 8.49316 3.51156L12.0134 5.01534 15.5209 3.51635zM21.1537 12.7491C21.1734 12.5021 21.1835 12.2524 21.1841 12 21.1873 9.79729 20.3956 7.66737 18.9543 6.00163L18.6157 9.82858 21.1537 12.7491zM4.13867 16.7501C4.77354 17.7986 5.61147 18.7098 6.60326 19.43 7.59505 20.1503 8.72073 20.6652 9.91423 20.9444L7.92728 17.623 4.13867 16.7501zM14.1138 20.9389C15.3011 20.6572 16.4205 20.1422 17.4068 19.4237 18.3932 18.7053 19.2267 17.7978 19.859 16.7541L16.0935 17.6214 14.1138 20.9389z"
											></path>
											<path
												xmlns="http://www.w3.org/2000/svg"
												fill="#0052A5"
												stroke="#036"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d="M9.48853 15.8805L7.92725 11.064L12.0105 8.08841L16.0938 11.064L14.535 15.8805H9.48853Z"
											></path>
											<path
												xmlns="http://www.w3.org/2000/svg"
												stroke="#036"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d="M15.5219 3.51555L12.0104 5.01534 8.50049 3.51555M4.14551 16.7517L7.92773 17.623 9.91388 20.946M14.1138 20.9397L16.0935 17.6214 19.859 16.7541M5.06429 5.98007L5.4045 9.83098M5.4045 9.83098L2.84814 12.7731M5.4045 9.83098L7.92731 11.064M21.1539 12.7499L18.6159 9.82858M18.6159 9.82858L18.9545 6.00164M18.6159 9.82858L16.0939 11.064M12.0106 5.01535V8.08841M14.535 15.8805L16.0939 17.6214M9.4886 15.8805L7.92811 17.623"
											></path>
											<path
												xmlns="http://www.w3.org/2000/svg"
												stroke="#036"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d="M12.0004 2.81641C10.184 2.81641 8.40837 3.35504 6.89807 4.36419C5.38776 5.37335 4.21062 6.8077 3.5155 8.48586C2.82039 10.164 2.63851 12.0106 2.99288 13.7921C3.34725 15.5737 4.22194 17.2101 5.50635 18.4945C6.79076 19.7789 8.4272 20.6536 10.2087 21.008C11.9903 21.3624 13.8369 21.1805 15.515 20.4854C17.1932 19.7903 18.6275 18.6131 19.6367 17.1028C20.6458 15.5925 21.1845 13.8169 21.1845 12.0004C21.1845 10.7944 20.9469 9.60012 20.4854 8.48586C20.0238 7.3716 19.3473 6.35916 18.4945 5.50635C17.6417 4.65353 16.6293 3.97704 15.515 3.5155C14.4008 3.05396 13.2065 2.81641 12.0004 2.81641Z"
											></path>
										</svg>
										<div
											data-v-c1e4335a=""
											data-v-fb75d824=""
											data-qa="selection-label"
											class="selection-label selection-label--margin-left"
											bis_skin_checked="1"
										>
											{{ pick(game) }}
										</div>
										<svg
											v-if="ticket.betStatus === 'won'"
											data-v-fb75d824=""
											viewBox="0 0 24 24"
											fill="none"
											height="24"
											width="24"
											xmlns="http://www.w3.org/2000/svg"
											aria-label=""
											class="kz-icon-xxs tw-min-w-[16px] tw-ml-s"
											data-qa="result-icon-success"
										>
											<path
												xmlns="http://www.w3.org/2000/svg"
												fill="#42C256"
												fill-rule="evenodd"
												d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.5763 17.408L17.9748 9.3164C18.4959 8.65794 18.3637 7.71749 17.6808 7.21502C16.9964 6.71254 16.0195 6.84154 15.5 7.5L10.321 14.0452L7.78083 10.9164C7.25041 10.2624 6.27355 10.1484 5.5969 10.6599C4.92025 11.1699 4.80204 12.1133 5.33091 12.7643L9.1139 17.4245C9.40945 17.7875 9.86055 18.0005 10.3381 18.0005H10.349C10.8312 17.9975 11.2838 17.7785 11.5763 17.408Z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div>
									<div
										data-v-35bb295d=""
										class="section-right"
										bis_skin_checked="1"
									>
										<section
											data-v-65f57563=""
											data-v-fb75d824=""
											class="bet-odds bet-odds--zero-margin-right"
											data-qa-bet-odds=""
											data-qa="bet-odds"
											is-bold=""
										>
											<div
												data-v-65f57563=""
												class="bet-odds__indicators"
												bis_skin_checked="1"
											>
												<svg
													data-v-65f57563=""
													viewBox="0 0 24 24"
													fill="none"
													height="24"
													width="24"
													xmlns="http://www.w3.org/2000/svg"
													aria-label=""
													class="bet-odds__indicator bet-odds__indicator--increasing kz-icon-pico icon--color-success"
												>
													<path
														xmlns="http://www.w3.org/2000/svg"
														fill="#1C2026"
														d="M11.5931 5.56961L2.56473 18.2094C2.32835 18.5403 2.56491 19 2.97159 19H21.0284C21.4351 19 21.6717 18.5403 21.4353 18.2094L12.4069 5.56961C12.2075 5.29044 11.7925 5.29044 11.5931 5.56961Z"
													></path>
												</svg>
												<svg
													data-v-65f57563=""
													viewBox="0 0 24 24"
													fill="none"
													height="24"
													width="24"
													xmlns="http://www.w3.org/2000/svg"
													aria-label=""
													class="bet-odds__indicator bet-odds__indicator--decreasing kz-icon-pico icon--color-danger"
												>
													<path
														xmlns="http://www.w3.org/2000/svg"
														fill="#1C2026"
														d="M12.4069 18.4304L21.4353 5.79062C21.6717 5.45969 21.4351 5 21.0284 5L2.97159 5C2.56491 5 2.32835 5.45968 2.56473 5.79062L11.5931 18.4304C11.7925 18.7096 12.2075 18.7096 12.4069 18.4304Z"
													></path>
												</svg>
											</div>
											<div
												data-v-65f57563=""
												data-qa="bet-odds-value"
												class="bet-odds__value"
												bis_skin_checked="1"
											>
												{{ game.odds }}
											</div>
										</section>
									</div>
								</div>
								<div
									data-v-35bb295d=""
									class="leg-info__main"
									bis_skin_checked="1"
								>
									<div
										data-v-503d0d42=""
										data-v-fb75d824=""
										data-qa="market-label"
										class="market-label"
										bis_skin_checked="1"
									>
										{{ gameEvent(game) }}
									</div>
									<div
										data-v-24f65b02=""
										data-v-fb75d824=""
										class="event-info"
										bis_skin_checked="1"
									>
										<a
											data-v-24f65b02=""
											href="/match-odds/england-slovakia/51295182/"
											class="event-info__link"
											data-qa="event-info-link"
											><span
												data-v-508b1d00=""
												data-v-24f65b02=""
												class="event-name"
											>
												{{ game.homeTeam }} -
												{{ game.awayTeam }}
											</span>
										</a>
										<div
											v-if="ticket.betStatus === 'won'"
											data-v-fb75d824=""
											class="tw-w-fit tw-flex tw-items-center tw-gap-xs tw-rounded-m tw-px-n tw-py-s tw-bg-n-94-dirty-snow tw-text-n-36-east-bay tw-cursor-default tw-ml-auto"
											data-qa="final-score"
											bis_skin_checked="1"
										>
											<span
												class="tw-text-xxs tw-leading-xs tw-whitespace-nowrap"
											>
												{{ $t("bet.score") }}
												{{ score(game) }}
											</span>
										</div>
										<div
											v-else
											data-v-6bb01460=""
											data-v-0f612e44=""
											class="bet-event-date-time"
											bis_skin_checked="1"
										>
											{{
												getDateTime(game.startDateTime)
											}}
										</div>
									</div>
									<div
										data-v-fb75d824=""
										class="tw-flex tw-flex-col tw-mt-n"
										bis_skin_checked="1"
									>
										<div
											class="tw-flex"
											bis_skin_checked="1"
										></div>
										<div
											class="tw-ml-[-20px]"
											bis_skin_checked="1"
										></div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>

			<div v-if="hidden" class="amounts-cashout" bis_skin_checked="1">
				<div data-v-cec6d0d2="" data-v-7e671be2="" bis_skin_checked="1">
					<div
						data-v-c2880b70=""
						data-v-cec6d0d2=""
						class="total-amounts total-amounts--my-bets"
						bis_skin_checked="1"
					>
						<div
							data-v-2b59f29f=""
							data-v-c2880b70=""
							class="total-amounts-item"
							bis_skin_checked="1"
						>
							<div
								data-v-2b59f29f=""
								class="total-amounts-item__label"
								bis_skin_checked="1"
							>
								{{ $t("bet.bet") }}
							</div>
							<div
								data-v-2b59f29f=""
								data-qa="total-amounts-item-value"
								class="total-amounts-item__value"
								bis_skin_checked="1"
							>
								<span
									data-v-2b59f29f=""
									data-qa="fees-return-deduction"
									class="tw-text-n-48-slate"
									><s
										data-v-2b59f29f=""
										class="tw-decoration-mars-dark"
									></s
								></span>
								{{ money(ticket.bet) }}
							</div>
						</div>
						<div
							data-v-2b59f29f=""
							data-v-c2880b70=""
							class="total-amounts-item total-amounts-item--is-emphasized total-amounts-item--has-separator GTM-totalReturnAmount"
							bis_skin_checked="1"
						>
							<div
								data-v-2b59f29f=""
								class="total-amounts-item__label"
								bis_skin_checked="1"
							>
								<span v-if="ticket.betStatus !== 'won'">{{
									$t("bet.pwinnings")
								}}</span>
								<span v-else>{{ $t("bet.winnings") }}</span>
							</div>
							<div
								data-v-2b59f29f=""
								data-qa="total-amounts-item-value"
								class="total-amounts-item__value"
								bis_skin_checked="1"
							>
								<span
									data-v-2b59f29f=""
									data-qa="fees-return-deduction"
									class="tw-text-n-48-slate"
									><s
										data-v-2b59f29f=""
										class="tw-decoration-mars-dark"
									></s
								></span>
								{{ winnings }}
							</div>
						</div>
					</div>
				</div>
				<div
					v-if="ticket.betStatus !== 'won'"
					data-v-cec6d0d2=""
					class="bet-list__bet__footer__cashout"
					bis_skin_checked="1"
				>
					<button
						style="background-color: #2c3744"
						class="uk-button uk-button-secondary bet-list__bet__footer__cashout__button GTM-cashoutButton"
						data-qa="cashout-button"
					>
						<span
							class="bet-list__bet__footer__cashout__title"
							translate-context="cashout"
							data-msgid=" CASH OUT "
							data-current-language="en_NG"
							>CASH OUT</span
						><span class="bet-list__bet__footer__cashout__amount"
							>₦461.30</span
						>
					</button>
				</div>
			</div>
			<div
				class="tw-flex tw-gap-n tw-items-center tw-p-n tw-border-t tw-border-solid cta-buttons"
				bis_skin_checked="1"
			>
				<button
					v-if="ticket.betStatus !== 'won'"
					data-v-cec6d0d2=""
					class="tw-inline-flex tw-items-center tw-cursor-pointer tw-text-s tw-leading-s tw-font-regular tw-flex-1 tw-justify-center tw-gap-s tw-text-n-28-cloud-burst"
					data-qa="my-bets-rebet-cta"
				>
					{{ $t("bet.rebet") }}
					<svg
						viewBox="0 0 16 17"
						fill="none"
						height="17"
						width="16"
						xmlns="http://www.w3.org/2000/svg"
						aria-label=""
						class="tw-w-icon-xxs tw-h-icon-xxs"
					>
						<path
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							d="M3.94279 3.58574H11.9401C13.2595 3.58574 14.3335 4.64107 14.3335 5.93841V7.58574C14.3335 7.9544 14.0355 8.2524 13.6668 8.2524 13.2981 8.2524 13.0001 7.9544 13.0001 7.58574V5.93841C13.0001 5.37707 12.5248 4.91907 11.9401 4.91907H3.94279L4.80479 5.78107C5.06479 6.04174 5.06479 6.46307 4.80479 6.72374 4.67479 6.85374 4.50413 6.91907 4.33346 6.91907 4.16279 6.91907 3.99213 6.85374 3.86213 6.72374L1.86213 4.72374C1.60146 4.46307 1.60146 4.04174 1.86213 3.78107L3.86213 1.78107C4.12213 1.5204 4.54413 1.5204 4.80479 1.78107 5.06479 2.04174 5.06479 2.46307 4.80479 2.72374L3.94279 3.58574zM11.1953 9.78107C11.456 9.5204 11.8773 9.5204 12.138 9.78107L14.138 11.7811C14.3987 12.0417 14.3987 12.4631 14.138 12.7237L12.138 14.7237C12.008 14.8537 11.8373 14.9191 11.6667 14.9191 11.496 14.9191 11.3253 14.8537 11.1953 14.7237 10.9347 14.4631 10.9347 14.0417 11.1953 13.7811L12.0573 12.9191H4.05999C2.73999 12.9191 1.66666 11.8637 1.66666 10.5664V8.91907C1.66666 8.55041 1.96533 8.2524 2.33333 8.2524 2.70133 8.2524 2.99999 8.55041 2.99999 8.91907V10.5664C2.99999 11.1284 3.47533 11.5857 4.05999 11.5857H12.0573L11.1953 10.7237C10.9347 10.4631 10.9347 10.0417 11.1953 9.78107z"
						></path>
						<path
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							d="M3.94279 3.58574H11.9401C13.2595 3.58574 14.3335 4.64107 14.3335 5.93841V7.58574C14.3335 7.9544 14.0355 8.2524 13.6668 8.2524 13.2981 8.2524 13.0001 7.9544 13.0001 7.58574V5.93841C13.0001 5.37707 12.5248 4.91907 11.9401 4.91907H3.94279L4.80479 5.78107C5.06479 6.04174 5.06479 6.46307 4.80479 6.72374 4.67479 6.85374 4.50413 6.91907 4.33346 6.91907 4.16279 6.91907 3.99213 6.85374 3.86213 6.72374L1.86213 4.72374C1.60146 4.46307 1.60146 4.04174 1.86213 3.78107L3.86213 1.78107C4.12213 1.5204 4.54413 1.5204 4.80479 1.78107 5.06479 2.04174 5.06479 2.46307 4.80479 2.72374L3.94279 3.58574zM11.1953 9.78107C11.456 9.5204 11.8773 9.5204 12.138 9.78107L14.138 11.7811C14.3987 12.0417 14.3987 12.4631 14.138 12.7237L12.138 14.7237C12.008 14.8537 11.8373 14.9191 11.6667 14.9191 11.496 14.9191 11.3253 14.8537 11.1953 14.7237 10.9347 14.4631 10.9347 14.0417 11.1953 13.7811L12.0573 12.9191H4.05999C2.73999 12.9191 1.66666 11.8637 1.66666 10.5664V8.91907C1.66666 8.55041 1.96533 8.2524 2.33333 8.2524 2.70133 8.2524 2.99999 8.55041 2.99999 8.91907V10.5664C2.99999 11.1284 3.47533 11.5857 4.05999 11.5857H12.0573L11.1953 10.7237C10.9347 10.4631 10.9347 10.0417 11.1953 9.78107z"
						></path>
					</svg></button
				><button
					data-v-cec6d0d2=""
					class="tw-inline-flex tw-items-center tw-cursor-pointer tw-text-s tw-leading-s tw-font-regular tw-flex-1 tw-justify-center tw-gap-s tw-text-n-28-cloud-burst"
					data-qa="my-bets-share-cta"
				>
					{{ $t("bet.share") }}
					<svg
						viewBox="0 0 12 12"
						fill="none"
						height="12"
						width="12"
						xmlns="http://www.w3.org/2000/svg"
						aria-label=""
						class="tw-w-icon-xxs tw-h-icon-xxs"
					>
						<path
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							fill-rule="evenodd"
							d="M8.65104 6.81974C8.10279 6.55534 7.47108 6.65702 7.03196 7.02763L5.47358 6.11433C5.50843 5.92942 5.50853 5.73939 5.47331 5.55451L7.0363 4.64106C7.62675 5.13978 8.50694 5.11473 9.06016 4.5615C9.64705 3.97462 9.64708 3.02708 9.06016 2.44016C8.47328 1.85328 7.52571 1.85328 6.93882 2.44016C6.57475 2.80424 6.43672 3.3115 6.52693 3.78413L4.96104 4.69422C4.37364 4.19975 3.4947 4.21931 2.93886 4.77519C2.35194 5.3621 2.35548 6.31315 2.93886 6.89653C3.49538 7.45308 4.37266 7.4752 4.96275 6.97615L6.53154 7.89216C6.40806 8.5439 6.72535 9.22172 7.34794 9.52195C8.09556 9.88246 8.99006 9.57002 9.3506 8.8224C9.7111 8.07478 9.39863 7.18025 8.65104 6.81974ZM7.64595 3.14729C7.84392 2.94929 8.16212 2.94929 8.35658 3.14375C8.55107 3.33821 8.55104 3.65641 8.35304 3.85438C8.15858 4.04884 7.8404 4.04887 7.64595 3.85438C7.45149 3.65992 7.45149 3.34174 7.64595 3.14729ZM4.35658 6.19294C4.16212 6.38743 3.84391 6.3874 3.64595 6.1894C3.45149 5.99498 3.45149 5.67677 3.64595 5.48231C3.84041 5.28786 4.15861 5.28785 4.35304 5.48231C4.55104 5.68028 4.55104 5.99849 4.35658 6.19294ZM8.45436 8.39021C8.33491 8.63792 8.03453 8.74284 7.7823 8.62123C7.53462 8.50178 7.42967 8.2014 7.54911 7.95366C7.66856 7.70598 7.96897 7.60103 8.21668 7.72047C8.46888 7.84212 8.5738 8.1425 8.45436 8.39021Z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>
