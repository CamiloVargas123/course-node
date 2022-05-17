import mongoose from "mongoose";

const ProductScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})

export default mongoose.model('products', ProductScheme) 