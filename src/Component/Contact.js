import React from 'react';

export default function Contact() {
    return (
        <>
            <div className="container custom-space" id='contact'>
                <div className="text-center">
                    <p className='mb-0'>CONTACT</p>
                    <p className='mb-5 fontFamily1'>Need Help? <span className='text-danger'>Contact Us</span></p>
                </div>
                <div className='mb-4'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27952.380767438946!2d-74.03536233379789!3d40.71304699932163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1704905184140!5m2!1sen!2sin"
                        width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" className='w-100'></iframe>
                </div>
                <div className="row gy-4">
                    <div className="col-md-6">
                        <div className='d-flex bg-color p-4'>
                            <div className='p-3 text-light bg-danger setWH rounded-circle d-flex justify-content-center align-items-center'>
                                <i class="fa-regular fa-map fa-xl"></i>
                            </div>
                            <div className='ps-3'>
                                <h4 className='fw-bold mb-1 opacity-75'>Our Address</h4>
                                <p className='mb-0'>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='d-flex bg-color p-4'>
                            <div className='p-3 text-light bg-danger setWH rounded-circle d-flex justify-content-center align-items-center'>
                                <i class="fa-regular fa-envelope fa-xl"></i>
                            </div>
                            <div className='ps-3'>
                                <h4 className='fw-bold mb-1 opacity-75'>Email Us</h4>
                                <p className='mb-0'>contact@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='d-flex bg-color p-4'>
                            <div className='p-3 text-light bg-danger setWH rounded-circle d-flex justify-content-center align-items-center'>
                                <i class="fa-solid fa-phone fa-xl"></i>
                            </div>
                            <div className='ps-3'>
                                <h4 className='fw-bold mb-1 opacity-75'>Call Us</h4>
                                <p className='mb-0'>+1 5589 55488 55</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='d-flex bg-color p-4'>
                            <div className='p-3 text-light bg-danger setWH rounded-circle d-flex justify-content-center align-items-center'>
                                <i class="fa-solid fa-share-nodes fa-xl"></i>
                            </div>
                            <div className='ps-3'>
                                <h4 className='fw-bold mb-1 opacity-75'>Opening Hours</h4>
                                <p className='mb-0'>
                                    <span className='fw-bold'>Mon-Sat:</span> 11AM - 23PM; <span className='fw-bold'>Sunday:</span> Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form className='p-4 mt-4 shadow-lg'>
                        <div className="row gy-4">
                            <div className="col-xl-6">
                                <input type='text' className='form-control rounded-0' style={{ padding: '12px 15px' }}
                                    placeholder='Your Name' />
                            </div>
                            <div className="col-xl-6">
                                <input type='email' className='form-control rounded-0' style={{ padding: '12px 15px' }}
                                    placeholder='Your Email' />
                            </div>
                            <div>
                                <input type='text' className='form-control rounded-0' style={{ padding: '12px 15px' }}
                                    placeholder='Subject' />
                            </div>
                            <div>
                                <textarea className='form-control rounded-0' style={{ padding: '12px 15px' }}
                                    placeholder='Meassage' rows='4'></textarea>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-danger rounded-pill' style={{ padding: '12px 50px' }}>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}