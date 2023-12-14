//Type Assertion - Casting
type One = string;
type Two = string | number;
type Three = "hello";

//Convert to more or less specific
let a: One = "Hellow";
let b = a as Two; //less specific
let c = a as Three; //more specific (string type)

//This sintax is not very common in react
let d = <One>"world";
// console.log(d);
let e = <string | number>"hell";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

//Nothing change eventhought there is no error still concat numbers
let myValNum: number = addOrConcat(2, 2, "concat") as number;
console.log(myValNum);

//Double casting
10 as unknown as string;

/* DOM Objects */
const img = document.querySelector("img")!;
const myImg = document.getElementById("img") as HTMLImageElement;
const myImg2 = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
