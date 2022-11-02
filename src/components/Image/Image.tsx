import React from 'react';
import SImage from './style';
import { AiFillEye } from 'react-icons/ai';

interface Iimage {
	src: string;
	alt: string;
}

const Image: React.FunctionComponent<Iimage> = ({ src, alt }): JSX.Element => {
	return (
		<SImage>
			<img src={src} alt={alt} className='nft-img' />
			<div className='overlay'>
				<div className='overlay-inner-container'>
					<AiFillEye className='eye-icon' />
				</div>
			</div>
		</SImage>
	);
};

export default Image;
