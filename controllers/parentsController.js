const Parents = require('./../models/parentsModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require("../utils/appError");

exports.getParents = catchAsync( async (req, res, next) => {
    const parents =  await Parents.find().populate({path: 'kids'})

    res.status(200).json({
        status: 'success',
        data: {
            parents
        }
    })
})

exports.createParents = catchAsync( async (req, res, next) => {
    const photo =  req.file ? req.file.filename : 'default.jpeg';

    const parent =  await Parents.create({
        name: req.body.name,
        age: req.body.age,
        photo,
    })

    const parents = await Parents.findById(parent._id).populate({path: 'kids'})

    res.status(200).json({
        status: 'success',
        data: {
            parents
        }
    })
})

exports.updateParents = catchAsync( async (req, res, next) => {
    if (req.body.kids) {
        return next(
            new AppError(
                'This route is not for kids updates.',
                400
            )
        );
    }
    const parents =  await Parents.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    }).populate({path: 'kids'})

    res.status(200).json({
        status: 'success',
        data: {
            parents
        }
    })
})