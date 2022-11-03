import styled from 'styled-components';
// Theme
import { theme } from '../../theme';
import Card from './Card';

const StyledCard = styled(Card)`
	display: flex;
	flex-direction: column;
	background-color: ${theme().color.neutralDarkBlueCardBg};
	border-radius: 1rem;
	padding: 1rem;
	filter: drop-shadow(-7px 6px 14px #000);

	@media (max-width: ${theme().screenSize.mobile}) {
		height: 60vh;
		max-width: 80vw;
		min-width: 227px;
	}

	@media (min-width: ${theme().screenSize.tablet}) {
		height: 58vh;
		width: 20rem;
	}

	@media (min-width: ${theme().screenSize.desktop}) {
		height: 60vh;
		width: 20rem;
	}
`;

export default StyledCard;
