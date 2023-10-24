import mongoose, { Schema } from "mongoose"

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  original_price: {
    type: Number,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  imgUrl: [
    {
        type: String
    }
  ],
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  size_id: {
    type: Schema.Types.ObjectId,
    ref: "Size",
  },
  color_id: {
    type: Schema.Types.ObjectId,
    ref: "Color",
  },
  quantity: {
    type: Number,
  },
  discount_code_id: {
    type: String,
  },
  view:Number,
  inventory_number: Number, // số lượng tồn kho
  quantity_sold: Number, // số lượng đã bán
  arrayColor:[]
},{timestamps: true, versionKey: false})

export default mongoose.model("Product", productSchema)