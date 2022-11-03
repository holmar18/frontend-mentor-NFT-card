import styled from 'styled-components';
// Theme
import IconText from './IconText';
import { theme } from '../../../../theme';

interface IStyledIconText {
	color: string;
	weight: number;
	marginLeft?: string;
}

const StyledIconText = styled(IconText)<IStyledIconText>`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: ${(props) => props.color};
	font-weight: ${(props) => props.weight};
	width: 50%;

	img {
		padding-right: 0.3rem;
		margin-left: ${(props) => props.marginLeft};
		color: ${theme().color.primaryCyanFullOp};
	}

	@media (max-width: ${theme().screenSize.mobile}) {
		font-size: 0.8rem;
	}

	@media (min-width: ${theme().screenSize.tablet}) {
		font-size: 0.9rem;
	}

	@media (min-width: ${theme().screenSize.desktop}) {
		font-size: 1rem;
	}
`;

export default StyledIconText;
