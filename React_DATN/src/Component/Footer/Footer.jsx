import React from 'react'



const Footer = () => {
    return (
        <div>
            <div className="footer-top-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-contact">
                                <img src="img/logo-white.png" />
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                                <ul className="address">
                                    <li>
                                        <span className="fa fa-fax" />
                                        (800) 123 456 789
                                    </li>
                                    <li>
                                        <span className="fa fa-phone" />
                                        (800) 123 456 789
                                    </li>
                                    <li>
                                        <span className="fa fa-envelope-o" />
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
                                                <img src="img/twitter/twitter-1.png" />
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
                                                <img src="img/twitter/twitter-1.png" />
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
            {/* footer top area end */}
            {/* footer area start */}
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <p>Copyright © 2022 <a href="#"> Bootexperts</a>. All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="payment-icon">
                                <img src="img/payment.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" id="scrollUp"><i className="fa fa fa-arrow-up" /></a>
            </footer>
            {/* footer area end */}
            {/* quickview product start */}
            <div id="quickview-wrapper">
                {/* Modal */}
                <div className="modal fade" id="productModal" tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-product">
                                    <div className="product-images">
                                        <div className="main-image images">
                                            <img src="img/product/quick-view.jpg" />
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h1>Diam quis cursus</h1>
                                        <div className="price-box">
                                            <p className="price"><span className="special-price"><span className="amount">$132.00</span></span></p>
                                        </div>
                                        <a href="shop.html" className="see-all">See all features</a>
                                        <div className="quick-add-to-cart">
                                            <form method="post" className="cart">
                                                <div className="numbers-row">
                                                    <input type="number" id="french-hens" defaultValue={3} />
                                                </div>
                                                <button className="single_add_to_cart_button" type="submit">Add to cart</button>
                                            </form>
                                        </div>
                                        <div className="quick-desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                        </div>
                                        <div className="share-post">
                                            <div className="share-title">
                                                <h3>share this product</h3>
                                            </div>
                                            <div className="share-social">
                                                <ul>
                                                    <li><a href="#"> <i className="fa fa-facebook" /> </a></li>
                                                    <li><a href="#"> <i className="fa fa-twitter" /> </a></li>
                                                    <li><a href="#"> <i className="fa fa-pinterest" /> </a></li>
                                                    <li><a href="#"> <i className="fa fa-google-plus" /> </a></li>
                                                    <li><a href="#"> <i className="fa fa-linkedin" /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer