function savetoDB(data){
    return new Promise((resolve, reject) => {
        let internetSpeed=Math.floor(Math.random() * 10)+1;
    if(internetSpeed>4){
        resolve("Success: Data saved to DB");
    }
    else{
        reject("Failure: Weak Connection");
    }
    })
}

// savetoDB("Abc Xyz")
// .then(()=>{
//     console.log("Promise was resolved");
//     savetoDB("hello world").then(()=>{
//         console.log("Promise was resolved 2");
//     });
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// })

savetoDB("Xyz Abc")
.then(()=>{
    console.log("Promise1 was resolved.");
    return savetoDB("Hello World");
})
.then(()=>{
    console.log("Promise2 was resolved.");
    return savetoDB("Lorem ipsum");
})
.then(()=>{
    console.log("Promise3 was resolved.");
})
.catch(()=>{
    console.log("Promise was rejected.");
});