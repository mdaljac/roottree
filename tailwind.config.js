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
		fontFamily: {
			mono: ["'Anonymous Pro'"],
		},

		fontWeight: {
			normal: "400",
			bold: "700",
		},

		container: {
			center: true,
			padding: "2rem",
		},

		extend: {
			colors: {
				primary: "#3BBD9E",
				secondary: "blue",
			},
			screens: {
				fhd: "1920px",
				"fhd+": "1921px",
				wide: "2560px",
			},
		},
	},
};
