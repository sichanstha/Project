import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema({
    _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true, 
  },
  name: {
    type: String,
    required: true,
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Department = mongoose.model('Department', DepartmentSchema);
