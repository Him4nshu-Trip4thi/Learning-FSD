const express=require("express");
const app=express();

const port=3000;

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
});

app.get("/sum/:a/:b", (req,res)=>{
    let {a,b}=req.params;
    a=parseInt(a);
    b=parseInt(b);
    console.log(`request recieved for performing sum of ${a},${b} that is : ${a+b}`);
    res.send(`<h1> Sum of ${a} and ${b} is ${a+b} </h1>`);
})



// app.use((req,res)=>{
//     console.log(("Request recieved !"));
//     // res.send("This is a response !!");
//     // res.send({
//     //     ferrari: "red",
//     //     mclaren: "orange",
//     // })

//     res.send("<h1>This is a basic response...</h1><ul><li>List1</li><li>List2</li><li>List3</li>");
// });
// app.get("/", (req,res)=>{
//     res.send("This is root path");
//     console.log("Request recieved on root path!");
// })

// app.get("/f1", (req,res)=>{
//     res.send("Welcome brother! to the world of Cars");
//     console.log("Request recieved on f1 path !");
// })



// app.get("/redbullracing",(req,res)=>{
//     res.send("This is redbullracing path");
//     console.log("Request recieved on redbullpath!");
// })

// app.get("/mclaren",(req,res)=>{
//     res.send("This is mclaren path");
//     console.log("Request recieved on mclaren path!");
// })

// app.get("/ferrari",(req,res)=>{
//     res.send("This is ferrari path");
//     console.log("Request recieved on ferrari path!");
// })

// app.get("/:f1team/:f1driver",(req,res)=>{
//     let {f1team,f1driver}=req.params;
//     let str=`<h1>Welcome to F1Finders. ${f1driver} belongs to ${f1team}`;
//     res.send(str);
//     console.log(`Request recieved as team: ${f1team} and driver: ${f1driver} `)
// })

// app.get("*",(req,res)=>{
//     res.send("This is an Invalid Path - Fcukin Mercedes fan hehehe");
//     console.log("Request recieved on the invalid path 404!");
// })



