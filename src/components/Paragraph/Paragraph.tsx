import React from 'react';
import CParagraph from './Paragraph.style';

interface IParag {
	className?: string;
	text: string;
}

const Paragraph: React.FunctionComponent<IParag> = ({
	className,
	text,
}): JSX.Element => {
	return <p className={className}>{text}</p>;
};

export default Paragraph;
