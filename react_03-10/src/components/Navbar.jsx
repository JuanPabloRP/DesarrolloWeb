import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<NavbarStyled>
			<h1>Ejemplo</h1>
			<ul>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link to={'/about'}>About</Link>
				</li>
			</ul>
		</NavbarStyled>
	);
};

const NavbarStyled = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background-color: #333;
	color: #fff;
	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
	}
	li {
		margin-left: 1rem;
	}
	a {
		text-decoration: none;
		color: #fff;
	}
`;

export default Navbar;
