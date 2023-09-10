import React from 'react'

const Category = () => {
  return (
    <div>
           <div class="product-banner">
            <img src="img/product/banner.jpg" alt=""/>
        </div>
        {/* <!-- product items banner end -->
        <!-- product main items area start --> */}
        <div class="product-main-items">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="location">
                            <ul>
                                <li><a href="index.html" title="go to homepage">Home<span>/</span></a>  </li>
                                <li><strong> shop</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <div class="product-sidebar">
                            <div class="sidebar-title">
                                <h2>Shopping Options</h2>
                            </div>
                            <div class="single-sidebar">
                                <div class="single-sidebar-title">
                                    <h3>Category</h3>
                                </div>
                                <div class="single-sidebar-content">
                                    <ul>
                                        <li><a href="#">Dresses (4)</a></li>
                                        <li><a href="#">shoes (6)</a></li>
                                        <li><a href="#">Handbags (1)</a></li>
                                        <li><a href="#">Clothing (3)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="single-sidebar">
                                <div class="single-sidebar-title">
                                    <h3>Color</h3>
                                </div>
                                <div class="single-sidebar-content">
                                    <ul>
                                        <li><a href="#">Black (2)</a></li>
                                        <li><a href="#">Blue (2)</a></li>
                                        <li><a href="#">Green (4)</a></li>
                                        <li><a href="#">Grey (2)</a></li>
                                        <li><a href="#">Red (2)</a></li>
                                        <li><a href="#">White (2)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="single-sidebar">
                                <div class="single-sidebar-title">
                                    <h3>Manufacturer</h3>
                                </div>
                                <div class="single-sidebar-content">
                                    <ul>
                                        <li><a href="#">Calvin Klein (2)</a></li>
                                        <li><a href="#">Diesel (2)</a></li>
                                        <li><a href="#">option value (1)</a></li>
                                        <li><a href="#">Polo (2)</a></li>
                                        <li><a href="#">store view (4)</a></li>
                                        <li><a href="#">Tommy Hilfiger (2)</a></li>
                                        <li><a href="#">will be used (1)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="single-sidebar price">
                                <div class="single-sidebar-title">
                                    <h3>Price</h3>
                                </div>
                                <div class="single-sidebar-content">
                                    <div class="price-range">
                                        <div class="price-filter">
                                            <div id="slider-range"></div>
                                            <div class="price-slider-amount">
                                                <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                            </div>
                                        </div>
                                        <button type="submit"> <span>search</span> </button>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-left">
                                <a href="#">
                                    <img src="img/product/banner_left.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="product-bar">
                            <ul class="nav product-navigation justify-content-center" role="tablist">
                                <li role="presentation" class="gird">
                                    <a href="#gird" aria-controls="gird" role="tab" data-bs-toggle="tab">
                                        <span>
                                            <img class="primary" src="img/product/grid-primary.png" alt=""/>
                                            <img class="secondary" src="img/product/grid-secondary.png" alt=""/>
                                        </span>
                                        Gird
                                    </a>
                                </li>
                                <li role="presentation" class="list">
                                    <a class="active" href="#list" aria-controls="list" role="tab" data-bs-toggle="tab">
                                        <span>
                                            <img class="primary" src="img/product/list-primary.png" alt=""/>
                                            <img class="secondary" src="img/product/list-secondary.png" alt=""/>
                                        </span>
                                        List
                                     </a>
                                </li>
                            </ul>
                            <div class="sort-by">
                                <label>Sort By</label>
                                <select name="sort">
                                    <option value="#" selected >Position</option>
                                    <option value="#">Name</option>
                                    <option value="#">Price</option>
                                </select>
                                <a href="#" title="Set Descending Direction">
                                    <img src="img/product/i_asc_arrow.gif" alt=""/>
                                </a>
                            </div>
                            <div class="limit-product">
                                <label>Show</label>
                                <select name="show">
                                    <option value="#" selected>9</option>
                                    <option value="#">12</option>
                                    <option value="#">24</option>
                                    <option value="#">36</option>
                                </select>
                                per page
                            </div>
                        </div>
                        <div class="row">
                            <div class="product-content">
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane fade home2" id="gird">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6">
                                                <div class="single-product">
                                                    <div class="level-pro-new">
                                                        <span>new</span>
                                                    </div>
                                                    <div class="product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/25.png" alt="" class="primary-img"/>
                                                            <img src="img/product/26.png" alt="" class="secondary-img"/>
                                                        </a>
                                                    </div>
                                                    <div class="actions">
                                                        <button type="submit" class="cart-btn" title="Add to cart">add to cart</button>
                                                        <ul class="add-to-link">
                                                            <li><a class="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i class="fa fa-search"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-heart-o"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-refresh"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-price">
                                                        <div class="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div class="price-rating">
                                                            <span>$170.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="single-product">
                                                    <div class="level-pro-new">
                                                        <span>new</span>
                                                    </div>
                                                    <div class="product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/23.png" alt="" class="primary-img"/>
                                                            <img src="img/product/24.png" alt="" class="secondary-img"/>
                                                        </a>
                                                    </div>
                                                    <div class="actions">
                                                        <button type="submit" class="cart-btn" title="Add to cart">add to cart</button>
                                                        <ul class="add-to-link">
                                                            <li><a class="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i class="fa fa-search"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-heart-o"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-refresh"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-price">
                                                        <div class="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div class="price-rating">
                                                            <span>$170.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="single-product">
                                                    <div class="level-pro-new">
                                                        <span>new</span>
                                                    </div>
                                                    <div class="product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/21.png" alt="" class="primary-img"/>
                                                            <img src="img/product/22.png" alt="" class="secondary-img"/>
                                                        </a>
                                                    </div>
                                                    <div class="actions">
                                                        <button type="submit" class="cart-btn" title="Add to cart">add to cart</button>
                                                        <ul class="add-to-link">
                                                            <li><a class="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i class="fa fa-search"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-heart-o"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-refresh"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-price">
                                                        <div class="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div class="price-rating">
                                                            <span>$170.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="single-product">
                                                    <div class="level-pro-new">
                                                        <span>new</span>
                                                    </div>
                                                    <div class="product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/19.png" alt="" class="primary-img"/>
                                                            <img src="img/product/20.png" alt="" class="secondary-img"/>
                                                        </a>
                                                    </div>
                                                    <div class="actions">
                                                        <button type="submit" class="cart-btn" title="Add to cart">add to cart</button>
                                                        <ul class="add-to-link">
                                                            <li><a class="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i class="fa fa-search"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-heart-o"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-refresh"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-price">
                                                        <div class="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div class="price-rating">
                                                            <span>$170.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="single-product">
                                                    <div class="level-pro-new">
                                                        <span>new</span>
                                                    </div>
                                                    <div class="product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/17.png" alt="" class="primary-img"/>
                                                            <img src="img/product/18.png" alt="" class="secondary-img"/>
                                                        </a>
                                                    </div>
                                                    <div class="actions">
                                                        <button type="submit" class="cart-btn" title="Add to cart">add to cart</button>
                                                        <ul class="add-to-link">
                                                            <li><a class="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i class="fa fa-search"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-heart-o"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-refresh"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-price">
                                                        <div class="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div class="price-rating">
                                                            <span>$170.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="single-product">
                                                    <div class="level-pro-new">
                                                        <span>new</span>
                                                    </div>
                                                    <div class="product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/15.png" alt="" class="primary-img"/>
                                                            <img src="img/product/16.png" alt="" class="secondary-img"/>
                                                        </a>
                                                    </div>
                                                    <div class="actions">
                                                        <button type="submit" class="cart-btn" title="Add to cart">add to cart</button>
                                                        <ul class="add-to-link">
                                                            <li><a class="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i class="fa fa-search"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-heart-o"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-refresh"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-price">
                                                        <div class="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div class="price-rating">
                                                            <span>$170.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="single-product">
                                                    <div class="level-pro-new">
                                                        <span>new</span>
                                                    </div>
                                                    <div class="product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/13.png" alt="" class="primary-img"/>
                                                            <img src="img/product/14.png" alt="" class="secondary-img"/>
                                                        </a>
                                                    </div>
                                                    <div class="actions">
                                                        <button type="submit" class="cart-btn" title="Add to cart">add to cart</button>
                                                        <ul class="add-to-link">
                                                            <li><a class="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i class="fa fa-search"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-heart-o"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-refresh"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-price">
                                                        <div class="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div class="price-rating">
                                                            <span>$170.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="single-product">
                                                    <div class="level-pro-new">
                                                        <span>new</span>
                                                    </div>
                                                    <div class="product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/11.png" alt="" class="primary-img"/>
                                                            <img src="img/product/12.png" alt="" class="secondary-img"/>
                                                        </a>
                                                    </div>
                                                    <div class="actions">
                                                        <button type="submit" class="cart-btn" title="Add to cart">add to cart</button>
                                                        <ul class="add-to-link">
                                                            <li><a class="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i class="fa fa-search"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-heart-o"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-refresh"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-price">
                                                        <div class="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div class="price-rating">
                                                            <span>$170.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="single-product">
                                                    <div class="level-pro-new">
                                                        <span>new</span>
                                                    </div>
                                                    <div class="product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/9.png" alt="" class="primary-img"/>
                                                            <img src="img/product/10.png" alt="" class="secondary-img"/>
                                                        </a>
                                                    </div>
                                                    <div class="actions">
                                                        <button type="submit" class="cart-btn" title="Add to cart">add to cart</button>
                                                        <ul class="add-to-link">
                                                            <li><a class="modal-view" data-target="#productModal" data-bs-toggle="modal" href="#"> <i class="fa fa-search"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-heart-o"></i></a></li>
                                                            <li><a href="#"> <i class="fa fa-refresh"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-price">
                                                        <div class="product-name">
                                                            <a href="single-product.html" title="Fusce aliquam">Fusce aliquam</a>
                                                        </div>
                                                        <div class="price-rating">
                                                            <span>$170.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade home2 active show" id="list">
                                        <div class="product-catagory">
                                            <div class="single-list-product row">
                                                <div class="col-md-4">
                                                    <div class="list-product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/1.png" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="list-product-info">
                                                        <a href="single-product.html" class="list-product-name"> Cras neque metus</a>
                                                        <div class="price-rating">
                                                            <span class="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                                <a href="#" class="review">1 Review(s)</a>
                                                                <a href="#" class="add-review">Add Your Review</a>
                                                            </div>
                                                        </div>
                                                        <div class="list-product-details">
                                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nul
                                                            <a href="single-product.html">Learn More</a> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-list-product row">
                                                <div class="col-md-4">
                                                    <div class="list-product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/6.png" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="list-product-info">
                                                        <a href="single-product.html" class="list-product-name"> Cras neque metus</a>
                                                        <div class="price-rating">
                                                            <span class="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                                <a href="#" class="review">1 Review(s)</a>
                                                                <a href="#" class="add-review">Add Your Review</a>
                                                            </div>
                                                        </div>
                                                        <div class="list-product-details">
                                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nul
                                                            <a href="single-product.html">Learn More</a> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-list-product row">
                                                <div class="col-md-4">
                                                    <div class="list-product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/3.png" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="list-product-info">
                                                        <a href="single-product.html" class="list-product-name"> Cras neque metus</a>
                                                        <div class="price-rating">
                                                            <span class="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                                <a href="#" class="review">1 Review(s)</a>
                                                                <a href="#" class="add-review">Add Your Review</a>
                                                            </div>
                                                        </div>
                                                        <div class="list-product-details">
                                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nul
                                                            <a href="single-product.html">Learn More</a> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-list-product row">
                                                <div class="col-md-4">
                                                    <div class="list-product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/4.png" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="list-product-info">
                                                        <a href="single-product.html" class="list-product-name"> Cras neque metus</a>
                                                        <div class="price-rating">
                                                            <span class="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                                <a href="#" class="review">1 Review(s)</a>
                                                                <a href="#" class="add-review">Add Your Review</a>
                                                            </div>
                                                        </div>
                                                        <div class="list-product-details">
                                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nul
                                                            <a href="single-product.html">Learn More</a> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-list-product row">
                                                <div class="col-md-4">
                                                    <div class="list-product-img">
                                                        <a href="single-product.html">
                                                            <img src="img/product/5.png" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="list-product-info">
                                                        <a href="single-product.html" class="list-product-name"> Cras neque metus</a>
                                                        <div class="price-rating">
                                                            <span class="old-price">$700.00</span>
                                                            <span>$800.00</span>
                                                            <div class="ratings">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-half-o"></i>
                                                                <a href="#" class="review">1 Review(s)</a>
                                                                <a href="#" class="add-review">Add Your Review</a>
                                                            </div>
                                                        </div>
                                                        <div class="list-product-details">
                                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nul
                                                            <a href="single-product.html">Learn More</a> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="toolbar-bottom">
                                    <ul>
                                        <li><span>Pages:</span></li>
                                        <li class="current"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#"> <img src="img/product/pager_arrow_right.gif" alt=""/> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        {/* <!-- product main items area end -->

        <!-- footer top area start --> */}
        <div class="footer-top-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-contact">
                            <img src="img/logo-white.png" alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                            <ul class="address">
                                <li>
                                    <span class="fa fa-fax"></span>
                                    (800) 123 456 789
                                </li>
                                <li>
                                    <span class="fa fa-phone"></span>
                                    (800) 123 456 789
                                </li>
                                <li>
                                    <span class="fa fa-envelope-o"></span>
                                    admin@bootexperts.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-tweets">
                            <div class="footer-title">
                                <h3>Latest tweets</h3>
                            </div>
                            <div class="twitter-feed">
                                <div class="twitter-article">
                                    <div class="twitter-img">
                                        <a href="#">
                                            <img src="img/twitter/twitter-1.png" alt=""/>
                                        </a>
                                    </div>
                                    <div class="twitter-text">
                                        <p>Raboda Fashion #Magento #Theme comes up with pure white and grey, which great show your products. Check it: </p>
                                        <a href="#">https://t.co/iu0OYBwti8</a>
                                        <div class="twitter-time">
                                            <a href="#">16h</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="twitter-article">
                                    <div class="twitter-img">
                                        <a href="#">
                                            <img src="img/twitter/twitter-1.png" alt=""/>
                                        </a>
                                    </div>
                                    <div class="twitter-text">
                                        <p>Raboda Fashion #Magento #Theme comes up with pure white and grey, which great show your products. Check it: </p>
                                        <a href="#">https://t.co/iu0OYBwti8</a>
                                        <div class="twitter-time">
                                            <a href="#">16h</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-support">
                            <div class="footer-title">
                                <h3>Our support</h3>
                            </div>
                            <div class="footer-menu">
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
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-info">
                            <div class="footer-title">
                                <h3>Our information</h3>
                            </div>
                            <div class="footer-menu">
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
    </div>
  )
}

export default Category