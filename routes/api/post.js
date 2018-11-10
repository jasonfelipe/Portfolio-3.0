const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route('/').post(postController.create);
// router.route('/:post').get(postController.get)


module.exports = router;

