import styled from 'styled-components';
// Theme
import { theme } from '../../theme';

const SImage = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
	cursor: pointer;

	.nft-img {
		display: block;
		max-width: 100%;
		max-height: 100%;
		border-radius: 1rem;
		margin-left: auto;
		margin-right: auto;
	}

	.overlay {
		display: none;
		border-radius: 1rem;
		font-size: 1rem;
		color: white;
		opacity: 0;
		transition: all 1s ease;
	}

	.overlay:hover {
		opacity: 1;
		font-size: 3rem;
	}

	&:hover {
		.overlay {
			display: block;
			position: absolute;
			top: 0;
			height: 100%;
			width: 100%;
			background-color: ${theme().color.primaryCyan};
		}
	}

	.overlay-inner-container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: ${theme().screenSize.mobile}) {
		height: 56%;
	}

	@media (min-width: ${theme().screenSize.tablet}) {
		height: 47%;
	}

	@media (min-width: ${theme().screenSize.desktop}) {
		height: 56%;
	}
`;

export default SImage;
