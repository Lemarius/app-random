import { useEffect, useState } from 'react';
import {
	StyledContainer,
	StyledDice,
	StyledDiceCont,
	StyledDivider,
	StyledImg,
	StyledImgCont,
	StyledP,
	StyledTitle
} from './styles';

const Advice = () => {
	const [advice, setAdvice] = useState('');

	useEffect(() => {
		fetchAdvice(setAdvice);
	}, []);

	return (
		<>
			<StyledContainer>
				<StyledTitle>ADVICE #{advice.id}</StyledTitle>
				<StyledP>{'"' + advice.advice + '"'}</StyledP>
				<StyledImgCont>
					<StyledDivider />
					<StyledImg src='./images/pattern-divider-mobile.svg' />
					<StyledDivider />
				</StyledImgCont>
				<StyledDiceCont onClick={fetchAdvice(setAdvice)}>
					<StyledDice src='./images/icon-dice.svg' />
				</StyledDiceCont>
			</StyledContainer>
		</>
	);
};

const fetchAdvice = async setAdvice => {
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
	setAdvice(data.slip);
};

export default Advice;
