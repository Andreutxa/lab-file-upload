const express = require('express');
const router = express.Router();

const indexControllers = require('../controllers/index.controllers');

/* GET home page */
router.get('/', indexControllers.renderHome);

router.get('/posts', indexControllers.getAllPosts);

router.get('/posts/:id', indexControllers.viewPostDetails);

module.exports = router;
