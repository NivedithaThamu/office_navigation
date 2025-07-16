const { Router } = require('express');
const router = Router();
const { loadPlaces } = require('./loadPlaces');

router.get("/places", loadPlaces)

module.exports.searchRouter = router;
