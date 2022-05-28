const express = require('express');
const kidsController = require('./../controllers/kidsController')
const uploadPhotoController = require("../controllers/uploadPhotoController");

const router = express.Router();

router.route('/').post(
    uploadPhotoController.uploadUserPhoto,
    uploadPhotoController.resizeUserPhoto,
    kidsController.createKids
)

router.route('/:id').patch(
    uploadPhotoController.uploadUserPhoto,
    uploadPhotoController.resizeUserPhoto,
    kidsController.updateKids
)

module.exports = router;