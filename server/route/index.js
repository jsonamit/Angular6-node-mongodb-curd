const express=require('express');
var router=express.Router();
var User=require('../model/user');

router.get('/getuser',(req,res)=> {
    User.find((err,doc)=>{
        if(!err)
        {
            res.status = 200;
            res.send(doc);
        }
        else {
            console.log('error with connection db'+JSON.stringify(err));
        }
    });
});
router.post('/adduser',(req,res)=> {
   var user= new User({
       name:req.body.name,
       lastname:req.body.lastname,
       city:req.body.city
   });
   user.save((err,doc)=>{
         if(!err)
         {
             res.send(doc);
         }
         else {
             console.log('error with connection db'+JSON.stringify(err));
         }
   });
});
router.put('/updateuser:id',(req,res)=> {

    var user= new User({
        name:req.body.name,
        lastname:req.body.lastname,
        city:req.body.city
    });
    User.findByIdAndUpdate(req.params.id,{$set:user},{new:true},(err,doc)=>{
        if(!err)
        {
            res.send(doc);
        }
        else {
            console.log('error with connection db'+JSON.stringify(err));
        }
    });
});
router.delete('/deleteuser/:id',(req,res)=>{
    // if(!@ObjectId.$isValid(req.params.id))
    //     return res.status(400).send('no recoard given id :{$req.params.id}');

     User.findByIdAndRemove(req.params.id,(err,doc)=>{
         if(!err)
         {
             res.send(doc);
         }
         else {
             console.log('error user delete'+JSON.stringify(err));
         }
     });
});

module.exports=router;
