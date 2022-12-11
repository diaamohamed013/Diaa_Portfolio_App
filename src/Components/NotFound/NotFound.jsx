import React from 'react'
import notFound from '../../images/Na_Nov_26.jpg'

export default function NotFound() {
    return (
        <>
            <div className="notFound">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 m-auto">
                            <img src={notFound} alt="error-not-found-page" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
