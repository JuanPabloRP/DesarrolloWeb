class Vehiculo {
	constructor(velocidadMaxima, tipoVehiculo) {
		this.velocidadMaxima = velocidadMaxima;
		this.tipoVehiculo = tipoVehiculo;
	}

	getVelocidadMaxima() {
		return `Velocidad maxima: ${this.velocidadMaxima}`;
	}

	getTipoVehiculo() {
		return `Tipo vehiculo: ${this.tipoVehiculo}`;
	}

	setVelocidadMaxima(nuevaVelocidadMaxima) {
		this.velocidadMaxima = nuevaVelocidadMaxima;
		return 'Se ha modificado con exito';
	}
}

class Carro extends Vehiculo {
	constructor({
		velocidadMaxima,
		tipoVehiculo,
		cantPuertas,
		pasajerosMaximos,
		tiposVentanas,
	}) {
		super(velocidadMaxima, tipoVehiculo);
		this.cantPuertas = cantPuertas;
		this.pasajerosMaximos = pasajerosMaximos;
		this.tiposVentanas = tiposVentanas;
	}

	getCantPuertas() {
		return `Cantidad puertas: ${this.cantPuertas}`;
	}

	getPasajerosMaximos() {
		return `Pasajeros maximos: ${this.pasajerosMaximos}`;
	}

	getTiposVentanas() {
		return `Cantidad de ventanas: normales: ${this.tiposVentanas.normal} grandes: ${this.tiposVentanas.grande}`;
	}
}

const ferrari = new Carro({
	velocidadMaxima: 220,
	tipoVehiculo: 'Carro deportivo',
	cantPuertas: 2,
	pasajerosMaximos: 2,
	tiposVentanas: { normal: 2, grande: 1 },
});

console.log(ferrari.getTipoVehiculo());
console.log(ferrari.getCantPuertas());
console.log(ferrari.getVelocidadMaxima());
console.log(ferrari.getPasajerosMaximos());
console.log(ferrari.getTiposVentanas());
console.log(ferrari.setVelocidadMaxima(180));
console.log(ferrari.getVelocidadMaxima());

/*
class Animal {
	constructor(especie, color, sonido, habitat) {
		this.especie = especie;
		this.color = color;
		this.sonido = sonido;
		this.habitat = habitat;
	}

	moverse(tipoMovimiento) {
		console.log(`Yo ${tipoMovimiento}`);
	}

	getEspecie() {
		return this.especie;
	}

	getSonido() {
		return this.sonido;
	}

	getHabitat() {
		return this.habitat;
	}
}

class Perro extends Animal {
	constructor(raza, color, sonido, habitat) {
		//this.raza = raza;
		//this.color = color;
		//this.sonido = sonido;
		//this.habitat = habitat;
		super(raza, color, sonido, habitat);
	}

	ladrar() {
		return this.sonido;
	}

	sentarse() {
		console.log('me he sentado');
	}
}

const kira = new Perro('pitbull', 'Blanco', 'miau');
kira.sentarse();
console.log(kira.ladrar());
console.log(kira.getSonido());
*/

/*
class Musica {
	constructor({ fecha, artista, genero, titulo }) {
		this.fecha = fecha;
		this.artista = artista;
		this.genero = genero;
		this.titulo = titulo;
	}

	reproducir() {
		console.log(
			`Se esta reproduciendo ${this.titulo} del artista ${this.artista}`
		);
	}

	pausar() {
		return `Se ha pausado ${this.titulo} del artista ${this.artista}`;
	}
}

const Rock = new Musica({
	fecha: '07/05/1985',
	artista: 'Social distirtion',
	genero: 'Rock',
	titulo: 'Story of my life',
});

Rock.reproducir();
*/
