import express from "express";
const app = express();
const port = 3000;

app.listen(port , () => {  // here port have to specify and call back function also 
    console.log(`Server is listing at port ${port}.`);
})