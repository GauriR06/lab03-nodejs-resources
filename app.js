const express = require('express');
//creating app
const app = express();

 //send an HTTP response when receiving HTTP GET /
 app.use(express.static('public'));
 app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
 })

 //make the app listen on port 
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
 console.log(`Cart app listening at http://localhost:${port}`);
});

//handling static HTML and EJS templates
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
 res.render('index'); //no need for ejs extension
});

// using JSON and URL Encoded middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


const session = require('express-session');
app.use(session({secret: 'some secret code'}));


//route for contacts
app.get('/contacts', (req, res) => {
    res.render('contacts'); 
   });

//route for clients
app.get('/api/clients', (req, res) => {
    res.render('clients'); 
   });

//route for sign in
 app.get('/login', (req, res) => {
     res.render('login'); 
    });

//route for register
app.get('/api/register', (req, res) => {
    res.render('register'); 
   });    


//pass requests to the router middleware
const router = require('./routes/apis');
app.use(router);





