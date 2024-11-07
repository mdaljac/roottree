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
			sans: ["Outfit"],
		},

		fontWeight: {
			normal: "400",
			bold: "700",
		},

		container: {
			center: true,
			padding: {
				DEFAULT: "2rem",
				fhd: "8rem",
			},
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
