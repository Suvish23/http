const Bootcamp = require('../models/Bootcamp');

//@des    get all bootcamps
//@route GET /api/v1/bootcamps
//@access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({
      count: bootcamps.length,
      sucess: true,
      data: bootcamps,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

//@des    get single bootcamps
//@route GET /api/v1/bootcamps/:id
//@access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const boot = await Bootcamp.findById(req.params.id);
    // if any id is wrong then we use it.....
    if (!boot) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      sucess: true,
      data: boot,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};
//@des   Create new bootcamp
//@route POST /api/v1/bootcamps
//@access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
    if (!boot) {
      return res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }

  // console.log(req.body);
  // res.status(200).json({
  //   sucess: true,
  //   message: 'create a new bootcamp',
  // });
};
//@des    Update bootcamps
//@route PUT /api/v1/bootcamps/:id
//@access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    if (!bootcamps) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
};
//@des    Delete bootcamps
//@route Delete /api/v1/bootcamps/:id
//@access  Public
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.findByIdAndDelete(req.params.id);
    res.status(200).json({
      sucess: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};
