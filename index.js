const express = require('express');
const morgan = require('morgan');
const http = require('http')
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = 3000;
const app = express();



app.use(morgan('dev'));
app.use(bodyParser.json());
app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})




app.get('/dishes'),(req,res,next)=>{
res.end('WIll sebd all the dishes somehow to you when its made lol\n');
}
app.post('/dishes',(req,res,next)=>{
    res.end('WIll add the dish:' + req.body.name + 'with detailed: '+ req.body.description)
});
app.put('/dishes',(req,res,next)=>{
    res.statusCode = 403;
    res.end('This Operation is not allowed')
});
app.delete('/dishes',(req,res,next)=>{
    res.end('Deleting the dishses')
});


app.get('/dishes/:dishId'),(req,res,next)=>{
    res.end('WIll send the dishe somehow to you when its made lol\n' + req.params.dishId);
    }
    app.post('/dishes/:dishId',(req,res,next)=>{
        res.end('Post Operation not supported on indivudla dishes')
    });
    app.put('/dishes/:dishId',(req,res,next)=>{
        res.statusCode = 403;
        res.end('This Operation is not allowed')
    });
    app.delete('/dishes/:dishId',(req,res,next)=>{
        res.end('Deleting the dishse')
    });
    



app.use(express.static(__dirname + '/public'));
app.use((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express Server \n </h1></body></html>');

})
const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`Server Running At http;//${hostname}:${port}`);
});
//Express router

//body parser

// var bodyParser = require('body-parser')
// app.use(bodyParser.json())

// mini express application if u want multiple rest api endpoints
//
//

//

