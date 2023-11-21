let reg = /Chinz/g;
reg = /Chinz/; //case insensitivity

let re = /gog/
console.log(reg);
console.log(reg.source)

let s = "This gog is great KLcode Chinz with CChinz";

// let result = reg.exec(s)
// console.log(result.index)
// result = reg.exec(s)
// console.log(result)

let result = reg.test(s);
console.log(result);

let res = s.match(re);
console.log(res);