const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongo=require('./db/connection');
var route=require('./route/index');

app.use(bodyParser.json());

app.listen(8000,()=>{
    console.log('node using port no 8000');
});

app.use('/',route);