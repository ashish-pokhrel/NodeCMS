const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
    res.render('login')
})

router.get('/css', (req, res) => {
    res.sendFile(__dirname + "/login.css");
})

router.post('/', (req, res) => {
    const emailValue = req.body.email.trim();
    const password = req.body.password.trim();
    if (isValidUser(emailValue, password)) {
        res.cookie("jwt", generateToken(emailValue, password), {
            httpOnly: true
        });
        res.render('homePage', { email: emailValue });
    }
    else {
        res.render('login', { message: "Incorect UserName or Password" })
    }
})


function generateToken(email, password) {
    const token = jwt.sign({ id: email }, "thisismysecretkeyashish");
    return token;
}

function isValidUser(email, password) {
    if (email == "Admin@gmail.com" && password == "1234")
        return true;
    else
        return false;

}

module.exports = router;