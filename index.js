const obj = {
  3: ["egg", "fig"],
  4: ["dive", "fend"],
  5: ["sing", "play"],
  6: ["apple", "pear"],
};

const array=[];
for(let key in obj){
  array.push({key:key, values: obj[key]})
console.log(array);
}