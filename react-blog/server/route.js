const express = require('express');
const router = express.Router();

router.get('/get/data');

router.post('/add/data');
router.post('/modify/data');
router.post('/delete/data');

module.exports = router;