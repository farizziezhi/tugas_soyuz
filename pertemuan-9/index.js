// for (let i = 0; i < 5; i++) {
//   console.log("Ini iterasi ke-" + (i + 1) + ". Nilai i adalah " + i);
// }

// let j = 0;

// while (j < 5) {
//   console.log(
//     "Hello World " + "Ini iterasi ke-" + (j + 1) + ". Nilai j adalah " + j
//   );
//   j++;
// }

// let jawaban = "";

// while (jawaban !== "apel") {
//   jawaban = prompt("Ini apa ya");
// }
// alert("betul!");

// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     // break;
//     // continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log("Ini adalah baris ke-" + i + ", kolom ke-" + j);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   let aste = "";
//   for (let j = 1; j <= i; j++) {
//     aste += "*";
//   }
//   console.log(aste);
// }

// for (let i = 1; i <= 5; i++) {
//   let aste = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     aste += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     aste += "*";
//   }

//   console.log(aste);
// }

//     *
//    **
//   ***
//  ****
// *****

// sayHello();

// function sayHello() {
//   console.log("Hello World");
// }

// // sayHello();

// function addTwoNumber(firstNumber, secondNumber) {
//   let ans = firstNumber + secondNumber;
//   console.log(ans);
// }

// addTwoNumber(2);

// const hai = function() {
//   console.log("Hello World");
// }

// const hai = () => {
//     console.log("Hello World");
// }

// const hai = () => console.log("Hello World");

// hai();

// arrow function

// explisit

// const isBlue = (color) => {
//   if (color == "Blue") {
//     return "Yooooo";
//   } else {
//     return "Hell nah";
//   }
// };

// implisit

// const isBlue = (color) => "hi" + color;

// console.log(isBlue("Blue"));

// return an object

// const get = (first, second) => {
//     return {
//         full: first + " " + second
//     }
// }

// console.log(get('Jamal', 'Udin'));

// Built in function

// let str = "I am learning jawascript!";

// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.slice(0, 5));
// console.log(str.split(" "));
// console.log(str.substring(2, 4));

// string convert

// let pass = 123456789;

// console.log(typeof pass);
// pass = String(pass);
// console.log(typeof pass);

// number convert

// let num = "256";

// console.log(typeof num);
// num = Number(num);
// console.log(typeof num);

// console.log(Math.random());
// console.log(Math.round(0.9));

// console.log(isNaN("314e"));
// console.log(isNaN("314"));
