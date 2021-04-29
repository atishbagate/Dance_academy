const express = require("express"); //this is node.js framework for web
// const path = require("path"); //The path module provides utilities for working with file and directory paths.
// const fs = require("fs"); //file system
const path = require("path");
const app = express();
const port = 8000;
//express required stuffs
// app.use(express.static('static', options))

app.use('/static',express.static('static')) //To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.urlencoded()) //express.urlencoded() function is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.

//pug required stuffs
//A template engine enables you to use static template files in your application. 
// At runtime, the template engine replaces variables in a template file with actual values, 
// and transforms the template into an HTML file sent to the client. 
// This approach makes it easier to design an 

//set the views directory
app.set('view engine','pug'); //set the template as pug

app.set('views',path.join(__dirname,'views')); //set the view directory

//endpoints
app.get('/',(req,res)=>{
    const params ={ }
    res.status(200).render('home.pug', params);
})

app.get('/contact',(req,res)=>{
    const params ={ }
    res.status(200).render('contact.pug', params);
})


//start server
app.listen(port,()=>{
    console.log(`the application started on port ${port}`)
})