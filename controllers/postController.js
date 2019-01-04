const db = require("../models");

module.exports = {
  create: function (req, res) {
    console.log('Log from the controller!');
    
    
    const title = req.body.title;
    const date = date.now();
    const text = req.body.text;
    
    db.Post
      .create({
        title: title,
        date: date,
        text: text,
        comments: []
      }).then(dbModel => res.json(dbModel)
      ).catch(err => console.log(err));
  },

  getAll: function(req, res) {
    console.log('Log from the controller');    
    db.Post
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
  },

  getComments: function (req, res) {
     console.log('log from the controller');
     
     const title = req.params.title
     db.Post
        .findOne({
            title: title
        }).then(dbModel => 
            {res.json(dbModel);
        }).catch(err => res.status(422).json(err))
     
  }
}