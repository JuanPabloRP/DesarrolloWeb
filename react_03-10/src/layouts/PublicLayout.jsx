import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const PublicLayout = () => {
	return (
		<PublicLayoutStyled>
			<Navbar />
			<Outlet />
		</PublicLayoutStyled>
	);
};

const PublicLayoutStyled = styled.main`
	font-family: system-ui;
`;

export default PublicLayout;
