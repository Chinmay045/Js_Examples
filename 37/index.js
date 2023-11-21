let reg = /Chinz/g;
reg = /Chinz/; //case insensitivity

let re = /gog/g;
console.log(reg);
console.log(reg.source)

let s = "This gog is great KLcode gog Chinz with CChinz";

// let result = reg.exec(s)
// console.log(result.index)
// result = reg.exec(s)
// console.log(result)

let result = reg.test(s);
console.log(result);

let res = s.match(re);
console.log(res);

let res1 = s.search(re);
console.log(res1)