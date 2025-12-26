function withoutReturn(): void {
	console.log("This function does not return anything.");
}

withoutReturn();

function greeting(name: string): string {
	return `Hello, ${name}!`;
}

function preGreeting(fnc: (name: string) => string, userName: string): void {
	console.log("Preparing to greet...");
	const greet = fnc(userName);
	console.log(greet);
}

preGreeting(greeting, "Alice");

function firstElement<T>(arr: T[]): T | undefined {
	return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

function mergeObjects<U, V>(obj1: U, obj2: V): U & V {
	return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ name: "Alice" }, { age: 30 });
console.log(merged);

function biggestNumber<T extends number | string>(a: T, b: T): T {
	return a > b ? a : b;
}

console.log(biggestNumber(10, 20));
console.log(biggestNumber("apple", "banana"));

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
	return [...arr1, ...arr2];
}

const mergedArray = mergeArrays([1, 2, 3], [4, 5, 6]);
console.log(mergedArray);

const mergedStringArray = mergeArrays<string | number>([1, 2, 3], ["c", "d"]);
console.log(mergedStringArray);

function modernGreeting(name: string, greet?: string): string {
	if (greet) {
		return `${greet}, ${name}!`;
	}
	return `Hello, ${name}!`;
}

console.log(modernGreeting("Bob"));
console.log(modernGreeting("Bob", "Good morning"));

function sum(firstNumber: number, secondNumber: number = 10): number {
	return firstNumber + secondNumber;
}

console.log(sum(5));
console.log(sum(5, 15));

function doSomething(x: unknown): void {
	if (typeof x === "number") {
		console.log(`The number is ${x}`);
	} else if (typeof x === "string") {
		console.log(`The string is ${x}`);
	} else {
		console.log("Unknown type");
	}
}

doSomething(42);
doSomething("Hello");
doSomething(true);

function showErrorMessage(msg: string): never {
	throw new Error(msg);
}

// showErrorMessage("This is a critical error!");

function sumAll(...numbers: number[]): number {
	return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(10, 20, 30));

function showProductDetails(product: {
	name: string;
	price: number;
	isAvailable: boolean;
}): void {
	console.log(`The product ${product.name} costs $${product.price}.`);

	if (product.isAvailable) {
		console.log("The product is available.");
	} else {
		console.log("The product is not available.");
	}
}

showProductDetails({ name: "Laptop", price: 999.99, isAvailable: true });
showProductDetails({ name: "Smartphone", price: 499.99, isAvailable: false });
