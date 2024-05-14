<script setup>
	import { ref } from "vue";
	import currency from "currency.js";
	import { util } from "../../stores/utility";

	import { bets } from "../../stores/bets";

	const tickets = bets.bets();
	console.log("Balance", bets.balance());
	const totalBal = ref(bets.balance());

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
</script>
<template>
	<section data-v-794f6291="" class="tw-sticky tw-top-0 tw-z-[11]">
		<div bis_skin_checked="1">
			<div bis_skin_checked="1">
				<div bis_skin_checked="1"></div>
			</div>
			<div class="tw-sticky tw-top-0 tw-z-[1010]" bis_skin_checked="1">
				<div
					is-logged-in="true"
					username="milky.way"
					show-support-icon=""
					hide-search-on-small-devices="true"
					tooltip-text=""
					is-incognito-mode="false"
					home-page-url="/"
					should-show-offers-icon=""
					is-search-enabled=""
					selected-menu-index="0"
					show-register-button=""
					balance-product-type="Sportsbook"
				>
					<div shadowrootmode="open">
						<!-- OPEN -->
						<div class="tw-sticky tw-top-0">
							<!---->
							<div
								class="tw-w-full tw-bg-n-22-licorice tw-flex tw-items-center"
							>
								<!---->
								<div
									class="tw-flex-1 tw-flex tw-justify-center"
								>
									<div
										class="tw-flex tw-gap-x-n tw-flex-wrap tw-justify-center"
									></div>
								</div>
								<!---->
							</div>
							<nav
								class="tw-bg-header-main tw-border-gray-200 tw-px-m"
							>
								<div
									class="tw-flex tw-flex-nowrap tw-justify-between tw-items-center tw-min-h-[56px] md:tw-min-h-[64px]"
								>
									<div
										class="tw-flex tw-items-center md:tw-mr-m"
									>
										<figure
											data-qa="brand-logo"
											class="tw-relative tw-top-[-2px] tw-mx-0 tw-m-0 tw-mr-n md:tw-min-w-[125px]"
										>
											<a
												href="https://www.betano.ng/"
												class="tw-pr-m tw-hidden md:tw-flex"
												><img
													width="108"
													height="32"
													src="https://www.betano.ng/assets/logo__betanoc4b9c3b903ff2c4383f679a31552f11a.svg"
													alt="Betano Logo" /></a
											><a
												href="https://www.betano.ng/"
												class="tw-flex md:tw-hidden"
												><img
													class="tw-max-w-[initial]"
													src="https://www.betano.ng/assets/logo__betano__small3d8473b22c3d7dc71a27a80e2278f06f.svg"
													width="29"
													height="40"
													alt="Betano Logo"
											/></a>
										</figure>
										<button
											data-qa="collapsed-menu-button"
											class="tw-no-underline tw-hidden tw-items-center tw-gap-s md:tw-flex md:tw-items-center lg:tw-hidden tw-text-[12px] tw-py-n tw-px-[12px] tw-rounded-[24px] tw-text-white/[0.8] tw-bg-collapsed-navmenu-button/30"
										>
											<span>MENU</span
											><i
												class="tw-ml-[4px] tw-relative tw-top-[-2px]"
												><svg
													width="13"
													height="12"
													viewBox="0 0 13 12"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													class="tw-top-xs tw-relative"
												>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M6.66627 8.5C6.41327 8.5 6.17127 8.3835 6.00327 8.179L3.89677 5.63C3.64477 5.3245 3.59427 4.891 3.76727 4.5245C3.91977 4.201 4.22327 4 4.55977 4H8.77277C9.10927 4 9.41277 4.201 9.56527 4.5245C9.73827 4.891 9.68777 5.3245 9.43627 5.6295L7.32927 8.179C7.16127 8.3835 6.91927 8.5 6.66627 8.5Z"
														fill="white"
													></path>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M6.66627 8.5C6.41327 8.5 6.17127 8.3835 6.00327 8.179L3.89677 5.63C3.64477 5.3245 3.59427 4.891 3.76727 4.5245C3.91977 4.201 4.22327 4 4.55977 4H8.77277C9.10927 4 9.41277 4.201 9.56527 4.5245C9.73827 4.891 9.68777 5.3245 9.43627 5.6295L7.32927 8.179C7.16127 8.3835 6.91927 8.5 6.66627 8.5Z"
														fill="white"
													></path>
												</svg>
											</i></button
										><!---->
									</div>
									<aside class="lg:tw-order-2 lg:tw-ml-s">
										<div
											class="tw-flex tw-flex-row tw-items-center tw-gap-n"
										>
											<div
												class="tw-flex tw-gap-n tw-relative"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="#000000"
													data-qa="header-icons-offers-icon"
													class="base-icon-svg tw-block tw-cursor-pointer"
													aria-hidden="true"
												>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M12.5479 0.149241C12.0668 -0.136313 11.4315 0.00048038 11.1291 0.454778L9.00025 3.65269L6.87143 0.454684C6.56901 0.000379469 5.9338 -0.136427 5.45266 0.149119C4.97151 0.434664 4.82662 1.03443 5.12903 1.48873L6.78492 3.97628H2C0.89543 3.97628 0 4.87304 0 5.97924V7.98221C0 8.72359 0.402199 9.37089 1 9.71721V9.98517V16.9956C1 18.6549 2.34314 20 4 20H14C15.6569 20 17 18.6549 17 16.9956V9.98517V9.71721C17.5978 9.37089 18 8.72359 18 7.98221V5.97924C18 4.87304 17.1046 3.97628 16 3.97628H11.2156L12.8715 1.48886C13.1739 1.03457 13.029 0.434796 12.5479 0.149241ZM2 7.98221H3H4H8V5.97924H4H2V7.98221ZM10 5.97924V7.98221H14H15H16V5.97924H14H10ZM8 9.98517H5H3V11.9881V16.9956C3 17.5487 3.44772 17.997 4 17.997H8V9.98517ZM10 17.997V9.98517H13H15V11.9881V16.9956C15 17.5487 14.5523 17.997 14 17.997H10Z"
														fill="white"
													></path>
												</svg>
												<!----><!---->
												<div
													class="tw-mt-n tw-mr-m tw-border-x tw-border-y tw-z-[900] tw-flex tw-bg-n-94-dirty-snow md:tw-w-[340px] tw-w-[calc(100%-16px)] tw-left-0 tw-rounded-m tw-p-[12px] tw-flex-col tw-gap-m tw-fixed md:tw-right-0 md:tw-mr-m md:tw-left-auto md:tw-mt-n tw-m-n tw-cursor-auto tw-border-2 tw-border-white tw-border-solid tw-shadow-[0px_20px_32px_0px_#30333666]"
													style="display: none"
												>
													<div
														class="tw-w-full tw-flex tw-flex-col tw-justify-between tw-items-center tw-gap-[12px]"
														data-qa="settings-header"
													>
														<div
															class="tw-w-full tw-flex tw-justify-between tw-items-center tw-mt-[12px]"
														>
															<!---->
															<div></div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																viewBox="0 0 16 16"
																fill="currentColor"
																data-qa="settings-header-close-button"
																class="base-icon-svg tw-block tw-cursor-pointer"
																aria-hidden="true"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M11.6569 10.2427L7.41422 6.00003L11.6569 1.75739C12.0479 1.36636 12.0472 0.733501 11.6569 0.343178C11.2665 -0.0471447 10.6337 -0.0478517 10.2426 0.343178L6 4.58582L1.75736 0.343178C1.36704 -0.0471446 0.734178 -0.0478517 0.343148 0.343178C-0.047882 0.734208 -0.0471752 1.36707 0.343148 1.75739L4.58579 6.00003L0.343148 10.2427C-0.047882 10.6337 -0.0471753 11.2666 0.343148 11.6569C0.733471 12.0472 1.36633 12.0479 1.75736 11.6569L6 7.41425L10.2426 11.6569C10.633 12.0472 11.2658 12.0479 11.6569 11.6569C12.0479 11.2659 12.0472 10.633 11.6569 10.2427Z"
																	fill="#1C2026"
																></path>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M11.6569 10.2427L7.41422 6.00003L11.6569 1.75739C12.0479 1.36636 12.0472 0.733501 11.6569 0.343178C11.2665 -0.0471447 10.6337 -0.0478517 10.2426 0.343178L6 4.58582L1.75736 0.343178C1.36704 -0.0471446 0.734178 -0.0478517 0.343148 0.343178C-0.047882 0.734208 -0.0471752 1.36707 0.343148 1.75739L4.58579 6.00003L0.343148 10.2427C-0.047882 10.6337 -0.0471753 11.2666 0.343148 11.6569C0.733471 12.0472 1.36633 12.0479 1.75736 11.6569L6 7.41425L10.2426 11.6569C10.633 12.0472 11.2658 12.0479 11.6569 11.6569C12.0479 11.2659 12.0472 10.633 11.6569 10.2427Z"
																	fill="#1C2026"
																></path>
															</svg>
														</div>
														<div
															class="tw-text-l tw-font-bold tw-leading-l tw-w-full"
														>
															Settings
														</div>
													</div>
													<div
														class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-[100%] tw-min-h-[100px] tw-border-x tw-border-y tw-border-n-75-smokey tw-bg-white tw-rounded-sm tw-p-[12px] tw-min-w-[160px]"
													>
														<div
															class="tw-flex tw-flex-col tw-justify-center tw-items-start tw-w-full"
														>
															<!---->
															<ul
																class="tw-flex tw-flex-col tw-justify-center tw-items-start tw-w-[99%] tw-gap-n"
															></ul>
														</div>
														<!----><!---->
														<ul
															class="tw-flex tw-flex-col tw-justify-center tw-items-start tw-w-full tw-gap-s"
														></ul>
													</div>
												</div>
											</div>
											<div
												class="tw-flex tw-flex-row tw-items-center tw-gap-s tw-cursor-pointer"
											>
												<div
													class="tw-flex tw-items-center tw-gap-s tw-rounded-l-[64px] tw-py-[3px] tw-px-s tw-pr-[10px] -tw-mr-[10px] tw-bg-dark tw-bg-opacity-20 tw-z-0"
												>
													<div
														data-qa-badge=""
														class="tw-relative"
													>
														<!----><svg
															xmlns="http://www.w3.org/2000/svg"
															width="28"
															height="28"
															viewBox="0 0 24 24"
															fill="#000000"
															data-qa=""
															class="base-icon-svg tw-block"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																clip-rule="evenodd"
																d="M17.9261 20.0557C16.2676 21.2778 14.2182 22 12 22C9.78184 22 7.73237 21.2778 6.07388 20.0557C6.52682 17.1906 9.00758 15 12 15C14.9924 15 17.4732 17.1906 17.9261 20.0557ZM19.6011 18.4983C18.9034 16.3773 17.3427 14.648 15.3344 13.7259C16.3567 12.8104 17 11.4803 17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10C7 11.4803 7.6433 12.8104 8.66559 13.7259C6.65733 14.648 5.09663 16.3773 4.39894 18.4983C2.90331 16.7505 2 14.4807 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.4807 21.0967 16.7505 19.6011 18.4983ZM19.9998 20.9446C22.4549 18.7473 24 15.5541 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 15.5541 1.54508 18.7473 4.00019 20.9446C4.00006 20.9631 4 20.9815 4 21H4.06253C6.17793 22.8671 8.95666 24 12 24C15.0433 24 17.8221 22.8671 19.9375 21H20C20 20.9815 19.9999 20.9631 19.9998 20.9446ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
																fill="white"
															></path>
														</svg>
													</div>
													<div
														class="tw-font-bold tw-text-white tw-mr-xs tw-whitespace-nowrap"
													>
														{{ money(totalBal) }}
													</div>
												</div>
												<button
													data-qa="deposit-button"
													class="tw-whitespace-nowrap tw-p-n tw-text-white tw-cursor-pointer tw-rounded-sm tw-uppercase tw-font-bold tw-text-xxs tw-leading-4 tw-text-center hover:tw-text-white tw-border-solid tw-border-2 tw-border-transparent tw- tw-bg-secondary hover:tw-bg-secondary-hover tw-z-10"
												>
													DEPOSIT
												</button>
											</div>
											<!---->
										</div>
									</aside>
									<div
										id="nav-menu-container"
										class="tw-hidden tw-justify-between tw-items-center tw-w-full lg:tw-flex lg:tw-order-1"
									>
										<ul
											data-qa="nav-menu"
											class="tw-flex tw-flex-col tw-m-0 tw-p-0 tw-font-regular lg:tw-flex-row tw-gap-m"
										>
											<li
												class="tw-relative tw-list-none tw-m-0 tw-flex tw-items-center after:tw-content-[&#39;&#39;] after:tw-w-[100%] after:tw-h-[4px] after:tw-rounded-t-xxs after:tw-absolute after:tw-bg-transparent after:tw-bottom-0 after:tw-bg-white"
											>
												<a
													class="tw-box-border tw-border-t-0 tw-border-x-0 tw-border-selected-navmenu-item tw-no-underline tw-text-sm tw-line-height-s tw-uppercase tw-whitespace-nowrap tw-transition-colors tw-h-[64px] tw-leading-s hover:tw-text-white/100 lg:hover:tw-bg-transparent tw-flex tw-items-center tw-text-center tw-text-white/100 tw-font-bold"
													data-qa="header-nav-menu-item-SPORTS"
													href="https://www.betano.ng/"
													><span
														data-qa-translate=""
														class="tw-whitespace-pre-wrap"
														>SPORTS</span
													></a
												><!---->
											</li>
											<li
												class="tw-relative tw-list-none tw-m-0 tw-flex tw-items-center after:tw-content-[&#39;&#39;] after:tw-w-[100%] after:tw-h-[4px] after:tw-rounded-t-xxs after:tw-absolute after:tw-bg-transparent after:tw-bottom-0"
											>
												<a
													class="tw-box-border tw-border-t-0 tw-border-x-0 tw-border-selected-navmenu-item tw-no-underline tw-text-sm tw-line-height-s tw-uppercase tw-whitespace-nowrap tw-transition-colors tw-h-[64px] tw-leading-s hover:tw-text-white/100 lg:hover:tw-bg-transparent tw-flex tw-items-center tw-text-center tw-text-white/80"
													data-qa="header-nav-menu-item-LIVE BETTING"
													href="https://www.betano.ng/live/"
													><span
														data-qa-translate=""
														class="tw-whitespace-pre-wrap"
														>LIVE BETTING</span
													></a
												><!---->
											</li>
											<li
												class="tw-relative tw-list-none tw-m-0 tw-flex tw-items-center after:tw-content-[&#39;&#39;] after:tw-w-[100%] after:tw-h-[4px] after:tw-rounded-t-xxs after:tw-absolute after:tw-bg-transparent after:tw-bottom-0"
											>
												<a
													class="tw-box-border tw-border-t-0 tw-border-x-0 tw-border-selected-navmenu-item tw-no-underline tw-text-sm tw-line-height-s tw-uppercase tw-whitespace-nowrap tw-transition-colors tw-h-[64px] tw-leading-s hover:tw-text-white/100 lg:hover:tw-bg-transparent tw-flex tw-items-center tw-text-center tw-text-white/80"
													data-qa="header-nav-menu-item-CASINO"
													href="https://www.betano.ng/casino/"
													><span
														data-qa-translate=""
														class="tw-whitespace-pre-wrap"
														>CASINO</span
													></a
												><!---->
											</li>
											<li
												class="tw-relative tw-list-none tw-m-0 tw-flex tw-items-center after:tw-content-[&#39;&#39;] after:tw-w-[100%] after:tw-h-[4px] after:tw-rounded-t-xxs after:tw-absolute after:tw-bg-transparent after:tw-bottom-0"
											>
												<a
													class="tw-box-border tw-border-t-0 tw-border-x-0 tw-border-selected-navmenu-item tw-no-underline tw-text-sm tw-line-height-s tw-uppercase tw-whitespace-nowrap tw-transition-colors tw-h-[64px] tw-leading-s hover:tw-text-white/100 lg:hover:tw-bg-transparent tw-flex tw-items-center tw-text-center tw-text-white/80"
													data-qa="header-nav-menu-item-LIVE CASINO"
													href="https://www.betano.ng/casino/live/"
													><span
														data-qa-translate=""
														class="tw-whitespace-pre-wrap"
														>LIVE CASINO</span
													></a
												><!---->
											</li>
											<li
												class="tw-relative tw-list-none tw-m-0 tw-flex tw-items-center after:tw-content-[&#39;&#39;] after:tw-w-[100%] after:tw-h-[4px] after:tw-rounded-t-xxs after:tw-absolute after:tw-bg-transparent after:tw-bottom-0"
											>
												<a
													class="tw-box-border tw-border-t-0 tw-border-x-0 tw-border-selected-navmenu-item tw-no-underline tw-text-sm tw-line-height-s tw-uppercase tw-whitespace-nowrap tw-transition-colors tw-h-[64px] tw-leading-s hover:tw-text-white/100 lg:hover:tw-bg-transparent tw-flex tw-items-center tw-text-center tw-text-white/80"
													data-qa="header-nav-menu-item-VIRTUALS"
													href="https://www.betano.ng/virtuals/"
													><span
														data-qa-translate=""
														class="tw-whitespace-pre-wrap"
														>VIRTUALS</span
													></a
												><!---->
											</li>
											<li
												class="tw-relative tw-list-none tw-m-0 tw-flex tw-items-center after:tw-content-[&#39;&#39;] after:tw-w-[100%] after:tw-h-[4px] after:tw-rounded-t-xxs after:tw-absolute after:tw-bg-transparent after:tw-bottom-0"
											>
												<a
													class="tw-box-border tw-border-t-0 tw-border-x-0 tw-border-selected-navmenu-item tw-no-underline tw-text-sm tw-line-height-s tw-uppercase tw-whitespace-nowrap tw-transition-colors tw-h-[64px] tw-leading-s hover:tw-text-white/100 lg:hover:tw-bg-transparent tw-flex tw-items-center tw-text-center tw-text-white/80"
													data-qa="header-nav-menu-item-FANTASY"
													href="https://www.betano.ng/fantasy/"
													><span
														data-qa-translate=""
														class="tw-whitespace-pre-wrap"
														>FANTASY</span
													></a
												><!---->
											</li>
										</ul>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>

			<div
				id="iframe-modal"
				uk-modal="esc-close:false;bg-close:false;"
				class="uk-iframe-modal uk-modal"
				bis_skin_checked="1"
			>
				<div
					class="uk-modal-dialog uk-modal-body iframe-modal"
					style=""
					bis_skin_checked="1"
				></div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	*,
	:before,
	:after {
		box-sizing: border-box;
		border-width: 0;
		border-style: solid;
		border-color: #e5e7eb;
	}
	:before,
	:after {
		--tw-content: "";
	}
	html {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
			Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
			"Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol,
			"Noto Color Emoji";
		font-feature-settings: normal;
		font-variation-settings: normal;
	}
	body {
		margin: 0;
		line-height: inherit;
	}
	hr {
		height: 0;
		color: inherit;
		border-top-width: 1px;
	}
	abbr:where([title]) {
		-webkit-text-decoration: underline dotted;
		text-decoration: underline dotted;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: inherit;
	}
	a {
		color: inherit;
		text-decoration: inherit;
	}
	b,
	strong {
		font-weight: bolder;
	}
	code,
	kbd,
	samp,
	pre {
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
			Liberation Mono, Courier New, monospace;
		font-size: 1em;
	}
	small {
		font-size: 80%;
	}
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}
	sub {
		bottom: -0.25em;
	}
	sup {
		top: -0.5em;
	}
	table {
		text-indent: 0;
		border-color: inherit;
		border-collapse: collapse;
	}
	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		font-weight: inherit;
		line-height: inherit;
		color: inherit;
		margin: 0;
		padding: 0;
	}
	button,
	select {
		text-transform: none;
	}
	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		-webkit-appearance: button;
		background-color: transparent;
		background-image: none;
	}
	:-moz-focusring {
		outline: auto;
	}
	:-moz-ui-invalid {
		box-shadow: none;
	}
	progress {
		vertical-align: baseline;
	}
	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		height: auto;
	}
	[type="search"] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}
	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}
	summary {
		display: list-item;
	}
	blockquote,
	dl,
	dd,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	hr,
	figure,
	p,
	pre {
		margin: 0;
	}
	fieldset {
		margin: 0;
		padding: 0;
	}
	legend {
		padding: 0;
	}
	ol,
	ul,
	menu {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	textarea {
		resize: vertical;
	}
	input::-moz-placeholder,
	textarea::-moz-placeholder {
		opacity: 1;
		color: #9ca3af;
	}
	input::placeholder,
	textarea::placeholder {
		opacity: 1;
		color: #9ca3af;
	}
	button,
	[role="button"] {
		cursor: pointer;
	}
	:disabled {
		cursor: default;
	}
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}
	img,
	video {
		max-width: 100%;
		height: auto;
	}
	[hidden] {
		display: none;
	}
	html {
		--version-banner-height: 0px;
		--scroll-bar-width: 8px;
	}
	html,
	body,
	div,
	span,
	header,
	section,
	button {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
		box-sizing: border-box;
	}
	*,
	:before,
	:after {
		--tw-border-spacing-x: 0;
		--tw-border-spacing-y: 0;
		--tw-translate-x: 0;
		--tw-translate-y: 0;
		--tw-rotate: 0;
		--tw-skew-x: 0;
		--tw-skew-y: 0;
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		--tw-pan-x: ;
		--tw-pan-y: ;
		--tw-pinch-zoom: ;
		--tw-scroll-snap-strictness: proximity;
		--tw-gradient-from-position: ;
		--tw-gradient-via-position: ;
		--tw-gradient-to-position: ;
		--tw-ordinal: ;
		--tw-slashed-zero: ;
		--tw-numeric-figure: ;
		--tw-numeric-spacing: ;
		--tw-numeric-fraction: ;
		--tw-ring-inset: ;
		--tw-ring-offset-width: 0px;
		--tw-ring-offset-color: #fff;
		--tw-ring-color: rgb(59 130 246 / 0.5);
		--tw-ring-offset-shadow: 0 0 #0000;
		--tw-ring-shadow: 0 0 #0000;
		--tw-shadow: 0 0 #0000;
		--tw-shadow-colored: 0 0 #0000;
		--tw-blur: ;
		--tw-brightness: ;
		--tw-contrast: ;
		--tw-grayscale: ;
		--tw-hue-rotate: ;
		--tw-invert: ;
		--tw-saturate: ;
		--tw-sepia: ;
		--tw-drop-shadow: ;
		--tw-backdrop-blur: ;
		--tw-backdrop-brightness: ;
		--tw-backdrop-contrast: ;
		--tw-backdrop-grayscale: ;
		--tw-backdrop-hue-rotate: ;
		--tw-backdrop-invert: ;
		--tw-backdrop-opacity: ;
		--tw-backdrop-saturate: ;
		--tw-backdrop-sepia: ;
	}
	::backdrop {
		--tw-border-spacing-x: 0;
		--tw-border-spacing-y: 0;
		--tw-translate-x: 0;
		--tw-translate-y: 0;
		--tw-rotate: 0;
		--tw-skew-x: 0;
		--tw-skew-y: 0;
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		--tw-pan-x: ;
		--tw-pan-y: ;
		--tw-pinch-zoom: ;
		--tw-scroll-snap-strictness: proximity;
		--tw-gradient-from-position: ;
		--tw-gradient-via-position: ;
		--tw-gradient-to-position: ;
		--tw-ordinal: ;
		--tw-slashed-zero: ;
		--tw-numeric-figure: ;
		--tw-numeric-spacing: ;
		--tw-numeric-fraction: ;
		--tw-ring-inset: ;
		--tw-ring-offset-width: 0px;
		--tw-ring-offset-color: #fff;
		--tw-ring-color: rgb(59 130 246 / 0.5);
		--tw-ring-offset-shadow: 0 0 #0000;
		--tw-ring-shadow: 0 0 #0000;
		--tw-shadow: 0 0 #0000;
		--tw-shadow-colored: 0 0 #0000;
		--tw-blur: ;
		--tw-brightness: ;
		--tw-contrast: ;
		--tw-grayscale: ;
		--tw-hue-rotate: ;
		--tw-invert: ;
		--tw-saturate: ;
		--tw-sepia: ;
		--tw-drop-shadow: ;
		--tw-backdrop-blur: ;
		--tw-backdrop-brightness: ;
		--tw-backdrop-contrast: ;
		--tw-backdrop-grayscale: ;
		--tw-backdrop-hue-rotate: ;
		--tw-backdrop-invert: ;
		--tw-backdrop-opacity: ;
		--tw-backdrop-saturate: ;
		--tw-backdrop-sepia: ;
	}
	.tw-visible {
		visibility: visible;
	}
	.tw-fixed {
		position: fixed;
	}
	.tw-absolute {
		position: absolute;
	}
	.tw-relative {
		position: relative;
	}
	.tw-sticky {
		position: sticky;
	}
	.-tw-right-1\/2 {
		right: -50%;
	}
	.-tw-top-1\/3 {
		top: -33.333333%;
	}
	.-tw-top-xs {
		top: -2px;
	}
	.tw-bottom-0 {
		bottom: 0px;
	}
	.tw-bottom-full {
		bottom: 100%;
	}
	.tw-left-0 {
		left: 0px;
	}
	.tw-right-0,
	.tw-right-\[0px\] {
		right: 0px;
	}
	.tw-top-0 {
		top: 0px;
	}
	.tw-top-\[-2px\] {
		top: -2px;
	}
	.tw-top-\[6px\] {
		top: 6px;
	}
	.tw-top-full {
		top: 100%;
	}
	.tw-top-xs {
		top: 2px;
	}
	.tw-z-0 {
		z-index: 0;
	}
	.tw-z-10 {
		z-index: 10;
	}
	.tw-z-\[900\] {
		z-index: 900;
	}
	.tw-m-0 {
		margin: 0;
	}
	.tw-m-n {
		margin: 8px;
	}
	.tw-mx-0 {
		margin-left: 0;
		margin-right: 0;
	}
	.tw-my-l {
		margin-top: 24px;
		margin-bottom: 24px;
	}
	.tw-my-n {
		margin-top: 8px;
		margin-bottom: 8px;
	}
	.tw-my-s {
		margin-top: 4px;
		margin-bottom: 4px;
	}
	.tw-my-xs {
		margin-top: 2px;
		margin-bottom: 2px;
	}
	.-tw-mr-\[10px\] {
		margin-right: -10px;
	}
	.tw-mb-m {
		margin-bottom: 16px;
	}
	.tw-mb-n {
		margin-bottom: 8px;
	}
	.tw-ml-\[4px\] {
		margin-left: 4px;
	}
	.tw-ml-n {
		margin-left: 8px;
	}
	.tw-ml-s {
		margin-left: 4px;
	}
	.tw-ml-xs {
		margin-left: 2px;
	}
	.tw-mr-m {
		margin-right: 16px;
	}
	.tw-mr-n {
		margin-right: 8px;
	}
	.tw-mr-s {
		margin-right: 4px;
	}
	.tw-mr-xs {
		margin-right: 2px;
	}
	.tw-mt-0 {
		margin-top: 0;
	}
	.tw-mt-2 {
		margin-top: 0.5rem;
	}
	.tw-mt-5 {
		margin-top: 1.25rem;
	}
	.tw-mt-\[12px\] {
		margin-top: 12px;
	}
	.tw-mt-m {
		margin-top: 16px;
	}
	.tw-mt-n {
		margin-top: 8px;
	}
	.tw-mt-xs {
		margin-top: 2px;
	}
	.tw-box-border {
		box-sizing: border-box;
	}
	.tw-line-clamp-1 {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.tw-block {
		display: block;
	}
	.tw-inline-block {
		display: inline-block;
	}
	.tw-flex {
		display: flex;
	}
	.tw-hidden {
		display: none;
	}
	.tw-h-20 {
		height: 5rem;
	}
	.tw-h-7 {
		height: 1.75rem;
	}
	.tw-h-\[18px\] {
		height: 18px;
	}
	.tw-h-\[24px\] {
		height: 24px;
	}
	.tw-h-\[2px\] {
		height: 2px;
	}
	.tw-h-\[44px\] {
		height: 44px;
	}
	.tw-h-\[48px\] {
		height: 48px;
	}
	.tw-h-\[4px\] {
		height: 4px;
	}
	.tw-h-\[64px\] {
		height: 64px;
	}
	.tw-h-auto {
		height: auto;
	}
	.tw-h-n {
		height: 8px;
	}
	.tw-h-s {
		height: 4px;
	}
	.tw-h-xl {
		height: 32px;
	}
	.tw-h-xxl {
		height: 40px;
	}
	.tw-max-h-\[84vh\] {
		max-height: 84vh;
	}
	.tw-max-h-\[calc\(100vh-112px\)\] {
		max-height: calc(100vh - 112px);
	}
	.tw-min-h-\[100px\] {
		min-height: 100px;
	}
	.tw-min-h-\[104px\] {
		min-height: 104px;
	}
	.tw-min-h-\[500px\] {
		min-height: 500px;
	}
	.tw-min-h-\[56px\] {
		min-height: 56px;
	}
	.tw-min-h-\[auto\] {
		min-height: auto;
	}
	.tw-w-7 {
		width: 1.75rem;
	}
	.tw-w-\[100\%\] {
		width: 100%;
	}
	.tw-w-\[120px\] {
		width: 120px;
	}
	.tw-w-\[18px\] {
		width: 18px;
	}
	.tw-w-\[24px\] {
		width: 24px;
	}
	.tw-w-\[44px\] {
		width: 44px;
	}
	.tw-w-\[95\%\] {
		width: 95%;
	}
	.tw-w-\[99\%\] {
		width: 99%;
	}
	.tw-w-\[calc\(100\%-16px\)\] {
		width: calc(100% - 16px);
	}
	.tw-w-full {
		width: 100%;
	}
	.tw-w-n {
		width: 8px;
	}
	.tw-w-px {
		width: 1px;
	}
	.tw-min-w-\[160px\] {
		min-width: 160px;
	}
	.tw-min-w-fit {
		min-width: -moz-fit-content;
		min-width: fit-content;
	}
	.tw-max-w-\[164px\] {
		max-width: 164px;
	}
	.tw-max-w-\[initial\] {
		max-width: initial;
	}
	.tw-flex-1 {
		flex: 1 1 0%;
	}
	.tw-flex-\[0\.12\] {
		flex: 0.12;
	}
	.tw-flex-\[0\.88\] {
		flex: 0.88;
	}
	.tw-shrink {
		flex-shrink: 1;
	}
	.tw-flex-grow,
	.tw-grow {
		flex-grow: 1;
	}
	.tw-grow-0 {
		flex-grow: 0;
	}
	.tw-basis-auto {
		flex-basis: auto;
	}
	.tw-translate-x-0 {
		--tw-translate-x: 0px;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y))
			rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
			skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
	.tw-translate-x-full {
		--tw-translate-x: 100%;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y))
			rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
			skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
	.tw-transform {
		transform: translate(var(--tw-translate-x), var(--tw-translate-y))
			rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
			skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
	.tw-cursor-auto {
		cursor: auto;
	}
	.tw-cursor-pointer {
		cursor: pointer;
	}
	.tw-select-none {
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
	}
	.tw-list-none {
		list-style-type: none;
	}
	.tw-flex-row {
		flex-direction: row;
	}
	.tw-flex-col {
		flex-direction: column;
	}
	.tw-flex-wrap {
		flex-wrap: wrap;
	}
	.tw-flex-nowrap {
		flex-wrap: nowrap;
	}
	.tw-items-start {
		align-items: flex-start;
	}
	.tw-items-center {
		align-items: center;
	}
	.tw-justify-start {
		justify-content: flex-start;
	}
	.tw-justify-end {
		justify-content: flex-end;
	}
	.tw-justify-center {
		justify-content: center;
	}
	.tw-justify-between {
		justify-content: space-between;
	}
	.tw-gap-5 {
		gap: 1.25rem;
	}
	.tw-gap-\[12px\] {
		gap: 12px;
	}
	.tw-gap-m {
		gap: 16px;
	}
	.tw-gap-n {
		gap: 8px;
	}
	.tw-gap-s {
		gap: 4px;
	}
	.tw-gap-xxl {
		gap: 40px;
	}
	.tw-gap-x-n {
		-moz-column-gap: 8px;
		column-gap: 8px;
	}
	.tw-self-start {
		align-self: flex-start;
	}
	.tw-self-end {
		align-self: flex-end;
	}
	.tw-overflow-hidden {
		overflow: hidden;
	}
	.tw-overflow-y-auto {
		overflow-y: auto;
	}
	.tw-truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.tw-whitespace-nowrap {
		white-space: nowrap;
	}
	.tw-whitespace-pre-wrap {
		white-space: pre-wrap;
	}
	.tw-rounded-\[24px\] {
		border-radius: 24px;
	}
	.tw-rounded-\[40px\] {
		border-radius: 40px;
	}
	.tw-rounded-\[4px\] {
		border-radius: 4px;
	}
	.tw-rounded-full {
		border-radius: 9999px;
	}
	.tw-rounded-m {
		border-radius: 16px;
	}
	.tw-rounded-pill {
		border-radius: 64px;
	}
	.tw-rounded-sm {
		border-radius: 8px;
	}
	.tw-rounded-l-\[64px\] {
		border-top-left-radius: 64px;
		border-bottom-left-radius: 64px;
	}
	.tw-rounded-s {
		border-start-start-radius: 0.25rem;
		border-end-start-radius: 0.25rem;
	}
	.tw-border {
		border-width: 1px;
	}
	.tw-border-2,
	.tw-border-\[2px\] {
		border-width: 2px;
	}
	.tw-border-x {
		border-left-width: 1px;
		border-right-width: 1px;
	}
	.tw-border-x-0 {
		border-left-width: 0px;
		border-right-width: 0px;
	}
	.tw-border-y {
		border-top-width: 1px;
		border-bottom-width: 1px;
	}
	.tw-border-t-0 {
		border-top-width: 0px;
	}
	.tw-border-solid {
		border-style: solid;
	}
	.tw-border-gray-200 {
		--tw-border-opacity: 1;
		border-color: rgb(229 231 235 / var(--tw-border-opacity));
	}
	.tw-border-n-13-steel {
		--tw-border-opacity: 1;
		border-color: rgb(28 32 38 / var(--tw-border-opacity));
	}
	.tw-border-n-75-smokey {
		--tw-border-opacity: 1;
		border-color: rgb(182 188 198 / var(--tw-border-opacity));
	}
	.tw-border-n-90-dark-snow {
		--tw-border-opacity: 1;
		border-color: rgb(224 228 234 / var(--tw-border-opacity));
	}
	.tw-border-n-94-dirty-snow {
		--tw-border-opacity: 1;
		border-color: rgb(236 239 241 / var(--tw-border-opacity));
	}
	.tw-border-selected-navmenu-item {
		border-color: var(--selected-navmenu-item-border-color, #ffffff);
	}
	.tw-border-transparent {
		border-color: transparent;
	}
	.tw-border-white {
		--tw-border-opacity: 1;
		border-color: rgb(255 255 255 / var(--tw-border-opacity));
	}
	.tw-border-zeus-base {
		--tw-border-opacity: 1;
		border-color: rgb(66 194 86 / var(--tw-border-opacity));
	}
	.tw-bg-\[green\] {
		--tw-bg-opacity: 1;
		background-color: rgb(0 128 0 / var(--tw-bg-opacity));
	}
	.tw-bg-afrodite {
		--tw-bg-opacity: 1;
		background-color: rgb(243 209 19 / var(--tw-bg-opacity));
	}
	.tw-bg-betano-primary {
		--tw-bg-opacity: 1;
		background-color: rgb(255 102 0 / var(--tw-bg-opacity));
	}
	.tw-bg-collapsed-navmenu-button\/30 {
		background-color: rgba(
			var(--collapsed-navmenu-button-bg, 70 70 70) / 0.3
		);
	}
	.tw-bg-dark {
		--tw-bg-opacity: 1;
		background-color: rgb(0 0 0 / var(--tw-bg-opacity));
	}
	.tw-bg-header-main {
		background-color: var(
			--header-main-bg,
			var(--theme-brand-color-primary)
		);
	}
	.tw-bg-hermes {
		--tw-bg-opacity: 1;
		background-color: rgb(91 46 255 / var(--tw-bg-opacity));
	}
	.tw-bg-jupiter {
		--tw-bg-opacity: 1;
		background-color: rgb(9 150 160 / var(--tw-bg-opacity));
	}
	.tw-bg-kyc-bg {
		background-color: var(--kyc-banner-color);
	}
	.tw-bg-n-13-steel {
		--tw-bg-opacity: 1;
		background-color: rgb(28 32 38 / var(--tw-bg-opacity));
	}
	.tw-bg-n-17-black-pearl {
		--tw-bg-opacity: 1;
		background-color: rgb(35 43 54 / var(--tw-bg-opacity));
	}
	.tw-bg-n-22-licorice {
		--tw-bg-opacity: 1;
		background-color: rgb(45 55 69 / var(--tw-bg-opacity));
	}
	.tw-bg-n-28-cloud-burst {
		--tw-bg-opacity: 1;
		background-color: rgb(55 68 86 / var(--tw-bg-opacity));
	}
	.tw-bg-n-90-dark-snow {
		--tw-bg-opacity: 1;
		background-color: rgb(224 228 234 / var(--tw-bg-opacity));
	}
	.tw-bg-n-94-dirty-snow {
		--tw-bg-opacity: 1;
		background-color: rgb(236 239 241 / var(--tw-bg-opacity));
	}
	.tw-bg-primary {
		background-color: var(--theme-brand-color-primary);
	}
	.tw-bg-primary-hover {
		background-color: var(--theme-brand-color-primary-hover);
	}
	.tw-bg-red-500 {
		--tw-bg-opacity: 1;
		background-color: rgb(239 68 68 / var(--tw-bg-opacity));
	}
	.tw-bg-red-900 {
		--tw-bg-opacity: 1;
		background-color: rgb(127 29 29 / var(--tw-bg-opacity));
	}
	.tw-bg-secondary {
		background-color: var(--theme-brand-color-secondary);
	}
	.tw-bg-secondary-hover {
		background-color: var(--theme-brand-color-secondary-hover);
	}
	.tw-bg-slate-200 {
		--tw-bg-opacity: 1;
		background-color: rgb(226 232 240 / var(--tw-bg-opacity));
	}
	.tw-bg-slate-700 {
		--tw-bg-opacity: 1;
		background-color: rgb(51 65 85 / var(--tw-bg-opacity));
	}
	.tw-bg-stoiximan-primary {
		--tw-bg-opacity: 1;
		background-color: rgb(0 102 204 / var(--tw-bg-opacity));
	}
	.tw-bg-transparent {
		background-color: transparent;
	}
	.tw-bg-uranus {
		--tw-bg-opacity: 1;
		background-color: rgb(144 184 71 / var(--tw-bg-opacity));
	}
	.tw-bg-white,
	.tw-bg-white-snow {
		--tw-bg-opacity: 1;
		background-color: rgb(255 255 255 / var(--tw-bg-opacity));
	}
	.tw-bg-opacity-20 {
		--tw-bg-opacity: 0.2;
	}
	.tw-bg-contain {
		background-size: contain;
	}
	.tw-bg-right-top {
		background-position: right top;
	}
	.tw-bg-no-repeat {
		background-repeat: no-repeat;
	}
	.tw-p-0 {
		padding: 0;
	}
	.tw-p-\[10px\] {
		padding: 10px;
	}
	.tw-p-\[12px\] {
		padding: 12px;
	}
	.tw-p-m {
		padding: 16px;
	}
	.tw-p-n {
		padding: 8px;
	}
	.tw-p-px {
		padding: 1px;
	}
	.tw-px-\[12px\] {
		padding-left: 12px;
		padding-right: 12px;
	}
	.tw-px-\[6px\] {
		padding-left: 6px;
		padding-right: 6px;
	}
	.tw-px-m {
		padding-left: 16px;
		padding-right: 16px;
	}
	.tw-px-n {
		padding-left: 8px;
		padding-right: 8px;
	}
	.tw-px-s {
		padding-left: 4px;
		padding-right: 4px;
	}
	.tw-py-\[3px\] {
		padding-top: 3px;
		padding-bottom: 3px;
	}
	.tw-py-n {
		padding-top: 8px;
		padding-bottom: 8px;
	}
	.tw-py-px {
		padding-top: 1px;
		padding-bottom: 1px;
	}
	.tw-py-s {
		padding-top: 4px;
		padding-bottom: 4px;
	}
	.tw-py-xs {
		padding-top: 2px;
		padding-bottom: 2px;
	}
	.tw-pb-n {
		padding-bottom: 8px;
	}
	.tw-pl-n {
		padding-left: 8px;
	}
	.tw-pr-\[10px\] {
		padding-right: 10px;
	}
	.tw-pr-m {
		padding-right: 16px;
	}
	.tw-pr-s {
		padding-right: 4px;
	}
	.tw-pt-xs {
		padding-top: 2px;
	}
	.tw-text-center {
		text-align: center;
	}
	.tw-text-right {
		text-align: right;
	}
	.tw-text-\[11px\] {
		font-size: 11px;
	}
	.tw-text-\[12px\] {
		font-size: 12px;
	}
	.tw-text-\[9px\] {
		font-size: 9px;
	}
	.tw-text-l {
		font-size: 1.4285714285714286rem;
	}
	.tw-text-m {
		font-size: 1.1428571428571428rem;
	}
	.tw-text-s {
		font-size: 1rem;
	}
	.tw-text-sm {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	.tw-text-xs {
		font-size: 0.8571428571428571rem;
	}
	.tw-text-xxs {
		font-size: 0.7857142857142857rem;
	}
	.tw-text-xxxs {
		font-size: 0.7142857142857143rem;
	}
	.tw-font-bold {
		font-weight: 700;
	}
	.tw-font-regular {
		font-weight: 400;
	}
	.tw-uppercase {
		text-transform: uppercase;
	}
	.tw-leading-4 {
		line-height: 1rem;
	}
	.tw-leading-5 {
		line-height: 1.25rem;
	}
	.tw-leading-l {
		line-height: 24px;
	}
	.tw-leading-s {
		line-height: 16px;
	}
	.tw-leading-xs {
		line-height: 12px;
	}
	.tw-text-\[12px\`\] {
		color: 12px;
	}
	.tw-text-calendar-icon-fill-color {
		color: #0066cc, #1c6848;
	}
	.tw-text-kyc-bg {
		color: var(--kyc-banner-color);
	}
	.tw-text-moon-base {
		--tw-text-opacity: 1;
		color: rgb(37 114 228 / var(--tw-text-opacity));
	}
	.tw-text-n-13-steel {
		--tw-text-opacity: 1;
		color: rgb(28 32 38 / var(--tw-text-opacity));
	}
	.tw-text-n-17-black-pearl {
		--tw-text-opacity: 1;
		color: rgb(35 43 54 / var(--tw-text-opacity));
	}
	.tw-text-n-48-slate {
		--tw-text-opacity: 1;
		color: rgb(105 119 139 / var(--tw-text-opacity));
	}
	.tw-text-secondary {
		color: var(--theme-brand-color-secondary);
	}
	.tw-text-white,
	.tw-text-white-snow {
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity));
	}
	.tw-text-white\/100 {
		color: #fff;
	}
	.tw-text-white\/80,
	.tw-text-white\/\[0\.8\] {
		color: #fffc;
	}
	.tw-no-underline {
		text-decoration-line: none;
	}
	.tw-opacity-0 {
		opacity: 0;
	}
	.tw-opacity-full {
		opacity: 1;
	}
	.tw-shadow-\[0px_20px_32px_0px_\#30333666\] {
		--tw-shadow: 0px 20px 32px 0px #30333666;
		--tw-shadow-colored: 0px 20px 32px 0px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
			var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
	}
	.tw-shadow-dark-positive-z2 {
		--tw-shadow: 0px 0px 1px rgba(32, 38, 62, 0.08),
			0px 4px 4px rgba(18, 18, 20, 0.4);
		--tw-shadow-colored: 0px 0px 1px var(--tw-shadow-color),
			0px 4px 4px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
			var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
	}
	.tw-shadow-light-positive-z5 {
		--tw-shadow: 0px 0px 8px rgba(35, 43, 54, 0.06),
			0px 32px 40px -2px rgba(35, 43, 54, 0.1);
		--tw-shadow-colored: 0px 0px 8px var(--tw-shadow-color),
			0px 32px 40px -2px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
			var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
	}
	.tw-blur-\[3px\] {
		--tw-blur: blur(3px);
		filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
			var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
			var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
	}
	.tw-transition-\[\.1s\] {
		transition-property: 0.1s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
	}
	.tw-transition-all {
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
	}
	.tw-transition-colors {
		transition-property: color, background-color, border-color,
			text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
	}
	.tw-duration-200 {
		transition-duration: 0.2s;
	}
	.tw-duration-500 {
		transition-duration: 0.5s;
	}
	.tw-ease-in-out {
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
	.base-icon-svg {
		height: unset;
		max-width: unset;
	}
	.base-icon-svg[fill="currentColor"] :deep g,
	.base-icon-svg[fill="currentColor"] :deep path,
	.base-icon-svg[fill="currentColor"] :deep rect,
	.base-icon-svg[fill="currentColor"] :deep circle {
		fill: currentColor;
	}
	.fade-bounce-enter-active {
		animation: fade-bounce-in 0.3s;
	}
	.fade-bounce-leave-active {
		animation: fade-bounce-in 0.3s reverse;
	}
	@keyframes fade-bounce-in {
		0% {
			opacity: 0;
			transform: scale(0.7);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
	@keyframes rotate-180-0 {
		0% {
			transform: rotate(0);
		}
		50% {
			transform: rotate(-180deg);
		}
		to {
			transform: rotate(0);
		}
	}
	.imitateLoading {
		animation: rotate-180-0 2s ease-in-out;
	}
	.tw-scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.tw-scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.fade-animation {
		animation: fade-anim 0.3s;
	}
	@keyframes fade-anim {
		0% {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.after\:tw-absolute:after {
		content: var(--tw-content);
		position: absolute;
	}
	.after\:tw-bottom-0:after {
		content: var(--tw-content);
		bottom: 0px;
	}
	.after\:tw-bottom-full:after {
		content: var(--tw-content);
		bottom: 100%;
	}
	.after\:tw-left-1\/2:after {
		content: var(--tw-content);
		left: 50%;
	}
	.after\:tw-top-full:after {
		content: var(--tw-content);
		top: 100%;
	}
	.after\:tw-h-\[4px\]:after {
		content: var(--tw-content);
		height: 4px;
	}
	.after\:tw-w-\[100\%\]:after {
		content: var(--tw-content);
		width: 100%;
	}
	.after\:tw-rounded-t-xxs:after {
		content: var(--tw-content);
		border-top-left-radius: 2px;
		border-top-right-radius: 2px;
	}
	.after\:tw-border-\[5px\]:after {
		content: var(--tw-content);
		border-width: 5px;
	}
	.after\:tw-border-solid:after {
		content: var(--tw-content);
		border-style: solid;
	}
	.after\:tw-border-b-n-28-cloud-burst:after {
		content: var(--tw-content);
		--tw-border-opacity: 1;
		border-bottom-color: rgb(55 68 86 / var(--tw-border-opacity));
	}
	.after\:tw-border-b-transparent:after {
		content: var(--tw-content);
		border-bottom-color: transparent;
	}
	.after\:tw-border-l-transparent:after {
		content: var(--tw-content);
		border-left-color: transparent;
	}
	.after\:tw-border-r-transparent:after {
		content: var(--tw-content);
		border-right-color: transparent;
	}
	.after\:tw-border-t-n-28-cloud-burst:after {
		content: var(--tw-content);
		--tw-border-opacity: 1;
		border-top-color: rgb(55 68 86 / var(--tw-border-opacity));
	}
	.after\:tw-border-t-transparent:after {
		content: var(--tw-content);
		border-top-color: transparent;
	}
	.after\:tw-bg-transparent:after {
		content: var(--tw-content);
		background-color: transparent;
	}
	.after\:tw-bg-white:after {
		content: var(--tw-content);
		--tw-bg-opacity: 1;
		background-color: rgb(255 255 255 / var(--tw-bg-opacity));
	}
	.after\:tw-content-\[\'\'\]:after {
		--tw-content: "";
		content: var(--tw-content);
	}
	.first\:tw-ml-0:first-child {
		margin-left: 0;
	}
	.last\:tw-mr-0:last-child {
		margin-right: 0;
	}
	.hover\:tw-border-white:hover {
		--tw-border-opacity: 1;
		border-color: rgb(255 255 255 / var(--tw-border-opacity));
	}
	.hover\:tw-bg-n-94-dirty-snow:hover {
		--tw-bg-opacity: 1;
		background-color: rgb(236 239 241 / var(--tw-bg-opacity));
	}
	.hover\:tw-bg-primary-hover:hover {
		background-color: var(--theme-brand-color-primary-hover);
	}
	.hover\:tw-bg-secondary-hover:hover {
		background-color: var(--theme-brand-color-secondary-hover);
	}
	.hover\:tw-text-white:hover {
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity));
	}
	.hover\:tw-text-white\/100:hover {
		color: #fff;
	}
	@media (min-width: 825px) {
		.md\:tw-left-auto {
			left: auto;
		}
		.md\:tw-right-0 {
			right: 0px;
		}
		.md\:tw-mr-m {
			margin-right: 16px;
		}
		.md\:tw-mt-n {
			margin-top: 8px;
		}
		.md\:tw-flex {
			display: flex;
		}
		.md\:tw-hidden {
			display: none;
		}
		.md\:tw-min-h-\[64px\] {
			min-height: 64px;
		}
		.md\:tw-w-\[340px\] {
			width: 340px;
		}
		.md\:tw-min-w-\[125px\] {
			min-width: 125px;
		}
		.md\:tw-items-center {
			align-items: center;
		}
	}
	@media (min-width: 1280px) {
		.lg\:tw-order-1 {
			order: 1;
		}
		.lg\:tw-order-2 {
			order: 2;
		}
		.lg\:tw-ml-s {
			margin-left: 4px;
		}
		.lg\:tw-flex {
			display: flex;
		}
		.lg\:tw-hidden {
			display: none;
		}
		.lg\:tw-flex-row {
			flex-direction: row;
		}
		.lg\:hover\:tw-bg-transparent:hover {
			background-color: transparent;
		}
	}
</style>
