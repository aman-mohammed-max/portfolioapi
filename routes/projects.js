const express = require('express')
const router = express.Router()
const Projects = require('../model/projects')
const tg = require('../out/telegram')

// Getting all
router.get('/', async (req, res) => {
  Projects.find()
    .then((response) => {
        res.json(response)    
    })
    .catch((error) => {
        console.error(error)
        tg.send(tg.groupid , error.message)
    })
});

module.exports = router