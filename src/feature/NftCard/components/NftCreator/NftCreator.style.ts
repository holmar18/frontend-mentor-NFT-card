import styled from 'styled-components';
import NftCreator from './NftCreator';
import { theme } from '../../../../theme';

interface IStyledIconText {}

const StyledNftCreator = styled(NftCreator)<IStyledIconText>`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 6rem;
	font-weight: 400;

	.creator-text {
		padding-left: 0.8rem;
		color: ${theme().color.darkGrey};
	}

	.creator-name {
		padding-left: 0.4rem;
		color: white;
		cursor: pointer;
		color: ${theme().color.whiteBlack};

		&:hover {
			color: ${theme().color.primaryCyanFullOp};
		}
	}

	img {
		width: 2.3rem;
		height: 2.3rem;
		border: 2px solid rgba(255, 255, 255, 0.6);
		border-radius: 50%;
	}
`;

export default StyledNftCreator;
