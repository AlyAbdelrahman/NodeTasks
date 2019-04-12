
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 var countries =['egypt','uk','UAE'];

const UserSchema = new Schema({
 
  name: String,
  email: {
    type: String,
    validate: function(email) {
      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }},
    gender:String,
    age:Number,
    country:
    {
      type:String,
      enum:countries,
      required:true
    }
    }
)
const MyUserModel = mongoose.model('users', UserSchema);
module.exports = MyUserModel;
