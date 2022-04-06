//hoisting


// anonymous
const addInAVariable = function add(x,y) {
    return x + y;
}
console.log(addInAVariable(2,5));

const addArrowFunction = (x, y) => x + y;

function doActionWithSomeone(anyFunctionReference, name) {
    anyFunctionReference(name);
}
const running = (name) => console.log(`${name} is running`);
doActionWithSomeone(running, "Anders");

//undefined JS = void Java

function doActionWithSomeone(anyFunctionReference, name) {
    return anyFunctionReference(name);
}
const fishing = (name) => `${name} is fishing`;
console.log(doActionWithSomeone(fishing, "Alex"));

// console.log(console.log);
// console.log(console.log());

const passing = (name) => console.log(`${name} is passing by.`);
doActionWithSomeone(passing, "Vlad");

const doSomething = (parm) => console.log(`${parm} is passing by.`);
doSomething("Vlad");
