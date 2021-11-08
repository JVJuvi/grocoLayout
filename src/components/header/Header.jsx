import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';






const navbar = [
    {
        display: 'home',
        path: '/'
    },
    {
        display: 'shop',
        path: '/shop'
    },
    {
        display: 'about',
        path: '/about'
    },
    {
        display: 'review',
        path: '/review'
    },
    {
        display: 'blog',
        path: '/blog'
    },
    {
        display: 'contact',
        path: '/contact'
    },
]


const Header = () => {

    const {pathname} = useLocation();

    const active = navbar.findIndex(e => e.path === pathname);

    useEffect(() => {

        return () => {
            
        }
    }, [])
    
    const menu = useRef(null);
    const search = useRef(null);
    const cart = useRef(null);
    const login = useRef(null);


    const menuToggle = () => {
        menu.current.classList.toggle('active');
        search.current.classList.remove('active');
        cart.current.classList.remove('active');
        login.current.classList.remove('active');
    }
    const searchToggle = () => {
        search.current.classList.toggle('active');
        menu.current.classList.remove('active');
        cart.current.classList.remove('active');
        login.current.classList.remove('active');
    }
    const cartToggle = () => {
        menu.current.classList.remove('active');
        search.current.classList.remove('active');
        cart.current.classList.toggle('active');
        login.current.classList.remove('active');
    }
    const loginToggle = () => {
        menu.current.classList.remove('active');
        search.current.classList.remove('active');
        cart.current.classList.remove('active');
        login.current.classList.toggle('active');
    }

    return (
        <header className="header">
            <Link to="/" className="logo"><i className="fa fa-shopping-basket" />groco</Link>
            <nav ref={menu} className="navbar">
                {
                    navbar.map((e, i) => (
                        <Link key={i} to={e.path} className={`${ i === active ? 'active' : ''}`}>{e.display}</Link>
                    ))
                }
            </nav>
            <div className="icons">
                <div id="menu-btn" className="fa fa-bars" onClick={menuToggle} />
                <div id="search-btn" className="fa fa-search" onClick={searchToggle} />
                <div id="cart-btn" className="fa fa-shopping-cart" onClick={cartToggle} />
                <div id="login-btn" className="fa fa-user" onClick={loginToggle} />
            </div>
            <form ref={search} action className="search-form">
                <input type="search" placeholder="search here..." id="search-box" />
                <label htmlFor="search-box" className="fa fa-search" />
            </form>
            <div ref={cart} className="shopping-cart">
                <div className="box">
                <i className="fa fa-times" />
                <img src="image/cart-1.jpg" alt />
                <div className="content">
                    <h3>oganic food</h3>
                    <span className="quantity">1</span>
                    <span className="multiply">x</span>
                    <span className="price">$18.99</span>
                </div>
                </div>  
                <div className="box">
                <i className="fa fa-times" />
                <img src="image/cart-2.jpg" alt />
                <div className="content">
                    <h3>oganic food</h3>
                    <span className="quantity">1</span>
                    <span className="multiply">x</span>
                    <span className="price">$18.99</span>
                </div>
                </div>  
                <div className="box">
                <i className="fa fa-times" />
                <img src="image/cart-3.jpg" alt />
                <div className="content">
                    <h3>oganic food</h3>
                    <span className="quantity">1</span>
                    <span className="multiply">x</span>
                    <span className="price">$18.99</span>
                </div>
                </div>  
                <h3 className="total">total: <span>56.97</span></h3>
                <a href="#" className="btn">checkout cart</a>
            </div>
            <form ref={login} action className="login-form">
                <h3>login form</h3>
                <input type="email" placeholder="enter your email" className="box" />
                <input type="password" placeholder="enter your password" className="box" />
                <div className="remember">
                <input type="checkbox" name id="remember-me" />
                <label htmlFor="remember-me">remember me</label>
                </div>
                <input type="submit" defaultValue="login now" className="btn" />
                <p>forget password? <a href="#">click here</a></p>
                <p>don't have an acount? <a href="#">creat one</a></p>
            </form>
        </header>

    )
}

export default Header
