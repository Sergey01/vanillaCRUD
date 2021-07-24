const router = require('express').Router();
const tasks = require('./tasks.js')

// CRUD to REST map:
// Create / Read / Update / Delete
// POST   / GET  / PUT    / DELETE

router.post('/', tasks.createTask);

router.get('/', tasks.getTasks);

router.put('/', tasks.updateTask);

router.delete('/', tasks.deleteTask);

module.exports = router;