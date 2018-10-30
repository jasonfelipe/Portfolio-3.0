const db = require("../models");

module.exports = {
sendComment: function (req, res) {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const comment = req.body.comment;
    
    db.Comment
      .create({
        name: name,
        email: email,
        comment: comment
      })
      .then(results => {
        console.log(results);
    }).catch(err => console.log(err))
  }
}