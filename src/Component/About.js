import React from "react";


export default function About() {

    return (
        <>
            <div className="container custom-space" id="about">
                <div className="text-center">  
                    <p className="mb-0">ABOUT US</p>
                    <p className="mb-4 fontFamily1">Learn More <span className="text-danger">About Us</span></p>
                </div>
                <div className="row g-lg-5 g-4">
                    <div className="col-lg-7 position-relative">
                        <img src="/Images/About1.jpg" className="w-100 h-100" />
                        <div className="position-absolute set bg-light">
                            <h3 className="fw-bold mb-0 mb-sm-3">Book A Table</h3>
                            <h3 className="fw-bold text-danger mb-0">+1 5589 55488 55</h3>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</p>
                        <div className="d-flex">
                            <i className="fa-solid fa-check-double pe-2 pt-1" style={{ color: '#f20d0d' }} ></i>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="d-flex">
                            <i className="fa-solid fa-check-double pe-2 pt-1" style={{ color: '#f20d0d' }} ></i>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                        </div>
                        <div className="d-flex">
                            <i className="fa-solid fa-check-double pe-2 pt-1" style={{ color: '#f20d0d' }}></i>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                                pariatur.</p>
                        </div>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident
                        </p>
                        <div className='position-relative'>
                            <img src='/Images/About2.jpg' className="w-100 h-100" />
                            <div className="set position-absolute translate-middle top-50 start-50 fs-3">
                                <i class="fa-solid fa-circle-play fa-beat-fade fa-2xl" style={{ color: '#f51414' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}