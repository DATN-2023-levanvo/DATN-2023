import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    name: String,
    cartId: [{
        type: mongoose.Types.ObjectId,
        ref: "Cart"
    }],
    products: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: Number,
          price: Number
        }
      ],
    // code_order: String,
    phone:String,
    note: String,
    status: {
        type: Boolean,
        default: false
    },

    // discount:String,
    address: {
        city: String, // tỉnh/thành phố
        location: String, // địa chỉ
        district: String // quận/huyện
    },
    totalPrice : Number,

}, { timestamps: true, versionKey: false });

export default mongoose.model("Order", orderSchema);