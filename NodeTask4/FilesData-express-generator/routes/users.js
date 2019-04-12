var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const MessageModel = require('../Models/MessageModel');
const userModel = require('../Models/UserModel');


/* GET users listing. */
router.get('/', async function(req, res, next) {
 let users =await userModel.find({},function(error,data){
    return data;
 });
  res.json(users)

  // res.send('respond with a resource');
});


router.post('/Create',  function(req, res, next) {
let data = req.body;
userModel.create(data)
   res.json(data)
 });
 
 router.get('/:id', async function(req, res, next) {
  let user =await userModel.find({"_id": req.params.id },function(error,data){
  return data;
});
res.json(user)
});

router.get('/:id/from', async function(req, res, next) {
  let msg =await MessageModel.find({"From": req.params.id },function(error,data){
  return data;
});
res.json(msg)
});

router.get('/:id/to', async function(req, res, next) {
  let msg =await MessageModel.find({"To": req.params.id },function(error,data){
  return data;
});
res.json(msg)
});


module.exports = router;
