interface Product {
	name: string;
	price: number;
	isAvailable: boolean;
}

function showProductDetails(product: Product): void {
	console.log(`The product ${product.name} costs $${product.price}.`);

	product.isAvailable
		? console.log("The product is available.")
		: console.log("The product is not available.");
}

const shirt: Product = {
	name: "T-Shirt",
	price: 19.99,
	isAvailable: true,
};

showProductDetails(shirt);

interface User {
	name: string;
	email: string;
	age?: number;
	isAdmin: boolean;
}

function showUserDetails(user: User): void {
	console.log(`User: ${user.name}`);
	console.log(`Email: ${user.email}`);

	if (user.age !== undefined) {
		console.log(`Age: ${user.age}`);
	} else {
		console.log("Age not provided.");
	}
}

const userA: User = {
	name: "Alice",
	email: "alice@example.com",
	age: 28,
	isAdmin: false,
};

const userB: User = {
	name: "Bob",
	email: "bob@example.com",
	isAdmin: false,
};

showUserDetails(userA);
showUserDetails(userB);

interface Car {
	brand: string;
	model: string;
	year?: number;
	readonly wheels: number;
}

function showCarDetails(car: Car): void {
	console.log(`Car: ${car.brand} ${car.model}`);
	if (car.year !== undefined) {
		console.log(`Year: ${car.year}`);
	}
}

const myCar: Car = {
	brand: "Toyota",
	model: "Corolla",
	wheels: 4,
	year: 2020,
};

showCarDetails(myCar);

// myCar.wheels = 5; // This line would cause a TypeScript error because 'wheels' is readonly.

interface Point {
	[index: string]: number;
}

function showCoordinates(point: Point): void {
	for (const key in point) {
		console.log(`${key}: ${point[key]}`);
	}
}

const myPoint: Point = {
	x: 10,
	y: 20,
	z: 30,
};

showCoordinates(myPoint);

interface iPhone {
	name: string;
	color: string;
	storage: number;
	is5G: boolean;
}

interface iPhonePro extends iPhone {
	cameraQuality: string;
	batteryLife: string;
}

const myiPhone: iPhonePro = {
	name: "iPhone 13 Pro",
	color: "Graphite",
	storage: 256,
	is5G: true,
	cameraQuality: "Pro Camera System",
	batteryLife: "Up to 22 hours",
};

console.log(myiPhone);

interface Character {
	name: string;
}

interface Gun {
	type: string;
	caliber: number;
}

type HumanWithGun = Character & Gun;

const soldier: HumanWithGun = {
	name: "John",
	type: "Rifle",
	caliber: 5.56,
};

console.log(soldier);

let fruits: ReadonlyArray<string> = ["Apple", "Banana", "Cherry"];

// fruits.push("Date"); // This line would cause a TypeScript error because 'fruits' is a ReadonlyArray.

console.log(fruits);
fruits.forEach((fruit) => console.log(fruit));

type fiveNumbers = [number, number, number, number, number];

const myNumbers: fiveNumbers = [1, 2, 3, 4, 5];

function sumFiveNumbers(numbers: fiveNumbers): number {
	return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of five numbers:", sumFiveNumbers(myNumbers));

function showNumbers(numbers: readonly number[]): void {
	// numbers[0] = 100; // This line would cause a TypeScript error because 'numbers' is readonly.
	numbers.forEach((num) => console.log(num));
}

const nums: readonly number[] = [10, 20, 30, 40, 50];

showNumbers(nums);
