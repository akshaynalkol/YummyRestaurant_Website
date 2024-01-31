import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Gallery() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        className: 'center',
        centerMode: true,
        centerPadding: "0px",
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className="gallery-custom-space bg-color" id="gallery">
                <div className="container">
                    <div className="text-center">
                        <p className="mb-0">GALLERY</p>
                        <p className="mb-5 fontFamily1">Check <span className="text-danger">Our Gallery</span></p>
                    </div>
                    <div>
                        <Slider {...settings}>

                            <img src="/Images/Gallery-1.jpg" className="h-100" />

                            <img src="/Images/Gallery-2.jpg" className="h-100" />

                            <img src="/Images/Gallery-3.jpg" className="h-100" />

                            <img src="/Images/Gallery-4.jpg" className="h-100" />

                            <img src="/Images/Gallery-5.jpg" className="h-100" />

                            <img src="/Images/Gallery-6.jpg" className="h-100" />

                            <img src="/Images/Gallery-7.jpg" className="h-100" />

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}