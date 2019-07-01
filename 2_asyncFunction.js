function q() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello");
        }, 1000)
    })
}

var O1 = {
    say: async () => {
        console.log("I'm say")
        let a = await q();
        console.log(a);
    },
    run: async () => {
        console.log("I'm run")
        let b = await q();
        console.log(b);
    },
}
    (async function () { await O1.say(); await O1.run(); })();

//Ask 1)21行代码即最后一行代码为什么不能运行？
/*需要写成如下才可以
 let fn = async function () {
     await O1.say();
     await O1.run();
     }

     fn();
     */
