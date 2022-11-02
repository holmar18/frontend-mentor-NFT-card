import React from 'react';
import CParagraph from './style';

interface IParag {
	text: string;
}

const Paragraph: React.FunctionComponent<IParag> = ({ text }): JSX.Element => {
	return (
		<CParagraph>
			<p>{text}</p>
		</CParagraph>
	);
};

export default Paragraph;
