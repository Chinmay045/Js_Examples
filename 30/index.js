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
                reject("sorry not fullfilled");
            }
        },2000);
    })
}

func1.then(function(){
    console.log("thanks for resolving");
}).catch(function (){
    console.log("error resolving the promise");
})