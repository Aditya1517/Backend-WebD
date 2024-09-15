import express from 'express';

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const today = new Date();
    let day = today.getDay();

    // console.log(day);

    let type = "a weekday";
    let adv =  "Its time to work hard";

    if(day === 0 || day === 6){
        let type = "the weekday";
        let adv =  "Its time to have some fun";
    }

    res.render("index.ejs",{    // for ejs file we use .rendor method 
        dayType : type,
        advice : adv,
    });
});

app.listen(port,()=>{
console.log(`Listring on ${port}`);
})