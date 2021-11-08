import React, { useRef } from 'react'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {

    const arrSlides = [
        {
            image: 'image/home-img-1.png'
        },
        {
            image: 'image/home-img-2.png'
        },
        {
            image: 'image/home-img-3.png'
        }
    ];

    const arrBanner = [
        {image: 'image/banner-1.jpg'},
        {image: 'image/banner-2.jpg'},
        {image: 'image/banner-3.jpg'},
    ]

    SwiperCore.use([Autoplay]);

    return (
        <>
        <section className="home">
            <div className="container">
            <div className="slides-container">

                <Swiper
                    module={[Autoplay]}
                    grabCursor={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{delay: 3000}}
                >
                    {
                        arrSlides.map((e, i) => (
                            <SwiperSlide key={i}>
                                {({ isActive }) => (
                                    <div className={`slide ${isActive ? 'active' : ''}`}>
                                    <div className="content">
                                        <span>fresh and organic</span>
                                        <h3>up to 50% off</h3>
                                        <a href="#" className="btn">shop now</a>
                                    </div>
                                    <div className="image">
                                        <img src={e.image} alt="" />
                                    </div>
                                </div>
                                )}
                            </SwiperSlide>
                        )) 
                    }
                </Swiper>
            </div>

            <div id="next" className="fa fa-angle-right"></div>
            <div id="prev" className="fa fa-angle-left"></div>
            </div>
        </section>
        <div className="container">
        <div className="banner-container">
            {
                arrBanner.map((e,i) => (
                    <div className="banner" key={i}>
                        <img src={e.image} alt="" />
                        <div className="content">
                            <span>limited sales</span>
                            <h3>upto 50% off</h3>
                            <a href="#" className="btn">shop now</a>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
        </>
    )
}

export default Home
