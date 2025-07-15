console.log("Hello, World!");
// This is a simple JavaScript program that prints "Hello, World!" to the console.
// You can run this code in any JavaScript environment, such as a web browser or Node.js.
// To execute this code, simply copy and paste it into your JavaScript console or save it
// in a file named Helloworld.js and run it using Node.js with the command:
// node Helloworld.js
// Enjoy coding!
const greeting = "Hello, World!";
function greetingFunction() {
    console.log(greeting.codePointAt(0)); // Outputs the Unicode code point of the first character
    console.log(greeting); // Outputs the greeting message
    console.log(`Greeting length: ${greeting.length}`); // Outputs the length of the greeting message
    console.log(`Greeting in uppercase: ${greeting.toUpperCase()}`);
    console.log(`Greeting in lowercase: ${greeting.toLowerCase()}`);
    console.log(`Greeting includes 'World': ${greeting.includes("World")}`);
    console.log(`Greeting starts with 'Hello': ${greeting.startsWith("Hello")}`);
    console.log(`Greeting ends with '!': ${greeting.endsWith("!")}`);
    console.log(`Greeting split into words: ${greeting.split(" ")}`);
    console.log(`Greeting replaced 'World' with 'Universe': ${greeting.replace("World", "Universe")}`);
    console.log(`Greeting trimmed: '${greeting.trim()}'`);
    console.log(`Greeting index of 'World': ${greeting.indexOf("World")}`);
    console.log(`Greeting last index of 'o': ${greeting.lastIndexOf("o")}`);
    console.log(`Greeting substring from index 0 to 5: ${greeting.substring(0, 5)}`);
    console.log(`Greeting slice from index 7: ${greeting.slice(7)}`);
    console.log(`Greeting char at index 4: ${greeting.charAt(4)}`);
    console.log(`Greeting char code at index 0: ${greeting.charCodeAt(0)}`);
    console.log(`Greeting locale compare with 'Hello, World!': ${greeting.localeCompare("Hello, World!")}`);
    console.log(`Greeting repeated 2 times: ${greeting.repeat(2)}`);
    console.log(`Greeting match 'World': ${greeting.match(/World/)}`);
    console.log(`Greeting search for 'Hello': ${greeting.search(/Hello/)}`);
    console.log(`Greeting includes 'Hello': ${greeting.includes("Hello")}`);
    console.log(`Greeting starts with 'Hello': ${greeting.startsWith("Hello")}`);
    console.log(`Greeting ends with '!': ${greeting.endsWith("!")}`);
    console.log(`Greeting to string: ${greeting.toString()}`);
    console.log(`Greeting value of: ${greeting.valueOf()}`);
    console.log(`Greeting to locale string: ${greeting.toLocaleString()}`);
    console.log(`Greeting to JSON: ${JSON.stringify(greeting)}`);
    console.log(`Greeting to string with template literals: ${`Greeting: ${greeting}`   }`);
    console.log(`Greeting with backticks: ${`Hello, ${greeting.split(", ")[1]}`}`);
    return greeting;
}
// Call the greetingFunction to execute the greeting logic
let a = greetingFunction();
// The sayHello function encapsulates the greeting logic, making it reusable.
// You can modify the greeting variable to change the message displayed.
// This code serves as a basic introduction to JavaScript syntax and functions.
// Feel free to expand upon this example by adding more features or complexity.         
// For instance, you could add user input to customize the greeting message.
// Happy coding!
//radomly pick letters from the greeting string
let randomIndex = Math.floor(Math.random() * greeting.length);
let randomChar = greeting[randomIndex];
console.log(`Random character from greeting: ${randomChar}`); // Outputs a random character from the greeting
// Add a random property to the greeting string
greeting[randomIndex] = Math.random().toString();
// Note: Strings in JavaScript are immutable, so this won't actually change the string.
// Instead, we can simulate adding a property by using an object or a different approach.
// Here, we will create a new object to hold the greeting and the random property.
let greetingObject = { greeting: greeting,
 randomProperty: Math.random().toString()
};      
let b = greeting.indexOf(Math.random(0,greeting.length).toString())
console.log(`Random property added to greeting: ${b}`); // Outputs the random value added
console.log(`Final greeting: ${a}`); // Outputs the final greeting message