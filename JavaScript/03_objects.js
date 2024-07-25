// let personalinfo = {
//   name: "abhishek bansal",
//   age: 20,
//   hobbies: ["coding", "reading", "travelling"],
//   address: {
//     city: "jaipur",
//     state: "rajasthan",
//   },
// };
// console.log(personalinfo["name"]);
// console.log(personalinfo.name);
// let key = "name";
// console.log(personalinfo[key]);
// personalinfo["phone"] = "1234567890";
// console.log(personalinfo);

// let personalinfo2 = {
//   name: "abhishek",
//   age: 20,
//   hobbies: ["coding", "reading", "travelling"],
//   address: {
//     city: "jaipur",
//     state: "rajasthan",
//   },
// };
// let arr = [personalinfo, personalinfo2];
// console.log(arr);
//
// console.log(personalinfo.phone, personalinfo.phone);

// person1 = {
//   first: "abhishek",
//   last: "bansal",
// };
// const { first, last } = person1;
// console.log(first, last);

// const { city } = personalinfo;    /// undefined
// console.log(city);

// const {
//   address: { city },
// } = personalinfo;
// console.log(city);
///
// console.log(personalinfo.address);
// console.log(personalinfo["hobbies"]);
// console.log(personalinfo.hobbies.push("singing"));
// console.log(personalinfo.hobbies);
// console.log(personalinfo.address.city);
// console.log(personalinfo.hobbies[3]);

// var name = "abhishek bansal";
// name = "abhishek";
// console.log(name);

////////////////////////////////////////

// let arr = [
//   {
//     key1: "value1",
//   },
//   {
//     key2: "value2",
//   },
// ];
// console.log(arr);
// //array of objects
// let arr2 = [
//   {
//     id: [
//       {
//         text: "coding",
//         iscompleted: { arr },
//       },
//     ],
//   },
// ];
// console.log(arr2);

// const profile = {
//   name: "abhishek",
//   age: 20,
// };
// // const obj2={
// //     first:obj1.first
// // }
// // console.log(obj2);

// const todos = [
//   {
//     id: 1,
//     text: "coding",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "coding",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "coding",
//     isCompleted: true,
//   },
// ];
// console.log(todos);

// loops/////////////////////////////////
// i=0
// for (i ; ; ) {
//   console.log(i);
//   if(i==10){
//     break;
//   }
//   i++;
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let answer = num.forEach((element) => {
//   element * 2;
// });
// console.log(answer);

// let ans = num.map((a) => {
//   return a * 2;
// });
// console.log(ans);

// let ans2 = num.filter((a) => {
//   return a % 2 == 0;
// });
// console.log(ans2);

// let ans3 = num.reduce((a, b) => {
//   return a + b;
// });
// console.log(ans3);

// const personalinfo = {
//   name: "abhishek",
//   age: 20,
//   hobbies: ["coding", "reading", "travelling"],
//   address: {
//     city: "jaipur",
//     state: "rajasthan",
//   },
// };

// const person2 = {
//   name: "abhishek",
//   age: 20,
//   hobbies: ["coding", "reading", "travelling"],
// };
// let personarray = [personalinfo, person2];
// let ans = personarray.map((a) => {
//   return a.personalinfo.address;
// });
// console.log(ans);

let year = 2001;
(year % 4 == 0 && year % 100 != 0) || year % 400 == 0
  ? console.log("leap year")
  : console.log("not a leap year");
