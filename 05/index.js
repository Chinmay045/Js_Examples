console.log("we are at Chapter 5");
const name = "Chimnay";
const greeting = "Good morning";
console.log(greeting + " " + name);

let html;

html = "<h1> This is heading</h1>" +
"<p> This is my Para</p>";

html = html.concat('this',' str2');
console.log(html.length);
console.log(html.toLocaleLowerCase());
console.log(html.toLocaleUpperCase());
console.log(html);

console.log(html.indexOf('this'));
console.log(html.endsWith('str2'));