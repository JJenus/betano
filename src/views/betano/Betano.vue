<script setup>
	import { ref } from "vue";
	import currency from "currency.js";
	import { util } from "../../stores/utility";

	import Header from "../../components/betano/Header.vue";
	import LiveBetTicket from "../../components/betano/LiveBetTicket.vue";
	import PendingBetTicket from "../../components/betano/PendingBetTicket.vue";
	import WonBetTicket from "../../components/betano/WonBetTicket.vue";

	import { bets } from "../../stores/bets";

	const tickets = bets.bets();
	const totalBal = bets.balance();
	const dropDown = ref({
		usefulLinks: false,
		about: false,
	});

	const settings = ref({
		currency: util.getCurrency(),
	});

	const money = (money) => {
		const cash = currency(money, {
			symbol: settings.value.currency,
		}).format();

		// return cash.split(".")[1] == "00" ? cash.split(".")[0] : cash;
		return cash;
	};
	const wonTickets = ref(
		tickets.filter((e) => {
			return e.betStatus === "won";
		})
	);
	const openTickets = ref(
		tickets.filter((e) => {
			return e.betStatus !== "won";
		})
	);

	const selected = ref(false);
	const active = ref("pending");

	const toggleSelected = () => {
		if (selected.value) {
			selected.value = false;
			active.value = "pending";
		} else {
			selected.value = true;
			active.value = "won";
		}
	};

	console.log(bets.bets());
</script>

