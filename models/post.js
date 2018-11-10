const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//For Comments in Contact page

const postSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  text: { type: String, required: true},
  comments: [],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;