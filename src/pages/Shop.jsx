import React from 'react'
import { Link } from 'react-router-dom';



const arrCategory = [
    {
        display: 'fresh fruits',
        img: 'image/cat-1.png'
    },
    {
        display: 'vegetables',
        img: 'image/cat-2.png'
    },
    {
        display: 'organic spices',
        img: 'image/cat-3.png'
    },
    {
        display: 'fresh meat',
        img: 'image/cat-4.png'
    },
    {
        display: 'organic wheat',
        img: 'image/cat-5.png'
    },
];

const arrProducts = [
    {img: 'image/product-1.jpg'},
    {img: 'image/product-2.jpg'},
    {img: 'image/product-3.jpg'},
    {img: 'image/product-4.jpg'},
    {img: 'image/product-5.jpg'},
    {img: 'image/product-6.jpg'},
    {img: 'image/product-7.jpg'},
    {img: 'image/product-8.jpg'},
] 

const Shop = () => {
    return (
        <>
            <div className="heading">
                <h1>our shop</h1>
                <p><Link to="/">home >> </Link> shop</p>
            </div>
            <section className="category">
                <div className="container">
                <h1 className="title">our <span>category</span><a href="#">view all >> </a></h1>
                <div className="box-container">
                    {
                        arrCategory.map((e, i) => (
                            <div className="box" key={i}>
                                <img src={e.img} alt="" />
                                <h3>{e.display}</h3>
                            </div>          
                        ))
                    }
                </div>
                </div>
            </section>
            <section className="products">
                <div className="container">
                <h1 className="title">our <span>products</span><a href="#">view all >> </a></h1>

                <div className="box-container">
                    {
                        arrProducts.map((e, i) => (
                            <div className="box" key={i}>
                                <div className="icons">
                                    <a href="#" className="fa fa-shopping-cart"></a>
                                    <a href="#" className="fa fa-heart"></a>
                                    <a href="#" className="fa fa-eye"></a>
                                </div>
                                <div className="image">
                                    <img src={e.img} alt="" />
                                </div>
                                <div className="content">
                                    <h3>orhanic food</h3>
                                    <div className="price">$18.99</div>
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>  
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
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

export default Shop
