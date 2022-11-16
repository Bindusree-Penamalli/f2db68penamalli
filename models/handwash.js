const mongoose = require("mongoose")
const handwashSchema = mongoose.Schema({
handwash_flavour:String,
handwash_cost:Number,
handwash_quantity:Number
})
//The first argument to the model function is going to be the name of the collection of documents that will be stored in your MongoDB.
module.exports = mongoose.model("handwash",
handwashSchema)