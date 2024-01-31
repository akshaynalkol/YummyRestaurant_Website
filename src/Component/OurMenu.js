import React, { useEffect } from 'react';
import { useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function OurMenu() {
    const [data, setDate] = useState('Starters');
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once:true
        });
    });

    return (
        <>
            <div className="container ourMenu custom-space" id='ourMenu'>
                <div className='text-center'>
                    <p className='mb-0'>OUR MENU</p>
                    <p className='mb-4 fontFamily1'>Check Our <span className='text-danger'>Yummy Menu</span></p>
                </div>
                <nav className='navbar justify-content-center'>
                    <ul className='navbar-nav d-flex flex-row'>
                        <li className='nav-item px-3' id='nav--link'>
                            <a herf='#' className={`nav-link text-decoration-underline link-offset-2 ${data == 'Starters' ? 'active' : ''}`}
                                onClick={() => setDate('Starters')}>
                                <p className='fs-6'>Starters</p>
                            </a>
                        </li>
                        <li className='nav-item px-3'>
                            <a herf='#' className={`nav-link text-decoration-underline link-offset-2 ${data == 'Breakfast' ? 'active' : ''}`}
                                onClick={() => setDate('Breakfast')}>
                                <p className='fs-6'>Breakfast</p>
                            </a>
                        </li>
                        <li className='nav-item px-3'>
                            <a herf='#' className={`nav-link text-decoration-underline link-offset-2 ${data == 'Lunch' ? 'active' : ''}`}
                                onClick={() => setDate('Lunch')}>
                                <p className='fs-6'>Lunch</p>
                            </a>
                        </li>
                        <li className='nav-item px-3'>
                            <a herf='#' className={`nav-link text-decoration-underline link-offset-2 ${data == 'Dinner' ? 'active' : ''}`}
                                onClick={() => setDate('Dinner')}>
                                <p className='fs-6'>Dinner</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* <ul className='list-group d-flex flex-row justify-content-center'>
                    <button className='list-group-item border-0 text-decoration-underline link-offset-2 active'
                        onClick={() => setDate('Starters')}>
                        <p className='fs-6'>Starters</p>
                    </button>
                    <button className='list-group-item border-0 text-decoration-underline link-offset-2'
                        onClick={() => setDate('Breakfast')}>
                        <p className='fs-6'>Breakfast</p>
                    </button>
                    <button className='list-group-item border-0 text-decoration-underline link-offset-2'
                        onClick={() => setDate('Lunch')}>
                        <p className='fs-6'>Lunch</p>
                    </button>
                    <button className='list-group-item border-0 text-decoration-underline link-offset-2'
                        onClick={() => setDate('Dinner')}>
                        <p className='fs-6'>Dinner</p>
                    </button>
                </ul> */}
                <div data-aos="zoom-in">
                    <div className='text-center'>
                        <p className='mb-0'>MENU</p>
                        <h1 className='fw-bold mb-5 text-danger'>{data}</h1>
                    </div>
                    <div className="row gy-5">
                        <div className="col-lg-4">
                            <img src='Images/OurMenu-1.png' className='w-100 ps-5 pe-5 mb-3' />
                            <h4 className='text-center'>Magnam Tiste</h4>
                            <p className='text-center mb-2 opacity-50'>Lorem, deren, trataro, filede, nerada</p>
                            <h4 className='text-center text-danger fw-bold'>$5.95</h4>
                        </div>
                        <div className="col-lg-4">
                            <img src='Images/OurMenu-2.png' className='w-100 ps-5 pe-5 mb-3' />
                            <h4 className='text-center'>Aut Luia</h4>
                            <p className='text-center mb-2 opacity-50'>Lorem, deren, trataro, filede, nerada</p>
                            <h4 className='text-center text-danger fw-bold'>$14.95</h4>
                        </div>
                        <div className="col-lg-4">
                            <img src='Images/OurMenu-3.png' className='w-100 ps-5 pe-5 mb-3' />
                            <h4 className='text-center'>Est Eligendi</h4>
                            <p className='text-center mb-2 opacity-50'>Lorem, deren, trataro, filede, nerada</p>
                            <h4 className='text-center text-danger fw-bold'>$8.95</h4>
                        </div>
                        <div className="col-lg-4">
                            <img src='Images/OurMenu-4.png' className='w-100 ps-5 pe-5 mb-3' />
                            <h4 className='text-center'>Eos Luibusdam</h4>
                            <p className='text-center mb-2 opacity-50'>Lorem, deren, trataro, filede, nerada</p>
                            <h4 className='text-center text-danger fw-bold'>$12.95</h4>
                        </div>
                        <div className="col-lg-4">
                            <img src='Images/OurMenu-5.png' className='w-100 ps-5 pe-5 mb-3' />
                            <h4 className='text-center'>Eos Luibusdam</h4>
                            <p className='text-center mb-2 opacity-50'>Lorem, deren, trataro, filede, nerada</p>
                            <h4 className='text-center text-danger fw-bold'>$12.95</h4>
                        </div>
                        <div className="col-lg-4">
                            <img src='Images/OurMenu-6.png' className='w-100 ps-5 pe-5 mb-3' />
                            <h4 className='text-center'>Laboriosam Direva</h4>
                            <p className='text-center mb-2 opacity-50'>Lorem, deren, trataro, filede, nerada</p>
                            <h4 className='text-center text-danger fw-bold'>$9.95</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}