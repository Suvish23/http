const express = require('express');
//here .. is to get outside of route folder..
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamp');
const router = express.Router();
router.route('/').get(getBootcamps).post(createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);
module.exports = router;
//instead of this simple method using controller.....

// router.get('/:id', (req, res) => {
//   res.status(200).json({
//     sucess: true,
//     message: 'Show all bootcamps',
//   });
// });
// router.get('/', (req, res) => {
//   res.status(200).json({
//     sucess: true,
//     message: `get bootcamp ${req.params.id}`,
//   });
// });
// router.put('/:id', (req, res) => {
//   res.status(200).json({
//     sucess: true,
//     message: `Update bootcamp ${req.params.id}`,
//   });
// });
// router.post('/', (req, res) => {
//   res.status(200).json({
//     sucess: true,
//     message: 'create a new bootcamp',
//   });
// });
// router.delete('/:id', (req, res) => {
//   res.status(200).json({
//     sucess: true,
//     message: `Delete bootcamp ${req.params.id}`,
//   });
// });
// //to work this,, we need to export the router....
