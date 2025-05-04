const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const {v4: uuidv4} = require("uuid");


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    database: "webdev",
    password: "Himanshu6905",
});

// let getRandomUser = () => {
//     return{
//         userId: faker.string.uuid(),
//         userName: faker.internet.username(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
// };
// console.log(getRandomUser());

let getRandomUser = () => {
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// let data=[];
// for(let i=1;i<=100;i++){
//     data.push(getRandomUser());
// }



// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// try{
//     connection.query(q, [data], (err,result) => {
//         if(err) throw err;
//         console.log(result);
//     })
// } catch(err){
//     console.log(err);
// }



app.listen("3000", ()=>{
    console.log("Server is running on 3000.")
});

//Home Route
app.get("/", (req,res)=>{
    let q = "SELECT count(*) FROM USER";
    try{
        connection.query(q, (err,result) => {
            if(err) throw err;
            let count=result[0]["count(*)"];
            res.render("home.ejs",{count});
        })
    } catch(err){
        console.log(err);
        res.send("Error in DB");
    }
    // res.send("Welcome to homepage!!");
});

//User Show Route
app.get("/user", (req,res) => {
    let q = "SELECT * FROM USER";
    try{
        connection.query(q, (err,users) => {
            if(err) throw err;
            res.render("showUsers.ejs",{ users });
        })
    } catch(err){
        console.log(err);
        res.send("Error in DB");
    }
});

//Edit Route
app.get("/user/:id/edit", (req,res)=>{
    let {id} =req.params;
    let q=`Select * from user where id='${id}'`;
    try{
        connection.query(q, (err,result) => {
            if(err) throw err;
            let user=result[0];
            res.render("edit.ejs", {user});
        })
    } catch(err){
        console.log(err);
        res.send("Error in DB");
    }
});

//Update route
app.patch("/user/:id", (req,res)=>{
    let {id} =req.params;
    let {password: formPass, username: newUsername}=req.body;
    let q=`Select * from user where id='${id}'`;
    try{
        connection.query(q, (err,result) => {
            if(err) throw err;
            let user=result[0];
            if(formPass != user.password){
                res.send("WRONG PASSWORD xxxxxxxxxxx !!!!");
            }
            else{
                let q2=`Update user set username='${newUsername}' where id='${id}'`;
                connection.query(q2,(err,result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        })
    } catch(err){
        console.log(err);
        res.send("Error in DB");
    }
    

});

//Add user route
app.get("/user/add", (req, res) => {
    res.render("newUser.ejs");
  });

app.post("/user/add", (req,res) => {
    let id = uuidv4();
    let {username,email,password} = req.body;
    console.log(req.body);
    let q3 = `INSERT INTO user(id,username,email,password) VALUES('${id}','${username}', '${email}', '${password}')`;

    try{
        connection.query(q3, (err,result) => {
            if(err) throw err;
            console.log(`New user Added: ${id} - ${username} - ${email} - ${password}`);
            res.redirect('/user');
        })
    } catch{
        console.log(err);
        res.send("Some error occured in DB");
    }
});

//Delete user Route
app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        res.render("delete.ejs", { user });
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });
  
  app.delete("/user/:id/", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
  
        if (user.password != password) {
          res.send("WRONG Password entered!");
        } else {
          let q2 = `DELETE FROM user WHERE id='${id}'`;
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
              console.log(result);
              console.log("deleted!");
              res.redirect("/user");
            }
          });
        }
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });



// connection.end();