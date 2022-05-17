const multer = require('../middleware/multer')


module.exports = (app) => {
    app.post('/upload', multer, (req, res) => {
      console.log(req.body, req.file)
      
      res.json({ file: req.file });
    })
  }