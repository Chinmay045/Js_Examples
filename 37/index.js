let reg = /Chinz/;
console.log(reg);
console.log(reg.source)

let s = "This is great code with Chinz";

let result = reg.exec(s)
console.log(result)