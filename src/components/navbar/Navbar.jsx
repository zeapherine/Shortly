import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavItemBtn,
} from './Navbar.styles';
import { Btn } from '../../globalStyles.js';

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo />

					<MobileIcon onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</MobileIcon>

					<NavMenu onClick={handleClick} click={click}>
						<NavItem>
							<NavLinks>Features</NavLinks>
						</NavItem>

						<NavItem>
							<NavLinks>Pricing</NavLinks>
						</NavItem>

						<NavItem>
							<NavLinks>Resources</NavLinks>
						</NavItem>

						<NavItemBtn>
							<Btn>Login</Btn>
						</NavItemBtn>

						<NavItemBtn>
							<Btn active={true}>Sign Up</Btn>
						</NavItemBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
