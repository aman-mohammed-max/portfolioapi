const express = require('express');
const mongoose = require('mongoose');
const tg = require('./out/telegram')
const prop = require('./prop')

const app = express();

mongoose.connect(prop.dburl)
  .then(() => {
    app.listen(prop.port, () => console.log('someone here'))
    tg.send(tg.groupid , `listening on ${prop.port}`)
  })
  .catch((err) => {
    console.log(err)
    tg.send(tg.groupid , err)
  })

const db = mongoose.connection

db.on('error', (error) => {
  console.error(error);
  tg.send(tg.groupid , error);
});
db.once('open', () => {
  console.log('connected to db');
  tg.send(tg.groupid , 'connected to db' )
});

app.use(express.json())

const projectsRouter = require('./routes/projects')
app.use(`/${prop.outurl}/projects`, projectsRouter)

const skillsRouter = require('./routes/skills')
app.use(`/${prop.outurl}/skills`, skillsRouter)