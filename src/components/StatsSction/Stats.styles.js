import styled from 'styled-components';

export const StatsContainer = styled.div`
	display: flex;
	padding: 4em 0;
	background-color: #bfbfbf;
`;

export const StatsHeadingDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StatsHeading = styled.h2`
	font-family: 'Poppins', sans-serif;
	font-size: 3rem;
	font-weight: 700;
	margin: 1em;
	text-align: center;
`;

export const StateParagraph = styled.p`
	font-family: 'Poppins', sans-serif;
	padding: 0 5em;
	font-size: 1.2rem;
	font-weight: 700;
	color: grey;
	width: 60%;
	text-align: center;
`;

export const CardContainer = styled.div`
	display: flex;
	margin: 7em 3em;
	padding: 1em;
	@media screen and (max-width: 1200px) {
		flex-direction: column;
		margin-bottom: 0;
	}
`;

export const FeaturesCard = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 2em 1em;
	border-radius: 10px;
	padding: 3em;

	@media screen and (min-width: 1200px) {
		align-items: flex-start;
		position: relative;
		top: ${({ fromTop }) => fromTop};
		margin: 5px 15px;
		padding: 1em;
	}
`;

export const FeaturesImg = styled.img`
	background-color: #3b3054;
	height: 30px;
	width: 30px;
	padding: 1em;
	border-radius: 50%;

	margin-bottom: -30px;
	margin-bottom: -21px;
	transform: translateY(-20%);
	text-align: center;

	position: relative;
	left: 30px;
	bottom: 30px;

	@media screen and (max-width: 800px) {
		left: 5px;
	}

	@media screen and (max-width: 1200px) {
		transform: translateY(-70%);
		left: 0;
	}
`;

export const CardTitle = styled.h2`
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	font-size: 2rem;
	padding: 0 1rem;
	margin: 0;

	@media screen and (max-width: 1200px) {
		text-align: center;
	}
`;

export const CardPara = styled.p`
	font-family: 'Poppins', sans-serif;
	font-size: 1rem;
	font-weight: 500;
	padding: 0 1rem;
	color: grey;

	@media screen and (max-width: 1200px) {
		text-align: center;
	}
`;

export const CardArrow = styled.div`
	position: relative;
	z-index: -1;
	top: 300px;
	left: 250px;
	height: 10px;
	width: 50%;
	background: #2acfcf;

	@media screen and (max-width: 1200px) {
		display: none;
	}
`;
