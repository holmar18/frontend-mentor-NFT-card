import React from 'react';

interface ICard {
	className?: string;
	children: JSX.Element[] | JSX.Element;
}

const Card: React.FunctionComponent<ICard> = ({
	className,
	children,
}): JSX.Element => {
	return <div className={className}>{children}</div>;
};

export default Card;
