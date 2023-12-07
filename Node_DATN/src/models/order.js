import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    code_order: String, // mã đơn hàng
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
          price: Number,
          color: String,
          size: String
        }
      ],
    name: String,
    phone:String,
    note: String,
    status: {
        type: String,
        default: "0"
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