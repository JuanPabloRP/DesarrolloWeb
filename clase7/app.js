const usersChoice = document.createElement('h1');
const computersChoice = document.createElement('h1');
const resultDisplay = document.createElement('h1');

const gameGrid = document.getElementById('root');

gameGrid.append(usersChoice);
gameGrid.append(computersChoice);
gameGrid.append(resultDisplay);

const choices = ['Piedra', 'Papel', 'Tijera'];

let userChoice;
let computerChoice;

const generateComputerPlay = () => {
	const randomChoice = choices[Math.floor(Math.random() * choices.length)];
	computerChoice = randomChoice;
	computersChoice.innerText =
		'Jugada del bot de fre fair🙄🤖👽☠😍: ' + computerChoice;
};

const generateResult = () => {
	switch (userChoice + computerChoice) {
		case 'TijeraPapel':
		case 'PiedraTijera':
		case 'PapelPiedra':
			resultDisplay.innerHTML =
				'Gané sho porque soy local :D brrr 😈🚬🍷 xxx https://chochox.com jijijia';
			break;
		case 'PiedraPapel':
		case 'TijeraPiedra':
		case 'PapelTijera':
			resultDisplay.innerHTML = 'Alto bot, te ganó el bot brrr 👻👾👺💀😸😹🗿';
			break;
		default:
			resultDisplay.innerHTML = 'Empate 🤣😂😂🤣😒👌😘🤦‍♂️🤞';
			break;
	}
};

const handleClick = (e) => {
	userChoice = e.target.id;
	usersChoice.innerHTML = 'Su jugaba es: ' + userChoice;
	generateComputerPlay();
	generateResult();
};

for (let i = 0; i < choices.length; i++) {
	const btn = document.createElement('button');
	btn.id = choices[i];
	btn.innerHTML = choices[i];

	btn.addEventListener('click', handleClick);
	gameGrid.appendChild(btn);
}
