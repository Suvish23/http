const Bootcamp = require('../models/Bootcamp');
const asyncHandler = require('../middelware/async');
const ErrorRespone = require('../utils/errorresponse');

//@des    get all bootcamps
//@route GET /api/v1/bootcamps
//@access  Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  //instead of try catch we use asynchandler middelware function
  const bootcamps = await Bootcamp.find();
  res.status(200).json({
    count: bootcamps.length,
    sucess: true,
    data: bootcamps,
  });
  // try {
  //   const bootcamps = await Bootcamp.find();
  //   res.status(200).json({
  //     count: bootcamps.length,
  //     sucess: true,
  //     data: bootcamps,
  //   });
  // } catch (error) {
  //   next(
  //     error
  //     // new ErrorRespone(`Bootcamp not found with id of ${req.params.id}`, 404)
  //   );
  // }
});

//@des    get single bootcamps
//@route GET /api/v1/bootcamps/:id
//@access  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const boot = await Bootcamp.findById(req.params.id);
  // if any id is wrong then we use it.....
  if (!boot) {
    return next(
      new ErrorRespone(
        `Bootcamp not found with id of ${req.params.id} at the database`,
        404
      )
    );
    // return res.status(400).json({ success: false });
  }
  res.status(200).json({
    sucess: true,
    data: boot,
  });
  // } catch (error) {
  //   next(
  //     error
  //     // new ErrorRespone(`Bootcamp not found with id of ${req.params.id}`, 404)
  //   );
  // res.status(400).json({
  //   success: false,
  // });
});
//@des   Create new bootcamp
//@route POST /api/v1/bootcamps
//@access  Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
    success: true,
    data: bootcamp,
  });
  //  catch (error) {
  //   next(
  //     error
  // new ErrorRespone(`Bootcamp not found with id of ${req.params.id}`, 404)
});

// console.log(req.body);
// res.status(200).json({
//   sucess: true,
//   message: 'create a new bootcamp',
// });
//@des    Update bootcamps
//@route PUT /api/v1/bootcamps/:id
//@access  Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });
  if (!bootcamps) {
    return next(
      new ErrorRespone(
        `Bootcamp not found with id of ${req.params.id} at the database`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: {},
  });
  // } catch (error) {
  //   next(
  //     error
  //     // new ErrorRespone(`Bootcamp not found with id of ${req.params.id}`, 404)
  //   );
  //   //return res.status(400).json({ success: false });
  // }
});
//@des    Delete bootcamps
//@route Delete /api/v1/bootcamps/:id
//@access  Public
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.findByIdAndDelete(req.params.id);
  res.status(200).json({
    sucess: true,
    data: {},
  });
  if (!bootcamps) {
    return next(
      new ErrorRespone(
        `Bootcamp not found with id of ${req.params.id} at the database`,
        404
      )
    );
  }

  //  catch (error) {
  //   next(
  //     error
  //     // new ErrorRespone(`Bootcamp not found with id of ${req.params.id}`, 404)
  //   );
  // }
});
