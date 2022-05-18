const express = require('express')
const multer = require('multer');
const app = express()


  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, './uploads')
    },
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, file.fieldname + '-' + uniqueSuffix + ".png")
      
    }
  })

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

  module.exports = multer({ storage: storage }).single("file");