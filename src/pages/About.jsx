import React from 'react';
import { Link } from 'react-router-dom';

const arrGallery = [
    {img: 'image/gallery-img-1.jpg'},
    {img: 'image/gallery-img-2.jpg'},
    {img: 'image/gallery-img-3.jpg'},
    {img: 'image/gallery-img-4.jpg'},
    {img: 'image/gallery-img-5.jpg'},
    {img: 'image/gallery-img-6.jpg'},
]

const About = () => {
    return (
        <>
            <div className="heading">
                <h1>about us</h1>
                <p><Link to="/">home >> </Link> about</p>
            </div>
            <div className="container">
            <div className="about">
                <div className="image">
                    <img src="image/about-img.jpg" alt="" />
                </div>
                <div className="content">
                    <span>welcome to our shop</span>
                    <h3>fresh and organic groceries</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt, error amet optio, eos modi corporis perferendis sunt aut odio quam odit quos voluptas blanditiis assumenda ratione enim consequatur aliquid fuga voluptatum laudantium inventore dolore ex? A eaque perspiciatis nesciunt quod minus dolorum nostrum? Fugit laudantium sed quod ea ipsam.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur saepe doloremque, sapiente vitae nostrum velit facere dolor doloribus at!</p>
                    <a href="#" className="btn">read more</a>
                </div>
            </div>
            </div>
            <section className="gallery">
                <div className="container">
                <h1 className="title">our <span>gallery</span><a href="#">view all >> </a></h1>
                <div className="box-container">
                    {
                        arrGallery.map((e, i) => (
                            <div className="box" key={i}>
                                <img src={e.img} alt="" />
                                <div className="icons">
                                    <a href="#" className="fa fa-eye"></a>
                                    <a href="#" className="fa fa-heart"></a>
                                    <a href="#" className="fa fa-share-alt"></a>
                                </div>
                            </div>
                        ))
                    }   
                </div>
                </div>
            </section>
        </>
    )
}

export default About
