const data = [
	{
		title: 'Lorem ipsum dolor',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque, quia quis ea maiores quibusdam sunt quos ipsa assumenda porro? Amet quos odio magni incidunt adipisci doloremque maiores rem repellendus?',
	},
	{
		title: 'Lorem ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci unde, voluptas veniam libero beatae sit, facere tempore maxime dolor deserunt inventore perspiciatis. Consequatur ratione perspiciatis perferendis animi ex possimus eos.',
	},
	{
		title: 'Lorem ipsum dolor sit amet',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officia ullam voluptas vitae velit quaerat corporis consectetur necessitatibus sequi provident perspiciatis optio quisquam mollitia cum debitis blanditiis, at deleniti asperiores?',
	},
];

export const about = `
  <section id="about" class="about">
		<h2 class="about__title">About</h2>
    ${data
			.map(
				({ title, description }) =>
					`<article class="card">
						<h3 class="card__title">${title}</h3>
						<p class="card__description">${description}</p>
					</article>
      `
			)
			.join('')}
  </section>
`;
