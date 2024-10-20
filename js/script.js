// var a = 1;
// function outter() {
//   var b = 2;
//   function inner() {
//     var c = 3;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   inner();
// }
// outter();

// console.log(x); // ?
// var x = 5;
// console.log(x); // ?

// console.log(y); // ?
// let y = 10;
// console.log(y); // ?

// {
//   console.log(z); // ?
//   let z = 15;
//   console.log(z); // ?
// }

// // // // Masalalar
// // // Massivlarga oid
// // ### Masala 1:
// function lengthArrayVerify(arg) {
//   let res = arg
//     .filter(function (value) {
//       return value.length >= 5;
//     })
//     .map(function (value) {
//       return value.charAt(0).toUpperCase() + value.slice(1);
//     });
//   return res;
// }
// let arr = ["olma", "behi", "mercedes", "qulupnay", "Ferrari", "Windovs"];
// let res1 = lengthArrayVerify(arr);
// console.log(res1);

// // ### Masala 2:
// function student(arg) {
//   let names = arg.map(function (student) {
//     return student.name;
//   });
//   let res = arg.find(function (student) {
//     return student.age > 20;
//   });
//   return res.name.toUpperCase() + " - " + res.age;
// }
// let arr = [
//   { name: "Sarodr", age: 17 },
//   { name: "Abdulloh", age: 16 },
//   { name: "Murod", age: 29 },
// ];
// console.log(student(arr));

// // // ### Masala 3:
// function pricesSumArray(arg) {
//   let sum = arg.filter(function (value) {
//     return value.price > 10000;
//   });
//   let gen = sum.reduce(function (value, index) {
//     return value + index.price;
//   }, 0);

//   return gen;
// }
// let arr = [
//   { name: "Phone", price: 12000 },
//   { name: "Tablet", price: 80000 },
//   { name: "Laptop", price: 15000 },
//   { name: "Monitor", price: 7000 },
// ];
// console.log(pricesSumArray(arr));
