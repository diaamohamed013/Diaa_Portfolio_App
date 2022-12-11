import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

export default function NavBar() {
    return (
        <>
            <nav className='navbar navbar-expand-lg shadow'>
                <div className="container">
                    <NavLink className="navbar-brand"
                        to="/home">
                        <span>
                            <span>
                                D
                            </span>
                            <span>
                                i
                            </span>
                            <span>
                                S
                            </span>
                            <span>
                                a
                            </span>
                        </span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon navbar-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/aboutMe">AboutMe</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/works">Projects</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
