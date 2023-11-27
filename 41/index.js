
let regex = /\wart/;
regex = /\w+d1r/;
regex = /\w+ bhai/;
regex = /\d999/
str = "Harryd1r bhai  99999"


let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`the ${str} string does not match the expression`);
}
