const router = require("express").Router();
const commentRoutes = require("./comments");

// User routes
router.use('/comments', commentRoutes);


module.exports = router;
