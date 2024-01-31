import React from "react";

export default function Event() {
    return (
        <div className="custom-space" id="events">
            <div className='container text-center'>
                <p className='mb-0'>EVENTS</p>
                <p className='mb-5 fontFamily1'>
                    Share <span className='text-danger'>Your Moments</span> In Our Restaurant
                </p>
            </div>
            <div className="w-100">
                <div className="row g-0 gy-4">
                    <div className="col-lg-4 img-height">
                        <img src="/Images/Event-1.jpg" className="h-100 w-100" />
                        <div className="float-Div">
                            <h3 className="fw-bold mb-3">Custom Parties</h3>
                            <h2 className="fw-bold text-decoration-underline link-offset-2 link-underline-danger mb-3">$99</h2>
                            <p className="mb-0">
                                Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 img-height">
                        <img src="/Images/Event-2.jpg" className="h-100 w-100" />
                        <div className="float-Div">
                            <h3 className="fw-bold mb-3">Private Parties</h3>
                            <h2 className="fw-bold text-decoration-underline link-offset-2 link-underline-danger mb-3">$289</h2>
                            <p className="mb-0">
                                Quo corporis voluptas ea ad. Consectetur inventore sapiente est qui assumenda ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.

                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 img-height">
                        <img src="/Images/Event-3.jpg" className="h-100 w-100" />
                        <div className="float-Div">
                            <h3 className="fw-bold mb-3">Birthday Parties</h3>
                            <h2 className="fw-bold text-decoration-underline link-offset-2 link-underline-danger mb-3">$499</h2>
                            <p className="mb-0">
                                Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}