// 🔹 1. What is a Promise?
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("✅ Operation successful");
    } else {
        reject("❌ Operation failed");
    }
});

promise
    .then((res) => console.log("Then:", res))
    .catch((err) => console.error("Catch:", err))
    .finally(() => console.log("Finally: always runs"));

// ========================================================

// 🔹 2. Promise States
// - pending: initial state
// - fulfilled: operation completed successfully
// - rejected: operation failed

// ========================================================

// 🔹 3. Promise Chaining
function step1() {
    return new Promise((res) => setTimeout(() => res("Step 1"), 300));
}

function step2(prev) {
    return new Promise((res) => setTimeout(() => res(prev + " → Step 2"), 300));
}

function step3(prev) {
    return new Promise((res) => setTimeout(() => res(prev + " → Step 3"), 300));
}

step1()
    .then(step2)
    .then(step3)
    .then((result) => console.log("Chained Result:", result));

// ========================================================

// 🔹 4. Returning Promises from Functions
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, name: "Alice" }), 1000);
    });
}

fetchUser(101).then((user) => console.log("User:", user));

// ========================================================

// 🔹 5. Error Handling in Promises
function failOperation() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Oops! Something went wrong"), 500);
    });
}

failOperation()
    .then((data) => console.log("Success:", data))
    .catch((err) => console.error("Caught Error:", err));

// ========================================================

// 🔹 6. Promise.all – Parallel Execution (waits for all)
function getData(id) {
    return new Promise((res) => setTimeout(() => res(`Data ${id}`), id * 200));
}

Promise.all([getData(1), getData(2), getData(3)])
    .then((values) => console.log("All results:", values))
    .catch((err) => console.error("One failed:", err));

// ========================================================

// 🔹 7. Promise.race – Returns first settled (fulfilled or rejected)
const fast = new Promise((res) => setTimeout(() => res("Fast"), 200));
const slow = new Promise((res) => setTimeout(() => res("Slow"), 1000));

Promise.race([fast, slow])
    .then((winner) => console.log("Race winner:", winner));

// ========================================================

// 🔹 8. Promise.allSettled – Waits for all, returns results (even if some failed)
const good = new Promise((res) => setTimeout(() => res("Good"), 500));
const bad = new Promise((_, rej) => setTimeout(() => rej("Bad"), 300));

Promise.allSettled([good, bad])
    .then((results) => console.log("AllSettled:", results));
// Output: [
//   { status: 'rejected', reason: 'Bad' },
//   { status: 'fulfilled', value: 'Good' }
// ]

// ========================================================

// 🔹 9. Promise.any – Resolves with the first successful promise
const fail1 = new Promise((_, rej) => setTimeout(() => rej("Fail 1"), 100));
const success = new Promise((res) => setTimeout(() => res("Success!"), 300));
const fail2 = new Promise((_, rej) => setTimeout(() => rej("Fail 2"), 200));

Promise.any([fail1, success, fail2])
    .then((result) => console.log("Any result:", result))
    .catch((err) => console.error("All failed:", err)); // if all fail

// ========================================================

// 🔹 10. Promisifying Callback-based APIs
function oldSchoolCallback(userId, callback) {
    setTimeout(() => {
        callback(null, { id: userId, name: "CallbackUser" });
    }, 500);
}

function promisified(userId) {
    return new Promise((resolve, reject) => {
        oldSchoolCallback(userId, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

promisified(7).then((user) => console.log("Promisified result:", user));

// ========================================================

// 🔹 11. Custom Delay Utility (useful for testing)
function delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

async function runWithDelay() {
    console.log("⏳ Waiting...");
    await delay(1000);
    console.log("✅ Done after 1 second");
}

runWithDelay();

// ========================================================

// 🔹 12. Best Practices
// ✅ Always return promises
// ✅ Chain .catch at the end
// ✅ Use try/catch in async/await
// ✅ Prefer async/await for cleaner flow in real-world apps