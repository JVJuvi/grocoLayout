import React from 'react'
import { Link } from 'react-router-dom';

const arrIcons = [
    {
        img:'image/icon-1.png',
        h3: 'fast delivery',
        span: 'within 30 minutes'
    },
    {
        img:'image/icon-2.png',
        h3: '24/7 available',
        span: 'call us anything'
    },
    {
        img:'image/icon-3.png',
        h3: 'easy payments',
        span: 'cash or credits'
    },
];

const arrUsers = [
    {img:'image/pic-1.png'},
    {img:'image/pic-2.png'},
    {img:'image/pic-3.png'},
    {img:'image/pic-4.png'},
    {img:'image/pic-5.png'},
    {img:'image/pic-6.png'},
]

const Review = () => {
    return (
        <>  
            <div className="heading">
                <h1>client's review</h1>
                <p><Link to="/">home >> </Link> review</p>
            </div>
            <div className="container">
            <div className="info-container">
                {
                    arrIcons.map((e, i) => (
                        <div className="info" key={i}>
                            <img src={e.img} alt="" />
                            <div className="content">
                                <h3>{e.h3}</h3>
                                <span>{e.span}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
            <div className="container">
            <div className="review">
                {
                    arrUsers.map((e, i) => (
                        <div className="box" key={i}>
                            <div className="user">
                                <img src={e.img} alt="" />
                                <div className="info">
                                    <h3>join deo</h3>
                                    <span>happy client</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis quidem quod commodi officia asperiores sed possimus aspernatur mollitia voluptatum.</p>
                        </div>
                    ))
                }
            </div>
            </div>
        </>
    )
}

export default Review
