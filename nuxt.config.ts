// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				// <link rel="stylesheet" href="https://myawesome-lib.css">
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap",
				},
			],
		},
	},
	devtools: { enabled: false },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/device",
		"@nuxt/image",
		"@hypernym/nuxt-gsap",
	],
	tailwindcss: {
		cssPath: "~/assets/css/main.css",
	},
	runtimeConfig: {
		apiSecret: "", // can be overridden by NUXT_API_SECRET environment variable
		public: {
			apiBase: "", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
		},
	},
	gsap: {
		extraPlugins: {
			scrollTrigger: true,
		},
	},
});
