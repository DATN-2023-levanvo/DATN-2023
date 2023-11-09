import Cart from "../models/cart.js"
import Product from "../models/product.js"
import mongoose from "mongoose"


export const getCart = async(req,res) =>{
    try {
        // Lấy giỏ hàng dựa trên userId
        const cart = await Cart.findOne({ userId: req.user._id })
        .populate({
          path: "products.productId",
          model: "Product",
          populate: [
            {
              path: "size_id",
              model: "Size"
            },
            {
              path: "color_id",
              model: "Color"
            },
            {
                path: "categoryId",
                model: "Category"
            }
          ]
        })
    
        if (!cart) {
          return res.status(404).json({ message: "Bạn chưa có sản phẩm nào trong giỏ hàng" });
        }
    
        res.json(cart);
      } catch (error) {
        res.status(500).json({
          message: "Đã xảy ra lỗi khi lấy giỏ hàng.",
          error: error.message,
        });
      }
}
export const addToCart = async (req, res) => {
  const { productId, color, size, quantity } = req.body;
  const userId = req.user._id;
  try {
    let cart = await Cart.findOne({ userId });

    if (!productId || !quantity || !size || !color) {
      return res.status(400).json({ message: "Dữ liệu sản phẩm không hợp lệ." });
    }


    if (!cart) {
      cart = new Cart({ userId, products: [{ productId, color, size, quantity }] });
    }

      const existingProduct = cart.products.find(
        (item) => item.productId.equals(productId) && item.color === color && item.size === size
      );
      if(existingProduct){
      existingProduct.quantity += quantity;
      }else{
        if (!mongoose.Types.ObjectId.isValid(productId)) {
          return res.status(400).json({ message: "Địa chỉ sản phẩm không hợp lệ." });
        }
        const productDocument = await Product.findById(productId);
        if (!productDocument) {
          return res.status(404).json({ message: "Không tìm thấy sản phẩm." });
        }
  
        cart.products.unshift({ productId, color, size, quantity });
      }

    await cart.save();

    res.status(200).json({
      message: 'Sản phẩm đã được thêm vào giỏ hàng',
      cart
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}


export const updateCart = async (req, res) => {
  const { productId, color, size, quantity } = req.body;
  const userId = req.user._id;
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Giỏ hàng của bạn đang trống." });
    }

    if (!productId || !quantity || !size || !color) {
      return res.status(400).json({ message: "Dữ liệu sản phẩm không hợp lệ." });
    }

    const existingProduct = cart.products.find(
      (item) => item.productId.equals(productId) && item.color === color && item.size === size
    );

    if (existingProduct) {
      // Kiểm tra số lượng mới không được âm hoặc lớn hơn số lượng hiện có
      if (quantity < 0 || quantity > existingProduct.quantity) {
        return res.status(400).json({ message: "Số lượng cập nhật không hợp lệ." });
      }

      existingProduct.quantity -= quantity;

      if (existingProduct.quantity <= 0) {
        // Nếu số lượng sản phẩm trong giỏ hàng bằng 0, hãy loại bỏ nó khỏi giỏ hàng
        cart.products = cart.products.filter(
          (item) => !item.productId.equals(productId) || item.color !== color || item.size !== size
        );
      }
      
      await cart.save();
      return res.status(200).json({
        message: 'Sản phẩm trong giỏ hàng đã được cập nhật',
        cart
      });
    } else {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm trong giỏ hàng." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}





export const deleteToCart = async (req, res) => {
  const userId = req.user._id;
  const itemIdToDelete = req.params.id;

  try {
    // Tìm giỏ hàng của người dùng dựa vào userId
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Không tìm thấy giỏ hàng của người dùng." });
    }

    // Tìm sản phẩm cần xóa trong mảng products của giỏ hàng
    const itemIndexToDelete = cart.products.findIndex((item) =>
      item._id.equals(itemIdToDelete)
    );

    if (itemIndexToDelete === -1) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy sản phẩm trong giỏ hàng." });
    }

    // Xóa sản phẩm khỏi mảng products của giỏ hàng
    cart.products.splice(itemIndexToDelete, 1);

    // Lưu giỏ hàng sau khi xóa
    await cart.save();

    res.status(200).json({
      message: "Xóa sản phẩm khỏi giỏ hàng thành công",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Đã xảy ra lỗi khi xóa sản phẩm khỏi giỏ hàng.",
      error: error.message,
    });
  }
};
