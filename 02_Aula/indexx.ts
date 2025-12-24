let x: number = 10;

console.log("O valor de x é: " + x);
console.log("O tipo de x é: " + typeof x);

let y: number = 3.145;
console.log("O valor de y é: " + y.toPrecision(3));

const firstName: string = "Paulo";

function greeting(name: string) {
	console.log(`Olá, ${name}!`);
}

greeting(firstName.toUpperCase());

let fullName: string;
fullName = `${firstName} Roberto`;

console.log("Nome completo: " + fullName);

let isActive: boolean = false;
console.log("Status de isActive: " + isActive);

isActive = true;
console.log("Novo status de isActive: " + isActive);

// inference e annotation
const ann: string = "Teste de string";

let info = "Teste de inferência de tipo";
