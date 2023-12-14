/* Variable Types */
// let myName: string;
// myName = "Lokesh";

// let edad: number = 26;
// let esCumple: boolean = false;

// let anyType: any;
// anyType = "hola";
// anyType = 100;

// const sum = (a: number, b: number) => {
//   return a + b;
// };

// console.log(sum(10, 10));

// //union type
// let postId: string | number;
// let isActive: boolean | number | string;

// let re: RegExp = /\w+/g;

/* Obj and Array */
let strArr = ["pepe", "pepa", "jose"];
let guitars = ["strat", "les paul", 5200];
let mixedData = ["VVH", 1995, true];

// strArr[0] = 33;
strArr.unshift(33); //We can push diff types but ts would not like it

// strArr.forEach((ele) => {
//   console.log(ele);
// });

guitars = strArr; // -> This is possible bc guitas has string and number types inside but not other way around

let bands: string[] = [];
bands.push("Led Zeppelin");

let mixTyped: [string, number, boolean] = ["Lok", 26, true];
let mixUnion = ["Esp", 33, false];
// mixTyped = mixUnion; //No possible, strict types goes first
mixUnion = mixTyped; //Possible

/* Objects */
let myObj: object;
myObj = []; //For vanilla js arr[] is kind of obj
console.log(typeof myObj);
//No differences
myObj = bands;
myObj = {};

const exObj = {
  prop1: "Lok",
  prop2: true,
};

exObj.prop1 = "Lokeshh";

//You normally use inside the class
// interface takkenCast {
//   name: string;
//   active?: boolean; //option, now it is not required
//   appearances: (string | number)[];
// }

type takkenCast = {
  name?: string;
  active: boolean;
  appearances: (string | number)[];
};

let JimInfo: takkenCast = {
  name: "Jim",
  active: true,
  appearances: ["Takken 3", 4, 5, "Takken 6"],
};

let DinoInfo: takkenCast = {
  name: "Dino",
  active: false,
  appearances: ["Takken 2", 3],
};
// console.log(DinoInfo);

const greetTekkenCast = (cast: takkenCast) => {
  //   return `Hello ${cast.name.toUpperCase()}`;
  //It will give you result but ts does not like it, so we need to make option too so that we can avoid error msg or check validation
  //   return `Hello ${cast.name?.toUpperCase()}`;
  if (cast.name) {
    return `Hello ${cast.name.toUpperCase()}`;
  } else {
    return "Hellow buddy";
  }
};

console.log(greetTekkenCast(DinoInfo));

/* Enums */
//"Unlike most Typescript features, Enums are not a type-level addition to JS but something added to the languages and run runtime"
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade);
