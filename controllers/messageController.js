const db = require("../models");

module.exports = {
  create: function (req, res) {
    console.log('Log from the controller!');
    
    
    const sentName = req.body.name;
    const sentEmail = req.body.email;
    const sentComment = req.body.comment;
    
    db.Message
      .create({
        name: sentName,
        email: sentEmail,
        comment: sentComment,
      }).then(dbModel => res.json(dbModel)
      ).catch(err => console.log(err));
  }
}