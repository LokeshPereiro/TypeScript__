"use strict";
//Literal types
let myName; //Now my type is leterally "Lok"
const add = (a, b) => {
    return a + b;
};
//function with no return statement are void type
//We call it side-effect function that return nothing at all..
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("Hellow");
console.log(`Result: ${add(50, 50)}`);
//option param
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//default param
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
console.log(addAll(2, 3));
console.log(sumAll(2, 3));
//Rest operator parameter
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
const total2 = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(10, 10, 10));
console.log(total2(1, 10, 10, 10));
//Never type
const createErr = (errMsg) => {
    throw new Error(errMsg);
};
const infiniteLoop = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "String";
    if (typeof isNumber(value))
        return "Number";
    return createErr("Something went wrong!");
};
console.log(numberOrString(1000));
