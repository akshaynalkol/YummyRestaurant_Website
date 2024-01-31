import React from 'react';

export default function Testimonials() {
    return (
        <>
            <div className='testimonials-custom-space bg-color'>
                <div className="container">
                    <div className='text-center'>    
                        <p className='mb-0'>TESTIMONIALS</p>
                        <p className='mb-4 fontFamily1'>What Are They <span className='text-danger'>Saying About Us</span></p>
                    </div>
                    <div id='demo' className='carousel slide pt-5' data-bs-ride='carousel' data-bs-interval='2000'>
                        <div className="carousel-indicators">
                            <button data-bs-target='#demo' className='active bg-danger' data-bs-slide-to='0'></button>
                            <button data-bs-target='#demo' className='bg-danger' data-bs-slide-to='1'></button>
                            <button data-bs-target='#demo' className='bg-danger' data-bs-slide-to='2'></button>
                            <button data-bs-target='#demo' className='bg-danger' data-bs-slide-to='3'></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row justify-content-center gy-4">
                                    <div className="col-lg-6 ">
                                        <div className='border-start border-3 border-danger ps-4'>
                                            <p>
                                                <i class="fa-solid fa-quote-left fa-xl pe-2 text-danger"></i>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                                                rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen
                                                aliquam, risus at semper.
                                                <i class="fa-solid fa-quote-right fa-xl ps-2 text-danger"></i>
                                            </p>
                                            <h4 className='mb-0 fw-bold'>Saul Goodman</h4>
                                            <h6 className='mb-3 opacity-50'>Ceo & Founder</h6>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 align-self-center text-center">
                                        <img src='/Images/Testimonials-1.jpg' className='w-100 rounded-circle border-light border-5 border' />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row justify-content-center gy-4">
                                    <div className="col-lg-6">
                                        <div className='border-start border-3 border-danger ps-4'>
                                            <p>
                                                <i class="fa-solid fa-quote-left fa-xl pe-2 text-danger"></i>
                                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum
                                                quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat
                                                irure amet legam anim culpa.
                                                <i class="fa-solid fa-quote-right fa-xl ps-2 text-danger"></i>
                                            </p>
                                            <h4 className='mb-0 fw-bold'>Sara Wilsson</h4>
                                            <h6 className='mb-3 opacity-50'>Designer</h6>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 align-self-center text-center">
                                        <img src='/Images/Testimonials-2.jpg' className='w-100 rounded-circle border-light border-5 border' />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row justify-content-center gy-4">
                                    <div className="col-lg-6">
                                        <div className='border-start border-3 border-danger ps-4'>
                                            <p>
                                                <i class="fa-solid fa-quote-left fa-xl pe-2 text-danger"></i>
                                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
                                                veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis
                                                sint minim.
                                                <i class="fa-solid fa-quote-right fa-xl ps-2 text-danger"></i>
                                            </p>
                                            <h4 className='mb-0 fw-bold'>Jena Karlis</h4>
                                            <h6 className='mb-3 opacity-50'>Store Owner</h6>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 align-self-center text-center">
                                        <img src='/Images/Testimonials-3.jpg' className='w-100 rounded-circle border-light border-5 border' />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row justify-content-center gy-4">
                                    <div className="col-lg-6">
                                        <div className='border-start border-3 border-danger ps-4'>
                                            <p>
                                                <i class="fa-solid fa-quote-left fa-xl pe-2 text-danger"></i>
                                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor
                                                noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam
                                                esse veniam culpa fore nisi cillum quid.
                                                <i class="fa-solid fa-quote-right fa-xl ps-2 text-danger"></i>
                                            </p>
                                            <h4 className='mb-0 fw-bold'>John Larson</h4>
                                            <h6 className='mb-3 opacity-50'>Entrepreneur</h6>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                            <i class="fa-solid fa-star" style={{ color: '#eeff00' }}></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 align-self-center text-center">
                                        <img src='/Images/Testimonials-4.jpg' className='w-100 rounded-circle border-light border-5 border' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}