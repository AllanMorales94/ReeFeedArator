const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemsCtrl.index);
router.post('/new',itemsCtrl.create)
// router.delete(':id'itemsCtrl.delete)
// router.put(''itemsCtrl.edit)
module.exports = router;
