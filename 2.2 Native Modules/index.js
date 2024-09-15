// native node module
const fs = require("fs")  // fs = file system


// // this the function to write in a file which takes argument as file name then text and then error function
// fs.writeFile("message.txt","hello from Aditya",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("file has been saved successfully");
// });


// we can also write a function for reading data from file 
fs.readFile("message.txt", "utf8",(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
});
// The 'utf8' encoding is used to interpret the binary data of the file as human-readable text. UTF-8 is a popular character encoding that can represent almost all characters in the Unicode character set, making it a common choice for handling text files.