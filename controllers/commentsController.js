const db = require("../models");

module.exports = {
  sendComment: function (req, res) {
    console.log('Log from the controller!');
    
    const sentName = req.body.name;
    const sentEmail = req.body.email;
    const sentComment = req.body.comment;
    
    db.Comment
      .create({
        name: sentName,
        email: sentEmail,
        comment: sentComment,
      }).then(res => 
        console.log(res)
      ).catch(err => console.log(err));
  }
}