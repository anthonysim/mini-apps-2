const express = require('express');
const router = express.Router();
const { getCurrent, getLastMonth } = require('../controllers/controllers');


router.get('/current', getCurrent);
router.get('/last-month', getLastMonth);


module.exports = router;