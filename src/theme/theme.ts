interface Itheme {
	font: {
		size: string;
		weight300: string;
		weight400: string;
		weight600: string;
		family: string;
	};
	color: {
		primarySoftBlue: string;
		primaryCyan: string;
		primaryCyanFullOp: string;
		neutralDarkBlueMainBg: string;
		neutralDarkBlueCardBg: string;
		neutralDarkBlueLine: string;
		darkGrey: string;
	};
	screenSize: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
}

const theme: Function = (): Itheme => {
	const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
	const cTheme = {
		font: {
			size: '1.1rem;',
			weight300: '300;',
			weight400: '400;',
			weight600: '600;',
			family: "'Outfit', sans-serif;",
		},
		color: {
			primarySoftBlue: '',
			primaryCyan: '',
			primaryCyanFullOp: '',
			neutralDarkBlueMainBg: '',
			neutralDarkBlueCardBg: '',
			neutralDarkBlueLine: '',
			darkGrey: '',
		},
		screenSize: {
			mobile: '610px',
			tablet: '611px',
			desktop: '1007px',
		},
	};

	if (darkThemeMq.matches) {
		// Theme set to dark.
		cTheme.color = {
			primarySoftBlue: 'hsl(215, 51%, 70%);',
			primaryCyan: 'hsla(178, 100%, 50%, 0.6);',
			primaryCyanFullOp: 'hsla(178, 100%, 50%, 1)',
			neutralDarkBlueMainBg: 'hsl(217, 54%, 11%);',
			neutralDarkBlueCardBg: 'hsl(216, 50%, 16%);',
			neutralDarkBlueLine: 'hsl(215, 32%, 27%);',
			darkGrey: 'rgba(124, 148, 152, 1)',
		};
	} else {
		// Theme set to light.
		cTheme.color = {
			primarySoftBlue: 'hsl(215, 51%, 70%);',
			primaryCyan: 'hsl(178, 100%, 50%);',
			primaryCyanFullOp: 'hsla(178, 100%, 50%, 1)',
			neutralDarkBlueMainBg: 'red;',
			neutralDarkBlueCardBg: 'hsl(216, 50%, 16%);',
			neutralDarkBlueLine: 'hsl(215, 32%, 27%);',
			darkGrey: 'rgba(124, 148, 152, 1)',
		};
	}

	return cTheme;
};

export default theme;
