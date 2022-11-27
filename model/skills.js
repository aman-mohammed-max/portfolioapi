const mongoose = require('mongoose')

const skillsSchema = new mongoose.Schema({

 skill: {
    type: String,
    required: true
   },

 skilldes: {
    type: String,
    required: true
   },

 skillimg: {
    type: String,
    required: true
   } 
} ,  { versionKey: false } )
const skills = mongoose.model(`Skills`, skillsSchema)
module.exports = skills ;