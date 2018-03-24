const db = require("../models");
// Defining methods for the articlesController
module.exports = {
  //controller to get all the articles from the mongo db
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ saved: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //controller to post a new article to the mongo db
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //controller to delete an article from the mongo db
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};