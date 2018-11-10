const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//For Comments in Contact page

const messageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model("Contact", messageSchema);

module.exports = Message;