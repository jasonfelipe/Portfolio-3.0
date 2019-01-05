const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//For Messages in Contact page

const messageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;