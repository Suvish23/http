const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'name cannot be more than 50 characters'],
  },
  //url friendly version of name
  slug: String,
  //   description: {
  //     type: String,
  //     required: [true, 'Pleases type description'],
  //     maxlength: [500, 'description cannot be more than 500 characters'],
  //   },
  website: {
    type: String,
    match: [
      /http?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1-6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'please use a valid URL with HTTP and HTTPS',
    ],
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number can not be longer than 20 characters'],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'please add a valid email',
    ],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  //   location: {
  //     type: {
  //       type: String,
  //       enum: ['Point'],
  //       required: true,
  //     },
  //     coordinates: {
  //       type: [Number],
  //       required: true,
  //       index: '2dsphere',
  //     },
  //     formattedAddress: String,
  //     street: String,
  //     city: String,
  //     state: String,
  //     zipcode: String,
  //     country: String,
  //   },
  carrers: {
    type: [String],
    required: true,
    enum: [
      'web development',
      'mobile development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other',
    ],
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be atleast 1'],
    max: [10, 'Rating must can not be more than 10'],
  },
  averageRating: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
