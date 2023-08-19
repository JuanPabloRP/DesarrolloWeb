console.log('Creacion player');
const player = {
	name: 'Juan',
	kd: '1.35',
};

console.log('Imprimiendo player');
console.log(`Nombre: ${player?.name}\n K/D: ${player?.kd}`);

console.log('\ncondicionales y bucles\n');

if (player?.kd > 1.25) console.log('Juega muito mano');
else console.log('Miuto malo mano kkkkk');

const esBueno = player?.kd > 1.25 ? 'Joga muito ' : 'Muito ruin';

console.log('Como juega: ', esBueno);

console.log('\n');
let player2 = {
	name: 'Juan',
	points: 5,
};

player2 = 'Pablo';

console.log('\nswitch: ');

switch (player2) {
	case 'Pablo':
		console.log('Pablo 👍');
		break;
	case 'Juan':
		console.log('Juan ✌');
		break;
	default:
		console.log('Quien chota sos 👿');
}

console.log('\nfor: ');
let n1 = 0,
	n2 = 1,
	aux = 0;

for (let i = 0; i < 10; i++) {
	console.log(n1);
	aux = n1 + n2;
	n1 = n2;
	n2 = aux;
}

const arr = [1, 2, 3, 4, 5];
console.log('Recorrer arr');

for (let i = arr.length - 1; i > 0; i--) {
	console.log(arr[i]);
}

const matriz = [
	[' ', ' ', '* ', ' ', ' '],
	[' ', '*', '* ', '* ', ' '],
	['*', '*', '* ', '* ', ' *'],
	[' ', '', '| ', ' ', ' '],
];

const num = 5;
let linea = 0;

for (let i = 0; i <= num; i++) {
	linea = '';
	if (i == num) {
		linea = '|';
		console.log(linea);
		break;
	}
	for (let j = 0; j < i; j++) {
		linea += '*';
	}
	console.log(linea);
}

console.log('Medio arbol porque la cosa está cara');

console.log('\nWhile: ');

let i = 0;
while (i < 5) {
	console.log(i);
	i++;
}

console.log('do while');
let value = 1;
do {
	console.log(`${value} es menor a 0`);
	value++;
} while (value <= 0);

console.log('\nLo que falte xd: ');

let valor = 500 && true;

console.log(`!valor:  ${!valor}`);

console.log(` 1 >= 1 :  ${1 >= 1}`);

console.log(` 0.1 + 0.2 === 0.3  :  ${0.1 + 0.2 === 0.3}`); // es falso 0.1 + 0.2 === 0.3000000004 ma o meno

let edad = 20;

if (edad <= 9) console.log('tai chiquito');
else if (edad >= 9 && edad <= 18) console.log('tai mediano');
else console.log('tai viejo');

console.log(`1 + true === ${1 + true} `);

console.log('fin xd');
