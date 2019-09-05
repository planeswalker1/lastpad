const noteController = require('../controllers/note');
const express = require('express');

var Router = express.Router();

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(403).send('forbidden');
}

Router.route('/:id')
  .get(checkAuthenticated, noteController.getNoteById)
  .delete(checkAuthenticated, noteController.deleteNoteById);


Router.route('/')
  .get(checkAuthenticated, noteController.getNotes)
  .post(checkAuthenticated, noteController.createNote);


module.exports = Router;