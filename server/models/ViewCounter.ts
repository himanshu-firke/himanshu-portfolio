import mongoose from 'mongoose';

const viewCounterSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 50,
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

export const ViewCounter = mongoose.models.ViewCounter || mongoose.model('ViewCounter', viewCounterSchema);
