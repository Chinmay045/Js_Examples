let a = document;
console.log(a);
a = document.all;
console.log(a);


Array.from(a).forEach(function (element) {
    console.log(element);
})

a = document.links;
console.log(a);