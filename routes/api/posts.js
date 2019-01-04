const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route('/')
    .post(postController.create)
    .get(postController.getAll)
    .get(postController.getComments) // to get the comments attached to the post


module.exports = router;

