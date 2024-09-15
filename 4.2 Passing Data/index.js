import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;   // we use .body because we have the body parser middleware 
  // console.log(numLetters);  
  res.render("index.ejs", {numberofLetters: numLetters});  // here we want to send this data to ejs file that's y we are using res.render again and "numberofLetter" is a variable and the value of that is "numLetters"
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
