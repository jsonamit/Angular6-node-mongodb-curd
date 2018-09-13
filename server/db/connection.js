const mongo=require('mongoose');

mongo.connect('mongodb://localhost:27017/customer',(error)=>{
     if(!error)
     {
           console.log('connection sucessfuly connected');
     }
     else
     {
          console.log('error with connection db'+JSON.stringify(error,undefined,2));
     }
});

module.exports=mongo;