// introduction to classes in JavaScript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}               

// Example usage
const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old. 
// Creating another instance
const person2 = new Person('Bob', 25);
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.    


// Adding a method to update age
class Person {      
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`${this.name}'s age has been updated to ${this.age}.`);
    }
}
// Example usage
const person3 = new Person('Charlie', 28);
person3.greet(); // Output: Hello, my name is Charlie and I am 28 years old.
person3.updateAge(29); // Output: Charlie's age has been updated to 29.
person3.greet(); // Output: Hello, my name is Charlie and I am 29 years old.    
// Inheritance example
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Call the parent class constructor
        this.position = position;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.position}.`);
    }
}   
// Example usage
const employee1 = new Employee('David', 35, 'Software Engineer');
employee1.greet(); // Output: Hello, my name is David, I am 35 years old and I work as a Software Engineer.
// Creating another employee instance
employee1.age = 36; // Updating age
const employee2 = new Employee('Eve', 29, 'Data Scientist');
employee2.greet(); // Output: Hello, my name is Eve, I am 29 years old and I work as a Data Scientist.
// Adding a method to Employee class
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.position}.`);
    }

    promote(newPosition) {
        this.position = newPosition;
        console.log(`${this.name} has been promoted to ${this.position}.`);
    }
}
// Example usage
const employee3 = new Employee('Frank', 40, 'Project Manager');
employee3.greet(); // Output: Hello, my name is Frank, I am 40 years old and I work as a Project Manager.
employee3.promote('Senior Project Manager'); // Output: Frank has been promoted to Senior Project Manager.
employee3.greet(); // Output: Hello, my name is Frank, I am 40 years old and I work as a Senior Project Manager.
// Static method example
class Utility {
    static calculateSum(a, b) {
        return a + b;
    }
}
// Example usage
console.log(Utility.calculateSum(5, 10)); // Output: 15
// Static method in a class with inheritance
class MathUtility extends Utility {
    static calculateProduct(a, b) {
        return a * b;
    }
}
// Example usage
console.log(MathUtility.calculateProduct(5, 10)); // Output: 50 
MathUtility.calculateSum(5, 10); // Output: 15 (inherited from Utility class)
// Using getters and setters in a class
class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        this._author = newAuthor;
    }

    describe() {
        console.log(`"${this.title}" by ${this.author}`);
    }
}
// Example usage
const book1 = new Book('1984', 'George Orwell');
book1.describe(); // Output: "1984" by George Orwell
book1.title = 'Animal Farm';
book1.author = 'George Orwell';
book1.describe(); // Output: "Animal Farm" by George Orwell
// Using inheritance with getters and setters
class EBook extends Book {
    constructor(title, author, fileSize) {
        super(title, author);
        this._fileSize = fileSize;
    }

    get fileSize() {
        return this._fileSize;
    }

    set fileSize(newFileSize) {
        this._fileSize = newFileSize;
    }

    describe() {
        console.log(`"${this.title}" by ${this.author}, File Size: ${this.fileSize}MB`);
    }
}
// Example usage
const ebook1 = new EBook('The Great Gatsby', 'F. Scott Fitzgerald', 2);
ebook1.describe(); // Output: "The Great Gatsby" by F. Scott Fitzgerald, File Size: 2MB
ebook1.fileSize = 3;
ebook1.describe(); // Output: "The Great Gatsby" by F. Scott Fitzgerald, File Size: 3MB
// Using private fields in a class
class Secret {
    #secretCode;

    constructor(secretCode) {
        this.#secretCode = secretCode;
    }

    revealSecret() {
        console.log(`The secret code is: ${this.#secretCode}`);
    }

