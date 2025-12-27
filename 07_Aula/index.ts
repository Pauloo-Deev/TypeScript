function showData<T>(arg: T): string {
	return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData("Testando Generic"));
console.log(showData(true));
console.log(showData(["Ana", "Bia", "Carlos"]));

function showProductName<T extends { name: string }>(obj: T): string {
	return `O nome do produto é: ${obj.name}`;
}

const prod1 = { name: "Notebook", price: 2500, isAvailable: true };
const prod2 = {
	name: "Smartphone",
	price: 1500,
	isAvailable: false,
	color: "Black",
};

console.log(showProductName(prod1));
console.log(showProductName(prod2));

interface MyObject<T, U, Q> {
	name: string;
	wheels: T;
	engine: U;
	color?: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "Blue" };
const myPen: Pen = { name: "Bic", wheels: false, engine: false, color: "Red" };

console.log(myCar);
console.log(myPen);

function getSomeKey<T, K extends keyof T>(obj: T, key: K): string {
	return `A chave ${String(key)} está presente no objeto e tem o valor de ${
		obj[key]
	}`;
}

const server = { hd: "2TB", ram: "32GB", cpu: "Intel i9" };

console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste")); // Gera erro

type Character = { name: string; age: number; hasDriveLicense: boolean };
type KeyCharacter = keyof Character;

function showCharName(obj: Character, key: KeyCharacter): string {
	return `${obj[key]}`;
}

const myChar: Character = { name: "Mario", age: 30, hasDriveLicense: true };

console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
// console.log(showCharName(myChar, "teste")); // Gera erro

const userName: string = "Luiz";
const userName2: typeof userName = "Carlos";
// const userName3: typeof userName = 25; // Gera erro

type Truck = { brand: string; wheels: number; engine: number };

type brandType = Truck["brand"];

const truckBrand: brandType = "Volvo";
const newTruck: Truck = { brand: "Scania", wheels: 8, engine: 3.0 };

function showBrand(obj: Truck): void {
	console.log(`A marca do caminhão é: ${obj.brand}`);
}

console.log(truckBrand);
console.log(newTruck);
showBrand(newTruck);

interface A {}

interface B extends A {}

interface text {
	showName(): string;
}

type MyType = B extends A ? number : string;

const someVar: MyType = 5;
// const someVar2: MyType = "Teste"; // Gera erro

type MyType2 = text extends { showName(): string } ? string : boolean;

const someVar3: MyType2 = "Teste";
// const someVar4: MyType2 = true; // Gera erro

type testA = "Text";

type costumeType = `some ${testA}`;

const myText: costumeType = "some Text";
// const myText2: costumeType = "some Other"; // Gera erro

console.log(myText);
