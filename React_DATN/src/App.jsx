import { Routes, Route } from "react-router-dom"
import Layout_Web from './Page/Layout/Layout_Web'
import Contact from "./Page/Contact"
import Bill from "./Page/Bill"
import Cart from "./Page/Cart"
import ProductDetail from "./Page/ProductDetail"
import Checkout from "./Page/Checkout"


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout_Web />}>
        <Route index element={<h1>HOME-PAGE</h1>} />
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
