let x = [1, 2, 3, 45, 6, 7, 8, 9];
// console.log(x.sort((a, b) => a - b));
// console.log(x.sort((a, b) => b - a));
// console.log(x.reverse());

console.log(x.sort((a,b)=>{
    if(a>b){
        return -1;
}
}))

console.log(x.sort((a,b)=>{
    if(a<b){
        return 1;
}}))


// let 
// if (y) {
//   console.log("true");
// }
// if (0) {
//   console.log("false");
// }

// let x = [1, 2, 3, 45, 6, 7, 8, 9];

// let y = [3, 2, 4, 1, 6, 54, 3];
// let w = [...x, ...y];
// let z = x.concat(y);
// console.log(z);
// console.log(w);

// console.log(x.slice(1,4));
// console.log(x.splice(1,4));
