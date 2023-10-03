const links = [
	{
		name: 'Home',
		link: '#home',
	},
	{
		name: 'About',
		link: '#about',
	},
	{
		name: 'Contact me',
		link: '#contactMe',
	},
];

const nav = `
<nav class="nav">
  <section >
    <h1 class="nav__title">Hola</h1>
  </section>
  <ul class="links">
    ${links
			.map(
				({ link, name }) =>
					`<li><a class="links__anchor" href=${link}>${name}</a></li>`
			)
			.join('')}
  </ul

</nav
`;

export { nav };
