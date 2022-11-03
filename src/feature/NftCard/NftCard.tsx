import React from 'react';
// Images
import NFTETH from '../../assets/images/image-equilibrium.jpg';
import CREATOR from '../../assets/images/image-avatar.png';
// sVG
import ETH from '../../assets/images/icon-ethereum.svg';
import CLOCK from '../../assets/images/icon-clock.svg';
// Components
import { StyledCard } from '../../components/Card';
import { StyledImage } from '../../components/Image';
import { StyledTitle } from '../../components/Title';
import { StyledParagraph } from '../../components/Paragraph';
import { StyledIconText } from './components/IconText';
import { StyledContainer } from '../../components/Container';
import { StyledNftCreator } from './components/NftCreator';
// THeme
import { theme } from '../../theme';

const NftCard = () => {
	return (
		<>
			<StyledCard>
				<StyledImage src={NFTETH} alt='Etherium NFT' />
				<StyledTitle text='Equilibrium #3429' />
				<StyledParagraph text='Our Equilibrium collection promotes balance and calm' />
				<StyledContainer
					flexDirection='row'
					alignItem='center'
					justifyContent='center'
					padding='1.5rem 0'
					borderBottom={`2px solid ${theme().color.neutralDarkBlueLine}`}
				>
					<StyledIconText
						icon={ETH}
						text='0.041 ETH'
						color={theme().color.primaryCyanFullOp}
						weight={600}
					/>
					<StyledIconText
						icon={CLOCK}
						text='3 Days left'
						color={theme().color.primarySoftBlue}
						weight={300}
						marginLeft={'auto'}
					/>
				</StyledContainer>
				<StyledNftCreator creatorImg={CREATOR} name='Jules Wyvern' />
			</StyledCard>
		</>
	);
};

export default NftCard;