<template>
	<div
		data-v-794f6291=""
		class="root-wrapper root-wrapper--handheld mybets-route-page is-logged-in"
		bis_skin_checked="1"
	>
		<div data-v-794f6291="" bis_skin_checked="1"></div>
		<div data-v-794f6291="" bis_skin_checked="1">
			<section
				data-v-794f6291=""
				class="uk-position-fixed uk-position-top sb-alerts-wrapper sb-alerts"
			>
				<div data-v-794f6291="" bis_skin_checked="1"></div>
			</section>
			<section
				data-v-794f6291=""
				class="main-content-wrapper--bottom-space main-content-wrapper"
			>
				<Header />

				<div
					data-v-794f6291=""
					class="fixed-header-breakpoint"
					bis_skin_checked="1"
				></div>
				<!---->
				<div
					data-v-794f6291=""
					id="chat-draggable"
					bis_skin_checked="1"
				></div>
				<div
					data-v-794f6291=""
					id="story-viewer"
					bis_skin_checked="1"
				></div>
				<div
					data-v-794f6291=""
					class="grid__row main-content-wrapper__content"
					bis_skin_checked="1"
				>
					<div
						data-v-794f6291=""
						class="vertical-overflow-container vertical-overflow-container--no-space"
						style="max-height: none"
						bis_skin_checked="1"
					></div>
					<div
						data-v-794f6291=""
						class="grid__column grid__column__main-content tw-w-full"
						style=""
						bis_skin_checked="1"
					>
						<div
							data-v-794f6291=""
							class="grid__column grid__column--main tw-w-full"
							bis_skin_checked="1"
						>
							<div
								class="tw-flex tw-flex-col tw-bg-n-97-porcelain"
								bis_skin_checked="1"
							>
								<section
									class="tw-flex tw-flex-col"
									data-qa="share-booking-code-load-code"
								>
									<div
										class="tw-flex tw-flex-col tw-rounded-s tw-bg-white-snow tw-px-n tw-m-n"
										bis_skin_checked="1"
									>
										<div
											class="tw-flex tw-justify-between tw-py-s"
											bis_skin_checked="1"
										>
											<span
												class="tw-text-xs tw-font-bold tw-leading-s tw-text-n-13-steel"
												>Do you have a booking
												code?</span
											><svg
												viewBox="0 0 12 12"
												height="12"
												width="12"
												xmlns="http://www.w3.org/2000/svg"
												aria-label=""
												class="sb-chevron-icon sb-chevron-icon--top tw-icon-xxs tw-cursor-pointer"
											>
												<path
													xmlns="http://www.w3.org/2000/svg"
													d="M4.30026 10C4.09544 10 3.89063 9.92159 3.73462 9.76558C3.42179 9.45276 3.42179 8.94712 3.73462 8.6343L6.37881 5.99011L3.83462 3.35552C3.5282 3.03709 3.537 2.53066 3.85463 2.22423C4.17305 1.91781 4.67949 1.92661 4.98591 2.24344L8.07573 5.44367C8.37896 5.75809 8.37496 6.25653 8.06613 6.56535L4.8659 9.76558C4.70989 9.92159 4.50507 10 4.30026 10"
													clip-rule="evenodd"
												></path>
											</svg>
										</div>
										<div
											class="tw-flex tw-flex-col tw-py-n tw-gap-n"
											bis_skin_checked="1"
										>
											<div
												class="tw-flex tw-justify-between tw-gap-n"
												bis_skin_checked="1"
											>
												<input
													placeholder="Insert booking code here..."
													class="tw-flex-1 tw-p-n tw-rounded-s tw-text-n-28-cloud-burst tw-bg-white-snow tw-box-border focus-visible:tw-outline-none tw-border tw-border-solid placeholder:tw-text-s placeholder:tw-leading-s placeholder:tw-text-n-48-slate tw-border-n-75-smokey focus:tw-shadow-outline"
													type="text"
												/><button
													class="tw-p-n tw-rounded-s tw-bg-n-94-dirty-snow tw-text-n-75-smokey tw-cursor-normal"
													disabled
												>
													<span
														class="tw-text-xs tw-leading-s tw-font-bold tw-text-center"
														>LOAD</span
													>
												</button>
											</div>
										</div>
									</div>
								</section>
								<div
									class="tw-flex tw-relative tw-flex-col tw-h-full tw-rounded-s tw-bg-n-97-porcelain"
									style="
										--bet-list-bg: #f6f8f9;
										--bet-activity-card-bg: #fff;
										--bet-activity-card-border: #e0e4ea;
										--bet-activity-card-bg-superkombi: #e0e4ea;
										--bet-activity-card-header-bg: #e0e4ea;
										--bet-activity-card-header--no-bg: none;
										--bet-activity-card-header--divider-bottom: #e0e4ea;
										--bet-activity-card-header-divider-color: #b6bcc6;
										--bet-activity-card-emphasised-color: #1c2026;
										--market-color: #69778b;
										--team-color: #2d3745;
										--event-color: #2d3745;
										--time-color: #69778b;
										--score-highlight-color: #1b67da;
										--divider-color: #eceff1;
										--total-amounts-bg: #fff;
										--total-amounts-label: #69778b;
										--total-amounts-value: #101419;
										--cashout-button-border-color: transparent;
										--toggle-button-color: #2d3745;
										--toggle-button-divider-color: #eceff1;
										--toggle-button-color-large: #1c2026;
										--toggle-button-divider-color-large: #b6bcc6;
										--date-color: #69778b;
										--leg-items-list-divider: #eceff1;
										--leg-items-list-item-divider: #e0e4ea;
									"
									bis_skin_checked="1"
								>
									<div
										class="tw-p-n tw-bg-white-snow"
										bis_skin_checked="1"
									>
										<div
											data-v-09e182ee=""
											class="tab-row"
											style="
												--tab-row-bg: #fff;
												--tab-item-color: #1c2026;
												--tab-item-indicator-color: #1c2026;
												--tab-item-disabled-color: #b6bcc6;
											"
											bis_skin_checked="1"
										>
											<ul
												data-v-09e182ee=""
												class="tab-row__list"
											>
												<li
													data-v-a3b1fdb6=""
													class="tab-underlined"
													:class="
														!selected
															? 'tab-underlined--selected'
															: ''
													"
													@click="toggleSelected()"
												>
													<div
														data-v-a3b1fdb6=""
														class="tab-underlined__title"
														bis_skin_checked="1"
													>
														<div>
															Open
															<span
																v-if="
																	openTickets.length >
																	0
																"
																>({{
																	openTickets.length
																}})</span
															>
														</div>
														<div
															style="
																margin-top: 7px;
																margin-left: -63px;
															"
															class="mt-4"
														>
															<span
																v-if="!selected"
																data-v-09e182ee=""
																class="tab-row__indicator"
																style="
																	width: 65px;
																"
															></span>
														</div>
													</div>
												</li>
												<li
													data-v-a3b1fdb6=""
													:class="
														selected
															? 'tab-underlined--selected'
															: ''
													"
													class="tab-underlined"
													@click="toggleSelected()"
												>
													<div
														data-v-a3b1fdb6=""
														class="tab-underlined__title"
														bis_skin_checked="1"
													>
														<div>
															Settled
															<span
																v-if="
																	wonTickets.length >
																	0
																"
																>({{
																	wonTickets.length
																}})</span
															>
														</div>
														<div
															style="
																margin-top: 7px;
																margin-left: -63px;
															"
															class="mt-4"
														>
															<span
																v-if="selected"
																data-v-09e182ee=""
																class="tab-row__indicator"
																style="
																	width: 65px;
																"
															></span>
														</div>
													</div>
												</li>
											</ul>

											<div
												data-v-09e182ee=""
												class="vue3-resize-observer"
												tabindex="-1"
												bis_skin_checked="1"
											>
												<object
													aria-hidden="true"
													tabindex="-1"
													type="text/html"
													data="/assets/betano/saved_resource.html"
												></object>
											</div>
										</div>
									</div>
									<section
										class="my-bets__category__body tw-scroll-smooth tw-pb-s tw-overflow-auto tw-h-full tw-relative"
									>
										<section class="bet-info-container">
											<div
												class="bet-list bet-list--mobile"
												bis_skin_checked="1"
											>
												<div
													class="tag-filter-list tw-flex tw-justify-start tw-items-start tw-p-n"
													bis_skin_checked="1"
												>
													<div
														data-v-1676acbf=""
														class="swiper swiper-container swiper-initialized swiper-horizontal swiper-android sb-slider swiper-backface-hidden"
														options="[object Object]"
														bis_skin_checked="1"
													>
														<div
															v-if="selected"
															class="swiper-wrapper"
															bis_skin_checked="1"
														>
															<div
																class="swiper-slide swiper-slide-active"
																style="
																	margin-right: 8px;
																"
																bis_skin_checked="1"
															>
																<button
																	class="tw-relative tw-font-bold tw-text-xxs tw-items-center tw-border-solid tw-border-n tw-border-moon-base tw-py-s tw-px-n tw-mx-xs tw-rounded-s tw-inline-flex tw-cursor-pointer hover:tw-text-white-snow hover:tw-bg-moon-base tw-text-moon-base"
																	data-qa="bet-info-Win-filter"
																>
																	<!--v-if--><span
																		class="tw-py-xs tw-leading-xs"
																		>Won</span
																	></button
																><!---->
															</div>
															<div
																class="swiper-slide swiper-slide-next"
																style="
																	margin-right: 8px;
																"
																bis_skin_checked="1"
															>
																<button
																	class="tw-relative tw-font-bold tw-text-xxs tw-items-center tw-border-solid tw-border-n tw-border-moon-base tw-py-s tw-px-n tw-mx-xs tw-rounded-s tw-inline-flex tw-cursor-pointer hover:tw-text-white-snow hover:tw-bg-moon-base tw-text-moon-base"
																	data-qa="bet-info-Cashout-filter"
																>
																	<!--v-if--><span
																		class="tw-py-xs tw-leading-xs"
																		>Cash
																		Out</span
																	></button
																><!---->
															</div>
															<div
																class="swiper-slide"
																style="
																	margin-right: 8px;
																"
																bis_skin_checked="1"
															>
																<button
																	class="tw-relative tw-font-bold tw-text-xxs tw-items-center tw-border-solid tw-border-n tw-border-moon-base tw-py-s tw-px-n tw-mx-xs tw-rounded-s tw-inline-flex tw-cursor-pointer hover:tw-text-white-snow hover:tw-bg-moon-base tw-text-moon-base"
																	data-qa="bet-info-Lose-filter"
																>
																	<!--v-if--><span
																		class="tw-py-xs tw-leading-xs"
																		>Lost</span
																	></button
																><!---->
															</div>
															<div
																class="swiper-slide"
																style="
																	margin-right: 8px;
																"
																bis_skin_checked="1"
															>
																<button
																	class="tw-relative tw-font-bold tw-text-xxs tw-items-center tw-border-solid tw-border-n tw-border-moon-base tw-py-s tw-px-n tw-mx-xs tw-rounded-s tw-inline-flex tw-cursor-pointer hover:tw-text-white-snow hover:tw-bg-moon-base tw-text-moon-base"
																	data-qa="bet-info-Void-filter"
																>
																	<!--v-if--><span
																		class="tw-py-xs tw-leading-xs"
																		>Void</span
																	></button
																><!---->
															</div>
														</div>

														<div
															v-else
															class="swiper-wrapper"
															bis_skin_checked="1"
														>
															<div
																class="swiper-slide swiper-slide-active"
																style="
																	margin-right: 8px;
																"
																bis_skin_checked="1"
															>
																<button
																	class="tw-relative tw-font-bold tw-text-xxs tw-items-center tw-border-solid tw-border-n tw-border-moon-base tw-py-s tw-px-n tw-mx-xs tw-rounded-s tw-inline-flex tw-cursor-pointer hover:tw-text-white-snow hover:tw-bg-moon-base tw-text-moon-base"
																	data-qa="bet-info-live-filter"
																>
																	<span
																		class="tw-py-xs tw-leading-xs"
																		>Live</span
																	></button
																><!---->
															</div>
															<div
																class="swiper-slide swiper-slide-next"
																style="
																	margin-right: 8px;
																"
																bis_skin_checked="1"
															>
																<button
																	class="tw-relative tw-font-bold tw-text-xxs tw-items-center tw-border-solid tw-border-n tw-border-moon-base tw-py-s tw-px-n tw-mx-xs tw-rounded-s tw-inline-flex tw-cursor-pointer hover:tw-text-white-snow hover:tw-bg-moon-base tw-text-moon-base"
																	data-qa="bet-info-cashout-filter"
																>
																	<span
																		class="tw-py-xs tw-leading-xs"
																		>Cash
																		Out</span
																	></button
																><!---->
															</div>
														</div>
														<!----><!----><!---->
														<div
															data-v-1676acbf=""
															id="tagFilterListSlider-prev"
															class="swiper-button-prev swiper-button-disabled swiper-button-lock"
															bis_skin_checked="1"
														>
															<svg
																data-v-1676acbf=""
																viewBox="0 0 24 24"
																xmlns="http://www.w3.org/2000/svg"
																aria-label=""
																class="kz-icon-s sb-slider__button__icon icon--color-white-snow"
															>
																<path
																	xmlns="http://www.w3.org/2000/svg"
																	d="M14.394707,6.12588664 L8.16401514,11.6172842 C8.05923991,11.7177983 8,11.8567492 8,12.001992 C8,12.1472348 8.05923991,12.2861857 8.16401514,12.3866998 L14.394707,17.8755976 C14.494571,17.9642942 14.6261116,18.0086741 14.7592581,17.998592 C14.8924046,17.9885099 15.0157734,17.9248277 15.1011618,17.8221035 L15.8790615,16.8972049 C16.0598568,16.6826147 16.0351685,16.3625675 15.8236043,16.1782838 L11.1007489,12.0962316 C11.0731741,12.072488 11.0573142,12.0378944 11.0573142,12.001492 C11.0573142,11.9650896 11.0731741,11.9304961 11.1007489,11.9067524 L15.8221055,7.82320043 C15.9243474,7.73433278 15.9870779,7.60842896 15.9964709,7.47323883 C16.0084532,7.33875128 15.9655647,7.20513202 15.8775627,7.10277947 L15.1011618,6.17938077 C15.0159249,6.07606563 14.8924048,6.01182877 14.7589259,6.0014003 C14.6256128,5.99128699 14.493981,6.03627738 14.394707,6.12588664 Z"
																></path>
															</svg>
														</div>
														<div
															data-v-1676acbf=""
															id="tagFilterListSlider-next"
															class="swiper-button-next swiper-button-lock swiper-button-disabled"
															bis_skin_checked="1"
														>
															<svg
																data-v-1676acbf=""
																viewBox="0 0 24 24"
																xmlns="http://www.w3.org/2000/svg"
																aria-label=""
																class="kz-icon-s sb-slider__button__icon icon--color-white-snow"
															>
																<path
																	xmlns="http://www.w3.org/2000/svg"
																	d="M9.60529303,17.8740305 L15.8359849,12.3826713 C15.9407601,12.2821579 16,12.1432079 16,11.9979662 C16,11.8527244 15.9407601,11.7137744 15.8359849,11.613261 L9.60529303,6.12440153 C9.50542902,6.03570558 9.37388836,5.99132592 9.24074189,6.00140795 C9.10759541,6.01148999 8.98422661,6.07517176 8.89883819,6.17789529 L8.12093849,7.10278737 C7.94014324,7.31737607 7.96483152,7.63742104 8.17639569,7.82170348 L12.8992511,11.9037272 C12.9268259,11.9274706 12.9426858,11.9620639 12.9426858,11.9984661 C12.9426858,12.0348683 12.9268259,12.0694616 12.8992511,12.093205 L8.17789454,16.1767285 C8.0756526,16.2655956 8.01292207,16.3914985 8.00352909,16.5266877 C7.9915468,16.6611743 8.03443526,16.7947926 8.12243733,16.8971445 L8.90083665,17.8225365 C8.98638316,17.9250146 9.10971362,17.9885137 9.24277321,17.9985892 C9.3758328,18.0086647 9.50730809,17.9644598 9.60729148,17.8760302 L9.60529303,17.8740305 Z"
																></path>
															</svg>
														</div>
													</div>
												</div>
												<div
													class="tw-flex tw-flex-col tw-gap-n"
													bis_skin_checked="1"
												>
													<!-- FOR BET TICKET   -->
													<div
														v-for="ticket in tickets"
													>
														<PendingBetTicket
															v-if="
																ticket.betStatus ===
																active
															"
															:ticket="ticket"
														/>
													</div>
												</div>
											</div>
										</section>
									</section>
									<button
										class="tw-w-full tw-text-center tw-p-m tw-text-n-13-steel tw-text-xs tw-font-bold tw-cursor-pointer"
										data-qa="full-history-button"
									>
										FULL HISTORY
									</button>
								</div>
							</div>
						</div>
					</div>
					<div
						data-v-794f6291=""
						class="vertical-overflow-container vertical-overflow-container--no-space"
						style="max-height: none"
						bis_skin_checked="1"
					></div>
					<div
						data-v-794f6291=""
						class=""
						style="
							--bet-list-bg: #f6f8f9;
							--bet-activity-card-bg: #fff;
							--bet-activity-card-border: #e0e4ea;
							--bet-activity-card-bg-superkombi: #e0e4ea;
							--bet-activity-card-header-bg: #e0e4ea;
							--bet-activity-card-header--no-bg: none;
							--bet-activity-card-header--divider-bottom: #e0e4ea;
							--bet-activity-card-header-divider-color: #b6bcc6;
							--bet-activity-card-emphasised-color: #1c2026;
							--market-color: #69778b;
							--team-color: #2d3745;
							--event-color: #2d3745;
							--time-color: #69778b;
							--score-highlight-color: #1b67da;
							--divider-color: #eceff1;
							--total-amounts-bg: #fff;
							--total-amounts-label: #69778b;
							--total-amounts-value: #101419;
							--cashout-button-border-color: transparent;
							--toggle-button-color: #2d3745;
							--toggle-button-divider-color: #eceff1;
							--toggle-button-color-large: #1c2026;
							--toggle-button-divider-color-large: #b6bcc6;
							--date-color: #69778b;
							--leg-items-list-divider: #eceff1;
							--leg-items-list-item-divider: #e0e4ea;
						"
						bis_skin_checked="1"
					>
						<div bis_skin_checked="1">
							<div
								class="tw-flex tw-flex-col tw-justify-start tw-max-h-[calc(100%-56px)] tw-fixed tw-right-0 tw-bottom-0 tw-left-0 tw-z-xs"
								bis_skin_checked="1"
							></div>
						</div>
					</div>
				</div>
				<!---->
				<div data-v-794f6291="" class="grid__row" bis_skin_checked="1">
					<div
						data-v-794f6291=""
						class="grid__column grid__column--fluid"
						bis_skin_checked="1"
					>
						<div
							data-v-794f6291=""
							data-qa="footer-container"
							bis_skin_checked="1"
						>
							<div class="sb-sponsorships" bis_skin_checked="1">
								<div
									target="_blank"
									rel="noopener noreferrer"
									class="sb-sponsorships__wrapper link-disabled"
									bis_skin_checked="1"
								>
									<h3 class="sb-sponsorships__wrapper__title">
										SPONSORSHIPS
									</h3>
									<div
										class="sb-sponsorships__wrapper__text"
										bis_skin_checked="1"
									>
										Betano proudly supports Sports and Fair
										Play.
									</div>
								</div>
								<div
									class="sb-sponsorships__slider"
									bis_skin_checked="1"
								>
									<div
										data-v-1676acbf=""
										class="swiper swiper-container swiper-initialized swiper-horizontal swiper-android sb-slider swiper-container sb-sponsorships__slider__list"
										options="[object Object]"
										bis_skin_checked="1"
									>
										<div
											class="swiper-wrapper"
											style="
												transform: translate3d(
													0px,
													0px,
													0px
												);
											"
											bis_skin_checked="1"
										>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item swiper-slide-active"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="COPA AMERICA 2024"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2024/02/copa_logo_210x210.png"
														src="/assets/betano/copa_logo_210x210.png"
														lazy="loaded"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													COPA AMERICA 2024
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item swiper-slide-next"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="EURO 2024"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2024/02/euro_logo_210x210.png"
														src="/assets/betano/euro_logo_210x210.png"
														lazy="loaded"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													EURO 2024
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="ATLÉTICO MINEIRO"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/import/atleticologo_whiteoutline_b.jpg"
														src="/assets/betano/atleticologo_whiteoutline_b.jpg"
														lazy="loaded"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													ATLÉTICO MINEIRO
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="SPORTING CP"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/import/Sporting_CP2_b.jpg"
														src="/assets/betano/Sporting_CP2_b.jpg"
														lazy="loaded"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													SPORTING CP
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="SL BENFICA"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/import/Benfica_2021_8_13_15_24_29_b.jpg"
														src="/assets/betano/Benfica_2021_8_13_15_24_29_b.jpg"
														lazy="loaded"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													SL BENFICA
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="FC PORTO"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/import/FC_Porto_b.jpg"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													FC PORTO
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="OLYMPIACOS FC"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/import/Olympiacos_2021_1_8_10_11_17_b.jpg"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													OLYMPIACOS FC
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="PANATHINAIKOS FC"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2022/06/Panathinaikos_F.png"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													PANATHINAIKOS FC
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="PAOK FC"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/import/PAOK_2021_1_8_10_11_45_b.jpg"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													PAOK FC
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="FBC MELGAR"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2023/01/Melgar.png"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													FBC MELGAR
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="FCSB"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/import/FCSB_2021_1_8_10_12_2_b.jpg"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													FCSB
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="UNIVERSITATEA CRAIOVA"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2019/08/Univ-Craiova_b.png"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													UNIVERSITATEA CRAIOVA
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="LOKOMOTIV SOFIA"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/import/Lokomotiv_Sofia_b.jpg"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													LOKOMOTIV SOFIA
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="AC SPARTA PRAGUE"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2023/07/LOGO_CMYK_POS_STARS-AC-Sparta.png"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													AC SPARTA PRAGUE
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="HC DYNAMO PARDUBICE"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2023/08/logo_pce2.png"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													HC DYNAMO PARDUBICE
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="FC VIKTORIA PLZEŇ"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2022/08/Viktoria_Plzen_sponsorships-1.png"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													FC VIKTORIA PLZEŇ
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="CZECH NATIONAL TEAM"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2023/12/Czech-Mens-National-Ice-Hockey-Team.png"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													CZECH NATIONAL TEAM
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="HC KOMETA"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2023/01/Kometa.png"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													HC KOMETA
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt=" NATIONAL TEAM"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2023/10/logo-national-team-white-3-1.png"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													NATIONAL TEAM
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="APOEL FC"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/import/Apoel_FC_b.jpg"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													APOEL FC
												</div>
												<!---->
											</div>
											<div
												class="swiper-slide sb-sponsorships__slider__list__item"
												bis_skin_checked="1"
											>
												<a
													target="_blank"
													rel="noopener noreferrer"
													><img
														class="sb-sponsorships__slider__list__item__image"
														alt="APOLLON LIMASSOL FC"
														width="80"
														height="80"
														data-src="https://assets.gmlinteractive.com/sites/15/2022/10/apollon-logo-210x210_b.png"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														lazy="loading"
												/></a>
												<div
													class="sb-sponsorships__slider__list__item__title"
													bis_skin_checked="1"
												>
													APOLLON LIMASSOL FC
												</div>
												<!---->
											</div>
										</div>
										<!----><!----><!---->
										<div
											data-v-1676acbf=""
											id="footer-sponsors-prev"
											class="swiper-button-prev swiper-button-disabled"
											bis_skin_checked="1"
										>
											<svg
												data-v-1676acbf=""
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												aria-label=""
												class="kz-icon-s sb-slider__button__icon icon--color-white-snow"
											>
												<path
													xmlns="http://www.w3.org/2000/svg"
													d="M14.394707,6.12588664 L8.16401514,11.6172842 C8.05923991,11.7177983 8,11.8567492 8,12.001992 C8,12.1472348 8.05923991,12.2861857 8.16401514,12.3866998 L14.394707,17.8755976 C14.494571,17.9642942 14.6261116,18.0086741 14.7592581,17.998592 C14.8924046,17.9885099 15.0157734,17.9248277 15.1011618,17.8221035 L15.8790615,16.8972049 C16.0598568,16.6826147 16.0351685,16.3625675 15.8236043,16.1782838 L11.1007489,12.0962316 C11.0731741,12.072488 11.0573142,12.0378944 11.0573142,12.001492 C11.0573142,11.9650896 11.0731741,11.9304961 11.1007489,11.9067524 L15.8221055,7.82320043 C15.9243474,7.73433278 15.9870779,7.60842896 15.9964709,7.47323883 C16.0084532,7.33875128 15.9655647,7.20513202 15.8775627,7.10277947 L15.1011618,6.17938077 C15.0159249,6.07606563 14.8924048,6.01182877 14.7589259,6.0014003 C14.6256128,5.99128699 14.493981,6.03627738 14.394707,6.12588664 Z"
												></path>
											</svg>
										</div>
										<div
											data-v-1676acbf=""
											id="footer-sponsors-next"
											class="swiper-button-next"
											bis_skin_checked="1"
										>
											<svg
												data-v-1676acbf=""
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												aria-label=""
												class="kz-icon-s sb-slider__button__icon icon--color-white-snow"
											>
												<path
													xmlns="http://www.w3.org/2000/svg"
													d="M9.60529303,17.8740305 L15.8359849,12.3826713 C15.9407601,12.2821579 16,12.1432079 16,11.9979662 C16,11.8527244 15.9407601,11.7137744 15.8359849,11.613261 L9.60529303,6.12440153 C9.50542902,6.03570558 9.37388836,5.99132592 9.24074189,6.00140795 C9.10759541,6.01148999 8.98422661,6.07517176 8.89883819,6.17789529 L8.12093849,7.10278737 C7.94014324,7.31737607 7.96483152,7.63742104 8.17639569,7.82170348 L12.8992511,11.9037272 C12.9268259,11.9274706 12.9426858,11.9620639 12.9426858,11.9984661 C12.9426858,12.0348683 12.9268259,12.0694616 12.8992511,12.093205 L8.17789454,16.1767285 C8.0756526,16.2655956 8.01292207,16.3914985 8.00352909,16.5266877 C7.9915468,16.6611743 8.03443526,16.7947926 8.12243733,16.8971445 L8.90083665,17.8225365 C8.98638316,17.9250146 9.10971362,17.9885137 9.24277321,17.9985892 C9.3758328,18.0086647 9.50730809,17.9644598 9.60729148,17.8760302 L9.60529303,17.8740305 Z"
												></path>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div
								class="sb-footer GTM-footer"
								bis_skin_checked="1"
							>
								<div
									class="sb-footer__row uk-accordion"
									uk-accordion="multiple: false"
									bis_skin_checked="1"
								>
									<div
										:class="
											dropDown.usefulLinks
												? 'uk-open'
												: ''
										"
										class="sb-footer__links uk-openi"
										bis_skin_checked="1"
									>
										<div
											class="sb-footer__common__header uk-accordion-title"
											bis_skin_checked="1"
										>
											<h3
												class="sb-footer__common__header__title"
												translate-context="footersectionlabels"
												data-msgid=" Useful Links "
												data-current-language="en_NG"
											>
												Useful Links
											</h3>
											<svg
												@click="
													dropDown.usefulLinks =
														!dropDown.usefulLinks
												"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												aria-label=""
												class="footer__icon-arrow kz-icon-s icon--color-white-snow"
											>
												<path
													xmlns="http://www.w3.org/2000/svg"
													d="M6.12588664,9.72284438 L11.6172842,15.8239745 C11.7177983,15.9364221 11.8567492,16 12.001992,16 C12.1472348,16 12.2861857,15.9364221 12.3866998,15.8239745 L17.8755976,9.72284438 C17.9642942,9.6156676 18.0086741,9.47449456 17.998592,9.33159812 C17.9885099,9.18870169 17.9248277,9.05629891 17.8221035,8.96465773 L16.8972049,8.12979449 C16.6826147,7.93576009 16.3625675,7.96225622 16.1782838,8.18931268 L12.0962316,12.8598978 C12.072488,12.8894918 12.072488,12.9065131 12.001492,12.9065131 C11.9304961,12.9065131 11.9304961,12.8894918 11.9067524,12.8598978 L7.82320043,8.18877648 C7.73455535,8.08015097 7.60949565,8.01347204 7.47523861,8.00325132 C7.34075106,7.99039159 7.2071318,8.03642066 7.10477925,8.13086689 L6.17938077,8.96465773 C6.07606563,9.05613631 6.01182877,9.18870142 6.0014003,9.33195465 C5.99128699,9.47502997 6.03627738,9.61630074 6.12588664,9.72284438 Z"
												></path>
											</svg>
										</div>
										<ul
											v-if="dropDown.usefulLinks"
											class="sb-footer__common__body uk-accordion-content"
											aria-hidden="true"
										>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													href="https://betanong.zendesk.com/hc/en-gb"
													title="Help Centre"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													>Help Centre</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													href="https://www.betano.ng/article/betting-rules/1002344/"
													title="Betting Rules"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													>Betting Rules</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													href="https://www.betano.ng/article/terms-conditions/1002345/"
													title="Terms &amp; Conditions"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													>Terms &amp; Conditions</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													href="https://www.betano.ng/article/responsible-gaming-player-protection-information/1002340/"
													title="Responsible Gaming &amp; Player Protection Information"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													>Responsible Gaming &amp;
													Player Protection
													Information</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													href="https://www.betano.ng/article/security-page/1002339/"
													title="Security Page"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													>Security Page</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													href="https://www.betano.ng/article/bonus-terms/1002334/"
													title="Bonus Terms"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													>Bonus Terms</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													href="https://www.betano.ng/article/privacy-policy/1002337/"
													title="Privacy Policy"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													>Privacy Policy</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													title="Transactions"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													href="https://www.betano.ng/myaccount/payment-methods/"
													>Transactions</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													title="Guides"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													href="https://www.betano.ng/guides/"
													>Guides</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													href="https://www.betano.ng/article/affiliate-t-cs/1012943/"
													title="Affiliate T&amp;Cs"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													>Affiliate T&amp;Cs</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													href="https://affiliates.betano.com/"
													title="Affiliates"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													>Affiliates</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													href="https://www.betano.ng/article/complaints-policy/1002343/"
													title="Complaints Policy"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													>Complaints Policy</a
												>
											</li>
											<li
												class="sb-footer__common__body__item"
											>
												<a
													href="https://careers.kaizengaming.com/home"
													title="Careers"
													class="sb-footer__common__body__item__link"
													target="_blank"
													rel="noopener noreferrer"
													>Careers</a
												>
											</li>
										</ul>
									</div>

									<div
										:class="dropDown.about ? 'uk-open' : ''"
										class="sb-footer__common sb-footer__common--about-us"
										bis_skin_checked="1"
									>
										<div
											class="sb-footer__common__header uk-accordion-title"
											bis_skin_checked="1"
										>
											<h3
												class="sb-footer__common__header__title"
												translate-context="footersectionlabels"
												data-msgid=" About Us "
												data-current-language="en_NG"
											>
												About Us
											</h3>
											<svg
												@click="
													dropDown.about =
														!dropDown.about
												"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												aria-label=""
												class="footer__icon-arrow kz-icon-s icon--color-white-snow"
											>
												<path
													xmlns="http://www.w3.org/2000/svg"
													d="M6.12588664,9.72284438 L11.6172842,15.8239745 C11.7177983,15.9364221 11.8567492,16 12.001992,16 C12.1472348,16 12.2861857,15.9364221 12.3866998,15.8239745 L17.8755976,9.72284438 C17.9642942,9.6156676 18.0086741,9.47449456 17.998592,9.33159812 C17.9885099,9.18870169 17.9248277,9.05629891 17.8221035,8.96465773 L16.8972049,8.12979449 C16.6826147,7.93576009 16.3625675,7.96225622 16.1782838,8.18931268 L12.0962316,12.8598978 C12.072488,12.8894918 12.072488,12.9065131 12.001492,12.9065131 C11.9304961,12.9065131 11.9304961,12.8894918 11.9067524,12.8598978 L7.82320043,8.18877648 C7.73455535,8.08015097 7.60949565,8.01347204 7.47523861,8.00325132 C7.34075106,7.99039159 7.2071318,8.03642066 7.10477925,8.13086689 L6.17938077,8.96465773 C6.07606563,9.05613631 6.01182877,9.18870142 6.0014003,9.33195465 C5.99128699,9.47502997 6.03627738,9.61630074 6.12588664,9.72284438 Z"
												></path>
											</svg>
										</div>
										<div
											v-if="dropDown.about"
											class="sb-footer__common__body uk-accordion-content"
											aria-hidden="true"
											bis_skin_checked="1"
										>
											<p
												class="sb-footer__common__body__text sb-footer__common__body__text--padding-right"
											>
												This website is operated by
												Kaizen Gaming Nigeria Limited, a
												company established in Nigeria
												with registration number
												2004782, having its registered
												address at 6TH FLOOR LANDMARK
												TOWERS, 5B, WATER CORPORATION
												ROAD, VICTORIA ISLAND, ETI-OSA,
												LAGOS STATE. Kaizen Gaming
												Nigeria Limited is licensed and
												regulated by the National
												Lottery Regulatory Commission
												under license 0001085, issued on
												the 24th of March 2023.<br /><br />*The
												SuperOdds offer applies to the
												"Full Time Result" market until
												the start of the game. Eligible
												games are indicated with the SO
												symbol.
											</p>
											<br />
										</div>
									</div>
								</div>
								<div
									class="sb-footer__row"
									bis_skin_checked="1"
								>
									<div
										style="display: none"
										class="sb-footer__payments"
										bis_skin_checked="1"
									>
										<div
											class="sb-footer__common__header"
											bis_skin_checked="1"
										>
											<h3
												class="sb-footer__common__header__title"
												translate-context="footersectionlabels"
												data-msgid=" Payment Methods "
												data-current-language="en_NG"
											>
												Payment Methods
											</h3>
										</div>
										<ul
											class="sb-footer__common__body sb-footer__common__body--inline"
										>
											<li
												class="sb-footer__payments__item"
												style="
													background-image: url('https://assets.gmlinteractive.com/sites/15/2023/03/Monnify.png');
												"
											></li>
											<li
												class="sb-footer__payments__item"
												style="
													background-image: url('https://assets.gmlinteractive.com/sites/15/2024/01/opaycashfooternew.png');
												"
											></li>
											<li
												class="sb-footer__payments__item"
												style="
													background-image: url('https://assets.gmlinteractive.com/sites/15/2022/09/register-mastercard-2.png');
												"
											></li>
											<li
												class="sb-footer__payments__item"
												style="
													background-image: url('https://assets.gmlinteractive.com/sites/15/2022/09/register-visa-1.png');
												"
											></li>
											<li
												class="sb-footer__payments__item"
												style="
													background-image: url('https://assets.gmlinteractive.com/sites/15/2023/03/Verve.png');
												"
											></li>
											<li
												class="sb-footer__payments__item"
												style="
													background-image: url('https://assets.gmlinteractive.com/sites/15/2023/03/Paystack_footer.png');
												"
											></li>
											<li
												class="sb-footer__payments__item"
												style="
													background-image: url('https://assets.gmlinteractive.com/sites/15/2023/03/flutterwave.png');
												"
											></li>
										</ul>
									</div>
									<div
										class="sb-footer__apps"
										bis_skin_checked="1"
									>
										<div
											class="sb-footer__common"
											bis_skin_checked="1"
										>
											<div
												class="sb-footer__common__header"
												bis_skin_checked="1"
											>
												<h3
													class="sb-footer__common__header__title"
													translate-context="footersectionlabels"
													data-msgid=" Mobile Apps "
													data-current-language="en_NG"
												>
													Mobile Apps
												</h3>
											</div>
											<div
												class="sb-footer__common__body"
												bis_skin_checked="1"
											>
												<p
													class="sb-footer__common__body__text"
													translate-context="footermobileapps"
													data-msgid=" Live the Stoiximan experience wherever you are, from our mobile site and mobile app for Android and iOS. "
													data-current-language="en_NG"
												>
													Live the Betano experience
													wherever you are, from our
													mobile site and mobile app
													for Android and iOS.
												</p>
												<div
													class="sb-footer__apps__wrapper"
													bis_skin_checked="1"
												>
													<a
														href="https://apps.apple.com/ng/app/betano/id1105421899?ls=1&amp;mt=8"
														target="_blank"
														rel="noopener noreferrer"
														title="Download on the Apple Store"
														><img
															class="sb-footer__apps__wrapper__image"
															alt="Download on the Apple Store"
															width="125"
															height="40"
															data-src="https://www.betano.ng/assets/static/images/AppleStore@2x.png"
															src="/assets/betano/AppleStore@2x.png"
															lazy="loaded" /></a
													><a
														href="https://www.betano.ng/android"
														title="Download our Android App"
														class=""
														><img
															class="sb-footer__apps__wrapper__image"
															alt="Download our Android App"
															width="125"
															height="40"
															data-src="https://www.betano.ng/assets/static/images/GooglePlay@2x.png"
															src="/assets/betano/GooglePlay@2x.png"
															lazy="loaded"
													/></a>
												</div>
											</div>
										</div>
										<div
											class="sb-footer__common"
											bis_skin_checked="1"
										>
											<div
												class="sb-footer__common__header"
												bis_skin_checked="1"
											>
												<h3
													class="sb-footer__common__header__title"
												>
													Awards and Distinctions
												</h3>
											</div>
											<div
												class="sb-footer__common__body sb-footer__common__body--awards"
												bis_skin_checked="1"
											>
												<div
													class="awards-banners"
													bis_skin_checked="1"
												>
													<div
														class="awards-banners__item"
														bis_skin_checked="1"
													>
														<img
															alt="EGR Operator Awards 2023: Sports Betting Operator"
															title="EGR Operator Awards 2023: Sports Betting Operator"
															width="130"
															height="42"
															data-src="https://assets.gmlinteractive.com/sites/15/2023/12/en2.png"
															src="/assets/betano/en2.png"
															lazy="loaded"
														/>
													</div>
													<div
														class="awards-banners__item"
														bis_skin_checked="1"
													>
														<img
															alt="EGR Operator Awards 2023: Mobile Sports Product"
															title="EGR Operator Awards 2023: Mobile Sports Product"
															width="130"
															height="42"
															data-src="https://assets.gmlinteractive.com/sites/15/2023/12/en3.png"
															src="/assets/betano/en3.png"
															lazy="loaded"
														/>
													</div>
													<div
														class="awards-banners__item"
														bis_skin_checked="1"
													>
														<img
															alt="EGR Operator Awards 2023: Marketing Campaign"
															title="EGR Operator Awards 2023: Marketing Campaign"
															width="130"
															height="42"
															data-src="https://assets.gmlinteractive.com/sites/15/2023/12/en.png"
															src="/assets/betano/en.png"
															lazy="loaded"
														/>
													</div>
													<div
														class="awards-banners__item"
														bis_skin_checked="1"
													>
														<img
															alt="EGR Operator Awards 2023: In-Play Sports Operator"
															title="EGR Operator Awards 2023: In-Play Sports Operator"
															width="130"
															height="42"
															data-src="https://assets.gmlinteractive.com/sites/15/2023/12/en4.png"
															src="/assets/betano/en4.png"
															lazy="loaded"
														/>
													</div>
													<div
														class="awards-banners__item"
														bis_skin_checked="1"
													>
														<img
															alt="EGR Operator Awards 2023: In-house Product"
															title="EGR Operator Awards 2023: In-house Product"
															width="130"
															height="42"
															data-src="https://assets.gmlinteractive.com/sites/15/2023/12/en1.png"
															src="/assets/betano/en1.png"
															lazy="loaded"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div
									class="sb-footer-providers"
									bis_skin_checked="1"
								>
									<a
										href="https://www.betano.ng/article/responsible-gaming-player-protection-information/1002340/"
										class="sb-footer-providers-item"
										target="_blank"
										rel="noopener noreferrer"
										><img
											class="sb-footer-providers-item__image"
											alt=""
											width="120"
											height="40"
											data-src="https://assets.gmlinteractive.com/sites/15/import/plus18_b.jpg"
											src="/assets/betano/plus18_b.jpg"
											lazy="loaded" /></a
									><a
										href="https://www.betano.ng/article/iso-iec/1002015/"
										class="sb-footer-providers-item"
										target="_blank"
										rel="noopener noreferrer"
										><img
											class="sb-footer-providers-item__image"
											alt=""
											width="120"
											height="40"
											data-src="https://assets.gmlinteractive.com/sites/15/import/iso-gml_b.jpg"
											src="/assets/betano/iso-gml_b.jpg"
											lazy="loaded" /></a
									><a
										href="https://kaizengaming.com/"
										class="sb-footer-providers-item"
										target="_blank"
										rel="noopener noreferrer"
										><img
											class="sb-footer-providers-item__image"
											alt=""
											width="120"
											height="40"
											data-src="https://assets.gmlinteractive.com/sites/15/import%2FKaizen%20Gaming_logo_b.jpg"
											src="/assets/betano/import_Kaizen_Gaming_logo_b.jpg"
											lazy="loaded"
										/> </a
									><a
										href="https://www.gamblingtherapy.org/en"
										class="sb-footer-providers-item"
										target="_blank"
										rel="noopener noreferrer"
										><img
											class="sb-footer-providers-item__image"
											alt=""
											width="120"
											height="40"
											data-src="https://assets.gmlinteractive.com/sites/15/import/logo-desktop_GT_b.jpg"
											src="/assets/betano/logo-desktop_GT_b.jpg"
											lazy="loaded" /></a
									><a
										href="https://ibia.bet/"
										class="sb-footer-providers-item"
										target="_blank"
										rel="noopener noreferrer"
										><img
											class="sb-footer-providers-item__image"
											alt=""
											width="120"
											height="40"
											data-src="https://assets.gmlinteractive.com/sites/15/import/ibia_logo_b.jpg"
											src="/assets/betano/ibia_logo_b.jpg"
											lazy="loaded" /></a
									><a
										class="sb-footer-providers-item"
										target="_blank"
										rel="noopener noreferrer"
										><img
											class="sb-footer-providers-item__image"
											alt=""
											width="120"
											height="40"
											data-src="https://assets.gmlinteractive.com/sites/15/2024/03/NDPR-compliant-2023.png"
											src="/assets/betano/NDPR-compliant-2023.png"
											lazy="loaded" /></a
									><a
										href="https://sealserver.trustwave.com/cert.php?customerId=ad35dcf6e29e432b9578f7a82a47123b&amp;size=105x54&amp;style=invert&amp;language=en&amp;form=&amp;baseURL="
										class="sb-footer-providers-item"
										target="_blank"
										rel="noopener noreferrer"
										><img
											class="sb-footer-providers-item__image"
											alt=""
											width="120"
											height="40"
											data-src="https://assets.gmlinteractive.com/sites/15/import/Trustwave_seal_b.jpg"
											src="/assets/betano/Trustwave_seal_b.jpg"
											lazy="loaded"
									/></a>
								</div>

								<div
									class="sb-footer__notes"
									bis_skin_checked="1"
								>
									<ul class="sb-footer__notes__socials">
										<li
											class="sb-footer__notes__socials__item"
										>
											<a
												href="https://www.facebook.com/Betano.Nigeria/"
												class="sb-footer__notes__socials__item__link"
												target="_blank"
												rel="noopener noreferrer nofollow"
												><img
													width="40"
													height="40"
													class="sb-footer__notes__socials__item__image svg-icon"
													alt="facebook"
													data-src="https://www.betano.ng/assets/static/images/socials/facebook.svg"
													src="/assets/betano/facebook.svg"
													lazy="loaded"
											/></a>
										</li>
										<li
											class="sb-footer__notes__socials__item"
										>
											<a
												href="https://twitter.com/Betano_Nigeria"
												class="sb-footer__notes__socials__item__link"
												target="_blank"
												rel="noopener noreferrer nofollow"
												><img
													width="40"
													height="40"
													class="sb-footer__notes__socials__item__image svg-icon"
													alt="twitter"
													data-src="https://www.betano.ng/assets/static/images/socials/twitter.svg"
													src="/assets/betano/twitter.svg"
													lazy="loaded"
											/></a>
										</li>
										<li
											class="sb-footer__notes__socials__item"
										>
											<a
												href="https://www.instagram.com/betano_nigeria/"
												class="sb-footer__notes__socials__item__link"
												target="_blank"
												rel="noopener noreferrer nofollow"
												><img
													width="40"
													height="40"
													class="sb-footer__notes__socials__item__image svg-icon"
													alt="instagram"
													data-src="https://www.betano.ng/assets/static/images/socials/instagram.svg"
													src="/assets/betano/instagram.svg"
													lazy="loaded"
											/></a>
										</li>
										<li
											class="sb-footer__notes__socials__item"
										>
											<a
												href="https://www.youtube.com/channel/UCxNnMFot_uOzp3gmT4q7joA"
												class="sb-footer__notes__socials__item__link"
												target="_blank"
												rel="noopener noreferrer nofollow"
												><img
													width="40"
													height="40"
													class="sb-footer__notes__socials__item__image svg-icon"
													alt="youtube"
													data-src="https://www.betano.ng/assets/static/images/socials/youtube.svg"
													src="/assets/betano/youtube.svg"
													lazy="loaded"
											/></a>
										</li>
										<li
											class="sb-footer__notes__socials__item"
										>
											<a
												href="https://www.linkedin.com/company/kaizen-gaming/"
												class="sb-footer__notes__socials__item__link"
												target="_blank"
												rel="noopener noreferrer nofollow"
												><img
													width="40"
													height="40"
													class="sb-footer__notes__socials__item__image svg-icon"
													alt="linkedin"
													data-src="https://www.betano.ng/assets/static/images/socials/linkedin.svg"
													src="/assets/betano/linkedin.svg"
													lazy="loaded"
											/></a>
										</li>
									</ul>
									<div
										class="sb-footer__notes__text"
										bis_skin_checked="1"
									>
										PLAY RESPONSIBLY | 18 AND ABOVE ONLY TO
										REGISTER OR PLAY AT BETANO | PLEASE
										GAMBLE RESPONSIBLY | IF YOU WISH TO
										SPEAK TO SOMEONE ABOUT YOUR BETTING
										PATTERN, DON'T HESITATE TO CONTACT
										GAMBLE ALERT
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!---->
				<div class="bottom-nav-menu" bis_skin_checked="1">
					<ul class="bottom-nav-menu__items">
						<li
							data-qa="bottom-nav-menu-home"
							class="home bottom-nav-menu__items__item"
						>
							<a
								href="https://www.betano.ng/"
								class="bottom-nav-menu__items__item__content GTM-home"
								><div
									class="tw-flex tw-items-center tw-w-[44px] tw-h-l bottom-nav-menu__items__item__content__icon__wrapper tw-px-ns tw-rounded-m tw-py-xs"
									bis_skin_checked="1"
								>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										height="24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
										aria-label=""
										class="bottom-nav-menu__items__item__content__icon kz-icon-s tw-text-n-48-slate"
									>
										<g
											xmlns="http://www.w3.org/2000/svg"
											clip-path="url(#clip0_512_138821)"
										>
											<path
												fill="currentColor"
												d="M21.1402 9.5777L12.5067 2.1776C12.2305 1.9408 11.8161 1.9408 11.5398 2.1776L2.90636 9.5777C2.60048 9.8441 2.56102 10.3078 2.82742 10.6236C3.09382 10.9393 3.55756 10.9689 3.8733 10.7025L12.0233 3.71682L20.1733 10.7025C20.3114 10.8209 20.489 10.8801 20.6567 10.8801C20.8639 10.8801 21.0711 10.7913 21.2191 10.6236C21.4855 10.3177 21.4461 9.8441 21.1402 9.5777Z"
											></path>
											<path
												fill="currentColor"
												d="M19.5913 11.9359L12.5069 5.87765C12.2307 5.64085 11.8261 5.64085 11.5498 5.87765L4.43588 11.9556C4.10041 12.2615 3.90308 12.6759 3.88334 13.1593V20.441C3.88334 20.8555 4.04121 21.2501 4.33722 21.5461C4.63322 21.8421 5.02789 22 5.4423 22H9.76396C10.1685 22 10.504 21.6645 10.504 21.26V15.8431H13.5429V21.26C13.5429 21.6645 13.8784 22 14.2829 22H18.6046C19.019 22 19.4137 21.8323 19.7097 21.5461C20.0057 21.26 20.1636 20.8555 20.1636 20.441V13.1199C20.134 12.6759 19.9465 12.2615 19.5913 11.9359ZM18.6835 20.4312L18.6046 20.5101H15.0328V15.4978C15.0328 15.1919 14.9144 14.9058 14.6974 14.6887C14.4902 14.4716 14.1941 14.3532 13.8883 14.3532H10.1685C9.86262 14.3532 9.57649 14.4716 9.35942 14.6887C9.14235 14.9058 9.02395 15.1919 9.02395 15.4978V20.5101H5.45216L5.37323 20.4312V13.1988C5.37323 13.1396 5.40283 13.0903 5.42256 13.0607L12.0333 7.40701L18.6243 13.0409C18.6243 13.0409 18.6934 13.1297 18.6934 13.1495V20.4312H18.6835Z"
											></path>
										</g>
										<defs
											xmlns="http://www.w3.org/2000/svg"
										>
											<clippath id="clip0_512_138821">
												<rect
													width="18.7469"
													height="20"
													fill="currentColor"
													transform="translate(2.64999 2)"
												></rect>
											</clippath>
										</defs>
									</svg>
								</div>
								<span
									class="bottom-nav-menu__items__item__content__text tw-text-n-48-slate"
									>Home</span
								></a
							>
						</li>
						<li
							data-qa="bottom-nav-menu-live"
							class="live bottom-nav-menu__items__item"
						>
							<a
								href="https://www.betano.ng/live/"
								class="bottom-nav-menu__items__item__content GTM-live"
								><div
									class="tw-flex tw-items-center tw-w-[44px] tw-h-l bottom-nav-menu__items__item__content__icon__wrapper tw-px-ns tw-rounded-m tw-py-xs"
									bis_skin_checked="1"
								>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										height="24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
										aria-label=""
										class="bottom-nav-menu__items__item__content__icon kz-icon-s tw-text-n-48-slate"
									>
										<path
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											d="M17.1615 10.2162C17.0232 9.96927 16.8257 9.77172 16.5787 9.62356C16.3318 9.4754 16.0552 9.40626 15.7787 9.40626H13.655V2.73898C13.655 2.40315 13.4377 2.1167 13.1118 2.0278C12.7957 1.93891 12.45 2.06731 12.2821 2.35376L6.23706 12.1818C6.0889 12.4189 6 12.6954 6 12.972C6 13.2585 6.05926 13.535 6.19755 13.782C6.33583 14.0289 6.53338 14.2264 6.78032 14.3746C7.02725 14.5129 7.30382 14.5919 7.58039 14.5919H9.70404V21.2592C9.70404 21.595 9.92135 21.8815 10.2473 21.9704C10.3164 21.9901 10.3856 22 10.4449 22C10.7017 22 10.9387 21.8716 11.077 21.6444L17.122 11.8164C17.2702 11.5793 17.3492 11.3027 17.3591 11.0262C17.3591 10.7496 17.2998 10.473 17.1615 10.2162ZM15.8676 11.0459L11.1955 18.6417V13.8511C11.1955 13.4461 10.8597 13.1103 10.4547 13.1103H7.58039L7.49149 13.0609V12.9621L12.1734 5.3565V10.1471C12.1734 10.552 12.5092 10.8879 12.9142 10.8879H15.8281L15.8774 10.9965C15.8774 11.0163 15.8774 11.036 15.8577 11.0459H15.8676Z"
										></path>
									</svg>
								</div>
								<span
									class="bottom-nav-menu__items__item__content__text tw-text-n-48-slate"
									>Live</span
								></a
							>
						</li>
						<li
							data-qa="bottom-nav-menu-Sports"
							class="Sports bottom-nav-menu__items__item"
						>
							<a
								href="https://www.betano.ng/sports/"
								class="bottom-nav-menu__items__item__content GTM-Sports"
								><div
									class="tw-flex tw-items-center tw-w-[44px] tw-h-l bottom-nav-menu__items__item__content__icon__wrapper tw-px-ns tw-rounded-m tw-py-xs"
									bis_skin_checked="1"
								>
									<svg
										viewBox="0 0 25 24"
										fill="none"
										height="24"
										width="25"
										xmlns="http://www.w3.org/2000/svg"
										aria-label=""
										class="bottom-nav-menu__items__item__content__icon kz-icon-s tw-text-n-48-slate"
									>
										<path
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											d="M6.47534 12.364C6.05418 12.364 5.70493 12.0148 5.70493 11.5936V8.78929C5.70493 8.36813 6.05418 8.01888 6.47534 8.01888 6.8965 8.01888 7.24576 8.36813 7.24576 8.78929V11.5936C7.24576 12.0148 6.8965 12.364 6.47534 12.364zM18.5143 12.364C18.0932 12.364 17.7439 12.0148 17.7439 11.5936V8.78929C17.7439 8.36813 18.0932 8.01888 18.5143 8.01888 18.9355 8.01888 19.2848 8.36813 19.2848 8.78929V11.5936C19.2848 12.0148 18.9355 12.364 18.5143 12.364zM15.0629 12.1489C14.0254 12.1489 13.368 10.8444 13.368 9.94042 13.368 8.67694 14.6109 8.67694 15.0834 8.67694 15.5559 8.67694 16.7578 8.67694 16.7578 9.94042 16.7578 10.8444 16.1004 12.1489 15.0629 12.1489zM14.7136 10.0226C14.7547 10.3719 14.9807 10.7622 15.104 10.8238 15.1553 10.7622 15.3813 10.3513 15.4224 10.0226 15.1861 10.0021 14.9396 10.0021 14.7136 10.0226z"
										></path>
										<path
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											d="M18.1138 21.9897H6.87596C6.5678 21.9897 6.2699 21.8665 6.04391 21.6507C5.81792 21.435 5.70493 21.1269 5.70493 20.8187V12.3647H3.67103C3.36287 12.3647 3.06497 12.2414 2.83898 12.0257C2.61299 11.81 2.5 11.5121 2.5 11.1936V8.76939C2.5 7.04366 3.14715 5.38983 4.32845 4.12635C5.50976 2.87314 7.10195 2.11299 8.82768 2H8.84823C8.84823 2 8.93041 2 8.96122 2H16.0593C16.0593 2 16.0593 2 16.0696 2C16.1004 2 16.1415 2 16.1518 2C17.8775 2.11299 19.48 2.87314 20.6613 4.13662C21.8426 5.4001 22.4897 7.04366 22.4897 8.77966V11.2039C22.4897 11.5121 22.3665 11.81 22.1507 12.036C21.935 12.2517 21.6269 12.3749 21.3187 12.3749H19.2848V20.829C19.2848 21.1371 19.1615 21.435 18.9458 21.661C18.7301 21.887 18.4219 22 18.1138 22V21.9897ZM7.24576 20.4489H17.744L17.7439 11.5936C17.7439 11.1724 18.0932 10.8238 18.5144 10.8238H20.9592V8.76939C20.9592 7.434 20.4558 6.16025 19.5416 5.18439C18.7096 4.2907 17.6002 3.72573 16.3983 3.57165C16.2237 4.4037 15.7922 5.16384 15.1554 5.72881C13.6967 7.03339 11.3238 7.03339 9.8549 5.72881C9.21803 5.15357 8.77632 4.4037 8.61197 3.57165C7.41012 3.72573 6.30072 4.30098 5.4584 5.19466C4.54417 6.17052 4.04083 7.44427 4.04083 8.77966V10.8341H6.48562C6.90678 10.8341 7.25603 11.1834 7.25603 11.6045V20.4592L7.24576 20.4489ZM10.1836 3.54083C10.3172 3.94145 10.5534 4.30098 10.8719 4.57833C11.7655 5.37956 13.2242 5.37956 14.1179 4.57833C14.4363 4.2907 14.6726 3.94145 14.8061 3.54083H10.1836Z"
										></path>
									</svg>
								</div>
								<span
									class="bottom-nav-menu__items__item__content__text tw-text-n-48-slate"
									>Sports</span
								></a
							>
						</li>
						<li
							data-qa="bottom-nav-menu-MyBets"
							class="MyBets bottom-nav-menu__items__item"
						>
							<a
								href="https://www.betano.ng/mybets/"
								class="bottom-nav-menu__items__item__content GTM-MyBets router-link-active router-link-exact-active bottom-nav-menu__items__item__content GTM-MyBets"
								><div
									class="tw-flex tw-items-center tw-w-[44px] tw-h-l bottom-nav-menu__items__item__content__icon__wrapper tw-px-ns tw-rounded-m tw-py-xs"
									bis_skin_checked="1"
								>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										height="24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
										aria-label=""
										class="bottom-nav-menu__items__item__content__icon kz-icon-s tw-text-n-48-slate"
									>
										<g
											xmlns="http://www.w3.org/2000/svg"
											clip-path="url(#clip0_512_138811)"
										>
											<path
												fill="currentColor"
												d="M17.5119 15.496H13.8302C13.3952 15.496 13.0345 15.8568 13.0345 16.2918 13.0345 16.7268 13.3952 17.0875 13.8302 17.0875H17.5119C17.9469 17.0875 18.3077 16.7268 18.3077 16.2918 18.3077 15.8568 17.9469 15.496 17.5119 15.496zM9.76658 13.6393L8.09019 15.878 7.25199 15.0398C6.9443 14.7321 6.43501 14.7321 6.12732 15.0398 5.81963 15.3475 5.81963 15.8568 6.12732 16.1645L7.61273 17.6499C7.76127 17.7984 7.96286 17.8833 8.17507 17.8833 8.19629 17.8833 8.21751 17.8833 8.22812 17.8833 8.46154 17.8621 8.67374 17.756 8.81167 17.565L11.0398 14.5942C11.305 14.244 11.2308 13.7454 10.8806 13.4801 10.5305 13.2149 10.0318 13.2891 9.76658 13.6393zM9.76658 6.2122L8.09019 8.45093 7.25199 7.61273C6.9443 7.30504 6.43501 7.30504 6.12732 7.61273 5.81963 7.92042 5.81963 8.42971 6.12732 8.7374L7.61273 10.2228C7.76127 10.3714 7.96286 10.4562 8.17507 10.4562 8.19629 10.4562 8.21751 10.4562 8.22812 10.4562 8.46154 10.435 8.67374 10.3289 8.81167 10.1379L11.0398 7.16711C11.305 6.81698 11.2308 6.3183 10.8806 6.05305 10.5305 5.7878 10.0318 5.86207 9.76658 6.2122zM17.5119 8.13263H13.8302C13.3952 8.13263 13.0345 8.49337 13.0345 8.92838 13.0345 9.3634 13.3952 9.72414 13.8302 9.72414H17.5119C17.9469 9.72414 18.3077 9.3634 18.3077 8.92838 18.3077 8.49337 17.9469 8.13263 17.5119 8.13263z"
											></path>
											<path
												fill="currentColor"
												d="M19.9735 2H4.02653C2.54111 2 2 3.20955 2 4.02653V19.9735C2 21.4589 3.20955 22 4.02653 22H19.9735C21.4589 22 22 20.7905 22 19.9735V4.02653C22 2.54111 20.7905 2 19.9735 2ZM20.4085 19.9629C20.3979 20.4085 20.1114 20.4085 19.9735 20.4085H4.03714C3.59151 20.3979 3.59151 20.1114 3.59151 19.9735V4.03714C3.60212 3.59151 3.88859 3.59151 4.02653 3.59151H19.9629C20.4085 3.60212 20.4085 3.88859 20.4085 4.02653V19.9629Z"
											></path>
										</g>
										<defs
											xmlns="http://www.w3.org/2000/svg"
										>
											<clippath id="clip0_512_138811">
												<rect
													width="20"
													height="20"
													fill="currentColor"
													transform="translate(2 2)"
												></rect>
											</clippath>
										</defs>
									</svg>
								</div>
								<i
									class="uk-badge bottom-nav-menu__items__item__content__open-bets"
								>
									{{ openTickets.length }}</i
								><span
									class="bottom-nav-menu__items__item__content__text tw-text-n-48-slate"
									>My Bets</span
								></a
							>
						</li>
						<li
							data-qa="bottom-nav-menu-Explore"
							class="Explore bottom-nav-menu__items__item"
						>
							<a
								href="https://www.betano.ng/hub/"
								class="bottom-nav-menu__items__item__content GTM-Explore"
								><div
									class="tw-flex tw-items-center tw-w-[44px] tw-h-l bottom-nav-menu__items__item__content__icon__wrapper tw-px-ns tw-rounded-m tw-py-xs"
									bis_skin_checked="1"
								>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										height="24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
										aria-label=""
										class="bottom-nav-menu__items__item__content__icon kz-icon-s tw-text-n-48-slate"
									>
										<g
											xmlns="http://www.w3.org/2000/svg"
											clip-path="url(#clip0_512_138820)"
										>
											<path
												fill="currentColor"
												d="M21.7665 20.6412L16.5541 15.4289C17.0849 14.7813 17.5096 14.0701 17.828 13.2845C18.2314 12.276 18.4331 11.2144 18.4225 10.1316C18.4225 9.04883 18.189 7.99788 17.7643 6.98938C17.3397 5.99151 16.7346 5.09979 15.9597 4.34607C15.1847 3.59236 14.2824 2.99788 13.2739 2.59448C12.276 2.19108 11.2144 2 10.1316 2C9.04883 2 7.99788 2.23355 6.98938 2.65817C5.99151 3.0828 5.09979 3.6879 4.34607 4.46284C3.59236 5.23779 2.99788 6.14013 2.59448 7.138C2.19108 8.1465 2 9.20807 2 10.2909C2 11.3737 2.23355 12.4352 2.65817 13.4225C3.0828 14.4204 3.6879 15.3121 4.46284 16.0658C5.23779 16.8195 6.14013 17.414 7.14862 17.8174C8.15711 18.2208 9.21868 18.4119 10.2909 18.4119C11.3737 18.4119 12.4246 18.1783 13.4331 17.7537C14.1656 17.4459 14.8344 17.0318 15.4395 16.5329L20.6518 21.7452C20.811 21.9045 21.0127 21.9788 21.2144 21.9788C21.4161 21.9788 21.6178 21.9045 21.7771 21.7452C22.0849 21.4374 22.0849 20.9278 21.7771 20.62L21.7665 20.6412ZM14.9299 14.845L14.8981 14.8769H14.8875C14.8875 14.8769 14.8875 14.8981 14.8769 14.9087C14.2824 15.5032 13.5817 15.9703 12.7962 16.31C11.9894 16.6497 11.1401 16.8301 10.2696 16.8408C9.431 16.8408 8.54989 16.6921 7.73248 16.3631C6.91507 16.034 6.19321 15.5563 5.56688 14.9512C4.94055 14.3355 4.45223 13.6242 4.11253 12.8174C3.77282 12.0106 3.59236 11.1614 3.58174 10.2909C3.58174 9.42038 3.73036 8.56051 4.05945 7.75372C4.38854 6.94692 4.86624 6.21444 5.47134 5.58811C6.08705 4.96178 6.7983 4.47346 7.6051 4.13376C8.41189 3.79406 9.26115 3.61359 10.1316 3.60297C10.9915 3.60297 11.862 3.75159 12.6688 4.08068C13.4756 4.40977 14.2081 4.88747 14.8344 5.49257C15.4607 6.10828 15.949 6.81953 16.2887 7.62633C16.6285 8.43312 16.8089 9.28238 16.8195 10.1529C16.8195 11.0234 16.6709 11.8832 16.3418 12.69C16.0127 13.4968 15.535 14.2293 14.9299 14.8556V14.845Z"
											></path>
										</g>
										<defs
											xmlns="http://www.w3.org/2000/svg"
										>
											<clippath id="clip0_512_138820">
												<rect
													width="20"
													height="20"
													fill="currentColor"
													transform="translate(2 2)"
												></rect>
											</clippath>
										</defs>
									</svg>
								</div>
								<span
									class="bottom-nav-menu__items__item__content__text tw-text-n-48-slate"
									>Explore</span
								></a
							>
						</li>
						<li
							data-qa="bottom-nav-menu-casino"
							class="bottom-nav-menu__items__item bottom-nav-menu__items__casino"
						>
							<a
								class="bottom-nav-menu__items__item__content"
								href="https://www.betano.ng/casino/"
								><svg
									viewBox="0 0 24 24"
									fill="none"
									height="24"
									width="24"
									xmlns="http://www.w3.org/2000/svg"
									aria-label=""
									class="bottom-nav-menu__items__item__content__icon tw-icon tw-icon-[40px] tw-rounded-m"
								>
									<path
										xmlns="http://www.w3.org/2000/svg"
										fill="#fff"
										fill-rule="evenodd"
										d="M21.9887 11.5215C21.9875 11.4965 21.9863 11.4711 21.9848 11.4461C21.9844 11.4312 21.9832 11.4164 21.9824 11.4012C21.9766 11.3016 21.9691 11.202 21.9605 11.1023C21.9504 10.9883 21.9383 10.8746 21.9246 10.7613C21.9195 10.7207 21.9145 10.6797 21.9086 10.6391C21.9031 10.5984 21.8977 10.5578 21.8914 10.5176C21.8789 10.4328 21.8656 10.348 21.8508 10.2641C21.8445 10.2273 21.8379 10.1906 21.8309 10.1543C21.8234 10.1141 21.816 10.0738 21.8078 10.034C21.8 9.99375 21.7918 9.95391 21.7832 9.91406C21.7676 9.83945 21.7512 9.76523 21.7336 9.69141C21.7234 9.64922 21.7133 9.60703 21.7031 9.56484C21.6328 9.28281 21.5504 9.00469 21.4559 8.73086C21.4426 8.6918 21.4289 8.65313 21.4148 8.61445C21.3754 8.50352 21.3336 8.39297 21.2895 8.28359C21.2746 8.24609 21.2594 8.20859 21.2437 8.17109C21.2305 8.13867 21.2168 8.10664 21.2031 8.07422C21.1879 8.03828 21.1723 8.00234 21.1562 7.9668C21.1422 7.93477 21.1281 7.90312 21.1137 7.87148C21.1023 7.84609 21.0906 7.82109 21.0789 7.7957C21.075 7.78633 21.0703 7.77734 21.066 7.76797C21.0535 7.74141 21.041 7.71445 21.0281 7.68789C20.9992 7.62656 20.9691 7.56602 20.9387 7.50586C20.9211 7.47031 20.9027 7.43516 20.8844 7.39961C20.8426 7.31875 20.7992 7.23828 20.7547 7.15859C20.7434 7.1375 20.732 7.1168 20.7199 7.09609C20.7105 7.07891 20.7008 7.06211 20.691 7.04531H20.6906C20.677 7.02109 20.6637 6.99687 20.6496 6.97305C20.6281 6.93672 20.607 6.90078 20.5855 6.86523C20.5102 6.73945 20.4316 6.61523 20.3504 6.49258C20.3086 6.42969 20.2668 6.36758 20.2234 6.30547C20.1949 6.26406 20.166 6.22344 20.1367 6.18281C20.1125 6.14883 20.0879 6.11484 20.0629 6.08125C20.0523 6.06641 20.0414 6.05195 20.0305 6.0375C19.9902 5.9832 19.9492 5.92969 19.9078 5.87656C19.8574 5.81172 19.8059 5.74727 19.7535 5.6832C19.7402 5.66719 19.727 5.65078 19.7133 5.63438C19.5922 5.48789 19.4668 5.34492 19.3367 5.20469C19.3184 5.18516 19.3 5.16523 19.2812 5.14531L19.2777 5.1418C19.2516 5.11406 19.2254 5.08633 19.1984 5.05898C19.1566 5.01523 19.1141 4.97187 19.0711 4.92891C19.0402 4.89805 19.0094 4.86758 18.9781 4.8375C18.9598 4.81914 18.941 4.80117 18.9223 4.7832C18.8941 4.75586 18.8656 4.72891 18.8367 4.70195C18.8023 4.66953 18.7676 4.6375 18.7328 4.60586C18.6945 4.5707 18.6559 4.53633 18.6172 4.50195C18.5758 4.46523 18.5344 4.42891 18.4922 4.39336C18.4652 4.36953 18.4375 4.34648 18.4098 4.32344C18.3773 4.29609 18.3445 4.26914 18.3117 4.24219C18.2789 4.21523 18.2461 4.18867 18.2129 4.1625C18.1859 4.14102 18.1586 4.11953 18.1313 4.09805C18.1023 4.07578 18.0734 4.05312 18.0441 4.03125C18.0254 4.0168 18.0066 4.00273 17.9879 3.98867C17.9652 3.97148 17.9426 3.9543 17.9195 3.9375C17.9082 3.9293 17.8969 3.92109 17.8855 3.9125C17.8629 3.89648 17.8406 3.88008 17.8176 3.86367C17.7805 3.83672 17.7434 3.81055 17.7055 3.78437C17.6367 3.73594 17.5672 3.68906 17.4969 3.64258C17.4566 3.61602 17.4164 3.58984 17.3758 3.56406C17.3391 3.54062 17.3023 3.51719 17.2656 3.49453C17.2563 3.48828 17.2461 3.48203 17.2363 3.47617C17.2063 3.45742 17.1758 3.43945 17.1457 3.42109C17.1336 3.41367 17.1215 3.40664 17.1094 3.39922C17.0723 3.37695 17.0352 3.35508 16.9977 3.33359C16.9562 3.30937 16.9148 3.28594 16.8727 3.2625C16.8535 3.25156 16.8344 3.24102 16.8148 3.23047C16.7055 3.16992 16.5949 3.11172 16.4828 3.05586C16.4563 3.04219 16.4297 3.02891 16.4027 3.01602C16.3762 3.00273 16.3496 2.98984 16.3227 2.97695C16.2957 2.96406 16.2691 2.95117 16.2422 2.93867C16.2152 2.92578 16.1883 2.91328 16.1613 2.90117C16.0145 2.83398 15.866 2.77031 15.7164 2.71055C15.6789 2.69531 15.641 2.68047 15.6031 2.66602C15.5652 2.65156 15.5273 2.63711 15.4895 2.62305C15.4605 2.61211 15.4316 2.60156 15.4023 2.59102C15.3508 2.57227 15.2992 2.5543 15.2473 2.53672C15.2133 2.525 15.1793 2.51367 15.1453 2.50234C14.9262 2.42969 14.7043 2.36523 14.4801 2.3082C14.4504 2.30078 14.4203 2.29336 14.3902 2.28594C14.3562 2.27773 14.3227 2.26953 14.2883 2.26172C14.2598 2.25469 14.2312 2.24844 14.2023 2.2418C14.1637 2.2332 14.125 2.225 14.0859 2.2168C14.059 2.21094 14.032 2.20547 14.0047 2.2C13.984 2.1957 13.9637 2.1918 13.943 2.18789C13.732 2.14609 13.5195 2.11172 13.3051 2.08398C13.2762 2.08008 13.2469 2.07656 13.2176 2.07305C13.1246 2.06172 13.0316 2.05195 12.9383 2.04336C12.9375 2.04297 12.9371 2.04297 12.9367 2.04336C12.9043 2.03984 12.8715 2.03711 12.8387 2.03477C12.7547 2.02734 12.6703 2.02148 12.5859 2.01719C12.566 2.01562 12.5457 2.01445 12.5258 2.01367C12.5059 2.0125 12.4859 2.01172 12.4656 2.01094C12.4582 2.01055 12.4512 2.01016 12.4438 2.01016C12.3977 2.00781 12.3516 2.00625 12.3055 2.00469C12.2992 2.0043 12.2926 2.0043 12.2859 2.0043C12.2391 2.00273 12.1922 2.00156 12.1449 2.00117C12.0969 2.00039 12.0484 2 12 2C11.8039 2 11.6086 2.00547 11.4141 2.01719C10.0242 2.09648 8.68789 2.45977 7.47227 3.07852C7.43789 3.09609 7.40391 3.11367 7.36992 3.13164C7.26758 3.18477 7.16562 3.24023 7.06523 3.29766C6.85977 3.41445 6.6582 3.53867 6.46094 3.67031C6.36484 3.73477 6.26992 3.80078 6.17578 3.86836C5.73633 4.18438 5.31914 4.53867 4.92891 4.92891C4.52266 5.33516 4.15547 5.7707 3.82969 6.23008C3.7582 6.33047 3.68906 6.43203 3.62148 6.53477C3.40664 6.86289 3.21211 7.20195 3.03867 7.55117C2.43867 8.75664 2.08828 10.0785 2.01484 11.452C2.00508 11.634 2 11.8164 2 12C2 12.209 2.00625 12.4168 2.01914 12.6238C2.02539 12.7301 2.03359 12.8359 2.04375 12.9418C2.14805 14.0691 2.44023 15.1566 2.9043 16.1684C2.9582 16.2855 3.01406 16.4016 3.07266 16.5164C3.24883 16.8641 3.44609 17.202 3.66328 17.5285C4.02891 18.0773 4.45195 18.5941 4.92891 19.0711C5.42109 19.5633 5.95586 19.998 6.52422 20.3711C6.85195 20.5867 7.19102 20.782 7.54023 20.9559C7.63867 21.0051 7.73789 21.0527 7.83789 21.0984C8.8543 21.5641 9.94766 21.8559 11.0805 21.9582C11.1996 21.9695 11.3191 21.9781 11.4391 21.9844C11.625 21.9949 11.8121 22 12 22C12.0621 22 12.1238 21.9996 12.1855 21.998C12.218 21.9977 12.2504 21.9969 12.2824 21.9957C12.2855 21.9961 12.2887 21.9961 12.2918 21.9957C12.3039 21.9953 12.316 21.9953 12.3281 21.9945C12.3301 21.9945 12.3324 21.9945 12.3344 21.9941C12.3758 21.993 12.4172 21.9914 12.4586 21.9895C12.5035 21.9875 12.5484 21.9852 12.593 21.9824C12.5988 21.9824 12.6047 21.982 12.6109 21.9816C12.6562 21.9789 12.7016 21.9762 12.7465 21.9727C12.8289 21.9664 12.9113 21.9594 12.9934 21.9516C13.0363 21.9473 13.0797 21.943 13.1227 21.9379C13.1652 21.9332 13.2078 21.9281 13.25 21.923C13.2871 21.9187 13.3238 21.9137 13.3609 21.9086C13.3863 21.9055 13.4113 21.902 13.4367 21.898C13.4543 21.8957 13.4719 21.893 13.4895 21.8902C13.5277 21.8848 13.566 21.8789 13.6039 21.8727C13.6328 21.8684 13.6613 21.8637 13.6898 21.8586C13.7113 21.8551 13.7332 21.8512 13.7547 21.8473C13.7586 21.8469 13.7625 21.8461 13.7664 21.8453C13.7887 21.8414 13.8109 21.8375 13.8328 21.8332C13.841 21.832 13.8492 21.8305 13.8574 21.8285C13.8793 21.8246 13.9008 21.8207 13.9223 21.816C13.927 21.8156 13.9316 21.8148 13.9363 21.8133C13.9535 21.8102 13.9707 21.807 13.9875 21.8035C14.0207 21.7969 14.0531 21.7902 14.0859 21.7832C14.1895 21.7617 14.2922 21.7383 14.3945 21.7129C14.4297 21.7047 14.4645 21.6957 14.4992 21.6867C14.5199 21.6816 14.5406 21.6762 14.5613 21.6707C14.5887 21.6637 14.6156 21.6562 14.643 21.6488C14.6438 21.6488 14.6441 21.6484 14.6449 21.6484C14.6777 21.6395 14.7109 21.6305 14.7437 21.6207C14.7727 21.6125 14.802 21.6043 14.8309 21.5957C14.8863 21.5793 14.9422 21.5625 14.9973 21.5453C15.034 21.534 15.0703 21.5223 15.1066 21.5102C15.1465 21.4973 15.1863 21.484 15.2262 21.4703C15.2461 21.4637 15.266 21.457 15.2859 21.45C15.3059 21.4434 15.3258 21.4363 15.3457 21.4289C15.3852 21.4148 15.425 21.4008 15.4645 21.3859C15.5039 21.3715 15.543 21.357 15.5824 21.3418C15.6215 21.3266 15.6609 21.3113 15.7 21.2957C15.7391 21.2801 15.7781 21.2645 15.8168 21.2484C15.8559 21.2324 15.8945 21.216 15.9332 21.1996C15.9355 21.1988 15.9383 21.1977 15.941 21.1965C15.9879 21.1762 16.0348 21.1559 16.0816 21.1348C16.0832 21.1344 16.0848 21.1336 16.0863 21.1328C16.1328 21.1117 16.1789 21.0906 16.225 21.0691C16.3191 21.025 16.4125 20.9797 16.5051 20.9328C16.5484 20.9109 16.5918 20.8887 16.6352 20.866C16.6688 20.8484 16.7023 20.8305 16.7355 20.8125C16.834 20.7602 16.9309 20.7055 17.027 20.6496C17.0668 20.6262 17.1062 20.6027 17.1457 20.5789C17.2359 20.525 17.325 20.4691 17.4133 20.4121C17.4484 20.3895 17.4832 20.3664 17.518 20.3434C17.6102 20.2824 17.7016 20.2195 17.7918 20.1547C17.8484 20.1145 17.9043 20.0734 17.9602 20.032C18.016 19.9906 18.0711 19.9488 18.1258 19.9059L18.1914 19.8543C18.2242 19.8285 18.257 19.8023 18.2895 19.7758C18.3168 19.7539 18.3438 19.7316 18.3703 19.7094C18.402 19.6832 18.4332 19.657 18.4645 19.6305C18.673 19.4535 18.8754 19.2668 19.0711 19.0711C19.1168 19.0254 19.1621 18.9793 19.2066 18.9328C19.2336 18.9051 19.2602 18.877 19.2863 18.8488C19.3379 18.7945 19.3879 18.7398 19.4379 18.6848C19.4852 18.632 19.532 18.5793 19.5781 18.5258C19.5828 18.5203 19.5875 18.5148 19.5922 18.5094C19.6199 18.4773 19.6473 18.4449 19.6742 18.4125C19.7156 18.3633 19.7566 18.3137 19.7969 18.2637C19.8137 18.2426 19.8305 18.2215 19.8473 18.2004C19.8711 18.1703 19.8945 18.1406 19.918 18.1102C19.9414 18.0801 19.9648 18.0496 19.9879 18.0187C20.0266 17.968 20.0645 17.9168 20.1016 17.8656C20.1207 17.8391 20.1398 17.8129 20.1586 17.7863C20.1602 17.7848 20.1613 17.7828 20.1629 17.7805C20.2039 17.723 20.2445 17.6645 20.2844 17.6059C20.3105 17.568 20.3359 17.5297 20.3609 17.4914C20.3621 17.4898 20.3633 17.4883 20.3645 17.4863C20.3656 17.4844 20.3672 17.4824 20.368 17.4805C20.384 17.4566 20.3996 17.4332 20.4148 17.409C20.4203 17.4004 20.4262 17.3918 20.4316 17.3828C20.4625 17.3344 20.4934 17.2855 20.5238 17.2363C20.5492 17.1949 20.5742 17.1535 20.5992 17.1117C20.609 17.0953 20.6187 17.0785 20.6285 17.0617C20.6434 17.0367 20.6582 17.0117 20.6727 16.9867C20.7465 16.8594 20.8168 16.7305 20.8844 16.6004C20.9066 16.5574 20.9285 16.5145 20.95 16.4711C20.9836 16.4043 21.0164 16.3375 21.048 16.2699C21.0738 16.2148 21.0996 16.1598 21.1246 16.1043C21.1383 16.0742 21.1512 16.0445 21.1645 16.0145C21.1805 15.9785 21.1957 15.9422 21.2109 15.9062C21.2797 15.7457 21.3434 15.5828 21.4027 15.4187C21.4133 15.3906 21.4234 15.3621 21.4332 15.3336C21.4715 15.2262 21.5074 15.1176 21.5414 15.0086C21.5531 14.9723 21.5641 14.9359 21.575 14.8996C21.5855 14.8652 21.5957 14.8309 21.6059 14.7965C21.6195 14.7496 21.6328 14.7023 21.6457 14.6551C21.6477 14.648 21.6496 14.641 21.6512 14.634C21.6617 14.5957 21.6719 14.5574 21.6816 14.5188C21.6844 14.509 21.6871 14.4992 21.6891 14.4895C21.6973 14.4582 21.7055 14.4266 21.7129 14.3949C21.718 14.3742 21.723 14.3531 21.7281 14.3324C21.7727 14.1449 21.8121 13.9555 21.8453 13.7648C21.8504 13.7359 21.8559 13.7066 21.8605 13.6773C21.8648 13.6527 21.8687 13.6285 21.8727 13.6039C21.8793 13.5637 21.8855 13.523 21.8914 13.4824C21.8977 13.4422 21.9031 13.4016 21.9086 13.3609C21.9168 13.3016 21.9242 13.2426 21.9309 13.1832C21.9348 13.1508 21.9383 13.118 21.9418 13.0852C21.9465 13.043 21.9508 13.0004 21.9547 12.9578C21.957 12.9363 21.959 12.9148 21.9605 12.8938C21.9625 12.8727 21.9641 12.8512 21.966 12.8297C21.9691 12.7918 21.9719 12.7539 21.9746 12.716C21.9762 12.6996 21.9773 12.6828 21.9781 12.6664C21.9801 12.6352 21.982 12.6043 21.9836 12.573C21.9863 12.5254 21.9887 12.4777 21.9906 12.4301C21.9949 12.3348 21.9977 12.2395 21.9988 12.1438C21.9996 12.0957 22 12.048 22 12V11.9895C22 11.8328 21.9961 11.677 21.9887 11.5215Z"
										clip-rule="evenodd"
									></path>
									<path
										xmlns="http://www.w3.org/2000/svg"
										fill="#fff"
										fill-rule="evenodd"
										d="M22 12C22 12.048 21.9996 12.0957 21.9988 12.1438C21.9977 12.2395 21.9949 12.3348 21.9906 12.4301C21.9887 12.4777 21.9863 12.5254 21.9836 12.573C21.982 12.6043 21.9801 12.6352 21.9781 12.6664C21.9773 12.6828 21.9762 12.6996 21.9746 12.716C21.9719 12.7539 21.9691 12.7918 21.966 12.8297C21.9641 12.8512 21.9625 12.8727 21.9605 12.8938C21.959 12.9148 21.957 12.9363 21.9547 12.9578C21.9508 13.0004 21.9465 13.043 21.9418 13.0852C21.9383 13.118 21.9348 13.1508 21.9309 13.1832C21.9242 13.2426 21.9168 13.3016 21.9086 13.3609C21.9031 13.4016 21.8977 13.4422 21.8914 13.4824C21.8855 13.523 21.8793 13.5637 21.8727 13.6039C21.8687 13.6285 21.8648 13.6527 21.8605 13.6773C21.8559 13.7066 21.8504 13.7359 21.8453 13.7648C21.8121 13.9555 21.7727 14.1449 21.7281 14.3324C21.723 14.3531 21.718 14.3742 21.7129 14.3949C21.7055 14.4266 21.6973 14.4582 21.6891 14.4895C21.6871 14.4992 21.6844 14.509 21.6816 14.5188C21.6719 14.5574 21.6617 14.5957 21.6512 14.634C21.6496 14.641 21.6477 14.648 21.6457 14.6551C21.6328 14.7023 21.6195 14.7496 21.6059 14.7965C21.5957 14.8309 21.5855 14.8652 21.575 14.8996C21.5641 14.9359 21.5531 14.9723 21.5414 15.0086C21.5074 15.1176 21.4715 15.2262 21.4332 15.3336C21.4234 15.3621 21.4133 15.3906 21.4027 15.4187C21.3434 15.5828 21.2797 15.7457 21.2109 15.9062C21.1961 15.9426 21.1805 15.9785 21.1645 16.0145C21.1512 16.0445 21.1383 16.0742 21.1246 16.1043C21.0996 16.1598 21.0738 16.2148 21.048 16.2699C21.0164 16.3375 20.9836 16.4043 20.95 16.4711C20.9285 16.5145 20.9066 16.5574 20.8844 16.6004C20.8168 16.7305 20.7465 16.8594 20.6727 16.9867C20.6484 17.0285 20.6238 17.0703 20.5992 17.1117C20.5742 17.1535 20.5492 17.1949 20.5238 17.2363C20.4934 17.2855 20.4625 17.3344 20.4316 17.3828C20.4262 17.3918 20.4203 17.4004 20.4148 17.409C20.3996 17.4332 20.384 17.4566 20.368 17.4805C20.3672 17.4824 20.3656 17.4844 20.3645 17.4863C20.3633 17.4883 20.3621 17.4898 20.3609 17.4914C20.3359 17.5297 20.3105 17.568 20.2844 17.6059C20.2445 17.6645 20.2039 17.723 20.1629 17.7805C20.1613 17.7828 20.1602 17.7848 20.1586 17.7863C20.1398 17.8129 20.1207 17.8391 20.1016 17.8656C20.0645 17.9168 20.0266 17.968 19.9879 18.0187C19.9648 18.0496 19.9414 18.0801 19.918 18.1102C19.8945 18.1406 19.8711 18.1703 19.8473 18.2004C19.8305 18.2215 19.8137 18.2426 19.7969 18.2637C19.7566 18.3137 19.7156 18.3633 19.6742 18.4125C19.6473 18.4449 19.6199 18.4773 19.5922 18.5094C19.5875 18.5148 19.5828 18.5203 19.5781 18.5258C19.532 18.5793 19.4852 18.632 19.4379 18.6848C19.3879 18.7398 19.3379 18.7945 19.2863 18.8488C19.2602 18.877 19.2336 18.9051 19.2066 18.9328C19.1621 18.9793 19.1168 19.0254 19.0711 19.0711C18.8754 19.2668 18.673 19.4535 18.4645 19.6305C18.4332 19.657 18.402 19.6832 18.3703 19.7094C18.3438 19.7316 18.3168 19.7539 18.2895 19.7758C18.257 19.8023 18.2242 19.8285 18.1914 19.8543L18.1258 19.9059C18.0711 19.9488 18.016 19.9906 17.9602 20.032C17.9043 20.0734 17.8484 20.1145 17.7918 20.1547C17.7016 20.2195 17.6102 20.2824 17.518 20.3434C17.4832 20.3664 17.4484 20.3895 17.4133 20.4121C17.325 20.4691 17.2359 20.525 17.1457 20.5789C17.1063 20.6027 17.0668 20.6262 17.027 20.6496C16.9309 20.7055 16.834 20.7602 16.7355 20.8125C16.7023 20.8305 16.6687 20.8484 16.6352 20.866C16.5918 20.8887 16.5484 20.9109 16.5051 20.9328C16.4125 20.9801 16.3191 21.0254 16.225 21.0691C16.1789 21.0906 16.1328 21.1117 16.0863 21.1328C16.0848 21.1336 16.0832 21.1344 16.0816 21.1348C16.0348 21.1559 15.9879 21.1762 15.941 21.1965C15.9383 21.1977 15.9355 21.1988 15.9332 21.1996C15.8945 21.216 15.8559 21.2324 15.8168 21.2484C15.7781 21.2645 15.7391 21.2801 15.7 21.2957C15.6609 21.3113 15.6215 21.3266 15.5824 21.3418C15.543 21.357 15.5039 21.3715 15.4645 21.3859C15.425 21.4008 15.3852 21.4148 15.3457 21.4289C15.3258 21.4363 15.3059 21.4434 15.2859 21.45C15.266 21.457 15.2461 21.4637 15.2262 21.4703C15.1863 21.484 15.1465 21.4973 15.1066 21.5102C15.0703 21.5223 15.034 21.534 14.9973 21.5453C14.9422 21.5625 14.8863 21.5793 14.8309 21.5957C14.802 21.6043 14.7727 21.6125 14.7438 21.6207C14.7109 21.6305 14.6777 21.6395 14.6449 21.6484C14.6441 21.6484 14.6437 21.6488 14.643 21.6488C14.6156 21.6562 14.5887 21.6637 14.5613 21.6707C14.5406 21.6762 14.5199 21.6816 14.4992 21.6867C14.4645 21.6957 14.4297 21.7047 14.3945 21.7129C14.2922 21.7383 14.1895 21.7617 14.0859 21.7832C14.0531 21.7902 14.0207 21.7969 13.9875 21.8035C13.9707 21.807 13.9535 21.8102 13.9363 21.8133C13.9316 21.8148 13.927 21.8156 13.9223 21.816C13.9008 21.8207 13.8793 21.8246 13.8574 21.8285C13.8492 21.8305 13.841 21.832 13.8328 21.8332C13.8109 21.8375 13.7887 21.8414 13.7664 21.8453C13.7625 21.8461 13.7586 21.8469 13.7547 21.8473C13.7332 21.8512 13.7113 21.8551 13.6898 21.8586C13.6613 21.8637 13.6328 21.8684 13.6039 21.8727C13.566 21.8789 13.5277 21.8848 13.4895 21.8902C13.4719 21.893 13.4543 21.8957 13.4367 21.898C13.4113 21.902 13.3863 21.9055 13.3609 21.9086C13.3238 21.9137 13.2871 21.9187 13.25 21.923C13.2078 21.9281 13.1652 21.9332 13.1227 21.9379C13.0797 21.943 13.0363 21.9473 12.9934 21.9516C12.9113 21.9594 12.8289 21.9664 12.7465 21.9727C12.7016 21.9762 12.6562 21.9789 12.6109 21.9816C12.6047 21.982 12.5988 21.9824 12.593 21.9824C12.5484 21.9852 12.5035 21.9875 12.4586 21.9895C12.4172 21.9914 12.3758 21.993 12.3344 21.9941C12.3324 21.9945 12.3301 21.9945 12.3281 21.9945C12.316 21.9953 12.3039 21.9953 12.2918 21.9957C12.2887 21.9961 12.2855 21.9961 12.2824 21.9957C12.2504 21.9969 12.218 21.9977 12.1855 21.998C12.1238 21.9996 12.0621 22 12 22V2C12.0484 2 12.0969 2.00039 12.1449 2.00117C12.2523 2.00234 12.359 2.00586 12.4656 2.01094C12.4859 2.01172 12.5059 2.0125 12.5258 2.01367C12.5457 2.01445 12.566 2.01562 12.5859 2.01719C12.6703 2.02148 12.7547 2.02734 12.8387 2.03477C12.8715 2.03711 12.9043 2.03984 12.9367 2.04336C12.9371 2.04297 12.9375 2.04297 12.9383 2.04336C13.0316 2.05195 13.1246 2.06172 13.2176 2.07305C13.2469 2.07656 13.2762 2.08008 13.3051 2.08398C13.5195 2.11172 13.732 2.14609 13.943 2.18789C13.9637 2.1918 13.984 2.1957 14.0047 2.2C14.032 2.20547 14.059 2.21094 14.0859 2.2168C14.125 2.225 14.1637 2.2332 14.2023 2.2418C14.2313 2.24844 14.2598 2.25469 14.2883 2.26172C14.3227 2.26953 14.3563 2.27773 14.3902 2.28594C14.4203 2.29336 14.4504 2.30078 14.4801 2.3082C14.7043 2.36523 14.9262 2.42969 15.1453 2.50234C15.1793 2.51367 15.2133 2.525 15.2473 2.53672C15.2992 2.5543 15.3508 2.57227 15.4023 2.59102C15.4316 2.60156 15.4605 2.61211 15.4895 2.62305C15.5273 2.63711 15.5652 2.65156 15.6031 2.66602C15.641 2.68047 15.6789 2.69531 15.7164 2.71055C15.866 2.77031 16.0145 2.83398 16.1613 2.90117C16.1883 2.91328 16.2152 2.92578 16.2422 2.93867C16.2691 2.95117 16.2957 2.96406 16.3227 2.97695C16.3496 2.98984 16.3762 3.00273 16.4027 3.01602C16.4297 3.02891 16.4562 3.04219 16.4828 3.05586C16.5949 3.11172 16.7055 3.16992 16.8148 3.23047C16.8344 3.24102 16.8535 3.25156 16.8727 3.2625C16.9148 3.28594 16.9563 3.30937 16.9977 3.33359C17.0352 3.35508 17.0723 3.37695 17.1094 3.39922C17.152 3.42461 17.1941 3.45 17.2363 3.47617C17.2461 3.48203 17.2562 3.48828 17.2656 3.49453C17.3023 3.51719 17.3391 3.54062 17.3758 3.56406C17.4164 3.58984 17.4566 3.61602 17.4969 3.64258C17.5672 3.68906 17.6367 3.73594 17.7055 3.78437C17.7434 3.81055 17.7805 3.83672 17.8176 3.86367C17.8406 3.88008 17.8629 3.89648 17.8855 3.9125C17.8969 3.92109 17.9082 3.9293 17.9195 3.9375C17.9426 3.9543 17.9652 3.97148 17.9879 3.98867C18.0066 4.00273 18.0254 4.0168 18.0441 4.03125C18.0734 4.05312 18.1023 4.07578 18.1312 4.09805C18.1586 4.11953 18.1859 4.14102 18.2129 4.1625C18.2461 4.18867 18.2789 4.21523 18.3117 4.24219C18.3445 4.26914 18.3773 4.29609 18.4098 4.32344C18.4375 4.34648 18.4652 4.36953 18.4922 4.39336C18.5344 4.42891 18.5758 4.46523 18.6172 4.50195C18.6559 4.53633 18.6945 4.5707 18.7328 4.60586C18.7676 4.6375 18.8023 4.66953 18.8367 4.70195C18.8656 4.72891 18.8941 4.75586 18.9223 4.7832C18.941 4.80117 18.9598 4.81914 18.9781 4.8375C19.0094 4.86758 19.0402 4.89805 19.0711 4.92891C19.1141 4.97187 19.1566 5.01523 19.1984 5.05898C19.2254 5.08633 19.2516 5.11406 19.2777 5.1418L19.2812 5.14531C19.3 5.16523 19.3184 5.18516 19.3367 5.20469C19.4668 5.34492 19.5922 5.48789 19.7133 5.63438C19.727 5.65078 19.7402 5.66719 19.7535 5.6832C19.8059 5.74727 19.8574 5.81172 19.9078 5.87656C19.9492 5.92969 19.9902 5.9832 20.0305 6.0375C20.0414 6.05195 20.0523 6.06641 20.0629 6.08125C20.0879 6.11484 20.1125 6.14883 20.1367 6.18281C20.166 6.22344 20.1949 6.26406 20.2234 6.30547C20.2668 6.36758 20.3086 6.42969 20.3504 6.49258C20.4316 6.61523 20.5102 6.73945 20.5855 6.86523C20.607 6.90078 20.6281 6.93672 20.6496 6.97305C20.6734 7.01367 20.6969 7.05469 20.7199 7.09609C20.732 7.1168 20.7434 7.1375 20.7547 7.15859C20.7992 7.23828 20.8426 7.31875 20.8844 7.39961C20.9027 7.43516 20.9211 7.47031 20.9387 7.50586C20.9691 7.56602 20.9992 7.62656 21.0281 7.68789C21.041 7.71445 21.0535 7.74141 21.066 7.76797C21.0703 7.77734 21.075 7.78633 21.0789 7.7957C21.0906 7.82109 21.1023 7.84609 21.1137 7.87148C21.1281 7.90312 21.1422 7.93477 21.1562 7.9668C21.1723 8.00234 21.1879 8.03828 21.2031 8.07422C21.2168 8.10664 21.2305 8.13867 21.2437 8.17109C21.2594 8.20859 21.2746 8.24609 21.2895 8.28359C21.3336 8.39297 21.3754 8.50352 21.4148 8.61445C21.4289 8.65313 21.4426 8.6918 21.4559 8.73086C21.5504 9.00469 21.6328 9.28281 21.7031 9.56484C21.7133 9.60703 21.7234 9.64922 21.7336 9.69141C21.7512 9.76523 21.7676 9.83945 21.7832 9.91406C21.7918 9.95391 21.8 9.99375 21.8078 10.034C21.816 10.0738 21.8234 10.1141 21.8309 10.1543C21.8379 10.1906 21.8445 10.2273 21.8508 10.2641C21.8656 10.348 21.8789 10.4328 21.8914 10.5176C21.8977 10.5578 21.9031 10.5984 21.9086 10.6391C21.9145 10.6797 21.9195 10.7207 21.9246 10.7613C21.9383 10.8746 21.9504 10.9883 21.9605 11.1023C21.9691 11.202 21.9766 11.3016 21.9824 11.4012C21.9832 11.4164 21.9844 11.4312 21.9848 11.4461C21.9863 11.4711 21.9875 11.4965 21.9887 11.5215C21.9961 11.6805 22 11.8398 22 12Z"
										clip-rule="evenodd"
									></path>
									<path
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										fill-rule="evenodd"
										d="M21.9885 11.5186L21.9887 11.5215C21.9961 11.6805 22 11.8398 22 12C22 12.048 21.9996 12.0957 21.9988 12.1438C21.9977 12.2395 21.9949 12.3348 21.9906 12.4301C21.9887 12.4777 21.9863 12.5254 21.9836 12.573L19.0016 12.577C18.9316 13.4305 18.7086 14.2414 18.3602 14.9816L20.95 16.4711C20.9285 16.5145 20.9066 16.5574 20.8844 16.6004C20.8168 16.7305 20.7465 16.8594 20.6727 16.9867C20.6484 17.0285 20.6238 17.0703 20.5992 17.1117C20.5742 17.1535 20.5492 17.1949 20.5238 17.2363C20.4934 17.2855 20.4625 17.3344 20.4316 17.3828C20.4262 17.3918 20.4203 17.4004 20.4148 17.409C20.3996 17.4332 20.384 17.4566 20.368 17.4805C20.3674 17.4818 20.3666 17.4831 20.3657 17.4844C20.3653 17.485 20.3648 17.4857 20.3645 17.4863C20.3633 17.4883 20.3621 17.4898 20.3609 17.4914C20.3359 17.5297 20.3105 17.568 20.2844 17.6059C20.2445 17.6645 20.2039 17.723 20.1629 17.7805C20.1619 17.7819 20.1611 17.7833 20.1602 17.7844C20.1597 17.7851 20.1592 17.7857 20.1586 17.7863C20.1454 17.805 20.132 17.8235 20.1186 17.8421C20.1129 17.8499 20.1072 17.8577 20.1016 17.8656C20.0645 17.9168 20.0266 17.968 19.9879 18.0187C19.9648 18.0496 19.9414 18.0801 19.918 18.1102C19.8945 18.1406 19.8711 18.1703 19.8473 18.2004L19.7969 18.2637C19.7566 18.3137 19.7156 18.3633 19.6742 18.4125C19.6473 18.4449 19.6199 18.4773 19.5922 18.5094L19.5781 18.5258C19.532 18.5793 19.4852 18.632 19.4379 18.6848C19.3879 18.7398 19.3379 18.7945 19.2863 18.8488C19.2602 18.877 19.2336 18.9051 19.2066 18.9328C19.1621 18.9793 19.1168 19.0254 19.0711 19.0711C18.8754 19.2668 18.673 19.4535 18.4645 19.6305C18.4332 19.657 18.402 19.6832 18.3703 19.7094C18.3438 19.7316 18.3168 19.7539 18.2895 19.7758C18.257 19.8023 18.2242 19.8285 18.1914 19.8543L18.1258 19.9059C18.0711 19.9488 18.016 19.9906 17.9602 20.032C17.9043 20.0734 17.8484 20.1145 17.7918 20.1547C17.7016 20.2195 17.6102 20.2824 17.518 20.3434C17.4833 20.3664 17.4484 20.3895 17.4133 20.4121C17.325 20.4691 17.2359 20.525 17.1457 20.5789C17.1062 20.6027 17.0668 20.6262 17.027 20.6496C16.9309 20.7055 16.834 20.7602 16.7355 20.8125C16.7023 20.8305 16.6688 20.8484 16.6352 20.866C16.5918 20.8887 16.5484 20.9109 16.5051 20.9328L15.0059 18.3488C14.2668 18.7004 13.4566 18.9262 12.6035 18.9992L12.6109 21.9816L12.6098 21.9817C12.604 21.9821 12.5985 21.9824 12.593 21.9824C12.5484 21.9852 12.5035 21.9875 12.4586 21.9895C12.4172 21.9914 12.3758 21.993 12.3344 21.9941C12.3324 21.9945 12.3301 21.9945 12.3281 21.9945C12.3201 21.9951 12.312 21.9952 12.3039 21.9954C12.2999 21.9955 12.2958 21.9956 12.2918 21.9957C12.2887 21.9961 12.2855 21.9961 12.2824 21.9957C12.2504 21.9969 12.218 21.9977 12.1855 21.998C12.1238 21.9996 12.0621 22 12 22C11.8121 22 11.625 21.9949 11.4391 21.9844C11.3191 21.9781 11.1996 21.9695 11.0805 21.9582C9.94766 21.8559 8.8543 21.5641 7.83789 21.0984C7.73789 21.0527 7.63867 21.0051 7.54023 20.9559C7.19102 20.782 6.85195 20.5867 6.52422 20.3711L8.01055 17.7793C7.32383 17.3039 6.72578 16.7094 6.24609 16.0258L3.66328 17.5285C3.44609 17.202 3.24883 16.8641 3.07266 16.5164C3.01406 16.4016 2.9582 16.2855 2.9043 16.1684C2.44023 15.1566 2.14805 14.0691 2.04375 12.9418C2.03359 12.8359 2.02539 12.7301 2.01914 12.6238C2.00625 12.4168 2 12.209 2 12C2 11.8164 2.00508 11.634 2.01484 11.452L4.99688 11.4406C5.06445 10.5867 5.28555 9.77578 5.63242 9.03438L3.03867 7.55117C3.21211 7.20195 3.40664 6.86289 3.62148 6.53477C3.68906 6.43203 3.7582 6.33047 3.82969 6.23008C4.15547 5.7707 4.52266 5.33516 4.92891 4.92891C5.31914 4.53867 5.73633 4.18438 6.17578 3.86836C6.26992 3.80078 6.36484 3.73477 6.46094 3.67031C6.6582 3.53867 6.85977 3.41445 7.06523 3.29766C7.16602 3.24063 7.26758 3.18516 7.36992 3.13164C7.40391 3.11367 7.43789 3.09609 7.47227 3.07852L8.97773 5.65859C9.72656 5.30039 10.5484 5.07109 11.4141 4.99922V2.01719C11.6086 2.00547 11.8039 2 12 2C12.0484 2 12.0969 2.00039 12.1449 2.00117L12.2156 2.00234C12.2391 2.00273 12.2625 2.00352 12.2859 2.0043C12.3461 2.00586 12.4059 2.0082 12.4656 2.01094C12.4859 2.01172 12.5059 2.0125 12.5258 2.01367C12.5457 2.01445 12.566 2.01562 12.5859 2.01719C12.6703 2.02148 12.7547 2.02734 12.8387 2.03477C12.8715 2.03711 12.9043 2.03984 12.9367 2.04336C12.9371 2.04297 12.9375 2.04297 12.9383 2.04336C13.0316 2.05195 13.1246 2.06172 13.2176 2.07305C13.2469 2.07656 13.2762 2.08008 13.3051 2.08398C13.5195 2.11172 13.732 2.14609 13.943 2.18789C13.9637 2.1918 13.984 2.1957 14.0047 2.2C14.032 2.20547 14.059 2.21094 14.0859 2.2168C14.125 2.225 14.1637 2.2332 14.2023 2.2418C14.2104 2.24365 14.2184 2.24547 14.2264 2.24729C14.2472 2.25198 14.2677 2.25665 14.2883 2.26172C14.3178 2.26844 14.3468 2.27544 14.376 2.28249L14.3902 2.28594L14.4801 2.3082C14.7043 2.36523 14.9262 2.42969 15.1453 2.50234C15.1793 2.51366 15.2133 2.52501 15.2473 2.53672C15.2992 2.5543 15.3508 2.57227 15.4023 2.59102C15.4316 2.60156 15.4605 2.61211 15.4895 2.62305C15.5273 2.63711 15.5652 2.65156 15.6031 2.66602C15.641 2.68047 15.6789 2.69531 15.7164 2.71055C15.866 2.77031 16.0145 2.83398 16.1613 2.90117C16.1883 2.91328 16.2152 2.92578 16.2422 2.93867C16.2626 2.94812 16.2827 2.95779 16.303 2.96751C16.3095 2.97065 16.3161 2.9738 16.3227 2.97695C16.3496 2.98984 16.3762 3.00273 16.4027 3.01602C16.4297 3.02891 16.4563 3.04219 16.4828 3.05586C16.5949 3.11172 16.7055 3.16992 16.8148 3.23047C16.8344 3.24102 16.8535 3.25156 16.8727 3.2625C16.9148 3.28594 16.9562 3.30937 16.9977 3.33359C17.0352 3.35508 17.0723 3.37695 17.1094 3.39922C17.152 3.42461 17.1941 3.45 17.2363 3.47617C17.2461 3.48203 17.2563 3.48828 17.2656 3.49453C17.3023 3.51719 17.3391 3.54062 17.3758 3.56406C17.4164 3.58984 17.4566 3.61602 17.4969 3.64258L16.0039 6.23086C16.6895 6.70781 17.2863 7.30391 17.7641 7.98867L20.3504 6.49258C20.4316 6.61523 20.5102 6.73945 20.5855 6.86523C20.6026 6.8935 20.6195 6.92201 20.6364 6.95077C20.6408 6.95818 20.6452 6.96561 20.6496 6.97305C20.6734 7.01367 20.6969 7.05469 20.7199 7.09609C20.732 7.1168 20.7434 7.1375 20.7547 7.15859C20.7992 7.23828 20.8426 7.31875 20.8844 7.39961C20.8875 7.40563 20.8906 7.41163 20.8937 7.41763C20.9089 7.44707 20.9241 7.47633 20.9387 7.50586C20.9691 7.56602 20.9992 7.62656 21.0281 7.68789C21.0379 7.70798 21.0474 7.7283 21.0569 7.7485C21.0599 7.75501 21.063 7.7615 21.066 7.76797C21.0676 7.77147 21.0693 7.77492 21.0709 7.77836C21.0737 7.78412 21.0765 7.78983 21.0789 7.7957C21.0817 7.8018 21.0845 7.80788 21.0873 7.81395C21.0962 7.83313 21.1051 7.8522 21.1137 7.87148C21.1281 7.90312 21.1422 7.93477 21.1562 7.9668C21.1723 8.00234 21.1879 8.03828 21.2031 8.07422C21.2063 8.08165 21.2094 8.08905 21.2125 8.09645C21.223 8.12134 21.2335 8.1461 21.2437 8.17109C21.2594 8.20859 21.2746 8.24609 21.2895 8.28359C21.3336 8.39297 21.3754 8.50352 21.4148 8.61445C21.4289 8.65313 21.4426 8.6918 21.4559 8.73086C21.5504 9.00469 21.6328 9.28281 21.7031 9.56484L21.7336 9.69141C21.7512 9.76523 21.7676 9.83945 21.7832 9.91406C21.7918 9.95391 21.8 9.99375 21.8078 10.034C21.816 10.0738 21.8234 10.1141 21.8309 10.1543C21.8379 10.1906 21.8445 10.2273 21.8508 10.2641C21.8656 10.348 21.8789 10.4328 21.8914 10.5176C21.8977 10.5578 21.9031 10.5984 21.9086 10.639C21.9145 10.6797 21.9195 10.7207 21.9246 10.7613C21.9383 10.8746 21.9504 10.9883 21.9605 11.1023C21.9691 11.202 21.9766 11.3016 21.9824 11.4012C21.9827 11.4064 21.983 11.4117 21.9833 11.4169C21.9839 11.4267 21.9845 11.4364 21.9848 11.4461C21.9863 11.4701 21.9874 11.4945 21.9885 11.5186ZM6.14648 12C6.14648 15.2277 8.77227 17.8535 12 17.8535C15.2277 17.8535 17.8535 15.2277 17.8535 12C17.8535 8.77227 15.2277 6.14648 12 6.14648C8.77227 6.14648 6.14648 8.77227 6.14648 12Z"
										clip-rule="evenodd"
									></path>
									<path
										xmlns="http://www.w3.org/2000/svg"
										fill="#fff"
										fill-rule="evenodd"
										d="M16.1393 16.1388C15.0335 17.244 13.5635 17.853 12 17.853V6.146C13.5635 6.146 15.0335 6.75506 16.1393 7.86025C17.2445 8.96596 17.8535 10.436 17.8535 11.9995C17.8535 13.563 17.2445 15.0331 16.1393 16.1388Z"
										clip-rule="evenodd"
									></path>
									<path
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										fill-rule="evenodd"
										d="M22 12C22 12.048 21.9996 12.0957 21.9988 12.1438C21.9977 12.2395 21.9949 12.3348 21.9906 12.4301C21.9887 12.4777 21.9863 12.5254 21.9836 12.573L19.0016 12.577C18.9316 13.4305 18.7086 14.2414 18.3602 14.9816L20.95 16.4711C20.9285 16.5145 20.9066 16.5574 20.8844 16.6004C20.8168 16.7305 20.7465 16.8594 20.6727 16.9867C20.6484 17.0285 20.6238 17.0703 20.5992 17.1117C20.5742 17.1535 20.5492 17.1949 20.5238 17.2363C20.4934 17.2855 20.4625 17.3344 20.4316 17.3828C20.4262 17.3918 20.4203 17.4004 20.4148 17.409C20.3996 17.4332 20.384 17.4566 20.368 17.4805C20.3672 17.4824 20.3656 17.4844 20.3645 17.4863C20.3633 17.4883 20.3621 17.4898 20.3609 17.4914C20.3359 17.5297 20.3105 17.568 20.2844 17.6059C20.2445 17.6645 20.2039 17.723 20.1629 17.7805C20.1613 17.7828 20.1602 17.7848 20.1586 17.7863C20.1398 17.8129 20.1207 17.8391 20.1016 17.8656C20.0645 17.9168 20.0266 17.968 19.9879 18.0187C19.9648 18.0496 19.9414 18.0801 19.918 18.1102C19.8945 18.1406 19.8711 18.1703 19.8473 18.2004C19.8305 18.2215 19.8137 18.2426 19.7969 18.2637C19.7566 18.3137 19.7156 18.3633 19.6742 18.4125C19.6473 18.4449 19.6199 18.4773 19.5922 18.5094C19.5875 18.5148 19.5828 18.5203 19.5781 18.5258C19.532 18.5793 19.4852 18.632 19.4379 18.6848C19.3879 18.7398 19.3379 18.7945 19.2863 18.8488C19.2602 18.877 19.2336 18.9051 19.2066 18.9328C19.1621 18.9793 19.1168 19.0254 19.0711 19.0711C18.8754 19.2668 18.673 19.4535 18.4645 19.6305C18.4332 19.657 18.402 19.6832 18.3703 19.7094C18.3438 19.7316 18.3168 19.7539 18.2895 19.7758C18.257 19.8023 18.2242 19.8285 18.1914 19.8543L18.1258 19.9059C18.0711 19.9488 18.016 19.9906 17.9602 20.032C17.9043 20.0734 17.8484 20.1145 17.7918 20.1547C17.7016 20.2195 17.6102 20.2824 17.518 20.3434C17.4832 20.3664 17.4484 20.3895 17.4133 20.4121C17.325 20.4691 17.2359 20.525 17.1457 20.5789C17.1063 20.6027 17.0668 20.6262 17.027 20.6496C16.9309 20.7055 16.834 20.7602 16.7355 20.8125C16.7023 20.8305 16.6687 20.8484 16.6352 20.866C16.5918 20.8887 16.5484 20.9109 16.5051 20.9328L15.0059 18.3488C14.2668 18.7004 13.4566 18.9262 12.6035 18.9992L12.6109 21.9816C12.6047 21.982 12.5988 21.9824 12.593 21.9824C12.5484 21.9852 12.5035 21.9875 12.4586 21.9895C12.4172 21.9914 12.3758 21.993 12.3344 21.9941C12.3324 21.9945 12.3301 21.9945 12.3281 21.9945C12.316 21.9953 12.3039 21.9953 12.2918 21.9957C12.2887 21.9961 12.2855 21.9961 12.2824 21.9957C12.2504 21.9969 12.218 21.9977 12.1855 21.998C12.1238 21.9996 12.0621 22 12 22V17.8535C15.2277 17.8535 17.8535 15.2277 17.8535 12C17.8535 8.77227 15.2277 6.14648 12 6.14648V2C12.0484 2 12.0969 2.00039 12.1449 2.00117C12.1684 2.00156 12.1922 2.00195 12.2156 2.00234C12.2391 2.00273 12.2625 2.00352 12.2859 2.0043C12.3461 2.00586 12.4059 2.0082 12.4656 2.01094C12.4859 2.01172 12.5059 2.0125 12.5258 2.01367C12.5457 2.01445 12.566 2.01562 12.5859 2.01719C12.6703 2.02148 12.7547 2.02734 12.8387 2.03477C12.8715 2.03711 12.9043 2.03984 12.9367 2.04336C12.9371 2.04297 12.9375 2.04297 12.9383 2.04336C13.0316 2.05195 13.1246 2.06172 13.2176 2.07305C13.2469 2.07656 13.2762 2.08008 13.3051 2.08398C13.5195 2.11172 13.732 2.14609 13.943 2.18789C13.9637 2.1918 13.984 2.1957 14.0047 2.2C14.032 2.20547 14.059 2.21094 14.0859 2.2168C14.125 2.225 14.1637 2.2332 14.2023 2.2418C14.2313 2.24844 14.2598 2.25469 14.2883 2.26172C14.3227 2.26953 14.3563 2.27773 14.3902 2.28594C14.4203 2.29336 14.4504 2.30078 14.4801 2.3082C14.7043 2.36523 14.9262 2.42969 15.1453 2.50234C15.1793 2.51367 15.2133 2.525 15.2473 2.53672C15.2992 2.5543 15.3508 2.57227 15.4023 2.59102C15.4316 2.60156 15.4605 2.61211 15.4895 2.62305C15.5273 2.63711 15.5652 2.65156 15.6031 2.66602C15.641 2.68047 15.6789 2.69531 15.7164 2.71055C15.866 2.77031 16.0145 2.83398 16.1613 2.90117C16.1883 2.91328 16.2152 2.92578 16.2422 2.93867C16.2691 2.95117 16.2957 2.96406 16.3227 2.97695C16.3496 2.98984 16.3762 3.00273 16.4027 3.01602C16.4297 3.02891 16.4562 3.04219 16.4828 3.05586C16.5949 3.11172 16.7055 3.16992 16.8148 3.23047C16.8344 3.24102 16.8535 3.25156 16.8727 3.2625C16.9148 3.28594 16.9563 3.30937 16.9977 3.33359C17.0352 3.35508 17.0723 3.37695 17.1094 3.39922C17.152 3.42461 17.1941 3.45 17.2363 3.47617C17.2461 3.48203 17.2562 3.48828 17.2656 3.49453C17.3023 3.51719 17.3391 3.54062 17.3758 3.56406C17.4164 3.58984 17.4566 3.61602 17.4969 3.64258L16.0039 6.23086C16.6895 6.70781 17.2863 7.30391 17.7641 7.98867L20.3504 6.49258C20.4316 6.61523 20.5102 6.73945 20.5855 6.86523C20.607 6.90078 20.6281 6.93672 20.6496 6.97305C20.6734 7.01367 20.6969 7.05469 20.7199 7.09609C20.732 7.1168 20.7434 7.1375 20.7547 7.15859C20.7992 7.23828 20.8426 7.31875 20.8844 7.39961C20.9027 7.43516 20.9211 7.47031 20.9387 7.50586C20.9691 7.56602 20.9992 7.62656 21.0281 7.68789C21.041 7.71445 21.0535 7.74141 21.066 7.76797C21.0703 7.77734 21.075 7.78633 21.0789 7.7957C21.0906 7.82109 21.1023 7.84609 21.1137 7.87148C21.1281 7.90312 21.1422 7.93477 21.1562 7.9668C21.1723 8.00234 21.1879 8.03828 21.2031 8.07422C21.2168 8.10664 21.2305 8.13867 21.2437 8.17109C21.2594 8.20859 21.2746 8.24609 21.2895 8.28359C21.3336 8.39297 21.3754 8.50352 21.4148 8.61445C21.4289 8.65313 21.4426 8.6918 21.4559 8.73086C21.5504 9.00469 21.6328 9.28281 21.7031 9.56484C21.7133 9.60703 21.7234 9.64922 21.7336 9.69141C21.7512 9.76523 21.7676 9.83945 21.7832 9.91406C21.7918 9.95391 21.8 9.99375 21.8078 10.034C21.816 10.0738 21.8234 10.1141 21.8309 10.1543C21.8379 10.1906 21.8445 10.2273 21.8508 10.2641C21.8656 10.348 21.8789 10.4328 21.8914 10.5176C21.8977 10.5578 21.9031 10.5984 21.9086 10.6391C21.9145 10.6797 21.9195 10.7207 21.9246 10.7613C21.9383 10.8746 21.9504 10.9883 21.9605 11.1023C21.9691 11.202 21.9766 11.3016 21.9824 11.4012C21.9832 11.4164 21.9844 11.4312 21.9848 11.4461C21.9863 11.4711 21.9875 11.4965 21.9887 11.5215C21.9961 11.6805 22 11.8398 22 12Z"
										clip-rule="evenodd"
									></path>
									<path
										xmlns="http://www.w3.org/2000/svg"
										fill="#101419"
										fill-rule="evenodd"
										d="M14.8019 13.1303C14.3622 13.8484 13.7492 14.0031 13.3125 14.0064C13.0855 14.0081 12.8583 13.9684 12.642 13.8906C12.6895 14.0868 12.7504 14.1937 12.8017 14.2297L12.8819 14.2861V14.8125H11.1185V14.2861L11.1987 14.2296C11.25 14.1936 11.3109 14.0868 11.3584 13.8905C11.1421 13.9684 10.915 14.0081 10.6879 14.0063C10.2512 14.003 9.63827 13.8484 9.1985 13.1302C8.84405 12.5513 8.83471 11.8647 9.1728 11.2466C9.43366 10.7694 9.83788 10.3891 10.2287 10.0213C10.2975 9.95672 10.3624 9.89562 10.427 9.83363C10.6692 9.60098 10.9145 9.37676 11.1515 9.16C11.387 8.94473 11.6305 8.72215 11.8693 8.49277L12.0002 8.36719L12.1311 8.49277C12.3699 8.72215 12.6134 8.94473 12.8488 9.16C13.0859 9.3768 13.3311 9.60098 13.5733 9.83363C13.638 9.89562 13.7028 9.95668 13.7716 10.0213C14.1625 10.3891 14.5667 10.7694 14.8276 11.2466C15.1657 11.8647 15.1564 12.5513 14.8019 13.1303Z"
										clip-rule="evenodd"
									></path>
									<path
										xmlns="http://www.w3.org/2000/svg"
										fill="#101419"
										fill-rule="evenodd"
										d="M14.8017 13.1303C14.362 13.8484 13.749 14.0031 13.3123 14.0064C13.0853 14.0081 12.858 13.9684 12.6418 13.8906C12.6893 14.0868 12.7502 14.1937 12.8015 14.2297L12.8817 14.2861V14.8125H12V8.36719L12.1309 8.49277C12.3697 8.72215 12.6132 8.94473 12.8486 9.16C13.0857 9.3768 13.3309 9.60098 13.5731 9.83363C13.6377 9.89562 13.7026 9.95668 13.7714 10.0213C14.1623 10.3891 14.5665 10.7694 14.8273 11.2466C15.1655 11.8647 15.1561 12.5513 14.8017 13.1303Z"
										clip-rule="evenodd"
									></path>
								</svg>
							</a>
						</li>
					</ul>
				</div>
				-

				<div data-v-794f6291="" bis_skin_checked="1"></div>

				<div data-v-794f6291="" id="drawer" bis_skin_checked="1"></div>
			</section>
		</div>
		<!---->
	</div>
</template>
