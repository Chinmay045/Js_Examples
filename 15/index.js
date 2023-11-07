
// document.getElementById('heading').addEventListener
//     ('click', function (e) {
//         let variable;
//         console.log("You have clicked the heading");
//         // location.href = '//codewithharry.com'
//         variable = e.target;
//         variable = e.target.id;
//         console.log(variable);
//         variable = Array.from(e.target.classList);
//         console.log(variable);
//     })

let btn = document.getElementById('btn');
btn.addEventListener('dblclick', func1);

function func1(e) {
    console.log("Thanks",e);
    e.preventDefault();
}
console.log(btn);