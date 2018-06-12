
var express=require('express');

var router=express.Router();

const Item = require('../model/shoppingItems');
router.get('/items',(req,res)=>{
    Item.find(function(err,item){
        if(err){
            res.json(err); 
        }
        else{
            res.json(item);
        }
    });
});

router.post('/item',(req,res)=>{
  let newShoppingItem=new Item({
      itemName:req.body.itemName,
      itemQuantity:req.body.itemQuantity,
      itemBought:req.body.itemBought
  });
  newShoppingItem.save((err,item)=>{
    if(err){
        res.json(err);
    }
    else{
        res.json({msg:'items are inserted successfuly'});
    }
  });
});

router.put('/item/:id',(req,res)=>{
    Item.findOneAndUpdate({_id:req.params.id},{
        $set: {
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity,
            itemBought: req.body.itemBought
        }
    },
    function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })

    });


router.delete('/item/:id',(req,res)=>{
    Item.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
module.exports = router;