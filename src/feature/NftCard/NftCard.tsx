import React from 'react';
// Images
import NFTETH from '../../assets/images/image-equilibrium.jpg';
// Components
import { Card } from '../../components/Card';
import { Image } from '../../components/Image';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
const NftCard = () => {
	return (
		<>
			<Card>
				<Image src={NFTETH} alt='Etherium NFT' />
				<Title text='Equilibrium #3429' />
				<Paragraph text='Our Equilibrium collection promotes balance and calm' />
			</Card>
		</>
	);
};

export default NftCard;
