import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="footer-content">
                            2022 - <span>Diaa Mohamed</span> | All Rights Reserved.
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer-social">
                            <a href='https://github.com/diaamohamed013' target="_b" aria-label="github">
                                <i className='fab fa-github'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/diaa-mohamed-59853b155/' target="_b" aria-label="linkidin">
                                <i className='fab fa-linkedin'></i>
                            </a>
                            <a href='mailto:diaamohamed013@gmail.com' aria-label="mail">
                                <i className="fas fa-envelope"></i>
                            </a>
                            <a href='https://www.facebook.com/diaamohamed212/' target="_b" aria-label="facebook">
                                <i className='fab fa-facebook-f'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