    setSecret(newSecret) {
        this.#secretCode = newSecret;
        console.log('Secret code updated.');
    }
}
// Example usage
const secret1 = new Secret('12345');
secret1.revealSecret(); // Output: The secret code is: 12345
secret1.setSecret('67890'); // Output: Secret code updated.
secret1.revealSecret(); // Output: The secret code is: 67890
// Attempting to access private field directly will result in an error
// console.log(secret1.#secretCode); // Uncaught SyntaxError: Private field '#secretCode' must be declared in an enclosing class
// Using class expressions
const Animal = class {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
// Example usage
const animal1 = new Animal('Dog');
animal1.speak(); // Output: Dog makes a noise.
// Using class expressions with inheritance
const Dog = class extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
// Example usage
const dog1 = new Dog('Buddy');
dog1.speak(); // Output: Buddy barks. 
// Using class expressions with static methods
const MathOperations = class {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }
}
// Example usage
console.log(MathOperations.add(10, 5)); // Output: 15
console.log(MathOperations.subtract(10, 5)); // Output: 5   
// Using class expressions with getters and setters
const User = class {
    constructor(username, email) {
        this._username = username;
        this._email = email;
    }

    get username() {
        return this._username;
    }

    set username(newUsername) {
        this._username = newUsername;
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        this._email = newEmail;
    }

    displayInfo() {
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
}
// Example usage
const user1 = new User('john_doe', 'sa2@gmail');
user1.displayInfo(); // Output: Username: john_doe, Email: sa2@gmail
user1.username = 'jane_doe';
user1.email = 'jane@gmail';
user1.displayInfo(); // Output: Username: jane_doe, Email: jane@gmail
// Using class expressions with inheritance and getters/setters
const Admin = class extends User {
    constructor(username, email, permissions) {
        super(username, email);
        this._permissions = permissions;
    }

    get permissions() {
        return this._permissions;
    }

    set permissions(newPermissions) {
        this._permissions = newPermissions;
    }

    displayInfo() {
        console.log(`Username: ${this.username}, Email: ${this.email}, Permissions: ${this.permissions}`);
    }
}
// Example usage
const admin1 = new Admin('admin_user', 'ss@GMAIL', 'all');
admin1.displayInfo(); // Output: Username: admin_user, Email: ss@GMAIL, Permissions: all
admin1.permissions = 'read-only';
admin1.displayInfo(); // Output: Username: admin_user, Email: ss@GMAIL, Permissions: read-only
// Using class expressions with private fields
const PrivateData = class {
    #data;

    constructor(data) {
        this.#data = data;
    }

    revealData() {
        console.log(`Private Data: ${this.#data}`);
    }

    setData(newData) {
        this.#data = newData;
        console.log('Private data updated.');
    }
}
// Example usage
const privateData1 = new PrivateData('sensitive_info');
privateData1.revealData(); // Output: Private Data: sensitive_info
privateData1.setData('new_info'); // Output: Private data updated.
privateData1.revealData(); // Output: Private Data: new_info
// Attempting to access private field directly will result in an error
// console.log(privateData1.#data); // Uncaught SyntaxError: Private field '#data' must be declared in an enclosing class
// Using class expressions  with static methods
const StringUtils = class {
    static toUpperCase(str) {
        return str.toUpperCase();
    }

    static toLowerCase(str) {
        return str.toLowerCase();
    }
}
// Example usage
console.log(StringUtils.toUpperCase('hello')); // Output: HELLO
console.log(StringUtils.toLowerCase('WORLD')); // Output: world
// Using class expressions with static methods and inheritance
const ExtendedStringUtils = class extends StringUtils {
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
// Example usage
console.log(ExtendedStringUtils.capitalize('hello world')); // Output: Hello world
// Using class expressions with static methods and inheritance
const AdvancedMathUtils = class extends MathOperations {
    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
}
// Example usage
console.log(AdvancedMathUtils.multiply(10, 5)); // Output: 50
console.log(AdvancedMathUtils.divide(10, 2)); // Output: 5
try {
    console.log(AdvancedMathUtils.divide(10, 0)); // Throws error: Cannot divide by zero
} catch (error) {
    console.error(error.message); // Output: Cannot divide by zero
}
// Using class expressions with static methods and inheritance
const AdvancedStringUtils = class extends StringUtils {
    static reverse(str) {
        return str.split('').reverse().join('');
    }
}
// Example usage
console.log(AdvancedStringUtils.reverse('hello')); // Output: olleh
console.log(AdvancedStringUtils.toUpperCase('world')); // Output: WORLD
console.log(AdvancedStringUtils.toLowerCase('JAVA')); // Output: java 
// Using class expressions with static methods and inheritance
const AdvancedArrayUtils = class {
    static findMax(arr) {
        if (arr.length === 0) {
            throw new Error('Array cannot be empty');
        }
        return Math.max(...arr);
    }

    static findMin(arr) {
        if (arr.length === 0) {
            throw new Error('Array cannot be empty');
        }
        return Math.min(...arr);
    }
}
// Example usage
console.log(AdvancedArrayUtils.findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(AdvancedArrayUtils.findMin([1, 2, 3, 4, 5])); // Output: 1
try {
    console.log(AdvancedArrayUtils.findMax([])); // Throws error: Array cannot be empty
} catch (error) {
    console.error(error.message); // Output: Array cannot be empty
}
try {
    console.log(AdvancedArrayUtils.findMin([])); // Throws error: Array cannot be empty
}catch (error) {
    console.error(error.message); // Output: Array cannot be empty
}
// Using class expressions with static methods and inheritance
const AdvancedObjectUtils = class {
    static merge(obj1, obj2) {
        return { ...obj1, ...obj2 };
    }

    static deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
}
// Example usage
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = AdvancedObjectUtils.merge(obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }
const clonedObj = AdvancedObjectUtils.deepClone(mergedObj);
console.log(clonedObj); // Output: { a: 1, b: 3, c: 4 }
clonedObj.a = 10; // Modifying cloned object
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 } (original object remains unchanged)
console.log(clonedObj); // Output: { a: 10, b: 3, c: 4 } (cloned object reflects the change)
// Using class expressions with static methods and inheritance
const AdvancedDateUtils = class {
    static formatDate(date) {
        return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
    }

    static parseDate(dateString) {
        return new Date(dateString);
    }
}
// Example usage
const date = new Date('2023-10-01');
console.log(AdvancedDateUtils.formatDate(date)); // Output: 2023-10-01
const parsedDate = AdvancedDateUtils.parseDate('2023-10-01');
console.log(parsedDate); // Output: 2023-10-01T00:00:00.000Z (Date object)
console.log(AdvancedDateUtils.formatDate(parsedDate)); // Output: 2023-10-01
// Using class expressions with static methods and inheritance
const AdvancedJSONUtils = class {
    static stringify(obj) {
        return JSON.stringify(obj);
    }

    static parse(jsonString) {
        return JSON.parse(jsonString);
    }
}
// Example usage
const jsonObj = { name: 'Alice', age: 30 };
const jsonString = AdvancedJSONUtils.stringify(jsonObj);
console.log(jsonString); // Output: {"name":"Alice","age":30}
const parsedObj = AdvancedJSONUtils.parse(jsonString);
console.log(parsedObj); // Output: { name: 'Alice', age: 30 }
console.log(parsedObj.name); // Output: Alice
console.log(parsedObj.age); // Output: 30
// Using class expressions with static methods and inheritance
const AdvancedURLUtils = class {
    static parseURL(url) {
        const parser = new URL(url);
        return {
            protocol: parser.protocol,
            host: parser.host,
            pathname: parser.pathname,
            search: parser.search,
            hash: parser.hash
        };
    }

    static buildURL({ protocol, host, pathname, search, hash }) {
        return `${protocol}//${host}${pathname}${search}${hash}`;
    }
}
// Example usage
const url = 'https://example.com/path?query=123#fragment';
const parsedURL = AdvancedURLUtils.parseURL(url);
console.log(parsedURL);
// Output: { protocol: 'https:', host: 'example.com', pathname: '/path', search: '?query=123', hash: '#fragment' }
const builtURL = AdvancedURLUtils.buildURL(parsedURL);
console.log(builtURL); // Output: https://example.com/path?query=123#fragment
// Using class expressions with static methods and inheritance
const AdvancedArrayUtilsExtended = class extends AdvancedArrayUtils {
    static findAverage(arr) {
        if (arr.length === 0) {
            throw new Error('Array cannot be empty');
        }
        const sum = arr.reduce((acc, val) => acc + val, 0);
        return sum / arr.length;
    }
}
// Example usage
console.log(AdvancedArrayUtilsExtended.findAverage([1, 2, 3, 4, 5])); // Output: 3
try {
    console.log(AdvancedArrayUtilsExtended.findAverage([])); // Throws error: Array cannot be empty
}
catch (error) {
    console.error(error.message); // Output: Array cannot be empty
}