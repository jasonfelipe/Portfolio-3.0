const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for the Products with upcCode in our database.

const commentSchema = new Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  comment: { type: String, required: true}
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;