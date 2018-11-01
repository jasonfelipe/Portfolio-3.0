const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//For Comments in Contact page

const commentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;