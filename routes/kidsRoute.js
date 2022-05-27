const express = require('express');
const kidsController = require('./../controllers/kidsController')

const router = express.Router();

router.route('/').post(kidsController.createKids)

router.route('/:id').patch(kidsController.updateKids)

module.exports = router;