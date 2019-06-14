const express = require('express'),
        app = new express(),
        router = require('./router');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','pug');
app.set('views','./views');
app.use(router);
app.use(express.static('./public'));
app.listen(3000,()=>{
    console.log('server is running on port 3000...')
})