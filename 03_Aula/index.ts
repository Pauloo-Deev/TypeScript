let numbers: number[] = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
	console.log(`Index: ${i}, Value: ${numbers[i]}`);
}
numbers.push(60);
console.log("After pushing 60:", numbers);

const fruits: string[] = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
	console.log(`Index: ${i}, Fruit: ${fruits[i]}`);
}

fruits.push("Melon");
console.log("After pushing Melon:", fruits);

const nums: Array<number> = [5, 15, 25, 35, 45];

for (let i = 0; i < nums.length; i++) {
	console.log(`Index: ${i}, Number: ${nums[i]}`);
}

nums.push(55);
console.log("After pushing 55:", nums);

const arr1: any[] = [1, "Two", true, 4.5];

for (let i = 0; i < arr1.length; i++) {
	console.log(`Index: ${i}, Value: ${arr1[i]}, Type: ${typeof arr1[i]}`);
}

function sum(first: number, second: number): void {
	console.log(first + second);
}

sum(10, 20);

function greeting(name: string): string {
	return `Hello, ${name}!`;
}

console.log(greeting("Alice"));
const arr2: Array<any> = [100, "Hello", false, 3.14];

setTimeout(() => {
	const salary: number = 5000;
	console.log(`Salary after timeout: ${salary}`);
}, 2000);

function person(Info: { name: string; age: number }): string {
	return `Name: ${Info.name}, Age: ${Info.age}`;
}
console.log(person({ name: "Bob", age: 25 }));

function showNumbers(first: number, second?: number): void {
	console.log("First number:", first);

	second
		? console.log("Second number:", second)
		: console.log("Second number is not provided.");
}

showNumbers(10);
showNumbers(10, 20);

function showBalance(balance: number | string): void {
	console.log("Balance:", balance);
}

showBalance(1500);
showBalance("1500");

function showUserRole(role: boolean | string): void {
	if (typeof role === "boolean") {
		role
			? console.log("User is an Admin.")
			: console.log("User is a Regular User.");
	} else {
		console.log(`User role is: ${role}`);
	}
}

showUserRole(false);
showUserRole("Admin");
showUserRole("User");
showUserRole(true);

type ID = number | string;

function showId(id: ID): void {
	console.log(`ID: ${id}`);
}

showId(101);
showId("202A");

interface User {
	name: string;
	age: number;
	isAdmin: boolean;
}

const user1: User = {
	name: "Charlie",
	age: 30,
	isAdmin: true,
};

console.log("User1:", user1);

function showTypeUser(user: "Admin" | "User" | "Guest"): void {
	console.log(`User type is: ${user}`);
}

showTypeUser("Admin");
showTypeUser("User");
showTypeUser("Guest");
