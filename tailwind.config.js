import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},

		extend: {
			colors: {
				primary: "green",
				secondary: "blue",
			},
		},
	},
};
