const todoController = require('../controllers/todo-controller');

const router = require('express').Router();

router.get('/', todoController.index);

module.exports = router;