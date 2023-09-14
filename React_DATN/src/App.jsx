import { Routes, Route } from "react-router-dom"
import Layout_Web from './Page/Layout/Layout_Web'
import Contact from "./Page/Contact"
import Bill from "./Page/Bill"
import Cart from "./Page/Cart"
import ProductDetail from "./Page/ProductDetail"
import Checkout from "./Page/Checkout"
import Config from "./Page/Layout/Config"
import HomePage from "./Page"
import Blog from "./Page/Blog"
import Login from "./Page/Login"
import Category from "./Page/Category"
import Blog_details from "./Page/Blog_details"
import Register from "./Page/Register"

function App() {
  Config();
  return (
    <Routes>
      <Route path='/' element={<Layout_Web />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="bill" element={<Bill />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product-detail" element={<ProductDetail />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
