const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verify = jwt.verify(token, 'thisismysecretkeyashish');
        next();

    } catch (error) {
        res.render('login')
    }
}

module.exports = auth;