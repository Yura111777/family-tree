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
    .get(parentsController.getParents)


router.route('/:id').patch(
    uploadPhotoController.uploadUserPhoto,
    uploadPhotoController.resizeUserPhoto,
    parentsController.updateParents
)
module.exports = router;