

setTimeout(() => {
    for (let index = 0; index < 100; index++) {
        const element = index;
        console.log("this is index number" + element);
    }
}, 1000)

console.log("Done printing");