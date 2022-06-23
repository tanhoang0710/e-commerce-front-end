module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				spinner: {
					from: { transform: "translateY(-50%)", rotate: 0 },
					to: { transform: "translateY(-50%)", rotate: "360deg" },
				},
			},
			animation: {
				spinner: "spinner .8s ease-in-out infinite",
			},
		},
	},
	variants: {
		extend: {
			display: ["group-hover"],
			margin: ["group-hover"],
			visibility: ["group-hover"],
		},
	},
	plugins: [],
};
