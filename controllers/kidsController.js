const Kids = require('./../models/KidsModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require("../utils/appError");
const Parents = require("../models/parentsModel");

exports.getKids = catchAsync( async (req, res, next) => {
    const kids =  await Kids.find()

    res.status(200).json({
        status: 'success',
        data: {
            kids
        }
    })
})

exports.createKids = catchAsync( async (req, res, next) => {
    const photo =  req.file ? req.file.filename : 'default.jpeg';
    const parents =  req.body.parents;
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

   await Parents.findById(kids.parents._id).populate({path: 'kids'})

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
    const photo =   req.file?.filename || req.body.photo;
    const kids =  await Kids.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        photo,
    }, {
        new: true,
    })

    res.status(200).json({
        status: 'success',
        data: {
            kids
        }
    })
})