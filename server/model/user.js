const mongooose=require('mongoose');

var user=mongooose.model('customer',
    {
       name:{type:String},
        lastname:{type:String},
        city:{type:String}
    }
);

module.exports=user;