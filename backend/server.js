// Initialise the express application for our backend app
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = 5000; 

app.use(bodyParser.json());

// use the file system to read into the products.json file
let loadProducts = () => {
    let data = fs.readFileSync("./products.json");
    return JSON.parse(data);
}

// use the file system to read into the users.json file
let loadUsers = () =>{
    let data = fs.readFileSync("./users.json");
    return JSON.parse(data);
}

// use the file system to update and save into the products.json file
let saveProducts = (products) => {
    let data = JSON.stringify(products);
    fs.writeFileSync("./products.json",data);
}

// use the file system to update and save into the users.json file
let saveUsers = (users) => {
    let data = JSON.stringify(users);
    fs.writeFileSync("./users.json",data);
}

/**
 * GET products
 * 
 * return the products
 */
app.get("/products",(req,res)=>{
    let products = loadProducts();
    res.send(products);
});

/**
 * GET users
 * 
 * return the users
 */
app.get("/users", (req, res)=>{
    let users = loadUsers();
    res.send(users);
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});