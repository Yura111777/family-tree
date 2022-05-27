const express = require('express');
const parentsController = require('./../controllers/parentsController');
const uploadPhotoController = require('./../controllers/uploadPhotoController');

const router = express.Router();

router.route('/')
    .post(
        uploadPhotoController.uploadUserPhoto,
        uploadPhotoController.resizeUserPhoto,
        parentsController.createParents
    )


router.route('/:id').patch(parentsController.updateParents)
module.exports = router;