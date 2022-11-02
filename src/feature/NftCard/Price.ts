import styled from 'styled-components';
// Theme
import { theme } from '../../theme';

const CPrice = styled.h1`
	color: white;
	font-size: 1.4rem;
	padding-top: 1.2rem;
	padding-bottom: 1.2rem;
	cursor: pointer;

	&:hover {
		color: ${theme().color.primaryCyanFullOp};
		opacity: 1;
	}

	@media (max-width: ${theme().screenSize.mobile}) {
	}

	@media (min-width: ${theme().screenSize.tablet}) {
	}

	@media (min-width: ${theme().screenSize.desktop}) {
	}
`;

export default CPrice;
