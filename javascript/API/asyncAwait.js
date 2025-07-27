// 🔹 What is async/await?
// A modern way to write asynchronous code that looks synchronous.
// Built on top of Promises.
// Introduced in ES2017 (ES8).

// 🔹 async keyword:
// Declares a function that always returns a Promise.
async function sayHello() {
    return "Hello!";
}

sayHello().then(console.log); // "Hello!"

// 🔹 await keyword:
// Used inside async functions to pause until a Promise resolves.

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Alice" });
        }, 1000);
    });
}

async function getData() {
    console.log("Fetching...");
    const result = await fetchData(); // pauses here
    console.log("Result:", result);
}

getData();
// Output:
// Fetching...
// (after 1 sec) Result: { id: 1, name: 'Alice' }

// 🔹 Error handling with try...catch
function fetchWithError(simulateError = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (simulateError) reject("Something went wrong");
            else resolve("Data loaded");
        }, 1000);
    });
}

async function handleFetch() {
    try {
        const result = await fetchWithError(); // change to true to simulate error
        console.log("Success:", result);
    } catch (err) {
        console.error("Error caught:", err);
    }
}

handleFetch();

// 🔹 Sequential awaits
async function multiStep() {
    const a = await new Promise((res) => setTimeout(() => res("Step A"), 500));
    const b = await new Promise((res) => setTimeout(() => res("Step B"), 500));
    const c = await new Promise((res) => setTimeout(() => res("Step C"), 500));
    console.log(a, b, c);
}

multiStep(); // Takes 1.5 sec total

// 🔹 Parallel await using Promise.all
async function parallelSteps() {
    const [a, b, c] = await Promise.all([
        new Promise((res) => setTimeout(() => res("A"), 500)),
        new Promise((res) => setTimeout(() => res("B"), 500)),
        new Promise((res) => setTimeout(() => res("C"), 500))
    ]);
    console.log("Parallel:", a, b, c);
}

parallelSteps(); // Takes ~0.5 sec total

// 🔹 await in event listener (realistic usage)
document.getElementById("loadUser").addEventListener("click", async () => {
    const user = await fetchData();
    console.log("User loaded on button click:", user);
});

// 🔹 await works only inside async functions
// ❌ This will throw:
// const result = await fetchData(); // SyntaxError

// ✅ Wrap it inside an async IIFE (Immediately Invoked Function Expression)
(async () => {
    const data = await fetchData();
    console.log("Inside IIFE:", data);
})();