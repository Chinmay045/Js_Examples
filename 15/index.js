
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
// btn.addEventListener('dblclick', func1);
btn.addEventListener('mouseover', func1)
// btn.addEventListener('mouseup',func1)


function func1(e) {
    console.log("Thanks", e);
    e.preventDefault();
}
console.log(btn);

document.querySelector('.no').addEventListener
('mouseleave', function (){
    console.log("You exited no");
})

document.querySelector('.no').addEventListener
('mouseenter', function(){
    console.log("You entered no");
})