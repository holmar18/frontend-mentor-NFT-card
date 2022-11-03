import styled from 'styled-components';
// Theme
import { theme } from '../../theme';
import Title from './Title';

const StyledTitle = styled(Title)`
	color: ${theme().color.whiteBlack};
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

export default StyledTitle;
