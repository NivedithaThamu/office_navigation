const express = require('express');
const { searchRouter } = require('../controllers/search');
const router = express.Router();

router.use("/load", searchRouter);
module.exports = router;
