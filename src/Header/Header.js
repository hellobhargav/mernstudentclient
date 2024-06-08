import React from 'react'
import styles from "./Header.module.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Student Management</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to="/">Student Data</NavLink>
                            <NavLink className="nav-link"  to="/add">Add Student</NavLink>
                          
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header