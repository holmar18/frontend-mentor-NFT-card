import React from 'react';
import SCard from './style';

interface ICard {
	children: JSX.Element[] | JSX.Element;
}

const Card: React.FunctionComponent<ICard> = ({ children }): JSX.Element => {
	return <SCard>{children}</SCard>;
};

export default Card;
