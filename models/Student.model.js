const  mongoose = require("mongoose")

const studentsSchema = mongoose.Schema({
    name: String,
    phone: String,
    age: Number
})

const Student = mongoose.model("Student", studentsSchema)

module.exports = Student