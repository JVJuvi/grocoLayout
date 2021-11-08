import React from 'react'
import { Link } from 'react-router-dom';

const arrImg = [
    {img: 'image/blog-1.jpg'},
    {img: 'image/blog-2.jpg'},
    {img: 'image/blog-3.jpg'},
    {img: 'image/blog-4.jpg'},
    {img: 'image/blog-5.jpg'},
    {img: 'image/blog-6.jpg'},
]

const Blog = () => {
    return (
        <>
            <div className="heading">
                <h1>our blogs</h1>
                <p><Link to="/">home >> </Link> blog</p>
            </div>
            <section className="blogs">
                <div className="container">
                <h1 className="title">our <span>blogs</span><a href="#">view all >> </a></h1>
                <div className="box-container">
                    {
                        arrImg.map((e, i) => (
                            <div className="box">
                                <div className="image">
                                    <img src={e.img} alt="" />
                                </div>
                                <div className="content">
                                   <div className="icons">
                                        <a href="#"><i className="fa fa-calendar"></i> 21st may, 2021</a>
                                        <a href="#"><i className="fa fa-user"></i> by admin</a>          
                                   </div>
                                    <h3>blogs title goes here</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, blanditiis.</p>
                                    <a href="#" className="btn">read more</a>
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

export default Blog
