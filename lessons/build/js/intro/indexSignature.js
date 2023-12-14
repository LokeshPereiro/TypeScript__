"use strict";
/* Index Signatures */
// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }
const todaysTransactions = {
    //Now I can add more indx, however, i cant skip inherted onces
    Pizza: 10,
    Books: 5,
    Job: 1,
    Visit: 3,
};
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Lokesh",
    GPA: 5.5,
    classes: ["Math", "Phisics"],
    age: 26,
};
// console.log(student.test);
for (const key in student) {
    // console.log(`${key}: ${student[key]}`); //with index signature
    console.log(`${key}: ${student[key]}`); //without index signature
}
console.log("------------");
Object.keys(student).map((key) => {
    // console.log(key as keyof typeof student); //keys
    console.log(student[key]); //values
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
console.log("------------");
console.log(logStudentKey(student, "name"));
