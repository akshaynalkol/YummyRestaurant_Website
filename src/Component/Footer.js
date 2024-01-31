import React from 'react';

export default function Footer() {
    return (
        <>
            <div className='custom-space bg-black'>
                <div className="container border-bottom">
                    <div className="row gy-3 text-light">
                        <div className="col-lg-3 col-md-6 d-flex mb-4">
                            <i class="fa-solid fa-location-dot fs-3 me-3 opacity-50"></i>
                            <div className='box'>
                                <h5 className='fw-bold'>Address</h5>
                                <p className='opacity-50'>
                                    A108 Adam Street<br />
                                    New York, NY 535022 - US
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex">
                            <i class="fa-solid fa-phone fs-3 me-3 opacity-50"></i>
                            <div className='box'>
                                <h5 className='fw-bold'>Reservations</h5>
                                <p className='opacity-50'>
                                    <strong>Phone:</strong> +1 5589 55488 55 <br />
                                    <strong>Email:</strong> info@example.com
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex">
                            <i class="fa-solid fa-clock fs-3 me-3 opacity-50"></i>
                            <div>
                                <h5 className='fw-bold'>Opening Hours</h5>
                                <p className='opacity-50'>
                                    <strong>Mon-Sat:</strong> 11AM - 23PM <br />
                                    <strong>Sunday:</strong> Closed
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-md-0 pb-5"> 
                            <h5 className='fw-bold mb-4'>Follow Us</h5>                     
                            <div className="footer-hover">
                                <a href="#" className='p-2 border rounded-circle me-2'>
                                    <i class="fa-brands fa-twitter fa-lg text-light opacity-50"></i>
                                </a>
                                <a href="#" className='p-2 border rounded-circle me-2'>
                                    <i class="fa-brands fa-facebook fa-lg text-light opacity-50"></i>
                                </a>
                                <a href="#" className='p-2 border rounded-circle me-2'>
                                    <i class="fa-brands fa-instagram fa-lg text-light opacity-50"></i>
                                </a>
                                <a href="#" className='p-2 border rounded-circle me-2'>
                                    <i class="fa-brands fa-linkedin fa-lg text-light opacity-50"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container pt-4 text-center text-light'>
                    <p className='mb-1 opacity-50'>
                        © Copyright  <strong>Yummy</strong>. All Rights Reserved
                    </p>
                    <p className='mb-0 opacity-50'>Designed by <strong>Akshay Anil Nalkol</strong></p>
                </div>
            </div>
        </>
    )
}