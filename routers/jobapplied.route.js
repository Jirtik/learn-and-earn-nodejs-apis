const router = require('express').Router();
const jobController = require('../controller/jobapplied.controller');

router.post("/registerjobapplied",jobController.registerjobapplied);
router.post("/getalljobapplied",jobController.getalljobapplied);

module.exports = router;
