import React from 'react'

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
            <div className="box-container">
                <div className="box">
                    <h3>quick links</h3>    
                    <a href="index.html"><i className="fa fa-arrow-right" /> home</a>
                    <a href="shop.html"><i className="fa fa-arrow-right" /> shop</a>
                    <a href="about.html"><i className="fa fa-arrow-right" /> about</a>
                    <a href="review.html"><i className="fa fa-arrow-right" /> review</a>
                    <a href="blog.html"><i className="fa fa-arrow-right" /> blog</a>
                    <a href="contasct.html"><i className="fa fa-arrow-right" /> contact</a>     
                </div>
                <div className="box">
                    <h3>extra links</h3>
                    <a href="#"><i className="fa fa-arrow-right" />my order</a>
                    <a href="#"><i className="fa fa-arrow-right" />my favorite</a>
                    <a href="#"><i className="fa fa-arrow-right" />my wishlist</a>
                    <a href="#"><i className="fa fa-arrow-right" />my account</a>
                    <a href="#"><i className="fa fa-arrow-right" />term or use</a>
                </div>
                <div className="box">
                    <h3>follow us</h3>
                    <a href="#"><i class="fa fa-facebook-f"></i>facebook</a>
                    <a href="#"><i class="fa fa-twitter"></i>twitter</a>
                    <a href="#"><i class="fa fa-instagram"></i>instagram</a>
                    <a href="#"><i class="fa fa-linkedin"></i>linkedin</a>
                    <a href="#"><i class="fa fa-pinterest"></i>printerest</a>
                </div>
                <div className="box">
                    <h3>newsletter</h3>
                    <p>subscribe for latest updates</p>
                    <form action>
                        <input type="email" placeholder="enter your email" />
                        <input type="submit" defaultValue="subscribe" className="btn" />
                    </form>
                    <img src="image//payment.png" className="payment" alt />
                </div>
            </div>
            </div>
        </section>

    )
}

export default Footer
