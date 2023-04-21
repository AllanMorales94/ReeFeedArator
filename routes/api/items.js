const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/items
router.get('/', itemsCtrl.index);
router.post('/new', itemsCtrl.create);
router.delete('/deleteitem', itemsCtrl.remove);
router.put('/:id', itemsCtrl.edit); 

module.exports = router;