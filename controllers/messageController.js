const db = require("../models");

module.exports = {
  create: function (req, res) {
    console.log(req);
    
    
    const sentName = req.body.name;
    const sentEmail = req.body.email;
    const sentMessage = req.body.message;
    
    db.Message
      .create({
        name: sentName,
        email: sentEmail,
        message: sentMessage,
      }).then(dbModel => {
        res.json(dbModel)
      }
      ).catch(err => console.log(err));
  }
}