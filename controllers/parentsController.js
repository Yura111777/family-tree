const Parents = require('./../models/parentsModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require("../utils/appError");

exports.createParents = catchAsync( async (req, res, next) => {
    const photo =  req.file ? req.file.filename : 'default.jpeg';
    const parents =  await Parents.create({
        name: req.body.name,
        age: req.body.age,
        photo,
    })

    res.status(200).json({
        status: 'success',
        data: {
            parents
        }
    })
})

exports.updateParents = catchAsync( async (req, res, next) => {
    const parents =  await Parents.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json({
        status: 'success',
        data: {
            parents
        }
    })
})