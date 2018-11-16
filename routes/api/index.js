const router = require("express").Router();
const messageRoutes = require("./messages");
const postRoutes = require('./posts');

// User routes
router.use('/messages', messageRoutes);
router.use('/post', postRoutes);

module.exports = router;
