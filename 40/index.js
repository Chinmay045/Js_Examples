console.log("Hello")

let regex = /H[a-z]rry/;
regex = /H[aty]rry/;
regex = /Har{2}y/;
str = "Harry bhai";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`the ${str} string does not match the expression`);
}
