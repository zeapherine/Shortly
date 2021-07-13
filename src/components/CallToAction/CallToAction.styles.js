import styled from 'styled-components';
import actionImg from '../../assets/bg-boost-desktop.svg';

export const ActionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1.5em;
	background-image: url(${actionImg});
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-color: #35323e;
`;

export const ActionHeading = styled.h2`
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	font-size: 2rem;
	color: #fff;
`;
