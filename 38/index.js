let regex = /^c/;
regex = /y$/;
regex = /ch.nmay/;
regex = /ch*inmay/;
regex = /chi?nmayi?/;
let str = "chinmay is agood boy, chinmay code is chinmay";

let result = regex.exec(str);
console.log(result)

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}