const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

router.route('/').post(commentsController.create);

module.exports = router;

