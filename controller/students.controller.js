const Student = require("../models/Student.model")


module.exports.studentsController = {
   
    getStudents: (req, res) => {

    },

    postStudents: (req, res) => {
        Student.create({
            name:  req.body.name,
            phone: req.body.phone,
            age:   req.body.age,
          })
          .then(() => {
            res.json("Студент добавлен")
          })
    },

    deleteStudents: (req, res) => {
        Student.findByIdAndRemove(req.params.id)
           .then(() => {
            res.json("Студент удален")
          })
    },

    patchStudents: (req, res) => {
        Student.findByIdAndUpdate(req.params.id, {
          
        })
    },
}