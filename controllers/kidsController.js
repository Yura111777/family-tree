const Kids = require('./../models/KidsModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require("../utils/appError");

exports.createKids = catchAsync( async (req, res, next) => {
    const photo =  req.file ? req.file.filename : 'default.jpeg';
    const parents =  req.body.parents ? req.body.parents : null;
    const kids =  await Kids.create({
        name: req.body.name,
        age: req.body.age,
        photo,
        parents
    })

    res.status(200).json({
        status: 'success',
        data: {
            kids
        }
    })
})

exports.updateKids = catchAsync( async (req, res, next) => {
    if (req.body.parents) {
        return next(
            new AppError(
                'This route is not for parents updates.',
                400
            )
        );
    }
    const kids =  await Kids.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json({
        status: 'success',
        data: {
            kids
        }
    })
})