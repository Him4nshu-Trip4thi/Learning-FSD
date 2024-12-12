const express=require ("express");
const app = express();
const port=3000;

const path=require("path");

const {v4:uuidv4} = require('uuid');

const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.listen(port,()=>{
    console.log(`Listening to port : ${port}`);
});

app.get("/",(req,res)=>{
    res.redirect("/posts");
    console.log("Server is running well !!");
});

// let posts = [];

let posts = [
    {
        id: uuidv4(),
        username: "himanshu",
        content: "Hello World !!"
    },
    {
        id: uuidv4(),
        username: "tr0j4n",
        content: "Stay dormant until the D-Day..."
    },
    {
        id: uuidv4(),
        username:"google",
        content:"Unfortunately, we will not be moving forward with your application..."
    }
];

app.get("/posts",(req,res)=>{
    // res.send("Server running well for POSTS !!");
    res.render("index.ejs",{posts});
})    

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id);
    // console.log("Found post:", post);

    if (!post) {
        return res.status(404).send("Post not found!");
    }
    res.render("postdetail.ejs", { post });
});      

app.patch("/posts/:id", (req, res) => {
    let { id }=req.params;
    // console.log(id);
    let newContent=req.body.content;
    // console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content=newContent;
    // res.send("Patch request is working...!!");
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});



});

app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username,content}=req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    // res.send("Post request running well !!");
    res.redirect("/posts");
})

app.delete("/posts/:id", (req, res)=>{
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("DELETE is successful...");
    res.redirect("/posts");

});

