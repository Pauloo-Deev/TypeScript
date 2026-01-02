import { someName as name } from "./changeName";
import * as numbersModule from "./numbers";
import { variable } from "./veriable";
import importGreeting from "./greet";
import { Product } from "./myTypes";
import {
	variableName,
	variableSurname,
	variableCourse,
	variableIsStudent,
	variableAge,
	showStudentInfo,
} from "./mutiple";

const greetingMessage = importGreeting("Student");
console.log(greetingMessage);

console.log(variable);

console.log(`Variable Name: ${variableName}`);
console.log(`Variable Surname: ${variableSurname}`);
console.log(`Variable Course: ${variableCourse}`);
console.log(`Variable Is Student: ${variableIsStudent}`);
console.log(`Variable Age: ${variableAge}`);

const studentInfo: string = showStudentInfo();
console.log(studentInfo);

console.log(`Imported Name: ${name}`);

console.log(`First Number: ${numbersModule.firstNumber}`);
console.log(`Second Number: ${numbersModule.secondNumber}`);
console.log(`Sum of Numbers: ${numbersModule.sumNumbers()}`);

class StoreProduct implements Product {
	name: string;
	price: number;
	isAvailable: boolean;

	constructor(name: string, price: number, isAvailable: boolean) {
		this.name = name;
		this.price = price;
		this.isAvailable = isAvailable;
	}

	showProductDetails(): string {
		return `Product Name: ${this.name}, Price: ${this.price}, Available: ${this.isAvailable}`;
	}
}

const newProduct = new StoreProduct("Laptop", 1500, true);
console.log(newProduct.showProductDetails());
