"use strict";
//Convert to more or less specific
let a = "Hellow";
let b = a; //less specific
let c = a; //more specific (string type)
//This sintax is not very common in react
let d = "world";
// console.log(d);
let e = "hell";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
//Nothing change eventhought there is no error still concat numbers
let myValNum = addOrConcat(2, 2, "concat");
console.log(myValNum);
//Double casting
10;
/* DOM Objects */
const img = document.querySelector("img");
const myImg = document.getElementById("img");
const myImg2 = document.getElementById("#img");
img.src;
myImg.src;
