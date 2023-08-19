const arr = [
	{
		fullName: {
			name: 'Juan',
			lastName: 'Roldan',
		},
		age: 20,
		graduado: true,
	},
	{
		fullName: {
			name: 'Pablo',
			lastName: 'Patiño',
		},
		age: 15,
		graduado: false,
	},
	{
		fullName: {
			name: 'Pepito',
			lastName: 'Pepo',
		},
		age: 18,
		graduado: false,
	},
];

console.log('\nEstudiantes: ');
const fullNames = arr.map(
	({ fullName }) => `${fullName.name} ${fullName.lastName}`
);
console.log(fullNames);

console.log('\nEstudiantes mayores de edad: ');
const mayoresDeEdad = arr.filter(({ age }) => age >= 18);
console.log(mayoresDeEdad);

console.log('\nEstan todos graduados: ');
const todosGraduados = arr.every(({ graduado }) => graduado);
console.log(todosGraduados ? 'Sí' : 'No');

/*
// FOR EACH
const numeros = [1, 3, 7, 10, 11];
const replica = [];
let suma = 0;

numeros.forEach((e) => (suma += e));
console.log(suma);

numeros.forEach((e) => console.log(e));
numeros.forEach((e) => replica.push(e));
console.log(replica);

// MAP
const doble = numeros.map((e) => e * 2);
console.log(doble);

//vector de objetos
const estudiantes = [
  {
    name: "Juan",
    age: 20
  },
  {
    name: "Pablo",
    age: 20
  },
  {
    name: "Juan Manuel",
    age: 18
  }
];

console.log(estudiantes);

// LO OTROS SE BORRO PORQUE CODESANDBOX SE DAÑÓ :((  D:

//despues del error
const objetoFrutas = [
  {
    name: "banano",
    buena: true
  },
  {
    name: "Manzana",
    buena: true
  },
  {
    name: "Sandia",
    buena: false
  }
];

const cumple = objetoFrutas.every(({ buena }) => buena);
console.log(cumple);

// OBJETOS

const auto = {
  color: "red",
  year: 1992,
  cantPuertas: 4,
  marca: "Mazda",
  revisiones: {
    fechaIngreso: "12/05/2021",
    fechaEgreso: "25/12/2023",
    valor: 15154154156435,
    estadoSalida: "Malo",
    entregadoPor: "QueLe"
  },
  seguro: false,
  registrado: false
};

let autos = [];
autos.push(auto);

console.log(autos);
*/
