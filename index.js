const express = require('express');
const app = express();
const pug = require('pug');
const port = 3000;
const login = require('./script/routes/login');
const homePage = require('./script/routes/homePage');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('./script/auth');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');
app.use('/', login);
app.use('/homePage', auth, homePage);
app.get('/login/css', (req, res) => {
    res.sendFile(__dirname + "/style/login.css");
})

app.get('/home/css', (req, res) => {
    res.sendFile(__dirname + "/style/homePage.css");
})

app.get('/logOut', (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
})

app.get('/event',(req,res)=>{
    res.sendFile(__dirname+"/script/event.js")
})

app.listen(port, () => { console.log("App Started") });

