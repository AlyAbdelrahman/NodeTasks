var express = require('express');
var router = express.Router();
const MessageModel = require('../Models/MessageModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/Message',  function(req, res, next) {
  let data = req.body;
  MessageModel.create(data)
     res.json(data)
   });

   router.get('/Message', async function(req, res, next) {
    let msg =await MessageModel.find({},function(error,data){
       return data;
    });
     res.json(msg)
   
     // res.send('respond with a resource');
   });


   router.patch('/Message/:id', async function(req, res, next) {
  let msg =await MessageModel.findByIdAndUpdate({_id: req.params.id}, {$set:req.body}, {new: true}, (err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }
    
    // console.log(doc);
  });
  res.json(msg)
   });


   router.delete('/Message/:id', async function(req, res, next) {
    let msg =await MessageModel.findByIdAndDelete(req.params.id,function(error,data){
       return data;
    });
     res.json(msg)
   
     // res.send('respond with a resource');
   });


module.exports = router;
