import { FunctionComponent } from 'react';

interface InftCreator {
	className?: string;
	creatorImg: string;
	name: string;
}

const NftCreator: FunctionComponent<InftCreator> = ({
	className,
	creatorImg,
	name,
}): JSX.Element => {
	return (
		<div className={className}>
			<img src={creatorImg} alt={name} />
			<p className='creator-text'>Creator of </p>
			<p className='creator-name'>{name}</p>
		</div>
	);
};

export default NftCreator;
