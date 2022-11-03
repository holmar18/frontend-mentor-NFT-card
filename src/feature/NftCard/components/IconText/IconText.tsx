import { FunctionComponent } from 'react';

interface IiconText {
	className?: string;
	icon: string;
	text: string;
}

const IconText: FunctionComponent<IiconText> = ({
	className,
	icon,
	text,
}): JSX.Element => {
	return (
		<div className={className}>
			<img src={icon} />
			{text}
		</div>
	);
};

export default IconText;
