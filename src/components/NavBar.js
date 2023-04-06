import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = ({ login, setLogin }) => {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/home' className="navbar-brand" >
                    Movies
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active" aria-current="page">Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" onClick={() => setLogin(!login)} >{login ? "Logout" : "Login"}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/companyInfo" className="nav-link" >Company Info</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar