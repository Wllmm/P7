const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const cors = require('cors')
const multer = require ("multer")
const path = require('path');

const app = express()
const port = 5000



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
  
// 
  // MULTER
  
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, './uploads')
  //   },
  //   filename: function (req, file, cb) {
  //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  //     cb(null, file.fieldname + '-' + uniqueSuffix + ".png")
  //   }
  // })
  
  // const upload = multer({ storage: storage })

  // app.post('/upload', upload.single('file'), (req, res) => {
  //   console.log(req.body, req.file)
  //   res.json({ file: req.file });
  // });
  
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


  app.use((err, req, res, next) => {
    if (err.code === "INCORRECT_FILETYPE") {
      res.status(422).json({ error: 'Only images are allowed' });
      return;
    }
    if (err.code === "LIMIT_FILE_SIZE") {
      res.status(422).json({ error: 'Allow file size is 500KB' });
      return;
    }
  });

  // FIN MULTER
// 

sequelize.initDb()

// Ici, nous placerons les futurs points de terminaison.
// Connexion
require('./src/routes/createUser')(app)
require('./src/routes/LoginUsers')(app)
require('./src/routes/findUserByPk')(app)
require('./src/routes/isEmailOpen')(app)
require('./src/routes/findAllUsername')(app)
require('./src/routes/modifyUserInfo')(app)
require('./src/routes/deleteUser')(app)
// Posts
require('./src/routes/createPost')(app)
require('./src/routes/deletePost')(app)
require('./src/routes/findAllPost')(app)
require('./src/routes/modifyPost')(app)
//  Comments
require('./src/routes/findComment')(app)
require('./src/routes/createComment')(app)
require('./src/routes/deleteComment')(app)


require('./src/routes/test')(app)


app.listen(port, () => console.log(`Notre application Node est démarée sur http://localhost:${port}`))