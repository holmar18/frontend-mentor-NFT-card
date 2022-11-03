import React from 'react';
import SImage from './Image.style';
import { AiFillEye } from 'react-icons/ai';

interface Iimage {
	className?: string;
	src: string;
	alt: string;
}

const Image: React.FunctionComponent<Iimage> = ({
	className,
	src,
	alt,
}): JSX.Element => {
	return (
		<div className={className}>
			<div className='overlay'>
				<div className='overlay-inner-container'>
					<AiFillEye className='eye-icon' />
				</div>
			</div>
		</div>
	);
};

export default Image;
