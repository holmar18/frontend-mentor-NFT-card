import styled from 'styled-components';
// Theme
import { theme } from '../../theme';

const SCard = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${theme().color.neutralDarkBlueCardBg};
	border-radius: 1rem;
	padding: 1rem;
	filter: drop-shadow(-7px 6px 14px #000);

	@media (max-width: ${theme().screenSize.mobile}) {
		height: 80vh;
		max-width: 80vw;
		min-width: 427px;
	}

	@media (min-width: ${theme().screenSize.tablet}) {
		height: 70vh;
		width: 20rem;
	}

	@media (min-width: ${theme().screenSize.desktop}) {
		height: 60vh;
		width: 20rem;
	}
`;

export default SCard;
