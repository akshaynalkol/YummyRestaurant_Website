import React, { useEffect } from "react";
import { Link } from 'react-scroll';
import './Style.css';

export default function Navbar() {

    return (
        <>
            <nav class="navbar navbar-expand-xl bg-light fw-bold py-3 sticky-top">
                <div class="container">
                    <a href="" className="navbar-brand">
                        <h2>
                            Yummy<span className="text-danger">.</span>
                        </h2>
                    </a>
                    <button class="navbar-toggler order-xl-1 order-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" id="offcanvasNavbar">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title"></h5>
                            <button type="button" class="btn-close " data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div class="offcanvas-body justify-content-center">
                            <ul className="navbar-nav">
                                <li className="nav-item px-2 ">
                                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-120}
                                        className="nav-link link-offset-3">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="about" spy={true} smooth={true} offset={-80} className="nav-link link-offset-3">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="ourMenu" spy={true} smooth={true} offset={-80} className="nav-link link-offset-3">
                                        Menu
                                    </Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="events" spy={true} smooth={true} offset={-80} className="nav-link link-offset-3">
                                        Events
                                    </Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="chefs" spy={true} smooth={true} offset={-80} className="nav-link link-offset-3">
                                        Chefs
                                    </Link>

                                </li>
                                <li className="nav-item px-2">
                                    <Link to="gallery" spy={true} smooth={true} offset={-80} className="nav-link link-offset-3">
                                        Gallery
                                    </Link>
                                </li>
                                <li className="nav-item px-2 dropdown">
                                    <a href="#" className="nav-link link-offset-3 dropdown-toggle" data-bs-toggle="dropdown">
                                        Drop Down
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#" className="dropdown-item fw-bold opacity-50 py-2">Drop Down 1</a></li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-item fw-bold  opacity-50 py-2 pe-4 dropdown-toggle"
                                                data-bs-toggle="dropdown">
                                                Drop Drop Down
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#" className="dropdown-item fw-bold">Drop Down 1</a></li>
                                                <li><a href="#" className="dropdown-item fw-bold">Drop Down 2</a></li>
                                                <li><a href="#" className="dropdown-item fw-bold">Drop Down 3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#" className="dropdown-item fw-bold opacity-50 py-2">Drop Down 2</a></li>
                                        <li><a href="#" className="dropdown-item fw-bold opacity-50 py-2">Drop Down 3</a></li>
                                        <li><a href="#" className="dropdown-item fw-bold opacity-50 py-2">Drop Down 4</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="contact" spy={true} smooth={true} offset={-80} className="nav-link link-offset-3">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-xl-2 order-1 ms-auto me-xl-0 me-3">
                        <Link to="bookATable" spy={true} smooth={true} offset={-80} activeClass="activee"
                            className="btn btn-danger rounded-pill px-4">
                            Book A Table
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}