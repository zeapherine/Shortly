import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;

		overflow-x: hidden;
		
       
    }
`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding-right: 50px;
	padding-left: 50px;

	@media screen and (max-width: 800px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const Btn = styled.button`
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	color: #bfbfbf;
	font-size: 1rem;
	padding: 0.5em 1em;
	margin-right: 0.75em;
	cursor: pointer;
	color: ${({ active }) => (active ? '#fff' : '#bfbfbf')};

	background: transparent;
	border: none;

	background: ${({ active }) => (active ? '#2acfcf' : 'transparent')};
	border-radius: 50px;

	&:hover {
		color: #000;
	}

	@media screen and (max-width: 800px) {
		color: #fff;

		background: ${({ active }) => (active ? '#2acfcf' : 'transparent')};
		border-radius: 50px;

		border-radius: 50px;
	}
`;

export default GlobalStyles;
