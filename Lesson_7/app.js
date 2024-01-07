'use strict';

// Variable

// var, let, const

// var name = 'Tuan Anh'; // it dung

// let age = 70;
// age = age + 2;

// console.log(age);

// const isBoy = true;
// isBoy = false;
// console.log(isBoy);

// Data type
// let age = 70;
// let fullname = 'Tuấn Anh';
// let isHuman = true;

// console.log(age);
// console.log(fullname);
// console.log(isHuman);

// Toán tử: + - * / ** % =
// let a = 10;
// let b = 20;
// let c = a * b ** 3;

// console.log(c);

// Conditional
// let isHuman = false;

// if (isHuman) {
//   console.log('Ban la con nguoi');
// } else {
//   console.log('Ban khong phai con nguoi');
// }

// let age = -100;

// if (age < 0) {
//   console.log('Tuoi khong hop le');
// } else if (age < 18) {
//   console.log('Ban la thanh nien');
// } else if (age < 100) {
//   console.log('Ban la nguoi truong thanh');
// } else {
//   console.log('Ban qua la gia');
// }

// Template Literals - Template Strings

// let username = 'Tuan Anh';
// let age = 100;

// let info = 'Hello ' + username + ', Ban ' + age + ' tuoi';

// let info2 = `Hello ${username}, Ban ${age} tuoi`;

// console.log(info);
// console.log(info2);

// Function

// Declaration
// let num1 = logger();
// console.log(num1);

// function logger() {
//   //   console.log('Xin chao JS');
//   return 10;
// }

// // Expression
// const logger2 = function () {
//   //   console.log('Xin chao JS 2');
//   return 20;
// };

// let num2 = logger2();
// console.log(num2);

// // Arrow function
// const logger3 = () => console.log('Xin chao JS 3');

// logger3();

// function logger(name, age) {
//   // param
//   console.log(`Hello ${name}, you are ${age} years old`);
// }

// const logger2 = (name, age) => console.log(`Hello ${name}, you are ${age} years old`);

// // Calling / Running / Invoking

// logger('Que', 14); // argument
// logger('Le', 15);
// logger('Nhan', 14);
// logger('Huy', 16);

// logger2('Tuan Anh', 100);

// Exercise 1: Tạo function nhận vào 3 tham số là 3 cạnh của một tam giác. Hàm thực hiện việc in ra màn hình console chu vi và diện tích của tam giác đó.
// Ví dụ:
// 4, 5, 6
// Chu vi: ...
// Diện tích: ...

// function tamgiac(x, y, z) {
//   let c = x + y + z;
//   let p = c / 2;
//   let s = Math.sqrt(p * (p - x) * (p - y) * (p - z));
//   s = s.toFixed(4);
//   console.log(`Chu vi: ${c}`);
//   console.log(`Dien tich: ${s}`);
// }

// tamgiac(3, 4, 5);
// tamgiac(6, 8, 10);

// DOM - Document Object Module

// querySelector()

// const usernameInput = document.getElementById('username');
// const passwordInput = document.getElementById('password');
// const btnLogin = document.getElementById('btn-login');

// document.querySelector()

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const username = usernameInput.value;
//   const password = passwordInput.value;

//   usernameInput.value = '';
//   passwordInput.value = '';

//   console.log(username);
//   console.log(password);
// };

// btnLogin.addEventListener('click', handleSubmit);
