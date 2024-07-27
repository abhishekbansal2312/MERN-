let body = document.body;
let blocks = document.querySelectorAll(".block");
let score = document.getElementById("score");

let array = [1, 1, 2, 2, 3, 3, 4, 4];
let randomIndex = Math.floor(Math.random() * array.length);
let randomNumber = array[randomIndex];

array.splice(randomIndex, 1);
