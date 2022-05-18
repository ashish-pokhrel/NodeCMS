const app = require('express')();
app.use((req,res,next)=>{
    console.log(`${req.url}`);
    next();
})

app.get('/test',(req,res,next)=>{
    res.send('ok');
})

app.listen(5000,function(){console.log('Server is running..')})