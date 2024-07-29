let body = document.body;
let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
// body.style.backgroundColor = "blue";

let box1 = document.createElement("div");
box1.classList.add("box");
let box2 = document.createElement("div");
box2.classList.add("box");
let box3 = document.createElement("div");
box3.classList.add("box");
let box4 = document.createElement("div");
box4.classList.add("box");

container.appendChild(box1);
container.appendChild(box2);
container.appendChild(box3);
container.appendChild(box4);

let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.border = "3px solid black";
});

boxes[0].style.backgroundColor = "blue";
boxes[0].addEventListener("click", function () {
  body.style.backgroundColor = "blue";
  //   boxes[0].style.border = "3px solid white";
});
boxes[1].style.backgroundColor = "green";
boxes[1].addEventListener("click", function () {
  body.style.backgroundColor = "green";
  //   boxes[1].style.border = "3px solid white";
});
boxes[2].style.backgroundColor = "yellow";
boxes[2].addEventListener("click", function () {
  body.style.backgroundColor = "yellow";
  //   boxes[2].style.border = "3px solid white";
});
boxes[3].style.backgroundColor = "red";
boxes[3].addEventListener("click", function () {
  body.style.backgroundColor = "red";
  //   boxes[3].style.border = "3px solid white";
});

container.style.display = "flex";
container.style.gap = "5px";
