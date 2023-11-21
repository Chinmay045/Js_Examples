let reg = /Chinz/g;
reg = /Chinz/i; //case insensitivity

console.log(reg);
console.log(reg.source)

let s = "This is great KLcode CHinz with Chinz";

let result = reg.exec(s)
console.log(result)
// result = reg.exec(s)
// console.log(result)