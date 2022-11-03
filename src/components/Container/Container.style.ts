import styled from 'styled-components';
import Container from './Container';

interface IStyledIconText {
	flexDirection: string;
	alignItem?: string;
	justifyContent?: string;
	width?: string;
	borderBottom?: string;
	padding?: string;
}

const StyledContainer = styled(Container)<IStyledIconText>`
	display: flex;
	flex-direction: ${(props) =>
		props.flexDirection ? props.flexDirection : 'column'};
	align-items: ${(props) => (props.alignItem ? props.alignItem : 'flex-start')};
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : 'flex-start'};
	width: ${(props) => (props.width ? props.width : '100%')};
	border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : '')};
	padding: ${(props) => (props.padding ? props.padding : '')};
`;

export default StyledContainer;
