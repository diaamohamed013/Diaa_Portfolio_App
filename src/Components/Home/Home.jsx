import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'
import './Home.scss'

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="home-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 m-auto">
                                <div className="home-content">
                                    <div className="home-description">
                                        <h1>DIAA</h1>
                                        <p>
                                            <Typed
                                                strings={["Hello, I'M Diaa Mohamed", "Front End Developer"]}
                                                typeSpeed={100}
                                                backSpeed={50}
                                                loop
                                            />
                                        </p>
                                        <p>
                                            I'M a Passionate Front-End Web Developer with 2+ years experience building and maintaining responsive websites.
                                        </p>
                                    </div>
                                    <div className="home-contact my-4">
                                        <a href='Diaa_CV.pdf' download className='btn rounded-pill me-3 mb-3'>
                                            <i className="fas fa-download me-2"></i>
                                            Diaa's CV
                                        </a>
                                        <Link to="/aboutMe" className='btn rounded-pill mb-3'>
                                            Read More
                                        </Link>
                                    </div>
                                    <div className="home-soacial">
                                        <a href='mailto:diaamohamed013@gmail.com'>
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                        <a href='https://github.com/diaamohamed013' target="_b">
                                            <i className='fab fa-github'></i>
                                        </a>
                                        <a href='https://www.linkedin.com/in/diaa-mohamed-59853b155/' target="_b">
                                            <i className='fab fa-linkedin'></i>
                                        </a>
                                        <a href='https://www.facebook.com/diaamohamed212/' target="_b">
                                            <i className='fab fa-facebook-f'></i>
                                        </a>
                                        <a href="tel:+01118398483">
                                            <i className="fas fa-phone"></i>
                                        </a>
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
