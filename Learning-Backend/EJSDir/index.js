const express = require("express");
const app=express();
const port=3000;

app.set("view engine", "ejs");

app.listen(port,()=>{
    console.log(`Server is running at port : ${port}`);
})

app.get("/",(req, res)=>{
    console.log(`Server accessed !!`);
    // res.send("Hello There !!");
    res.render("home.ejs");
})