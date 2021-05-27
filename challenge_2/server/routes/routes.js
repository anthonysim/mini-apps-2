const express = require('express');
const router = express.Router();
const { getCurrent } = require('../controllers/controllers');


router.get('/current', getCurrent);


module.exports = router;