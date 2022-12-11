import React from 'react'
import Services from '../Services/Services'
import './About.scss'
import myPic from '../../images/mine.jpg'

export default function About() {
    return (
        <>
            <div className="about py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about-img">
                                <img src={myPic} className='w-100' alt="diaa" />
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-content py-4">
                                <h3>About Me</h3>
                                <p className='text-muted my-4'>
                                    I'M a Passionate Front-End Web Developer with 2+ years experience building and maintaining responsive websites in the technology and
                                    service industry. Highly skilled in HTML, CSS, Java Script alongside modern frameworks and libraries. Interested about accessibility and
                                    usability of modern websites.
                                </p>
                                <p className='text-muted mb-4'>
                                    I have built a lot of projects that have increased my experience and trained a lot, I am a fast learner and always love to develop myself.
                                </p>
                            </div>
                            <div className="about-contact">
                                <a href="tel:+01118398483" className='btn rounded-pill me-3'>
                                    <i className="fas fa-mobile me-2"></i>
                                    Call Me
                                </a>
                                <a href="http://wa.me/01118398483?text=Hello, I am talking to you about recruitment. Would you like to work with us as a front end developer"
                                    target="_blank" rel="noopener noreferrer" className='btn rounded-pill'>
                                    <i className="fab fa-whatsapp me-2"></i>
                                    What's App
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Services/>
        </>
    )
}
