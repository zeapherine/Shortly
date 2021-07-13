import styled from 'styled-components';

import { Container } from '../../globalStyles';

import { ReactComponent as Logo } from '../../assets/logo.svg';

export const Nav = styled.nav`
	height: 80px;
	display: flex;
	background: #fff;
	justify-content: center;

	font-size: 1.2rem;
	position: sticky;
	top: 0;
	margin-top: 3em;
	z-index: 999;

	@media screen and (max-width: 800px) {
		justify-content: flex-start;
	}
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;
	width: 100%;

	${Container};
`;

export const NavLogo = styled(Logo)`
	margin-top: auto;
	margin-bottom: auto;
	cursor: pointer;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 800px) {
		display: block;
		position: absolute;
		top: 0;
		right: 12px;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 80%;
	padding: 0;
	list-style: none;

	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 70%;
		position: absolute;
		top: 140px;
		left: ${({ click }) => (click ? '15%' : '-100%')};
		opacity: 1;

		transition: all 0.5s ease;
		background: #35323e;
		border-radius: 20px;
		padding-bottom: 50px;
		padding-top: 50px;
	}
`;

export const NavItem = styled.li`
	margin: 0 1em;

	@media screen and (max-width: 800px) {
		/* padding: 5px; */
		margin-left: 20px;
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled.a`
	color: #bfbfbf;
	display: flex;
	flex-basis: no-wrap;

	text-decoration: none;
	height: 100%;
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	cursor: pointer;

	&:hover {
		font-weight: 700;
		color: #000000;
	}

	@media screen and (max-width: 800px) {
		justify-content: center;
		text-align: center;
		padding: 1rem 0;
		width: 100%;
		display: table;
		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 90px;
	}
`;
