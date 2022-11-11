const mongoose = require("mongoose")
const handwashSchema = mongoose.Schema({
    handwash_flavour: String,
    handwash_quantity: String,
    handwash_cost: Number
})
module.exports = mongoose.model("handwash", handwashSchema)
