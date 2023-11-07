
document.getElementById('heading').addEventListener
    ('click', function (e) {
        let variable;
        console.log("You have clicked the heading");
        // location.href = '//codewithharry.com'
        variable = e.target;
        variable = e.target.id;
        console.log(variable);
    })