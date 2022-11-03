import { FunctionComponent } from 'react';

interface ITitle {
	className?: string;
	text: string;
}

const Title: FunctionComponent<ITitle> = ({ className, text }): JSX.Element => {
	return <h1 className={className}>{text}</h1>;
};

export default Title;
