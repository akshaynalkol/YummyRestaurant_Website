import React from "react";


export default function Home() {
    return (
        <>
            <div className="bg-color" id="home" data-aos="fade-up" data-aos-duration="1500">
                <div className="container custom-space">
                    <div className="row gy-5 justify-content-between">
                        <div className="col-lg-5 align-self-lg-center text-lg-start text-center order-2 order-lg-1">
                            <h2 className="pb-3 fontStyle">ENJOY YOUR HEALTHY <br /> DELCIOUS FOOD</h2>
                            <p className="pb-3 pe-md-5">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet.
                                Eum quas beatae cumque eum quaerat.</p>
                            <div>   
                                <button className="btn btn-danger rounded-pill px-4 py-2 me-4">Book A Table</button>
                                <a className="h6 text-decoration-none">
                                    <i class="fa-regular fa-circle-play fa-2xl text-danger pe-2"></i>
                                    <span>Watch Video</span>    
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-center order-1 order-lg-2">
                            <img src="/Images/Home.png" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}