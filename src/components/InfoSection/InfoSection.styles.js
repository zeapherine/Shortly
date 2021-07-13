import styled from 'styled-components';

export const InfoSec = styled.div`
	margin: 1em 0;
	display: flex;
`;

export const InfoRow = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column-reverse;
	}
`;

export const InfoCol = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3em;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 2.5em;
	max-width: 500px;

	@media screen and (max-width: 800px) {
		align-items: center;
		margin-top: 30px;
	}
`;

export const Heading = styled.h1`
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	font-size: 3.5rem;
	text-align: flex-start;
	margin-bottom: 0;

	@media screen and (max-width: 800px) {
		text-align: center;
	}
`;

export const Desc = styled.p`
	font-family: 'Poppins', sans-serif;
	font-weight: 500;
	font-size: 1.2rem;
	text-align: flex-start;
	margin-bottom: 1.5em;

	@media screen and (max-width: 800px) {
		text-align: center;
	}
`;

export const ImageWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 800px) {
		justify-content: center;
		margin-left: 0;
	}
`;

export const Img = styled.img`
	height: 400px;
	width: 400px;

	@media screen and (max-width: 800px) {
		height: 300px;
		width: 400px;
	}
`;
