import styled from 'styled-components';
// Theme
import { theme } from '../../theme';

const CParagraph = styled.p`
	color: rgba(124, 148, 152, 1);
	font-size: 1rem;
	font-weight: 300;

	@media (max-width: ${theme().screenSize.mobile}) {
	}

	@media (min-width: ${theme().screenSize.tablet}) {
	}

	@media (min-width: ${theme().screenSize.desktop}) {
	}
`;

export default CParagraph;
