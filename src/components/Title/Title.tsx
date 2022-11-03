import React from 'react';
import CTitle from './Title.style';

interface ITitle {
	text: string;
}

const Title: React.FunctionComponent<ITitle> = ({ text }): JSX.Element => {
	return <CTitle>{text}</CTitle>;
};

export default Title;
