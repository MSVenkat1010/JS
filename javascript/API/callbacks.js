// 🔹 What is a callback?
// A callback is a function passed as an argument to another function.
// It is called (invoked) after the parent function finishes its task.

function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Call the callback function
}

function askQuestion() {
    console.log("How are you?");
}

greet("Manju", askQuestion);
// Output:
// Hello, Manju
// How are you?

// 🔹 Anonymous function as a callback
greet("Sai", () => {
    console.log("Nice to meet you!");
});

// 🔹 Real-world async example using setTimeout
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "Alice" };
        callback(data);
    }, 1000);
}

fetchData((result) => {
    console.log("Received:", result);
});
// Output:
// Fetching data...
// (after 1 sec) Received: { id: 1, name: 'Alice' }

// 🔹 Error-first callback style (Node.js convention)
function readFileSimulate(callback) {
    const error = null; // Or simulate with: new Error("File not found");
    const content = "File content here";

    setTimeout(() => {
        callback(error, content);
    }, 1000);
}

readFileSimulate((err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
});

// 🔹 Callback Hell - when nesting gets out of control
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 done");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 done");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 done");
        callback();
    }, 1000);
}

// ❌ Callback Hell Example (deep nesting)
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed (callback hell)");
        });
    });
});

// ✅ Better alternative: Use Promises or async/await instead