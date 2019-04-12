
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const MsgSchema = new Schema({
    To:String,
    From:String,
    Text:String,
    date: { type: Date, default: Date.now },
 
    }
)
const MyMessageModel = mongoose.model('message', MsgSchema);
module.exports = MyMessageModel;
