import React from 'react'
import './Skills.scss'

export default function Skills() {
    return (
        <>
            <div className="skills">
                <div className="skills-head text-center my-3">
                    <h2>Skills</h2>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center g-3">
                        <div className="col-lg-3">
                            <div className="skills-icon">
                                <i className='fab fa-html5'></i>
                                <span>html5</span>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="skills-icon">
                                <i className='fab fa-css3'></i>
                                <span>css3</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="skills-icon">
                                <i className='fab fa-bootstrap'></i>
                                <span>bootstrap</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="skills-icon">
                                <i className='fab fa-js'></i>
                                <span>java script</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="skills-icon">
                                <i className='fab fa-sass'></i>
                                <span>sass</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="skills-icon">
                                <i className='fab fa-github'></i>
                                <span>github</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="skills-icon">
                                <i className='fab fa-react'></i>
                                <span>react js</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
