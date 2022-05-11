const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const cors = require('cors')

const app = express()
const port = 3000



app
.use(favicon(__dirname + '/favicon.ico'))
.use(morgan('dev'))
.use(bodyParser.json())
.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  


sequelize.initDb()

// Ici, nous placerons les futurs points de terminaison.
// Connexion
require('./src/routes/createUser')(app)
require('./src/routes/LoginUsers')(app)
require('./src/routes/FindUserByPk')(app)
require('./src/routes/isEmailOpen')(app)
// Posts
require('./src/routes/createPost')(app)
require('./src/routes/getAllPost')(app)
require('./src/routes/deletePost')(app)
require('./src/routes/createComment')(app)
require('./src/routes/getForPostComment')(app)
require('./src/routes/modifyPost')(app)
require('./src/routes/FindAllUsername')(app)




app.listen(port, () => console.log(`Notre application Node est démarée sur http://localhost:${port}`))