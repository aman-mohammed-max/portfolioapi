const mongoose = require('mongoose')

const projectsSchema = new mongoose.Schema({

 prj_name: {
    type: String,
    required: true
   },

 prj_des: {
    type: String,
    required: true
   },

 prj_icon: {
    type: String
   } 
} ,  { versionKey: false } )
const projects = mongoose.model(`Projects`, projectsSchema)
module.exports = projects ;