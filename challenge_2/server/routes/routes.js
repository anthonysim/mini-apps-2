const express = require('express');
const router = express.Router();
const { getCurrent, getLastMonth, getLastThreeMonth } = require('../controllers/controllers');


router.get('/current', getCurrent);
router.get('/last-month', getLastMonth);
router.get('/three-month', getLastThreeMonth);


module.exports = router;