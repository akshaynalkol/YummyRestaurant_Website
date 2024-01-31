import React from "react";

export default function BookATable() {
    return (
        <>
            <div className="container custom-space" id="bookATable">
                <div className="text-center">
                    <p className="mb-0">BOOK A TABLE</p>
                    <p className="mb-5 fontFamily1">Book <span className="text-danger">Your Stay </span>With Us</p>
                </div>
                <div className="row g-0 bg-color">
                    <div className="col-lg-4">
                        <img src="/Images/BookATable.jpg" className="w-100" />
                    </div>
                    <div className="col-lg-8 align-self-center">
                        <form className="p-5">
                            <div className="row gy-4">
                                <div className="col-lg-4 col-md-6">
                                    <input type="text" className="form-control rounded-0" style={{ padding: '12px 15px' }}
                                        placeholder="Your Name" />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="email" className="form-control rounded-0" style={{ padding: '12px 15px' }}
                                        placeholder="Your Email" />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="tel" className="form-control rounded-0" style={{ padding: '12px 15px' }}
                                        placeholder="Your Phone" />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="date" className="form-control rounded-0" 
                                        placeholder="Date" />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="time" className="form-control rounded-0" style={{ padding: '12px 15px' }}
                                        placeholder="Time" />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="number" className="form-control rounded-0" style={{ padding: '12px 15px' }}
                                        placeholder="# of people" />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control rounded-0" style={{ padding: '12px 15px' }} rows="5"
                                        placeholder="Message"></textarea>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-danger rounded-pill" style={{ padding: '14px 60px' }}>
                                        Book A Table
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}