import styled from 'styled-components';

const About = () => {
	return (
		<AboutStyled>
			<h1>About</h1>
			<p>Esta es la página de About</p>
		</AboutStyled>
	);
};

const AboutStyled = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 50vh;
`;

export default About;
