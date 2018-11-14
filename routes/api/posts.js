const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route('/')
    .post(postController.create)
    .get(postController.getAll)
    .get(postController.getComments)
// router.route('/:post').get(postController.get)


module.exports = router;

