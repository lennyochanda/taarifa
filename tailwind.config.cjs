// tailwind.config.cjs

module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.css'],
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
