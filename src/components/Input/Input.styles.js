import styled from 'styled-components';

import backgroundImg from '../../assets/bg-shorten-desktop.svg';
import backgroundImgShorthand from '../../assets/bg-shorten-mobile.svg';

export const InputContainer = styled.div`
	margin-top: 60px;
	display: flex;
	background-image: linear-gradient(
		to bottom,
		#fff,
		#fff 20%,
		#bfbfbf 0%,
		#bfbfbf
	);
	background-size: cover;
	background-repeat: no-repeat;
`;

export const InputDiv = styled.div`
	background: #232127;
	background-image: url(${backgroundImg});
	background-repeat: no-repeat;
	background-size: 100% 100%;
	padding: 1.5em;
	border-radius: 5px;

	@media screen and (max-width: 800px) {
		background-image: url(${backgroundImgShorthand});
	}
`;

export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

export const FormInput = styled.input`
	height: 50px;
	width: 60%;
	margin: 1em;
	border-radius: 8px;
	font-size: 1rem;
	font-weight: 500;
	padding: 0 1rem;

	&::placeholder {
		color: #f46262;
		font-size: 1.2rem;
		font-weight: 700;
		opacity: 0.5;
		padding: 0 1rem;
	}
	&:focus {
		outline: 1px solid #f46262;
	}

	@media screen and (max-width: 800px) {
		width: 90%;
		margin: 1.3em 0;
	}
`;

export const InputSubmit = styled.input`
	background-color: #2acfcf;
	border-radius: 8px;
	border: none;
	color: #fff;
	font-size: 1rem;
	font-weight: 700;
	cursor: pointer;
	height: 50px;
	padding: 0 0.5em;
	width: 20%;

	@media screen and (max-width: 800px) {
		width: 90%;
	}
`;

export const Msg = styled.p`
	position: relative;
	left: 150px;
	bottom: 45px;
	color: #f46262;
	font-size: 0.9rem;

	@media screen and (max-width: 1000px) {
		left: 120px;
		bottom: 45px;
	}

	@media screen and (max-width: 800px) {
		left: 70px;
		bottom: 190px;
	}
`;

export const ShortedUrlDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1em;
	border-radius: 8px;
	height: 60px;
	background: #fff;
	margin-bottom: 10px;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: flex-start;
		height: auto;
	}
`;

export const LongUrl = styled.p`
	font-size: 1rem;
	font-weight: 700;
`;

export const ShortUrlDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: flex-start;
		border-top: 1px solid grey;
		width: 100%;
	}
`;

export const ShortUrl = styled.p`
	font-size: 1rem;
	font-weight: 700;
	color: #2acfcf;
	margin-right: 10px;
`;

export const CopyBtn = styled.button`
	font-size: 1rem;
	font-weight: 700;
	padding: 0.5em 2em;
	border-radius: 8px;
	background-color: ${({isCopied}) => (isCopied ? '#3b3054' : '#2acfcf')};
	color: #fff;
	border: none;

	@media screen and (max-width: 800px) {
		width: 100%;
		margin-bottom: 1rem;
	}
`;
