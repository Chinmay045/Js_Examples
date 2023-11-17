console.log("Hello");

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Your promise has been resolved");
                resolve();
            }
            else{
                console.log("Your promise has not been resolved");
            }
        },2000);
    })
}