//Type Aliases
type strNumArr = (string | number)[];
//We can not do it into interfaces
type Tekken = {
  name?: string;
  active: boolean;
  appearances: strNumArr;
};

//Literal types
let myName: "Lok"; //Now my type is leterally "Lok"

const add = (a: number, b: number) => {
  return a + b;
};

//function with no return statement are void type
//We call it side-effect function that return nothing at all..
const logMsg = (msg: any): void => {
  console.log(msg);
};
logMsg("Hellow");
console.log(`Result: ${add(50, 50)}`);

//option param
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
//default param
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};
console.log(addAll(2, 3));
console.log(sumAll(2, 3));

//Rest operator parameter
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};
const total2 = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(10, 10, 10));
console.log(total2(1, 10, 10, 10));

//Never type
const createErr = (errMsg: string) => {
  throw new Error(errMsg);
};

const infiniteLoop = () => {
  let i = 1;

  while (true) {
    i++;
    if (i > 100) break;
  }
};
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "String";
  if (typeof isNumber(value)) return "Number";
  return createErr("Something went wrong!");
};
console.log(numberOrString(1000));
