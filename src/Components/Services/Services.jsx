import React from 'react'
import './Services.scss'
import service1 from '../../gifs/animat-checkmark.gif'
import service2 from '../../gifs/animat-customize.gif'
import service3 from '../../gifs/animat-responsive.gif'

export default function Services() {
    return (
        <>
            <div className="services text-center py-4">
                <div className="container">
                    <div className="services-head">
                        <h2>Why Me</h2>
                        <p>
                            The easiest way
                            to build websites online is my way at work
                        </p>
                        <div className="services-card mt-4">
                            <div className="row g-3">
                                <div className="col-lg-4">
                                    <div className="card border-0 shadow">
                                        <div className="card-img">
                                            <img src={service1} alt="service1" />
                                        </div>
                                        <div className="card-body">
                                            <h3 className='h5'>Simple and Clean</h3>
                                            <p className="card-text text-muted">
                                                Knowing how to produce clean code is an essential skill for developers
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card border-0 shadow">
                                        <div className="card-img">
                                            <img src={service2} alt="service2" />
                                        </div>
                                        <div className="card-body">
                                            <h3 className='h5'>Easy to Customize</h3>
                                            <p className="card-text text-muted">
                                                The best Principle of Programming is "Good Code Is Easy to Change"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card border-0 shadow">
                                        <div className="card-img">
                                            <img src={service3} alt="service3" />
                                        </div>
                                        <div className="card-body">
                                            <h3 className='h5'>Fully Responsive</h3>
                                            <p className="card-text text-muted">
                                                It will rescale itself to preserve the user experience across all devices
                                            </p>
                                        </div>
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
