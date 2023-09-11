
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../css/detail.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
const ProductDetail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const price = 170;
    
    const handleIncrease = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrease = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };
  
    const totalPrice = price * quantity;
    return (
        <>

            {/* <!-- single product area start --> */}
            <div className="Single-product-location home2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="location">
                                <ul>
                                    <li><a href="index.html" title="go to homepage">Home<span>/</span></a>  </li>
                                    <li><strong> Fusce aliquam</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- single product area end --> */}
            {/* <!-- single product details start --> */}
            <div className="single-product-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-product-img tab-content">
                                <Swiper
                                    style={{
                                        "--swiper-navigation-color": "#fff",
                                        "--swiper-pagination-color": "#fff"
                                    }}
                                    spaceBetween={5}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <div >
                                            <img src="img/product/7.png" className="product-img" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="img/product/2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="img/product/8.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="img/product/1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="img/product/9.png" />
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                            <div className="nav product-page-slider">

                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={5}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img src="img/product/28.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="img/product/30.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="img/product/29.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="img/product/31.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="img/product/29.png" />
                                    </SwiperSlide>
                                </Swiper>
                                <div className="single-product-slider">
                                    <a className="active" href="#pro-large-img-1" data-bs-toggle="tab">
                                        <img src="" alt="" />
                                    </a>
                                </div>
                                <div className="single-product-slider">
                                    <a href="#pro-large-img-2" data-bs-toggle="tab">
                                        <img src="" alt="" />
                                    </a>
                                </div>
                                <div className="single-product-slider">
                                    <a href="#pro-large-img-3" data-bs-toggle="tab">
                                        <img src="" alt="" />
                                    </a>
                                </div>
                                <div className="single-product-slider">
                                    <a href="#pro-large-img-4" data-bs-toggle="tab">
                                        <img src="" alt="" />
                                    </a>
                                </div>
                                <div className="single-product-slider">
                                    <a href="#pro-large-img-5" data-bs-toggle="tab">
                                        <img src="" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-product-details">
                                <a href="#" className="product-name">Fusce aliquam</a>
                                <div className="list-product-info">
                                    <div className="price-rating">
                                        <div className="ratings">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <a href="#" className="review">1 Review(s)</a>
                                            <a href="#" className="add-review">Add Your Review</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="avalable">
                                    <p>Availability:<span> In stock</span></p>
                                </div>
                                <div className="item-price">
                                    <span>$800.00</span>
                                </div>
                                <div className="single-product-info">
                                    <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis. </p>
                                    <div className="share">
                                        <img src="img/product/share.png" alt="" />
                                    </div>
                                </div>
                                <div className="action">
                                    <ul className="add-to-links">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-refresh"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-envelope"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="select-catagory">
                                    <div className="color-select" style={{ padding: 0 }}>
                                        <label className="required">
                                            <em>*</em> Color
                                        </label>
                                        <div className="input-box">
                                            <select id="select-1">
                                                <option defaultValue="">-- Please Select --</option>
                                                <option defaultValue="">black +$2.00</option>
                                                <option defaultValue="">blue +$1.00</option>
                                                <option defaultValue="">yellow +$1.00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="size-select">
                                        <label className="required">
                                            <em>*</em> Size
                                        </label>
                                        <div className="input-box">
                                            <select id="select-2">
                                                <option defaultValue="">-- Please Select --</option>
                                                <option defaultValue="">L +$2.00</option>
                                                <option defaultValue="">M +$1.00</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="price-box">
                                        <span>Price: <span>${totalPrice}</span></span>
                                    </div>
                                    <div className="single-cart d-flex align-items-center">
                                        <div className="cart-plus-minus">
                                            <div className="d-flex align-items-center">
                                                <span style={{ fontSize: "20px" }}>Qty: </span>
                                                <div className="inp_group">
                                                    <button onClick={handleDecrease}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                    </svg></button>
                                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" value={quantity} readOnly/>
                                                    <button onClick={handleIncrease}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                                    </svg></button>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="cart-btn">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- single product details end --> */}
            {/* <!-- single product tab start --> */}
            <div className="single-product-tab-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="single-product-tab">
                                <ul className="nav single-product-tab-navigation" role="tablist">
                                    <li role="presentation">
                                        <a className="active" href="#tab1" aria-controls="tab1" role="tab" data-bs-toggle="tab">Product Description</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab2" aria-controls="tab2" role="tab" data-bs-toggle="tab">reviews</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab3" aria-controls="tab3" role="tab" data-bs-toggle="tab">product tag</a>
                                    </li>
                                </ul>

                                {/* <!-- Tab panes --> */}
                                <div className="tab-content single-product-page">
                                    <div role="tabpanel" className="tab-pane fade show active" id="tab1">
                                        <div className="single-p-tab-content">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis. </p>
                                        </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tab2">
                                        <div className="single-p-tab-content">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="product-review">
                                                        <p> <a href="#"> plaza</a> <span>Review by</span> plaza </p>
                                                        <div className="product-rating-info">
                                                            <p>defaultValue</p>
                                                            <div className="ratings">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                        <div className="product-rating-info">
                                                            <p>Quality</p>
                                                            <div className="ratings">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                        <div className="product-rating-info">
                                                            <p>Price</p>
                                                            <div className="ratings">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                        <div className="review-date">
                                                            <p>plaza <em> (Posted on 8/27/2015)</em></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="rate-product hidden-xs">
                                                        <div className="rate-product-heading">
                                                            <h3>You&#39;re reviewing: Fusce aliquam</h3>
                                                            <h3>How do you rate this product? <em>*</em></h3>
                                                        </div>
                                                        <form action="#">
                                                            <table className="product-review-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th></th>
                                                                        <th>1 star</th>
                                                                        <th>2 star</th>
                                                                        <th>3 star</th>
                                                                        <th>4 star</th>
                                                                        <th>5 star</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th>Price</th>
                                                                        <td> <input type="radio" className="radio" name="ratings[1]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[1]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[1]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[1]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[1]" /> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>defaultValue</th>
                                                                        <td> <input type="radio" className="radio" name="ratings[2]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[2]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[2]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[2]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[2]" /> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Quality</th>
                                                                        <td> <input type="radio" className="radio" name="ratings[3]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[3]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[3]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[3]" /> </td>
                                                                        <td> <input type="radio" className="radio" name="ratings[3]" /> </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <ul className="form-list">
                                                                <li>
                                                                    <label> nickname <em>*</em> </label>
                                                                    <input type="text" />
                                                                </li>
                                                                <li>
                                                                    <label> Summary of Your Review <em>*</em> </label>
                                                                    <input type="text" />
                                                                </li>
                                                                <li>
                                                                    <label> Review <em>*</em> </label>
                                                                    <textarea cols="3" rows="5"></textarea>
                                                                </li>
                                                            </ul>
                                                            <button type="submit"> submit review</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tab3">
                                        <div className="single-p-tab-content">
                                            <div className="add-tab-title">
                                                <p> add your tag </p>
                                            </div>
                                            <div className="add-tag">
                                                <form action="#">
                                                    <input type="text" />
                                                    <button type="submit">add tags</button>
                                                </form>
                                            </div>
                                            <p className="tag-rules">Use spaces to separate tags. Use single quotes (&#39;) for phrases.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- single product tab end --> */}
            {/* <!-- upsell product area start--> */}
            <div className="upsell-product home2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-title">
                                <h2>upsell products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/25.png" alt="" className="primary-img" />
                                            <img src="img/product/26.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/23.png" alt="" className="primary-img" />
                                            <img src="img/product/24.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/21.png" alt="" className="primary-img" />
                                            <img src="img/product/22.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/19.png" alt="" className="primary-img" />
                                            <img src="img/product/20.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product"></div>
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img src="img/product/17.png" alt="" className="primary-img" />
                                        <img src="img/product/18.png" alt="" className="secondary-img" />
                                    </a>
                                </div>
                                <div className="list-product-info">
                                    <div className="price-rating">
                                        <div className="ratings">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <a href="#" className="review">1 Review(s)</a>
                                            <a href="#" className="add-review">Add Your Review</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <div className="product-name">
                                        <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                    </div>
                                    <div className="price-rating">
                                        <span>$170.00</span>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/15.png" alt="" className="primary-img" />
                                            <img src="img/product/16.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/13.png" alt="" className="primary-img" />
                                            <img src="img/product/14.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/11.png" alt="" className="primary-img" />
                                            <img src="img/product/12.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>

            {/* <!-- upsell product area end--> */}
            {/* <!-- related product area start--> */}
            <div className="related-product home2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-title">
                                <h2>related products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/25.png" alt="" className="primary-img" />
                                            <img src="img/product/26.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/23.png" alt="" className="primary-img" />
                                            <img src="img/product/24.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/21.png" alt="" className="primary-img" />
                                            <img src="img/product/22.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/19.png" alt="" className="primary-img" />
                                            <img src="img/product/20.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product"></div>
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img src="img/product/17.png" alt="" className="primary-img" />
                                        <img src="img/product/18.png" alt="" className="secondary-img" />
                                    </a>
                                </div>
                                <div className="list-product-info">
                                    <div className="price-rating">
                                        <div className="ratings">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <a href="#" className="review">1 Review(s)</a>
                                            <a href="#" className="add-review">Add Your Review</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <div className="product-name">
                                        <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                    </div>
                                    <div className="price-rating">
                                        <span>$170.00</span>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/15.png" alt="" className="primary-img" />
                                            <img src="img/product/16.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/13.png" alt="" className="primary-img" />
                                            <img src="img/product/14.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide id="x"><div className="col-md-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="single-product.html">
                                            <img src="img/product/11.png" alt="" className="primary-img" />
                                            <img src="img/product/12.png" alt="" className="secondary-img" />
                                        </a>
                                    </div>
                                    <div className="list-product-info">
                                        <div className="price-rating">
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <a href="#" className="review">1 Review(s)</a>
                                                <a href="#" className="add-review">Add Your Review</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-name">
                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                        </div>
                                        <div className="price-rating">
                                            <span>$170.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* <!-- related product area end--> */}
            {/* <!-- footer top area start --> */}
            <div className="footer-top-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-contact">
                                <img src="img/logo-white.png" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                                <ul className="address">
                                    <li>
                                        <span className="fa fa-fax"></span>
                                        (800) 123 456 789
                                    </li>
                                    <li>
                                        <span className="fa fa-phone"></span>
                                        (800) 123 456 789
                                    </li>
                                    <li>
                                        <span className="fa fa-envelope-o"></span>
                                        admin@bootexperts.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-tweets">
                                <div className="footer-title">
                                    <h3>Latest tweets</h3>
                                </div>
                                <div className="twitter-feed">
                                    <div className="twitter-article">
                                        <div className="twitter-img">
                                            <a href="#">
                                                <img src="img/twitter/twitter-1.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="twitter-text">
                                            <p>Raboda Fashion #Magento #Theme comes up with pure white and grey, which great show your products. Check it: </p>
                                            <a href="#">https://t.co/iu0OYBwti8</a>
                                            <div className="twitter-time">
                                                <a href="#">16h</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="twitter-article">
                                        <div className="twitter-img">
                                            <a href="#">
                                                <img src="img/twitter/twitter-1.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="twitter-text">
                                            <p>Raboda Fashion #Magento #Theme comes up with pure white and grey, which great show your products. Check it: </p>
                                            <a href="#">https://t.co/iu0OYBwti8</a>
                                            <div className="twitter-time">
                                                <a href="#">16h</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-support">
                                <div className="footer-title">
                                    <h3>Our support</h3>
                                </div>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Sitemap</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Your Account</a></li>
                                        <li><a href="#">Advanced Search</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <div className="footer-title">
                                    <h3>Our information</h3>
                                </div>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Orders and Returns</a></li>
                                        <li><a href="#">Site Map</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- footer top area end --> */}
        </>
    )
}

export default ProductDetail