/* Index Signatures */
// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// interface TransactionObj {
//   readonly [index: string]: number;
// }

// const todaysTransactions: TransactionObj = {
//   Pizza: 10,
//   Books: 5,
//   Job: 1,
// };
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: 10;
  Books: 5;
  Job: 1;
}
const todaysTransactions: TransactionObj = {
  //Now I can add more indx, however, i cant skip inherted onces
  Pizza: 10,
  Books: 5,
  Job: 1,
  Visit: 3,
};

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 100; //cant modify since it is readonly
// console.log(todaysTransactions["Hola"]); //undefined

interface Student {
  //Index signature
  [key: string]: string | number | string[] | undefined;
  name: string;
  GPA: number;
  classes?: string[];
  age: number;
}
const student: Student = {
  name: "Lokesh",
  GPA: 5.5,
  classes: ["Math", "Phisics"],
  age: 26,
};
// console.log(student.test);
for (const key in student) {
  // console.log(`${key}: ${student[key]}`); //with index signature
  console.log(`${key}: ${student[key as keyof Student]}`); //without index signature
}
console.log("------------");
Object.keys(student).map((key) => {
  // console.log(key as keyof typeof student); //keys
  console.log(student[key as keyof typeof student]); //values
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};
console.log("------------");
console.log(logStudentKey(student, "name"));
