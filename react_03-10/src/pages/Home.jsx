import { useState } from 'react';
import styled from 'styled-components';

const Home = () => {
	const [count, setCount] = useState(0);
	return (
		<HomeStyled>
			<h1>Home</h1>
			<p>Count: {count}</p>
			<ButtonStyled onClick={() => setCount(count + 1)}>
				Incrementar
			</ButtonStyled>
		</HomeStyled>
	);
};

const HomeStyled = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 50vh;
`;

const ButtonStyled = styled.button`
	padding: 1rem 2rem;
	border: none;
	border-radius: 0.5rem;
	background-color: #333;
	color: #fff;
	font-size: 1rem;
	cursor: pointer;
	transition: 0.3s ease all;
	&:hover {
		background-color: #555;
	}
`;

export default Home;
