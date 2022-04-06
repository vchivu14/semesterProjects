// Why
// JavaScript is single-threaded
// We don't want to block our application

// When
// over the network: for instance fetch
// file handling
// setTimeout / setInterval
// databases

// Promise state
// pending
// fullfilled
    // resolved
    // rejected

new Promise((resolve, reject) => {
    // // resolve("Everything went well");
    // reject("Something went wrong");
    try {
        throw new Error("bomb!");
        resolve("Everything went well");
    } catch(errorMessage) {
        reject("Something went wrong " + errorMessage);
    }
})
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage));

function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("good");
            } catch {
                reject("bad");
            }
        }, 4000);
    });
}

// an async function is a function wrapped in a PROMISE

// async function callMyCustomPromise() {
//     const message = await somethingGoodSomethingBad();
//     console.log(message);
// }

// create an IIFE to call immediately the above function

// (async function callMyCustomPromise() {
//     const message = await somethingGoodSomethingBad();
//     console.log(message);
// })()

// still this will return an error because the await needs to be handled

(async function callMyCustomPromise() {
    try {
        const message = await somethingGoodSomethingBad();
        console.log(message);
    } catch (errorMessage) {
        console.log(errorMessage);
    }
})()

const fileHandling = handleFile();
const fileHandling2 = handleFile();
Promise.all([fileHandling, fileHandling2])