const express = require("express");

const app = express();

// our first Route

// GET /images/hello.jpg
app.use(express.static("public"));

// GET http://localhost:3000/index
app.get("/index", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

// GET http://localhost:3000/about
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

// GET http://localhost:3000/customers
app.get("/customers", (request, response, next) => {
  response.sendFile(__dirname + "/views/customers.html");
});

// GET http://localhost:3000/gallery
app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => console.log("My first app listening on port 3000! "));
