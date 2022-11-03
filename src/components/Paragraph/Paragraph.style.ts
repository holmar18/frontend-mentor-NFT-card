import styled from 'styled-components';
// Theme
import { theme } from '../../theme';
import Paragraph from './Paragraph';

const StyledParagraph = styled(Paragraph)`
	color: ${theme().color.darkGrey};
	font-size: 1rem;
	font-weight: 300;

	@media (max-width: ${theme().screenSize.mobile}) {
	}

	@media (min-width: ${theme().screenSize.tablet}) {
	}

	@media (min-width: ${theme().screenSize.desktop}) {
	}
`;

export default StyledParagraph;
