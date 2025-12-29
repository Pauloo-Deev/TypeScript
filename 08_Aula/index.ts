class user {
	name!: string;
	age!: number;
}

const Paulo = new user();

Paulo.name = "Paulo";
Paulo.age = 30;

console.log(Paulo);

class NewUser {
	name;
	age;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

const Maria = new NewUser("Maria", 25);

console.log(Maria);

class Car {
	brand;
	model;
	year;
	readonly wheels = 4;

	constructor(brand: string, model: string, year: number) {
		this.brand = brand;
		this.model = model;
		this.year = year;
	}
}

const Fusca = new Car("Volkswagen", "Fusca", 1967);

console.log(Fusca);

class Machine {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
	guns;

	constructor(name: string, guns: number) {
		super(name);
		this.guns = guns;
	}
}

const destroyer = new KillerMachine("Destroyer", 4);

console.log(trator);
console.log(destroyer);

class Dwarf {
	name;

	constructor(name: string) {
		this.name = name;
	}

	greeting() {
		console.log(`Hey stranger, I'm ${this.name}`);
	}
}

const jimmy = new Dwarf("Jimmy");
jimmy.greeting();

class Truck {
	model: string;
	hp: number;

	constructor(model: string, hp: number) {
		this.model = model;
		this.hp = hp;
	}

	showDetails() {
		console.log(`Truck model: ${this.model} - HP: ${this.hp}`);
	}
}

const volvo = new Truck("Volvo", 400);
volvo.showDetails();

const scania = new Truck("Scania", 500);
scania.showDetails();

class Person {
	name: string;
	surname: string;

	constructor(name: string, surname: string) {
		this.name = name;
		this.surname = surname;
	}

	get getFullName(): string {
		return `${this.name} ${this.surname}`;
	}
}

const john = new Person("John", "Doe");
console.log(john.getFullName);

class Coords {
	x!: number;
	y!: number;

	set fillX(x: number) {
		if (x === 0) {
			return;
		}
		this.x = x;

		console.log("X coordinate filled successfully");
	}

	set fillY(y: number) {
		if (y === 0) {
			return;
		}
		this.y = y;

		console.log("Y coordinate filled successfully");
	}

	get getCoords() {
		return `X: ${this.x} Y: ${this.y}`;
	}
}

const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 20;

console.log(myCoords.getCoords);

interface showTitle {
	itemTitle(): string;
}

class BlogPost implements showTitle {
	title: string;
	views: number;

	constructor(title: string, views: number) {
		this.title = title;
		this.views = views;
	}

	itemTitle(): string {
		return `The blog post title is: ${this.title}`;
	}
}

const myPost = new BlogPost("Hello World", 300);
console.log(myPost.itemTitle());

class Base {
	someMethod(): void {
		console.log("Some method from base class");
	}
}

class NewBase extends Base {
	someMethod(): void {
		console.log("Overridden method in derived class");
	}
}

const myNewBase = new NewBase();
myNewBase.someMethod();

class PublicClass {
	public name = "Public Name";
}

const myPublicClass = new PublicClass();
console.log(myPublicClass.name);

class ProtectedClass {
	protected name = "Protected Name";

	protected showName(): string {
		return this.name;
	}
}

class ExtendedProtectedClass extends ProtectedClass {
	showName(): string {
		return `Extended: ${this.name}`;
	}
}

const myExtendedClass = new ExtendedProtectedClass();
console.log(myExtendedClass.showName());

class PrivateClass {
	private name = "Private Name";

	getName(): string {
		return this.name;
	}
	private showName(): string {
		return this.name;
	}

	showPrivateName(): string {
		return this.showName();
	}
}

class ExtendedPrivateClass extends PrivateClass {
	// Cannot access private members from base class
	// showName(): string {
	//     return this.name; // Error
	// }
}

const myPrivateClass = new PrivateClass();
console.log(myPrivateClass.getName());
// console.log(myPrivateClass.showName()); // Error: showName is private

class StaticMembers {
	static propFirst = "Static  Property";
}

console.log(StaticMembers.propFirst);

class Item<T, U> {
	firstItem: T;
	secondItem: U;

	constructor(firstItem: T, secondItem: U) {
		this.firstItem = firstItem;
		this.secondItem = secondItem;
	}

	get showItems(): string {
		return `First Item: ${this.firstItem} - Second Item: ${this.secondItem}`;
	}
}

const newItem = new Item("Book", 29.99);
console.log(newItem.showItems);

class ParameterProperties {
	constructor(
		public name: string,
		private quantity: number,
		protected price: number
	) {
		this.name = name;
		this.quantity = quantity;
		this.price = price;
	}

	get showQuantity(): number {
		return this.quantity;
	}

	get showPrice(): number {
		return this.price;
	}
}

const newParameter = new ParameterProperties("Banana", 5, 1.99);
console.log(newParameter.name);
// console.log(newParameter.quantity); // Error: quantity is private
// console.log(newParameter.price); // Error: price is protected
console.log(newParameter.showQuantity);
console.log(newParameter.showPrice);

const myClass = class<T> {
	value: T;

	constructor(value: T) {
		this.value = value;
	}

	get showValue(): string {
		return `Value: ${this.value}`;
	}
};

const myGenericClass = new myClass<number>(123);
console.log(myGenericClass.showValue);

abstract class AbstractClass {
	abstract showInfo(): void;
}

class ConcreteClass extends AbstractClass {
	name: string;

	constructor(name: string) {
		super();
		this.name = name;
	}

	showInfo(): void {
		console.log(`The name is: ${this.name}`);
	}
}

const myConcreteClass = new ConcreteClass("Abstract Example");
myConcreteClass.showInfo();

class Dog {
	name!: string;
}

class Cat {
	name!: string;
}

const dog: Dog = new Cat();
console.log(dog);
