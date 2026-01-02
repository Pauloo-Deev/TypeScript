function myDecorator(): MethodDecorator {
	console.log("Decorator executed!");

	return function (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) {
		console.log("Executing decorator function...");
		console.log("Decorator applied to:", propertyKey);
		console.log("Descriptor:", descriptor);
		console.log("Target:", target);
	};
}

class myClass {
	@myDecorator()
	tesing(): void {
		console.log("Hello World!");
	}
}

const myInstance = new myClass();
myInstance.tesing();

function firstDecorator(): MethodDecorator {
	return function (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) {
		console.log("Inside First Decorator");
	};
}

function secondDecorator(): MethodDecorator {
	return function (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) {
		console.log("Inside Second Decorator");
	};
}

class DecoratorClass {
	@firstDecorator()
	@secondDecorator()
	testing(): void {
		console.log("Multiplying...");
	}
}

function classDecorator(constructor: Function) {
	console.log("Class decorator called on:", constructor.name);

	if (constructor.name === "User") {
		console.log("Creating user instance...");
	}
}

@classDecorator
class User {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const user = new User("John Doe");
console.log("User instance created:", user);

function enumerable(value: boolean) {
	return function (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) {
		descriptor.enumerable = value;
	};
}

class Machine {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	@enumerable(false)
	showName(): void {
		console.log(`Machine name is: ${this.name}`);
	}
}

const machine = new Machine("Excavator");
machine.showName();

class Monster {
	name?: string;
	age?: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	@enumerable(true)
	get showName(): string {
		return `Monster name is: ${this.name}`;
	}

	@enumerable(false)
	get showAge(): string {
		return `Monster age is: ${this.age}`;
	}
}
const monster = new Monster("Godzilla", 1000);
console.log(monster.showName);
console.log(monster.showAge);

function formatNumber(): PropertyDecorator {
	return function (target: any, propertyKey: string | symbol) {
		let value: string;

		const getter = function () {
			return value;
		};

		const setter = function (newVal: string) {
			value = newVal.padStart(5, "0");
		};

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}

class Id {
	@formatNumber()
	id: string;

	constructor(id: string) {
		this.id = id;
	}
}

const newId = new Id("1");
console.log("ID:", newId.id);

function createdDate(created: Function) {
	created.prototype.createdAt = new Date();
}

@createdDate
class Book {
	id;
	createdAt?: Date;

	constructor(id: number) {
		this.id = id;
	}
}

@createdDate
class Pen {
	id;
	createdAt?: Date;

	constructor(id: number) {
		this.id = id;
	}
}

const newBook = new Book(123);
const newPen = new Pen(456);

console.log("Book ID:", newBook.id);
console.log("Pen ID:", newPen.id);
console.log("Book created at:", newBook.createdAt);
console.log("Pen created at:", newPen.createdAt);

function checkIfPosted() {
	return function (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value;

		descriptor.value = function (...args: any[]) {
			if (args[1] === true) {
				console.log("This post has already been published.");
				return;
			} else {
				return originalMethod.apply(this, args);
			}
		};

		return descriptor;
	};
}

class Post {
	alreadyPosted: boolean = false;

	@checkIfPosted()
	post(content: string, alreadyPosted: boolean): void {
		this.alreadyPosted = true;
		console.log("Post published:", content);
	}
}

const myPost = new Post();
myPost.post("Hello Decorators!", myPost.alreadyPosted);
myPost.post("Trying to post again...", myPost.alreadyPosted);

function maxLength(length: number) {
	return function (target: any, propertyKey: string | symbol) {
		let value: string;

		const getter = function () {
			return value;
		};

		const setter = function (newVal: string) {
			if (newVal.length > length) {
				console.log(
					`Error: The length of ${String(
						propertyKey
					)} exceeds the maximum of ${length} characters.`
				);
			} else {
				value = newVal;
			}
		};

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}

class Admin {
	@maxLength(10)
	userName: string;

	constructor(userName: string) {
		this.userName = userName;
	}
}

const admin = new Admin("ShortName");
console.log("Admin username:", admin.userName);

const longNameAdmin = new Admin("ThisNameIsWayTooLong");
console.log("Admin username with long name attempt:", longNameAdmin.userName);
