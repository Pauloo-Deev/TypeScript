function soma(a: number | string, b: number | string): void {
	if (typeof a === "number" && typeof b === "number") {
		console.log(a + b);
	} else if (typeof a === "string" && typeof b === "string") {
		console.log(a.concat(b));
	} else {
		console.log("Impossível realizar a soma!");
	}
}

soma(1, 2);
soma("Olá, ", "mundo!");
soma(1, "2");

function operations(arr: number[], operation?: string | undefined): void {
	if (operation) {
		if (operation === "soma") {
			const sum = arr.reduce((total, num) => total + num, 0);
			console.log(sum);
		} else if (operation === "subtração") {
			const difference = arr.reduce((total, num) => total - num);
			console.log(difference);
		} else if (operation === "multiplicação") {
			const product = arr.reduce((total, num) => total * num, 1);
			console.log(product);
		} else if (operation === "divisão") {
			const quotient = arr.reduce((total, num) => total / num);
			console.log(quotient);
		} else {
			console.log("Operação inválida!");
		}
	} else {
		console.log("Por favor, defina uma operação!");
	}
}

operations([1, 2, 3, 4, 5], "soma");
operations([10, 2, 2], "subtração");
operations([2, 3, 4], "multiplicação");
operations([100, 2, 5], "divisão");
operations([1, 2, 3]);
operations([1, 2, 3], "modulo");

class User {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	showUserName(): void {
		console.log(`O nome do usuário é: ${this.name}`);
	}
}

class SuperUser extends User {
	constructor(name: string) {
		super(name);
	}

	showUserRole(): void {
		console.log(`O usuário ${this.name} é um Super Usuário`);
	}
}

function userGreeting(user: object): void {
	if (user instanceof SuperUser) {
		console.log(
			`Olá, ${user.name}. Deseja acessar as configurações de administrador?`
		);
	} else if (user instanceof User) {
		console.log(`Olá, ${user.name}`);
	}
}

const normalUser = new User("João");
const adminUser = new SuperUser("Maria");

userGreeting(normalUser);
userGreeting(adminUser);

class Dog {
	name: string;
	breed?: string;

	constructor(name: string, breed?: string) {
		this.name = name;
		if (breed) {
			this.breed = breed;
		}
	}
}

const dog1 = new Dog("Rex", "Pastor Alemão");
const dog2 = new Dog("Bolt");

function showDogDetails(dog: Dog): void {
	if ("breed" in dog) {
		console.log(`O cachorro é da raça: ${dog.breed}`);
	} else {
		console.log("O cachorro é um SRD (Sem Raça Definida)");
	}
}

showDogDetails(dog1);
showDogDetails(dog2);
