import express from "express";

const app = express();
const port = 3000;

// 2.
app.use(express.static("public"));  // to include all static files we have to use "express.static" middleware 

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */
// for the 4th step we have to go to about and contact page 

// paths must be exactly same as they are located or else it will not get rendered

// 1.
app.get("/",(req,res)=>{
  res.render("index.ejs");
})

// 3.
app.get("/about",(req,res)=>{
  res.render("about.ejs");
})

app.get("/contact",(req,res)=>{
  res.render("contact.ejs");
})

// -------------------------------

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
