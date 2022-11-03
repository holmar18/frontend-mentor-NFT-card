import { FunctionComponent } from 'react';

interface IContainer {
	className?: string;
	children: JSX.Element[] | JSX.Element;
}

const Container: FunctionComponent<IContainer> = ({
	className,
	children,
}): JSX.Element => {
	return <div className={className}>{children}</div>;
};

export default Container;
