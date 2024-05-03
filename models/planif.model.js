const mongoose = require('mongoose');

const planifSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  routesId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Routes',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  // daysOfWeek: [{
  //   type: String,
  //   enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  //   required: true
  // }],
// verifier 
  date:{
type: Date,
required: true
  },
  seatsNumber: {
    type: Number,
    required: true
  }
});

const Planif = mongoose.model('Planif', planifSchema);

module.exports = Planif;
